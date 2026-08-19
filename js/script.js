// ---------- data: projects (pulled from github.com/GMCavalheri) ----------
const PROJECTS = [
  {
    name: "Smart-Pokedex",
    repo: "Smart-Pokedex",
    tags: ["web", "ai"],
    stack: "Django · MySQL · Redis · Docker",
    descEN: "Django-powered Pokédex with real-time PokéAPI data and an LLM-based Q&A assistant — Redis caching, Docker Compose and a fully tested backend (pytest, 100% coverage).",
    descPT: "Pokédex em Django com dados da PokéAPI em tempo real e um assistente de perguntas e respostas com LLM — cache em Redis, Docker Compose e backend com 100% de cobertura de testes (pytest)."
  },
  {
    name: "Complete BI & ETL (DW + Data Lake)",
    repo: "Complete-BI-and-ETL-with-Data-Warehouse-and-Datalake",
    tags: ["data"],
    stack: "PostgreSQL · PyArrow · DuckDB · Polars · Docker",
    descEN: "End-to-end BI and ETL pipeline with an integrated Data Warehouse and Data Lake, built on PostgreSQL, PyArrow, DuckDB and Polars — dockerized, tested and logged.",
    descPT: "Pipeline completo de BI e ETL com Data Warehouse e Data Lake integrados, usando PostgreSQL, PyArrow, DuckDB e Polars — dockerizado, testado e com logs."
  },
  {
    name: "ETL Pipeline with Airflow",
    repo: "Complete-ETL-Pipeline-with-Airflow",
    tags: ["data"],
    stack: "Airflow · Pandas · SQLAlchemy · PostgreSQL · Docker",
    descEN: "Complete ETL pipeline orchestrated with Airflow, moving and transforming data with Python, Pandas and SQLAlchemy into PostgreSQL — fully containerized.",
    descPT: "Pipeline de ETL completo orquestrado com Airflow, movendo e transformando dados com Python, Pandas e SQLAlchemy para o PostgreSQL — totalmente containerizado."
  },
  {
    name: "DNN for Mechanical Gear Diagnosis",
    repo: "Using-DNN-for-recognizing-problems-in-mechanical-gears",
    tags: ["ai"],
    stack: "TensorFlow · Keras · Pandas · Scikit-learn",
    descEN: "Deep Neural Network built with Keras and TensorFlow to diagnose mechanical gear conditions from real vibration data, classifying normal operation against five distinct fault types.",
    descPT: "Rede Neural Profunda construída com Keras e TensorFlow para diagnosticar o estado de engrenagens mecânicas a partir de dados reais de vibração, classificando operação normal e cinco tipos de falha."
  },
  {
    name: "NER in Legal Documents",
    repo: "Recognition_of_entities_in_legal_documents",
    tags: ["ai"],
    stack: "spaCy · NLP · Streamlit",
    descEN: "NLP model built with spaCy to recognize entities in Brazilian Portuguese legal documents, with results displayed through an interactive Streamlit web app.",
    descPT: "Modelo de NLP construído com spaCy para reconhecer entidades em documentos jurídicos em português, com resultados exibidos em uma aplicação web interativa com Streamlit."
  },
  {
    name: "Software Engineers in Türkiye",
    repo: "Software-Engineers-in-Turkiye",
    tags: ["dashboard"],
    stack: "Python · Power BI",
    descEN: "Analysis of software engineering salaries across three Turkish cities — Python for ETL, Power BI for the interactive dashboard.",
    descPT: "Análise de salários de engenheiros de software em três cidades da Turquia — Python para o ETL e Power BI para o dashboard interativo."
  },
  {
    name: "Student Habits vs. Academic Performance",
    repo: "Habitos-de-Estudantes-vs-Performace-Academica",
    tags: ["dashboard"],
    stack: "Python · Power BI",
    descEN: "ETL and analysis of real student-habit data to explore its relationship with academic performance, visualized in an interactive Power BI dashboard.",
    descPT: "ETL e análise de dados reais de hábitos de estudantes para explorar a relação com o desempenho acadêmico, visualizados em um dashboard interativo no Power BI."
  },
  {
    name: "FastAPI Web App",
    repo: "FastAPI-Web-app",
    tags: ["web"],
    stack: "Python · FastAPI",
    descEN: "CRUD web application built with the FastAPI framework — a lean REST API for creating, reading, updating and deleting resources.",
    descPT: "Aplicação web CRUD construída com o framework FastAPI — uma API REST enxuta para criar, ler, atualizar e remover recursos."
  }
];

const GITHUB_USER = "GMCavalheri";

