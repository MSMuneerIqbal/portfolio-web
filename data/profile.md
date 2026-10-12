# Muneer Iqbal — Profile (single source of truth for the portfolio agent)

This file holds FACTS only. Behaviour and tone live in the system prompt.
If a fact is not in this file, the agent must say it does not know.

Last reviewed: 2026-10-13

---

## 1. Identity

- **Name:** Muneer Iqbal
- **Role:** Agentic AI Engineer
- **Location:** Lahore, Punjab, Pakistan (hometown: Dunyapur / Lodhran area, Punjab)
- **Languages:** English (professional), Urdu (native)
- **One-line summary:** Builds AI agents, RAG systems and MCP servers that run in production, plus the FastAPI and Next.js apps around them.
- **Availability:** Takes freelance and contract work, from a two-week RAG prototype to a full AI product build. Also open to discussing roles.

## 2. Contact and links

| What | Where |
|:--|:--|
| Portfolio | https://muneer-iqbal.vercel.app |
| WhatsApp (best way to reach him) | https://wa.me/923045820729 |
| Email | muneeriqbal729@gmail.com |
| LinkedIn | https://www.linkedin.com/in/muneeriqbal729/ |
| GitHub | https://github.com/MSMuneerIqbal |
| Hugging Face | https://huggingface.co/Muneer-Iqbal |
| Kaggle | https://www.kaggle.com/muneeriqbal24 |
| Verified credentials (Panaversity) | https://panaversity.org/p/muneeriqbal729-lf7k |
| WeboTech Studio team page | https://webotechstudio.com/team/muneer-iqbal |
| CV (PDF) | https://drive.google.com/file/d/1_RnJb_ney9kNIU2icU8skjfBvzcIEkdt/view?usp=drive_link |

## 3. Current work (all concurrent)

| Role | Organisation | Since | What he does there |
|:--|:--|:--|:--|
| Lead AI Engineer | WeboTech Studio | Sep 2025 | Leads the AI and automation division: machine learning models, AI agents, chatbots and custom integrations that streamline operations and support decision-making. |
| Agentic AI Engineer | Semantechs | Jan 2026 | Designs and ships agentic AI systems for enterprise clients: multi-agent orchestration, AI assistants, and automation built on LLMs, MCP servers and tool-calling. |
| MS Data Science student | The Islamia University of Bahawalpur | 2026 | In progress. |

## 4. Past work

| Role | Organisation | Period | Notes |
|:--|:--|:--|:--|
| Senior Software Engineer | 7Star Laptop Battery Station | Jan – Sep 2026 | Built the POS software suite, warehouse stock applications and inventory systems for retail operations, from raw-stock intake to point-of-sale and reporting. Also worked on the store's e-commerce website. Do not share the store's web address; it is client work. |
| SaaS Application Developer | OptifyServe, Dubai, UAE | Feb – Jun 2026 | Full-stack development of a UAE-based business optimization and automation SaaS platform. Stack: Next.js, TypeScript, Python FastAPI, PostgreSQL, from schema design to deployment. |
| AI Engineer Intern | Innovidio | Mar – Jul 2025 | Worked on agentic AI automation systems and the Qyra AI research platform. |

## 5. Education

| Qualification | Institution | Years |
|:--|:--|:--|
| MS Data Science (in progress, not yet completed) | The Islamia University of Bahawalpur | 2026 – present |
| Certified Cloud Applied Generative AI Engineer (two-year PIAIC programme; classes held in Lahore) | PIAIC, the Presidential Initiative for Artificial Intelligence and Computing | Jul 2024 – Dec 2025 |
| BS (ADP) Artificial Intelligence, CGPA 3.48 / 4.00, graduated 2024 | The Islamia University of Bahawalpur | 2022 – 2024 |
| BCS, Computer Science | Govt. Degree College, Dunyapur | 2019 – 2022 |

## 6. Certifications

Five Panaversity / PIAIC exams passed, **74% average**, all independently verifiable at https://panaversity.org/p/muneeriqbal729-lf7k

| Certification | Date | Score |
|:--|:--|:--|
| Agent Factory Fundamentals: Building Digital FTEs | Feb 2026 | 78% |
| Model Context Protocol (MCP) Level 2 | Nov 2025 | 73% |
| Prompt and Context Engineering | Sep 2025 | 73% |
| Level 2 Fundamentals of Agentic AI Professional | Jul 2025 | 70% |
| Fundamentals of Agentic AI Exam | Jun 2025 | 78% |

Also: Applied Generative AI Fundamentals, Pak Angels, 2024. He also took part in a GenAI Hackathon run by Pak Angels.

## 7. What he can build (services)

1. **AI agents and automation** — autonomous agents that research, decide and act across a client's tools, with human checkpoints where it matters.
2. **RAG / "chat with your data"** — private assistants grounded in PDFs, contracts and internal documents, answering with citations.
3. **MCP servers** — custom Model Context Protocol servers that connect internal systems to Claude, ChatGPT or custom agents.
4. **AI assistants and chatbots** — branded, streaming, multi-language.
5. **Machine learning models** — classification, forecasting, NLP and computer vision, deployed behind an API or dashboard.
6. **Full-stack AI products** — auth, database, dashboard and AI features (Next.js + FastAPI).

How he works: the client describes the problem; he replies with an approach, scope and timeline; work is done in fixed milestones with regular updates.

## 8. Technical skills

