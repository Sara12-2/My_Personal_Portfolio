# Sara Manzoor — Personal Portfolio

An AI-powered personal portfolio built with Next.js, showcasing full-stack development and machine learning work — with a genuinely intelligent chat assistant instead of a static contact page.

**Live site:** [My Personal Portfolio Website ](https://my-personal-portfolio-five-zeta.vercel.app/) 

---

## ✨ Highlights

- **Real AI assistant, not a keyword bot** — powered by Groq (Llama 3.3 70B), answers any question about my background using a live knowledge base, not a hardcoded FAQ
- **Project-aware chat** — mention a specific project and the assistant attaches a rich card (screenshot, tech stack, GitHub/live links) instead of just plain text
- **Voice input** — ask the assistant questions by speaking instead of typing
- **Fully responsive** — built mobile-first, tested across breakpoints
- **Zero separate backend** — the AI runs as a Next.js Edge Function, deploys automatically with the rest of the site on Vercel

---

## 🧠 About This Project

This is my personal developer portfolio — built to showcase real projects, real internships, and real achievements rather than templated placeholder content. Every project, certification, and work experience listed is genuine and verifiable through the linked GitHub repos and live demos.

**Who I am:** Full Stack Developer & AI/ML Engineer, currently COO at DevHatch Labs, BS Computer Science student at University of Layyah (CGPA 4.0/4.0), Top 10 finisher at the South Punjab Generative AI Hackathon 2026.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Animation** | Framer Motion |
| **Icons** | Lucide React, React Icons |
| **AI / Chat** | Groq API (Llama 3.3 70B), Vercel Edge Functions |
| **Markdown Rendering** | react-markdown + remark-gfm (tables, formatting) |
| **Forms** | Formspree |
| **Notifications** | react-hot-toast |
| **Deployment** | Vercel |

---

## 📄 Sections

| Section | What it covers |
|---|---|
| **Hero** | Intro, typing role animation, tech highlights, resume download, social orbit |
| **About** | Background summary, quick stats (experience, projects, certifications) |
| **Services** | What I offer — web dev, AI/ML, dashboards, chatbots, NLP |
| **Skills** | 50+ technologies across Frontend, Backend, AI/ML, and Tools, filterable by category |
| **Projects** | 15+ real projects (web, full-stack, AI/ML) with live demos and GitHub links, filterable |
| **Experience** | Professional roles — DevHatch Labs, Afynix Digital, SAM AI Technologies, Elevvo Pathways, GSSoC, Softtec 2026 |
| **Education** | BS Computer Science, University of Layyah |
| **Achievements** | Academic honors and awards |
| **Certifications** | 26+ certifications from Google, Kaggle, DataCamp, AWS, HackerRank |
| **Badges** | Verified Kaggle and GSSoC badges |
| **GitHub Activity** | Live contribution graph and streak stats |
| **Testimonials** | Real feedback from colleagues and team leads |
| **FAQ** | Common questions about availability, collaboration, and services |
| **Contact** | Form (Formspree) + direct contact info, themed custom dropdowns |
| **Chatbot** | AI assistant — see below |

---

## 🤖 The AI Assistant

The standout feature of this portfolio: a chat assistant that actually understands questions instead of matching keywords.

**How it works:**
1. User message → sent to `/api/chat` (a Next.js Edge Function)
2. The route calls Groq's Llama 3.3 70B with a system prompt containing my full background as context
3. The model answers using only that context — concise, accurate, and able to handle any phrasing, not just pre-written trigger words
4. If a reply mentions a specific project by name, the UI automatically attaches a project card (screenshot, tech stack, GitHub/Live buttons)
5. If the API is ever unreachable, the assistant transparently falls back to a local keyword-matched knowledge base rather than breaking

**Also included:**
- Voice input (Web Speech API) for hands-free questions
- Formatted answers — bold key terms, tables for comparisons, bullet lists for flat lists (enforced via prompt instructions, not just hoped for)
- Quick-action shortcuts (Resume, GitHub, Email, Contact, Projects) that perform real actions instead of just describing them
- Basic per-IP rate limiting to protect the API quota from abuse
- Offline detection with a graceful fallback banner

---

## 📂 Project Structure

```
app/
├── api/
│   └── chat/
│       └── route.ts          # Groq-powered chat endpoint (Edge Function)
├── components/
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Skill.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Education.tsx
│       ├── Achievements.tsx
│       ├── Certifications.tsx
│       ├── Badges.tsx
│       ├── GitHubActivity.tsx
│       ├── Testimonials.tsx
│       ├── Faq.tsx
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── Navigation.tsx
│       └── Chatbot.tsx
├── layout.tsx
├── page.tsx
└── globals.css
public/
├── images/
│   ├── companies/             # Company logos
│   └── projects/               # Project screenshots
└── resume.png
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A free [Groq API key](https://console.groq.com)

### Installation

```bash
git clone https://github.com/Sara12-2/My_Personal_Portfolio
cd my-portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```
GROQ_API_KEY=your_groq_api_key_here
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deployment (Vercel)

This project is built to deploy as a single unit on Vercel — no separate backend needed, since the chatbot's API route runs as a Vercel Edge Function alongside the rest of the site.

1. Push the repo to GitHub
2. Import the project on [vercel.com](https://vercel.com)
3. Add the environment variable in **Settings → Environment Variables**:
   - `GROQ_API_KEY` → your Groq key (Production, Preview, Development)
4. Deploy

Every push to `main` triggers an automatic redeploy.

---

## 🎨 Design

- **Color palette:** Olive green (`#8B9A6B`) accent on an off-white (`#F5F5F0`) background
- **Typography:** Clean, modern sans-serif
- **Motion:** Subtle, purposeful Framer Motion animations — reduced/disabled automatically when the user has `prefers-reduced-motion` set

---

## 📬 Contact

- **Email:** saramanzoor76@gmail.com
- **LinkedIn:** [sara-manzoor-3a8a56365](https://www.linkedin.com/in/sara-manzoor-3a8a56365/)
- **GitHub:** [Sara12-2](https://github.com/Sara12-2)
- **Kaggle:** [sara765](https://www.kaggle.com/sara765)
- **LeetCode:** [Sara_34](https://leetcode.com/u/Sara_34/)

---

## 📝 License

This portfolio's code structure is free to reference, but the content (bio, projects, resume) is personal to Sara Manzoor and should not be reused as-is.