// ---------- i18n ----------
const I18N = {
  en: {
    "nav.about": "ABOUT", "nav.projects": "PROJECTS", "nav.skills": "STACK",
    "nav.journey": "JOURNEY", "nav.contact": "CONTACT",
    "hero.eyebrow": "DATA SCIENCE • MACHINE LEARNING • PHYSICS • CYBER",
    "hero.role": "Data Science & ML · Physics · Cyber",
    "hero.desc": "Turning raw data, physics and curiosity into working systems — models, pipelines and tools built between research, an MBA and a lot of trial and error.",
    "hero.cta1": "VIEW PROJECTS →", "hero.cta2": "OPEN RESUME",
    "about.tagcomment": "a bit about me",
    "about.title": "WHO'S BEHIND THE CODE.",
    "about.p1": "I'm a physicist by training (UFSCar), currently pursuing an MBA in Artificial Intelligence & Big Data at USP.",
    "about.p2": "During my undergrad years I developed a passion for turning raw data into insights and working systems — which led me from academic research in applied acoustics into the world of data.",
    "about.p3": "I like challenges, hacking, data, games, music and control — these things inspire me to build and test new things.",
    "about.stat1": "DEGREES: PHYSICS + AI/BIG DATA MBA",
    "about.stat2": "REAL PROJECTS ON GITHUB",
    "about.stat3": "TECH STACKS",
    "about.stat4": "CURIOSITY",
    "projects.tagcomment": "projects I've built",
    "projects.title": "DATA, MODELS AND SYSTEMS THAT SOLVE REAL PROBLEMS.",
    "projects.desc": "Each project below is a different attempt to answer a real question — with data, a model or a pipeline.",
    "projects.empty": "No projects with that tag yet — but it's coming.",
    "projects.more": "See all repositories on GitHub ↗",
    "filters.all": "ALL", "filters.ai": "AI / ML", "filters.data": "DATA ENG",
    "filters.web": "WEB", "filters.dashboard": "DASHBOARD",
    "project.viewGithub": "View on GitHub ↗",
    "skills.tagcomment": "stack I use",
    "skills.title": "THE TOOLS BEHIND THE MODELS.",
    "skills.desc": "From languages to ML frameworks and data infrastructure — what I use day to day to explore, train and ship.",
    "skills.g1": "LANGUAGES & CORE", "skills.g2": "MACHINE LEARNING & AI", "skills.g3": "DATA & INFRA",
    "journey.tagcomment": "journey",
    "journey.title": "MY JOURNEY SO FAR.",
    "journey.now": "NOW", "journey.start": "START",
    "journey.t1title": "MBA in Artificial Intelligence & Big Data — USP",
    "journey.t1desc": "Deepening machine learning, big data engineering and applied AI, while building end-to-end projects — from ETL pipelines to trained models.",
    "journey.t2title": "From Physics to Data",
    "journey.t2desc": "Research in applied acoustics during my undergrad sparked a passion for turning raw signals and data into insight — the bridge from physics into data science.",
    "journey.t3title": "Physics — UFSCar",
    "journey.t3desc": "Undergraduate degree in Physics, building the foundation in math, modeling and rigorous problem solving that still shapes how I approach every project.",
    "journey.resume": "Want the full resume?",
    "journey.resumeEN": "DOWNLOAD CV (EN) ↗", "journey.resumePT": "DOWNLOAD CV (PT-BR) ↗",
    "contact.tagcomment": "get in touch",
    "contact.title": "LET'S WORK TOGETHER?",
    "contact.desc": "Have a project, a dataset or a hard problem in mind? Reach out — I'll get back to you as soon as I can.",
    "footer.tag": "Data Science & ML, built with curiosity."
  },
  pt: {
    "nav.about": "SOBRE", "nav.projects": "PROJETOS", "nav.skills": "STACK",
    "nav.journey": "TRAJETÓRIA", "nav.contact": "CONTATO",
    "hero.eyebrow": "CIÊNCIA DE DADOS • MACHINE LEARNING • FÍSICA • CYBER",
    "hero.role": "Ciência de Dados & ML · Física · Cyber",
    "hero.desc": "Transformando dados brutos, física e curiosidade em sistemas funcionais — modelos, pipelines e ferramentas construídos entre a pesquisa, o MBA e muita tentativa e erro.",
    "hero.cta1": "VER PROJETOS →", "hero.cta2": "ABRIR CURRÍCULO",
    "about.tagcomment": "um pouco sobre mim",
    "about.title": "QUEM ESTÁ POR TRÁS DO CÓDIGO.",
    "about.p1": "Sou físico de formação (UFSCar) e atualmente curso o MBA em Inteligência Artificial & Big Data na USP.",
    "about.p2": "Durante a graduação desenvolvi uma paixão por transformar dados brutos em insights e sistemas funcionais — o que me levou da pesquisa acadêmica em acústica aplicada para o mundo de dados.",
    "about.p3": "Gosto de desafios, hacking, dados, jogos, música e controle — essas coisas me inspiram a construir e testar coisas novas.",
    "about.stat1": "FORMAÇÕES: FÍSICA + MBA EM IA/BIG DATA",
    "about.stat2": "PROJETOS REAIS NO GITHUB",
    "about.stat3": "STACKS DE TECNOLOGIA",
    "about.stat4": "CURIOSIDADE",
    "projects.tagcomment": "projetos que construí",
    "projects.title": "DADOS, MODELOS E SISTEMAS QUE RESOLVEM PROBLEMAS REAIS.",
    "projects.desc": "Cada projeto abaixo é uma tentativa diferente de responder a uma pergunta real — com dados, um modelo ou um pipeline.",
    "projects.empty": "Ainda não há projetos com essa tag — mas está vindo.",
    "projects.more": "Ver todos os repositórios no GitHub ↗",
    "filters.all": "TODOS", "filters.ai": "IA / ML", "filters.data": "ENG. DE DADOS",
    "filters.web": "WEB", "filters.dashboard": "DASHBOARD",
    "project.viewGithub": "Ver no GitHub ↗",
    "skills.tagcomment": "stack que eu uso",
    "skills.title": "AS FERRAMENTAS POR TRÁS DOS MODELOS.",
    "skills.desc": "De linguagens a frameworks de ML e infraestrutura de dados — o que uso no dia a dia para explorar, treinar e entregar.",
    "skills.g1": "LINGUAGENS & BASE", "skills.g2": "MACHINE LEARNING & IA", "skills.g3": "DADOS & INFRA",
    "journey.tagcomment": "trajetória",
    "journey.title": "MINHA TRAJETÓRIA ATÉ AQUI.",
    "journey.now": "AGORA", "journey.start": "INÍCIO",
    "journey.t1title": "MBA em Inteligência Artificial & Big Data — USP",
    "journey.t1desc": "Aprofundando machine learning, engenharia de big data e IA aplicada, enquanto construo projetos ponta a ponta — de pipelines de ETL a modelos treinados.",
    "journey.t2title": "Da Física para os Dados",
    "journey.t2desc": "A pesquisa em acústica aplicada durante a graduação despertou a paixão por transformar sinais e dados brutos em insight — a ponte da física para a ciência de dados.",
    "journey.t3title": "Física — UFSCar",
    "journey.t3desc": "Graduação em Física, construindo a base em matemática, modelagem e resolução rigorosa de problemas que ainda molda como encaro cada projeto.",
    "journey.resume": "Quer o currículo completo?",
    "journey.resumeEN": "BAIXAR CV (EN) ↗", "journey.resumePT": "BAIXAR CV (PT-BR) ↗",
    "contact.tagcomment": "entre em contato",
    "contact.title": "VAMOS TRABALHAR JUNTOS?",
    "contact.desc": "Tem um projeto, um dataset ou um problema difícil em mente? Entre em contato — respondo assim que possível.",
    "footer.tag": "Ciência de Dados & ML, construído com curiosidade."
  }
};