- **AI and agents:** OpenAI Agents SDK, CrewAI, LangChain (and LangGraph), MCP servers, RAG, LiteLLM, Claude, Gemini, Groq, Pinecone, Hugging Face, prompt and context engineering
- **ML and data:** TensorFlow, PyTorch, scikit-learn, Pandas, NumPy, OpenCV, NLP, deep learning, computer vision, time-series analysis
- **Backend:** Python, FastAPI, Django, PostgreSQL, MongoDB, REST APIs, Docker
- **Frontend:** TypeScript, JavaScript, Next.js, React, Tailwind CSS
- **Tooling:** Git, GitHub Actions, Vercel, Streamlit, Chainlit, n8n, Supabase, Jupyter

## 9. Projects

Public repositories can be linked. Private projects are described only at the level below; no client details.

### Agentic AI systems
- **Weather Agent** (public) — conversational agent calling a live weather API through function calling, served through a streaming Chainlit UI. Python, OpenAI Agents SDK, Chainlit, Gemini. https://github.com/MSMuneerIqbal/Weather-Agent-with-Chainlit-OpenAI-Agent-SDK
- **Market Trends Analyst Agent** (public) — multi-agent CrewAI system that gathers market data and produces an analyst-style trend report. https://github.com/MSMuneerIqbal/Market_Trends_Analyst_Agent
- **Hospital Organizational Brain** (private client work) — three production AI services for a hospital's Organizational Brain System:
  1. An AI assistant (OpenAI Agents SDK, 26 tools): RAG over hospital documents (LlamaIndex + Pinecone) plus live MongoDB queries through a FastMCP server exposing 47 database tools; streams answers to a Chainlit UI.
  2. A document ingestion agent: extracts an organization's hierarchy from PDF/DOCX/TXT/Markdown with evidence and confidence scores; an admin reviews and approves before anything is written to MongoDB.
  3. A global agentic search service: hybrid retrieval in Qdrant plus MongoDB expansion, returning cited answers; multi-tenant with strict isolation, Redis cache/queue, 500+ automated tests.
  Stack: Python, FastAPI, OpenAI Agents SDK, FastMCP, LlamaIndex, Pinecone, Qdrant, MongoDB, Redis, Chainlit, Docker.
- **7Star E-commerce AI Agents** (private client work) — an AI service for an online laptop battery store: product description writer, SEO writer with SEO reviewer, blog post writer (FAQ + SEO fields), blog translator, and a customer-facing store assistant that answers from the product catalogue. FastAPI + OpenAI Agents SDK, switchable between OpenAI, DeepSeek and Gemini; long generations run as background jobs; nothing publishes without human review.
- **Upwork Proposal Agent** (private) — agent that generates personalised Upwork proposals.
- **OBS Agentic AI Assistant** (private) — full-stack agentic assistant with agentic search, frontend and backend services.
- **Agentic AI Tutor** (private) — AI tutoring platform with adaptive learning. TypeScript, Next.js.

### RAG and generative AI
- **Document Query Assistant** (public) — upload documents, ask questions, get grounded answers with citations via GroundX and Gemini. Python, Streamlit. https://github.com/MSMuneerIqbal/Document-QueryAssistant-groundx-gemini-streamlit
- **Islamic Inheritance MCP Server** (public) — FastMCP server exposing a `calculate_inheritance` tool; outputs Hanafi cash and land shares down to fractional Marla as a PDF report. https://github.com/MSMuneerIqbal/Islamic-Inheritance-pdf-report-generator-MCP-Server
- **Chat with Your Documents** (public, LangChain) — https://github.com/MSMuneerIqbal/chat-with-your-documents
- **Multi-Search RAG Tool** (public) — https://github.com/MSMuneerIqbal/MultiSearch-Tool-RAG-WEB
- **RAG with Streamlit and Groq** (public, local embeddings) — https://github.com/MSMuneerIqbal/Rag-streamlit-groq-Embed-localhf

### Machine learning and data science (all public)
Heart Disease Classification (Streamlit, scikit-learn), English Learning Bot (GenAI Hackathon project), Image Restoration (autoencoders, TensorFlow), Sentiment Analysis on Daraz product reviews, Hand-Tracked Snake Game (OpenCV), Multilingual Translator, Donation Prediction Bot, CSV/XLSX Data Processor, and an ML/DL/NLP collection. All under https://github.com/MSMuneerIqbal

### Web and business applications
- **OptifyServe SaaS** (private) — UAE-based business optimization and automation platform. Next.js, TypeScript, FastAPI.
- **POS System** (private) — point-of-sale system for a retail computer shop.
- **Warehouse Ready Stock** (private) — warehouse stock tracking.
- **Inventory Management** (public) — https://github.com/MSMuneerIqbal/7star-shop-inventory
- **Kashibaba.pk** (public) — e-commerce marketplace, Next.js and TypeScript. https://github.com/MSMuneerIqbal/kashibaba.pk
- **This portfolio** (public) — Next.js, TypeScript, Tailwind. https://github.com/MSMuneerIqbal/portfolio-web
- **ApnaBot** (private) — multi-language chatbot built with Hugging Face and Gemini.

### Learning resources he published (public)
Learn Generative AI, Learn Modern Python, Learn Cloud-Native Python, Learn Fine-Tuning LLMs, Low-Code Agentic AI (n8n and MCP), CrewAI Learnings, FastAPI Learnings, a Claude master guide.

### Counts shown on the portfolio site
58 public repositories and 31 private projects. Do not give any other project count.

---

## 10. NOT in this profile — the agent must not answer these

The agent says it doesn't know and points to WhatsApp (https://wa.me/923045820729) for:

- Prices, hourly rates, quotes, discounts, delivery dates, or whether he is free for a specific date
- Salary expectations, notice period, or whether he will relocate
- Details of any client's data, contracts, or private repository code
- Anything about his family, health, religion, politics, relationships, age or finances
- Any employer, client, skill, degree or certification not listed above
- Whether he has used a tool or framework not listed in section 8
- Opinions on other people or companies
