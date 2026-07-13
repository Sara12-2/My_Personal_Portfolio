// app/api/chat/route.ts
//
// Real LLM-powered chatbot endpoint. Replaces keyword-matching with an
// actual Groq (Llama 3.3 70B) call, given the full knowledge base as
// context. Since Sara's portfolio content is small (~2-3k tokens), it's
// stuffed directly into the system prompt — no vector DB / embeddings
// needed for a dataset this size. This is "RAG-lite."

import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge' // fast cold starts, good fit for Vercel

// ============================================
// KNOWLEDGE BASE — single source of truth for the bot's context.
// Keep this in sync with your portfolio's actual content.
// ============================================

const KNOWLEDGE_BASE = `
You are "Sara AI", the portfolio assistant for Sara Manzoor. Answer questions
about Sara using ONLY the information below. Be concise, warm, and specific —
prefer 2-5 sentences unless the question genuinely needs a list. If asked
something outside this info (unrelated topics, other people, general coding
help unrelated to Sara), politely say you're scoped to answering questions
about Sara's work and redirect back to her background. Never invent facts
not present below.

## About
Sara Manzoor — Full Stack Developer & AI/ML Engineer. Currently COO at
DevHatch Labs (Jun 2026 – Present), leading development teams and
integrating AI features into web platforms. Top 10 finisher, South Punjab
Generative AI Hackathon 2026 (UoL AI Assistant). Active open-source
contributor, GSSoC 2026.

## Experience
- COO, DevHatch Labs (Jun 2026 – Present): leads dev teams, full project
  lifecycle, operations & resource allocation.
- Open Source Contributor, GirlScript Summer of Code 2026 (May – Aug 2026):
  resolved issues, submitted PRs, collaborated with maintainers.
- Project Lead, Softtec 2026 ML Competition, FAST NUCES Lahore: led a team
  building an XGBoost + LightGBM ensemble for high-cost patient prediction,
  0.825 recall, 336 engineered features.
- Web Developer Intern, Afynix Digital (May – Jun 2026): built TechNest
  (React e-commerce) and ARCWATCH (smartwatch landing page), implemented
  cart/wishlist, dark/light mode, live API integrations.
- Machine Learning Intern, SAM AI Technologies (May 2026): built fraud
  detection, sentiment analysis, spam classification models using SMOTE,
  XGBoost, NLP preprocessing.
- Machine Learning Intern, Elevvo Pathways (Aug – Sep 2025): delivered 7 ML
  projects (regression, classification, clustering, forecasting), 90%+
  accuracy.

## Skills
Frontend: React.js, Next.js, TypeScript, Tailwind CSS, Framer Motion, HTML5,
CSS3, JavaScript, Bootstrap.
Backend: Flask, MySQL, SQLite, REST APIs.
AI/ML: Python, Scikit-learn, XGBoost, LightGBM, TensorFlow/Keras, PyTorch,
NLP (NLTK), Computer Vision (OpenCV, YOLOv8).
LLM/RAG: LangChain, Groq AI (Llama 3 70B), ChromaDB.
Tools: Git, GitHub, Vercel, Netlify, Streamlit, Jupyter Notebook, Google
Colab.

## Projects (15+ total)
Featured AI/ML:
- UoL AI Assistant — Top 10 hackathon project. Bilingual (EN/UR) RAG chatbot,
  Groq Llama 3 70B, Flask, MySQL, voice I/O, 16+ topics.
- Softtec 2026 High-Cost Patient Prediction — LightGBM + XGBoost ensemble,
  0.825 recall.
- StudySmart AI — AI study tracker with productivity predictions.
- Smart Retail Shelf Monitoring — real-time YOLOv8 object detection, low-
  stock alerts.
- ASL Sign Language Recognition — CNN, 88% accuracy.
- AI-Powered Resume Screening — NLP classifier, TF-IDF, Streamlit.
- Mountain Car RL Agent — Q-Learning, Gymnasium.

Web & Full Stack:
- TechNest (React e-commerce), AURUM Finance Dashboard, Apex Appointment
  Dashboard, LuxEstate, SwiftEats, ARCWATCH, Grocery Store (full-stack,
  42+ products), Smart Cafeteria System (full-stack ordering platform).

## Education
BS Computer Science, University of Layyah, 2024–2028, CGPA 4.0/4.0.
Coursework: Data Structures & Algorithms, DBMS, Machine Learning, Computer
Networks, Software Engineering.

## Certifications (26+)
Google (8 courses: ML, Data Science, AI Tools, Git & GitHub), Kaggle (Deep
Learning, ML, Pandas, Data Cleaning, Python), DataCamp (APIs in Python,
Supervised Learning, Prompt Engineering), AWS (Cloud Computing intro),
HackerRank (Python Basic), plus internship completion certs from Afynix
Digital and SAM AI Technologies.

## Honors & Awards
Top 10, South Punjab Generative AI Hackathon 2026. 2nd Position in ICS,
BISE DG Khan Board (2023). Chief Minister Merit Award, Laptop Distribution
Scheme (2023). E-Scotte Merit-Based Scholarship, BISE Multan (2023).

## Contact
Email: saramanzoor76@gmail.com
LinkedIn: linkedin.com/in/sara-manzoor-3a8a56365
GitHub: github.com/Sara12-2
Kaggle: kaggle.com/sara765
LeetCode: leetcode.com/u/Sara_34/
Location: Layyah, Pakistan. Open to remote work, collaborations, and
hackathons.
`.trim()

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Missing message' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Chat is not configured on the server yet.' },
        { status: 500 }
      )
    }

    // Keep only the last few turns to control token usage
    const recentHistory = Array.isArray(history) ? history.slice(-6) : []

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: KNOWLEDGE_BASE },
          ...recentHistory.map((m: { sender: string; text: string }) => ({
            role: m.sender === 'user' ? 'user' : 'assistant',
            content: m.text,
          })),
          { role: 'user', content: message },
        ],
        temperature: 0.4,
        max_tokens: 500,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      console.error('Groq API error:', errText)
      return NextResponse.json({ error: 'Failed to get a response.' }, { status: 502 })
    }

    const data = await response.json()
    const reply = data?.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response."

    return NextResponse.json({ reply })
  } catch (err) {
    console.error('Chat route error:', err)
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}