const RESUME = { en: "resume/Gabriel_Milanez_Cavalheri_CV_EN.pdf", pt: "resume/Gabriel_Milanez_Cavalheri_CV.pdf" };

let currentLang = "en";
let currentFilter = "all";

// ---------- render projects ----------
function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  const empty = document.getElementById("emptyState");
  const dict = I18N[currentLang];
  const visible = PROJECTS.filter(p => currentFilter === "all" || p.tags.includes(currentFilter));

  grid.innerHTML = visible.map(p => {
    const primaryTag = p.tags[0];
    const desc = currentLang === "pt" ? p.descPT : p.descEN;
    return `
      <article class="project-card">
        <div class="project-top">
          <span class="project-name">${p.name}</span>
          <span class="project-tag" data-tag="${primaryTag}">${dict["filters." + primaryTag]}</span>
        </div>
        <span class="project-stack">${p.stack}</span>
        <p class="project-desc">${desc}</p>
        <a class="project-link" href="https://github.com/${GITHUB_USER}/${p.repo}" target="_blank" rel="noopener">${dict["project.viewGithub"]}</a>
      </article>`;
  }).join("");

  empty.hidden = visible.length !== 0;
  document.getElementById("projectCount").textContent = `${PROJECTS.length} total`;
  document.getElementById("statProjects").textContent = `${PROJECTS.length}+`;
}

function setFilter(filter) {
  currentFilter = filter;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });
  renderProjects();
}

// ---------- i18n apply ----------
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  document.documentElement.dataset.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key] !== undefined) el.innerHTML = I18N[lang][key];
  });

  document.querySelectorAll(".lang-opt").forEach(opt => {
    opt.classList.toggle("is-active", opt.dataset.langOpt === lang);
  });

  document.getElementById("resumeBtn").setAttribute("href", RESUME[lang]);

  renderProjects();
}

// ---------- events ----------
document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");

  document.getElementById("langToggle").addEventListener("click", () => {
    applyLang(currentLang === "en" ? "pt" : "en");
  });

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => setFilter(btn.dataset.filter));
  });

  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
