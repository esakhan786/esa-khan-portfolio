export const profile = {
  name: "Esa Khan",
  role: "AI/ML Engineer",
  tagline: "Building production-ready GenAI & agentic AI systems.",
  location: "Abbottabad, Pakistan",
  photo: "/images/esa-khan.png",
  resume: "/cv.pdf",
  email: "esak2622@gmail.com",
  phone: "03250070313",
  linkedin: "https://www.linkedin.com/in/esa-khan-1b4941385/",
  github: "https://github.com/esakhan786",
};

export const skills = [
  {
    category: "Machine Learning",
    icon: "brain",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Scikit-learn",
      "KNN & Cosine Similarity",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    category: "Generative AI",
    icon: "sparkles",
    skills: [
      "Generative AI",
      "Large Language Models",
      "Prompt Engineering",
      "LLM Application Development",
    ],
  },
  {
    category: "RAG",
    icon: "layers",
    skills: [
      "Retrieval-Augmented Generation",
      "Advanced RAG",
      "Document Processing",
      "Embeddings & Vector Search",
      "FAISS",
      "ChromaDB",
    ],
  },
  {
    category: "AI Agents",
    icon: "sparkles",
    skills: [
      "AI Agents & Agentic AI",
      "LangChain",
      "LangGraph",
      "Tool-using Workflows",
      "Human-in-the-loop",
    ],
  },
  {
    category: "Backend Development",
    icon: "workflow",
    skills: [
      "Python",
      "FastAPI",
      "Flask",
      "Streamlit",
      "REST APIs",
      "MongoDB",
      "Docker",
    ],
  },
  {
    category: "Automation",
    icon: "layers",
    skills: [
      "n8n",
      "AI Workflow Automation",
      "Google Gemini API",
      "Groq API",
      "Hugging Face",
      "Git & GitHub",
    ],
  },
];

export const projects = [
  {
    number: "01",
    title: "GigCraft",
    subtitle: "Final year project · AI career & gig platform",
    description:
      "A career platform that analyzes resumes, extracts and normalizes skills, recommends relevant jobs using KNN and cosine similarity, and supports freelance gig creation with estimated pricing.",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Machine Learning",
      "NLP",
      "KNN",
      "Cosine Similarity",
      "RAG",
      "Apify",
      "Google Sheets",
    ],
    visual: "gigcraft",
    github: "https://github.com/esakhan786/GigCraft-Intelligent-Gig-Platform",
    demo: "",
  },
  {
    number: "02",
    title: "AI Attendance System",
    subtitle: "Voice- and face-based attendance",
    description:
      "An attendance project using voice and face recognition as identity inputs. Add the source video or repository link when available.",
    tags: ["Artificial Intelligence", "Face Recognition", "Voice Recognition", "Attendance Automation"],
    visual: "attendance",
    github: "",
    youtube: "",
    demo: "",
  },
  {
    number: "03",
    title: "Online Gym Trainer",
    subtitle: "Interactive machine learning fitness app",
    description:
      "An interactive gym trainer built around a neural-network-based approach, with a Streamlit interface.",
    tags: ["Python", "Neural Networks", "Machine Learning", "Streamlit"],
    visual: "trainer",
    github: "https://github.com/esakhan786/AI-GYM-COACH-ONLINE-GYM-TRAINER",
    youtube: "",
    demo: "",
  },
  {
    number: "04",
    title: "COMSATS RAG Chatbot",
    subtitle: "University document question answering",
    description:
      "Retrieves context from university PDFs with Sentence Transformer embeddings and FAISS, then uses a Groq-hosted LLM to answer questions grounded in the retrieved documents.",
    tags: ["Python", "Streamlit", "LangChain", "FAISS", "Hugging Face Embeddings", "Groq API", "RAG"],
    visual: "rag",
    github: "https://github.com/esakhan786/COMSATS-RAG-Chatbot",
    demo: "",
  },
  {
    number: "05",
    title: "AI Blog Generator",
    subtitle: "Human-reviewed LangGraph workflow",
    description:
      "A Streamlit application that uses a LangGraph workflow to research and draft articles, support human review and revision, and provide the final output for download.",
    tags: ["Python", "Streamlit", "LangGraph", "LangChain", "Google Gemini API"],
    visual: "blog",
    github: "https://github.com/esakhan786/llm-langgraph-blog-generator",
    demo: "",
  },
  {
    number: "06",
    title: "Self-Correcting Code Assistant",
    subtitle: "Iterative AI coding workflow",
    description:
      "An AI-assisted coding workflow designed to review code, identify potential errors, and help produce corrected solutions iteratively.",
    tags: ["Python", "LLMs", "Generative AI", "AI Workflows"],
    visual: "code",
    github: "https://github.com/esakhan786/self-correcting-code-assistant",
    demo: "",
  },
];

export const certifications = [
  {
    title: "Fundamentals of Agents",
    issuer: "Hugging Face",
    image: "", // Add a certificate image path when available
    verificationUrl: "", // Add the certificate verification URL
  },
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    image: "",
    verificationUrl: "",
  },
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    image: "",
    verificationUrl: "",
  },
  {
    title: "Large Language Models (LLM) Course",
    issuer: "Hugging Face",
    image: "",
    verificationUrl: "",
  },
];
