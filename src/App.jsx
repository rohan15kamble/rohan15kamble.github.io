import React, { useMemo, useState } from "react";

/*
  Rohan Kamble Portfolio Website
  Dark premium layout restored.
  No framer-motion and no external icon dependencies.
*/

function SvgIcon({ children, className = "h-5 w-5", viewBox = "0 0 24 24" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children || <path d="M12 5v14M5 12h14" />}
    </svg>
  );
}

const Icons = {
  ArrowUpRight: (props) => (
    <SvgIcon {...props}>
      <path d="M7 17 17 7" />
      <path d="M9 7h8v8" />
    </SvgIcon>
  ),
  ChevronRight: (props) => (
    <SvgIcon {...props}>
      <path d="m9 18 6-6-6-6" />
    </SvgIcon>
  ),
  BrainCircuit: (props) => (
    <SvgIcon {...props}>
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-2 5.2A3 3 0 0 0 6 18h1" />
      <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 2 5.2A3 3 0 0 1 18 18h-1" />
      <path d="M9 3v18" />
      <path d="M15 3v18" />
      <path d="M9 8H7" />
      <path d="M15 8h2" />
      <path d="M9 13H6" />
      <path d="M15 13h3" />
      <path d="M12 6h0" />
      <path d="M12 12h0" />
      <path d="M12 18h0" />
    </SvgIcon>
  ),
  Cloud: (props) => (
    <SvgIcon {...props}>
      <path d="M17.5 19H7a5 5 0 1 1 .9-9.9A7 7 0 0 1 21 12a4 4 0 0 1-3.5 7Z" />
    </SvgIcon>
  ),
  Database: (props) => (
    <SvgIcon {...props}>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
      <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </SvgIcon>
  ),
  Github: (props) => (
    <SvgIcon {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.3-.4-2.6-1.3-3.5.1-.4.6-1.8-.1-3.5 0 0-1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.4 1.7 5.4 2 5.4 2c-.7 1.7-.2 3.1-.1 3.5A5 5 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.4.5-.7 1.2-.8 2" />
      <path d="M9 18c-4.5 2-5-2-7-2" />
    </SvgIcon>
  ),
  Linkedin: (props) => (
    <SvgIcon {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <path d="M2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </SvgIcon>
  ),
  Mail: (props) => (
    <SvgIcon {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </SvgIcon>
  ),
  MapPin: (props) => (
    <SvgIcon {...props}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </SvgIcon>
  ),
  BarChart3: (props) => (
    <SvgIcon {...props}>
      <path d="M3 3v18h18" />
      <path d="M7 16V9" />
      <path d="M12 16V5" />
      <path d="M17 16v-3" />
    </SvgIcon>
  ),
  LineChart: (props) => (
    <SvgIcon {...props}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </SvgIcon>
  ),
  Sparkles: (props) => (
    <SvgIcon {...props}>
      <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z" />
      <path d="M5 3v4" />
      <path d="M3 5h4" />
      <path d="M19 17v4" />
      <path d="M17 19h4" />
    </SvgIcon>
  ),
  Cpu: (props) => (
    <SvgIcon {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M4 10h2" />
      <path d="M4 14h2" />
      <path d="M18 10h2" />
      <path d="M18 14h2" />
      <path d="M10 4v2" />
      <path d="M14 4v2" />
      <path d="M10 18v2" />
      <path d="M14 18v2" />
    </SvgIcon>
  ),
  FileText: (props) => (
    <SvgIcon {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h6" />
      <path d="M8 9h2" />
    </SvgIcon>
  ),
};

const fallbackIcon = Icons.FileText;
const getIcon = (maybeIcon) => (typeof maybeIcon === "function" ? maybeIcon : fallbackIcon);

const profile = {
  name: "Rohan Kamble",
  title: "Data Scientist & Analytics Engineer",
  location: "Farnborough, UK",
  email: "rohankamble03work@gmail.com",
  github: "https://github.com/rohan15kamble",
  linkedin: "https://www.linkedin.com/in/rohan-kamblee/",
  photoUrl: "/profile.jpg",
  resumeUrl: "/cv/resume.pdf",
  summary:
    "MSc Data Science graduate with experience in data analysis, machine learning, NLP, SQL, dashboards, and BI solutions — turning raw data into clear insights, models, and business decisions.",
};

const stats = [
  { label: "Reddit posts analysed", value: "2.47M+" },
  { label: "Best ROC-AUC", value: "0.986" },
  { label: "BI datasets queried", value: "1M+" },
  { label: "Manual reporting reduced", value: "30%" },
];

const skills = [
  {
    group: "Data Science & ML",
    icon: Icons.BrainCircuit,
    items: ["Python", "Scikit-learn", "TensorFlow", "BiLSTM", "SVM", "Logistic Regression", "SMOTE", "SHAP"],
  },
  {
    group: "NLP & AI",
    icon: Icons.Cpu,
    items: ["Token Classification", "BERT", "Bio-RoBERTa", "SciBERT", "SBERT", "GloVe", "FastText", "Hugging Face"],
  },
  {
    group: "Analytics & BI",
    icon: Icons.BarChart3,
    items: ["SQL", "Power BI", "Tableau", "Excel", "KPI Design", "Funnel Analysis", "A/B Testing", "EDA"],
  },
  {
    group: "Cloud & Data Engineering",
    icon: Icons.Cloud,
    items: ["Google Cloud", "BigQuery", "Cloud Run", "Cloud Build", "Docker", "Flask", "Looker Studio", "SSAS"],
  },
];

const filters = ["All", "AI / NLP", "Machine Learning", "Cloud", "Analytics", "SQL / BI"];

const projects = [
  {
    title: "Deep Learning-Based Depression Detection from Reddit Posts",
    category: "AI / NLP",
    featured: true,
    icon: Icons.BrainCircuit,
    description:
      "Built an explainable NLP pipeline to classify depression-related Reddit posts using TF-IDF baselines, BiLSTM with GloVe embeddings, and SBERT semantic representations.",
    impact: ["2.47M+ posts processed", "BiLSTM F1 ≈ 0.944", "ROC-AUC ≈ 0.986", "PR-AUC ≈ 0.984"],
    stack: ["Python", "TensorFlow", "BiLSTM", "GloVe", "SBERT", "TF-IDF", "SHAP"],
    highlights:
      "Added threshold tuning, probability calibration, PR-AUC analysis, SHAP explainability, and domain-shift testing for responsible mental-health AI.",
    takeaways: [
      "Demonstrates end-to-end NLP at scale, from 2.47M+ raw Reddit posts to model evaluation and interpretation.",
      "Shows responsible model assessment using ROC-AUC, PR-AUC, threshold tuning, calibration, and explainability.",
      "Strong evidence for Data Scientist and NLP roles because it combines deep learning, evaluation, and real-world risk awareness.",
    ],
    images: [
      { src: "/projects/depression/bilstm-roc.png", title: "BiLSTM ROC Curve", caption: "Hero visual: ROC-AUC ≈ 0.986, showing strong discrimination between depressed and non-depressed posts." },
      { src: "/projects/depression/bilstm-pr.png", title: "BiLSTM Precision–Recall Curve", caption: "Average Precision ≈ 0.984, useful for evaluating the minority depression-related class." },
      { src: "/projects/depression/bilstm-confusion-matrix.png", title: "BiLSTM Confusion Matrix", caption: "Large-scale test evaluation showing strong classification balance across both classes." },
      { src: "/projects/depression/bilstm-calibration.png", title: "BiLSTM Calibration Plot", caption: "Probability calibration analysis for safer interpretation in risk-triage scenarios." },
      { src: "/projects/depression/model-comparison.png", title: "Model Comparison Overview", caption: "Recruiter-friendly comparison of TF-IDF, BiLSTM, and SBERT-based model families." },
      { src: "/projects/depression/roc-overlay.png", title: "Combined ROC Curves", caption: "Overlayed ROC curves comparing TF-IDF + LR, TF-IDF + Linear SVM, BiLSTM, and SBERT models." },
      { src: "/projects/depression/pr-overlay.png", title: "Combined Precision–Recall Curves", caption: "Overlayed PR curves showing model behaviour under class imbalance and high-recall settings." },
      { src: "/projects/depression/shap-impact.png", title: "SHAP Feature Impact", caption: "Explainability view showing words and features that influenced model outputs." },
      { src: "/projects/depression/top-features-logreg.png", title: "Top Logistic Regression Features", caption: "Interpretable lexical markers that increased or reduced depression-class predictions." },
      { src: "/projects/depression/class-distribution-before.png", title: "Class Distribution Before Balancing", caption: "Original class imbalance, showing why balanced training and PR-AUC evaluation were required." },
    ],
  },
  {
    title: "Cloud-Native Retail Analytics Platform using BigQuery & Cloud Run",
    category: "Cloud Data Engineering",
    icon: Icons.Cloud,
    description:
      "Built a cloud-hosted retail analytics pipeline using BigQuery, Flask, Docker, Cloud Build, Cloud Run, and Looker Studio dashboards.",
    impact: ["GCP Cloud Run", "BigQuery analytics", "Dockerized Flask API", "Looker Studio BI"],
    stack: ["Google Cloud", "BigQuery", "Cloud Run", "Docker", "Flask", "Looker Studio"],
    highlights:
      "Created BigQuery SQL analytics for product profitability and return-rate analysis, exposed results through a Flask web service, containerized the app with Docker, deployed it to Cloud Run, and presented dashboard outputs in Looker Studio.",
    takeaways: [
      "Shows end-to-end cloud analytics delivery from BigQuery SQL to Flask API, Docker, Cloud Run, and Looker Studio.",
      "Demonstrates the ability to turn warehouse data into usable dashboards and deployed reporting services.",
      "Strong evidence for Analytics Engineer, BI, and Cloud Data roles because it goes beyond notebook analysis into deployment.",
    ],
    images: [
      { src: "/projects/cloud/retail-dashboard-profit.png", title: "Revenue & Profit Dashboard", caption: "Looker Studio dashboard showing revenue, profit, items sold, product-category breakdowns, and category treemap." },
      { src: "/projects/cloud/return-rate-dashboard.png", title: "Return Rate Analysis Dashboard", caption: "Product-level return-rate analysis dashboard highlighting high-return products and operational risk areas." },
      { src: "/projects/cloud/cloud-run-service-home.png", title: "Cloud Run Query Service", caption: "Deployed Flask application homepage with navigation to product profit and return-rate reports." },
      { src: "/projects/cloud/product-profit-api.png", title: "Product Category Profit API Output", caption: "Cloud Run endpoint returning BigQuery results for items sold, total revenue, and total profit by category." },
      { src: "/projects/cloud/product-return-api.png", title: "Product Return Rate API Output", caption: "Cloud Run endpoint returning product-level total orders, returns, and return-rate metrics." },
      { src: "/projects/cloud/cloud-run-deployment.png", title: "Cloud Run Deployment Success", caption: "Google Cloud Shell deployment output showing the query-service revision deployed and serving traffic." },
    ],
  },
  {
    title: "Biomedical NLP Token Classification for Abbreviation Detection",
    category: "AI / NLP",
    icon: Icons.BrainCircuit,
    description:
      "Built and evaluated sequence-labelling models to detect biomedical abbreviations and long forms using BIO tagging, comparing CRF, BiLSTM, GRU, BERT, SciBERT, and Bio-RoBERTa approaches.",
    impact: ["Bio-RoBERTa best model", "Micro F1 0.86", "BIO tagging", "Gradio deployment"],
    stack: ["Python", "NLP", "BERT", "Bio-RoBERTa", "SciBERT", "BiLSTM", "CRF", "Gradio"],
    highlights:
      "Compared classical sequence models, neural models, and transformer-based models for biomedical abbreviation detection. The project covered dataset imbalance, token-level evaluation, deployment flow, and my direct implementation/testing work on CRF, BiLSTM FastText, GRU GloVe, and BERT-based models.",
    takeaways: [
      "Shows practical NLP experimentation across CRF, BiLSTM, GRU, BERT, SciBERT, and Bio-RoBERTa approaches.",
      "Demonstrates understanding of imbalanced BIO tagging and domain-specific biomedical language challenges.",
      "Useful for AI/NLP roles because it combines model comparison, token-level evaluation, and deployment-ready thinking.",
    ],
    images: [
      { src: "/projects/biomedical/bio-model-comparison.png", title: "Final Model Comparison", caption: "Comparison of model families across Micro F1, highlighting the strongest transformer-based biomedical NLP model." },
      { src: "/projects/biomedical/bio-token-demo.png", title: "Token Prediction Demo", caption: "Example of token-level abbreviation and long-form detection using BIO tags such as B-AC, B-LF, I-LF, and O." },
      { src: "/projects/biomedical/bio-deployment-architecture.png", title: "Biomedical NLP Deployment Flow", caption: "End-to-end flow from biomedical text input to tokenizer, Bio-RoBERTa classifier, BIO predictions, and Gradio/Hugging Face demo." },
      { src: "/projects/biomedical/bio-label-distribution.png", title: "NER Label Distribution", caption: "Dataset analysis showing the class-imbalance challenge in biomedical token classification." },
    ],
  },
  {
    title: "Loan Approval Risk Analytics & Decision Insights",
    category: "Analytics",
    featured: true,
    icon: Icons.LineChart,
    description:
      "Performed financial risk analysis on loan approval patterns using customer credit, income, debt, payment history, and loan behaviour indicators.",
    impact: ["Credit risk exploration", "Approval pattern analysis", "R visualisation workflow", "Business recommendations"],
    stack: ["R", "Python", "EDA", "Risk Analytics", "Data Visualisation", "Business Analytics"],
    highlights:
      "Analysed credit score, income, debt-to-income ratio, loan duration, dependents, utilisation, and risk score to identify approval drivers and support explainable lending decisions.",
    takeaways: [
      "Shows business analytics ability by connecting borrower profile, credit behaviour, debt, and assets to approval outcomes.",
      "Demonstrates clear EDA and visual storytelling for financial risk and lending decision support.",
      "Strong for Data Analyst roles because it translates complex numerical patterns into practical business insight.",
    ],
    images: [
      { src: "/projects/loan/loan-risk-score-distribution.png", title: "Risk Score & Loan Payment Indicators", caption: "Distribution analysis of risk score, interest rate, monthly loan payment, and total debt-to-income indicators by approval outcome." },
      { src: "/projects/loan/borrower-profile-distributions.png", title: "Borrower Profile Distributions", caption: "Exploratory analysis of age, income, credit score, employment experience, loan amount, duration, dependents, and monthly debt payment." },
      { src: "/projects/loan/credit-behaviour-distributions.png", title: "Credit Behaviour Indicators", caption: "Credit-card utilisation, open credit lines, credit inquiries, DTI, bankruptcy, defaults, payment history, and credit-history length by approval status." },
      { src: "/projects/loan/assets-liabilities-profile.png", title: "Assets, Liabilities & Net Worth Profile", caption: "Financial stability analysis using assets, liabilities, monthly income, utility payment behaviour, job tenure, and net worth." },
    ],
  },
  {
    title: "Telecom Customer Churn Prediction using Support Vector Machines",
    category: "Machine Learning",
    featured: false,
    icon: Icons.BarChart3,
    description:
      "Created a churn prediction pipeline using feature engineering, SMOTE class balancing, StandardScaler, GridSearchCV, and Linear SVM.",
    impact: ["84% accuracy", "ROC-AUC 0.93", "Average Precision 0.94", "Explainable feature coefficients"],
    stack: ["Python", "Scikit-learn", "SVM", "SMOTE", "GridSearchCV", "ROC / PR Curves"],
    highlights:
      "Engineered LifetimeRevenue and EngagementScore features, then interpreted churn drivers through coefficient magnitude and business context.",
    takeaways: [
      "Shows an end-to-end supervised ML workflow for a commercial customer-retention problem.",
      "Demonstrates preprocessing, feature engineering, SMOTE balancing, GridSearchCV tuning, and model evaluation.",
      "Recruiters can see both predictive performance and business interpretability through churn drivers and feature coefficients.",
    ],
    images: [
      { src: "/projects/churn/roc-curve.png", title: "ROC Curve", caption: "Model discrimination performance with ROC-AUC ≈ 0.93 for churn prediction." },
      { src: "/projects/churn/precision-recall-curve.png", title: "Precision–Recall Curve", caption: "Precision-recall evaluation with Average Precision ≈ 0.94, useful for imbalanced churn analysis." },
      { src: "/projects/churn/confusion-matrix.png", title: "Confusion Matrix", caption: "Test-set classification results showing correct and incorrect churn predictions." },
      { src: "/projects/churn/top-features.png", title: "Top Important Features", caption: "Linear SVM coefficient analysis showing the strongest churn-related drivers." },
      { src: "/projects/churn/churn-before-smote.png", title: "Churn Distribution Before SMOTE", caption: "Original class imbalance between churned and non-churned customers before balancing." },
      { src: "/projects/churn/contract-type-churn.png", title: "Churn by Contract Type", caption: "Business-facing EDA showing how contract type relates to churn behaviour." },
    ],
  },
  {
    title: "E-Commerce Database Design & BI Analytics Platform",
    category: "SQL / BI",
    featured: false,
    icon: Icons.Database,
    description:
      "Designed a normalized SQL Server database and proof-of-concept BI platform for an e-commerce scenario with order, product, and customer analytics.",
    impact: ["3NF schema design", "Stored procedures", "Transaction handling", "SSAS cube modelling"],
    stack: ["SQL Server", "3NF", "Stored Procedures", "Indexes", "SSAS", "SSDT", "BI Cubes"],
    highlights:
      "Implemented database normalization, primary/foreign key design, transactional stored procedures, indexing, and BI measures/dimensions.",
    takeaways: [
      "Shows SQL Server database engineering skills beyond analysis, including 3NF design, keys, stored procedures, and transactions.",
      "Demonstrates BI modelling with measures and dimensions for customer, product, order, and date-level reporting.",
      "Complements the ML projects by proving strong database design, transaction safety, and BI delivery capability.",
    ],
    images: [
      { src: "/projects/ecommerce/ecommerce-database-schema.png", title: "3NF Database Schema Design", caption: "Normalized e-commerce schema showing customer, product, order group, order item, and date dimensions." },
      { src: "/projects/ecommerce/ecommerce-order-workflow.png", title: "Order Processing Workflow", caption: "Transaction-safe workflow for creating order groups and order items with validation and rollback handling." },
      { src: "/projects/ecommerce/ecommerce-bi-dashboard.png", title: "BI Analytics Dashboard Mockup", caption: "Business intelligence view covering order status, sales value, fulfilled orders, abandoned baskets, and product/customer/day breakdowns." },
      { src: "/projects/ecommerce/ecommerce-sql-procedures.png", title: "SQL Procedures & BI Pipeline", caption: "Stored procedure and BI modelling pipeline showing SQL transactions, indexes, SSAS/SSDT cube measures, and business insights." },
      { src: "/projects/ecommerce/ecommerce-normalisation-summary.png", title: "Normalisation Summary", caption: "How raw customer, product, and order data were separated into cleaner relational tables." },
      { src: "/projects/ecommerce/ecommerce-rohan-contribution.png", title: "My Contribution", caption: "Summary of work on normalisation, Order Group design, transactions, and delivery support." },
      { src: "/projects/ecommerce/ecommerce-proof-orderitem-normalisation.png", title: "SQL Evidence: Normalisation", caption: "Real SSMS evidence of OrderItem normalisation and key design." },
      { src: "/projects/ecommerce/ecommerce-proof-create-order-item.png", title: "SQL Evidence: prCreateOrderItem", caption: "Stored procedure evidence with insert logic, totals, commit, rollback, and error handling." },
      { src: "/projects/ecommerce/ecommerce-proof-create-order-group.png", title: "SQL Evidence: prCreateOrderGroup", caption: "Stored procedure evidence for transaction-safe order header creation." },
    ],
  },
];

const experience = [
  {
    role: "Analyst — Business Intelligence & Insights",
    company: "SolvoSky",
    period: "Feb 2025 — Present",
    details: [
      "Analysed 1M+ row datasets using SQL/SAS-style workflows, with data validation, reconciliation, and quality checks to improve reporting accuracy by 25%.",
      "Built and maintained KPI dashboards, MI packs, and recurring insight reports in Power BI and Excel for stakeholder decision-making.",
      "Reduced manual reconciliation effort by 30% through automated checks, reusable report templates, and clearer reporting processes.",
      "Supported funnel, trend, and drop-off analysis to identify recurring business performance drivers and explain changes in key metrics.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "HiTechSkills",
    period: "Mar 2022 — May 2022",
    details: [
      "Created Excel and Power BI reports to monitor KPIs, trends, operational performance, and business metrics.",
      "Cleaned, checked, and structured data before reporting to support more reliable analysis and dashboard outputs.",
      "Translated business questions into clear charts, tables, and stakeholder-friendly insight summaries.",
    ],
  },
  {
    role: "Software Intern",
    company: "Cling Multi Solutions Pvt. Ltd.",
    period: "Nov 2019 — May 2020",
    details: [
      "Supported system analysis, testing, documentation, issue tracking, and Agile team collaboration.",
      "Worked with technical and non-technical team members to understand requirements, debug issues, and improve system reliability.",
    ],
  },
];

function runSanityTests() {
  const errors = [];
  const iconKeys = [
    "ArrowUpRight",
    "ChevronRight",
    "BrainCircuit",
    "Cloud",
    "Database",
    "Github",
    "Linkedin",
    "Mail",
    "MapPin",
    "BarChart3",
    "LineChart",
    "Sparkles",
    "Cpu",
    "FileText",
  ];

  if (!profile.email.includes("@")) errors.push("Profile email should contain @.");
  if (!profile.photoUrl) errors.push("Profile photoUrl should point to a profile image path.");
  if (!Array.isArray(projects) || projects.length !== 6) errors.push("Portfolio should contain exactly 6 projects.");
  if (!projects.some((project) => project.featured)) errors.push("At least one project should be featured.");
  if (!filters.includes("All")) errors.push("Filters should include All.");
  if (!iconKeys.every((key) => typeof Icons[key] === "function")) errors.push("Every icon key should map to a valid React component function.");
  if (!skills.every((skill) => typeof getIcon(skill.icon) === "function")) errors.push("Every skill needs a valid icon component or fallback.");
  if (!projects.every((project) => typeof getIcon(project.icon) === "function")) errors.push("Every project needs a valid icon component or fallback.");
  if (!projects.every((project) => Array.isArray(project.impact) && project.impact.length > 0)) errors.push("Every project needs at least one impact item.");
  if (!projects.every((project) => Array.isArray(project.stack) && project.stack.length > 0)) errors.push("Every project needs at least one stack item.");
  if (!projects.every((project) => Array.isArray(project.takeaways) && project.takeaways.length === 3)) errors.push("Every project needs exactly 3 recruiter takeaways.");
  if (!projects.every((project) => Array.isArray(project.images) && project.images.length > 0)) errors.push("Every project needs image metadata.");
  if (!projects.every((project) => project.images.every((image) => image.src && image.title && image.caption))) errors.push("Every project image needs src, title, and caption.");
  if (getIcon(undefined) !== Icons.FileText) errors.push("Missing icons should safely fall back to FileText.");

  if (errors.length > 0) console.error("Portfolio sanity test failed:", errors);
  return errors.length === 0;
}

runSanityTests();

function Badge({ children }) {
  return <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">{children}</span>;
}

function ProfilePhoto() {
  return (
    <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-blue-400/10 to-purple-400/20 p-1 shadow-2xl shadow-cyan-500/20 md:h-56 md:w-56">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.20),transparent_28%)]" />
      <img
        src={profile.photoUrl}
        alt={`${profile.name} profile portrait`}
        className="relative z-10 h-full w-full rounded-[1.7rem] object-cover object-center"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.classList.remove("hidden");
        }}
      />
      <div className="hidden relative z-10 flex h-full w-full items-center justify-center rounded-[1.7rem] bg-zinc-950 text-5xl font-semibold text-white">RK</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-zinc-400">{description}</p>}
    </div>
  );
}

function ProjectImage({ image, className = "", onOpen }) {
  const [hasError, setHasError] = useState(false);
  if (!image) return null;

  return (
    <button
      type="button"
      onClick={onOpen}
      title="Open full image"
      className={`group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] text-left transition hover:-translate-y-1 ${className}`}
    >
      {!hasError ? (
        <img
          src={image.src}
          alt={image.title}
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full min-h-[180px] w-full items-center justify-center p-6 text-center text-sm text-zinc-500">Add image file: {image.src}</div>
      )}
      {!hasError && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 opacity-0 transition group-hover:opacity-100">
          <p className="text-xs font-medium text-white">Click to enlarge image</p>
        </div>
      )}
    </button>
  );
}

function ImageLightbox({ lightbox, onClose, onMove }) {
  if (!lightbox) return null;
  const image = lightbox.images[lightbox.index];
  if (!image) return null;
  const hasMultipleImages = lightbox.images.length > 1;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 px-4 py-6 backdrop-blur-lg" role="dialog" aria-modal="true">
      <button type="button" onClick={onClose} className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-2xl text-white transition hover:bg-white/20" aria-label="Close image">×</button>
      {hasMultipleImages && <button type="button" onClick={() => onMove(-1)} className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition hover:bg-white/20 md:flex" aria-label="Previous image">‹</button>}
      <div className="w-full max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 p-3 shadow-2xl shadow-black/60">
          <img src={image.src} alt={image.title} className="max-h-[72vh] w-full rounded-2xl object-contain" />
        </div>
        <div className="mx-auto mt-4 max-w-3xl text-center">
          <p className="text-base font-semibold text-white">{image.title}</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">{image.caption}</p>
          {hasMultipleImages && <p className="mt-2 text-xs text-zinc-500">Image {lightbox.index + 1} of {lightbox.images.length}</p>}
        </div>
        {hasMultipleImages && (
          <div className="mt-5 flex justify-center gap-3 md:hidden">
            <button type="button" onClick={() => onMove(-1)} className="rounded-full border border-white/10 px-5 py-2 text-sm text-white">Previous</button>
            <button type="button" onClick={() => onMove(1)} className="rounded-full border border-white/10 px-5 py-2 text-sm text-white">Next</button>
          </div>
        )}
      </div>
      {hasMultipleImages && <button type="button" onClick={() => onMove(1)} className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/10 text-3xl text-white transition hover:bg-white/20 md:flex" aria-label="Next image">›</button>}
    </div>
  );
}

function ProjectCard({ project, onOpen, onImageOpen }) {
  const Icon = getIcon(project.icon);
  const ArrowUpRight = Icons.ArrowUpRight;
  const coverImage = project.images?.[0];

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 transition hover:-translate-y-1">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.14),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.12),transparent_30%)] opacity-70" />
      <div className="relative z-10">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]"><Icon className="h-6 w-6 text-cyan-300" /></div>
          {project.featured && <Badge>Featured</Badge>}
        </div>
        {coverImage && <ProjectImage image={coverImage} className="mb-5 aspect-[16/10]" onOpen={() => onImageOpen(project.images, 0)} />}
        <p className="mb-3 text-sm text-cyan-300">{project.category}</p>
        <h3 className="text-xl font-semibold leading-tight text-white md:text-2xl">{project.title}</h3>
        <p className="mt-4 text-sm leading-6 text-zinc-400">{project.description}</p>
        <div className="mt-5 grid grid-cols-2 gap-2">
          {project.impact.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 text-xs text-zinc-300">{item}</div>)}
        </div>
        <p className="mt-5 text-sm leading-6 text-zinc-300">{project.highlights}</p>
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
        <button type="button" onClick={onOpen} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white transition group-hover:text-cyan-300">View case study <ArrowUpRight className="h-4 w-4" /></button>
      </div>
    </article>
  );
}

function CaseStudyModal({ project, onClose, onImageOpen }) {
  if (!project) return null;
  const ArrowUpRight = Icons.ArrowUpRight;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#0D0D13] p-6 shadow-2xl shadow-black/40 md:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-sm text-cyan-300">{project.category}</p>
            <h3 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-4xl">{project.title}</h3>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-400 md:text-base">{project.description}</p>
          </div>
          <button type="button" onClick={onClose} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-xl text-zinc-400 transition hover:bg-white/10 hover:text-white" aria-label="Close case study">×</button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {project.impact.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="text-sm font-medium text-white">{item}</p></div>)}
        </div>

        {project.images?.length > 0 && (
          <div className="mt-8">
            <h4 className="mb-4 text-lg font-semibold text-white">Project visuals</h4>
            <div className="grid gap-4 md:grid-cols-2">
              {project.images.map((image, imageIndex) => (
                <div key={image.src} className="rounded-3xl border border-white/10 bg-black/20 p-3">
                  <ProjectImage image={image} className="aspect-[16/10]" onOpen={() => onImageOpen(project.images, imageIndex)} />
                  <div className="p-3">
                    <p className="text-sm font-semibold text-white">{image.title}</p>
                    <p className="mt-1 text-xs leading-5 text-zinc-500">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <h4 className="text-lg font-semibold text-white">Case study summary</h4>
            <p className="mt-3 text-sm leading-7 text-zinc-400">{project.highlights}</p>
            <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <Badge key={tech}>{tech}</Badge>)}</div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <h4 className="text-lg font-semibold text-white">Recruiter takeaway</h4>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-zinc-400">
              {project.takeaways.map((takeaway) => (
                <li key={takeaway} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  {takeaway}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.06]">Close</button>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">View GitHub <ArrowUpRight className="h-4 w-4" /></a>
        </div>
      </div>
    </div>
  );
}

function CvModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md" role="dialog" aria-modal="true">
      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0D0D13] shadow-2xl shadow-black/50">
        <div className="flex flex-col gap-4 border-b border-white/10 p-4 md:flex-row md:items-center md:justify-between md:p-5">
          <div>
            <p className="text-sm text-cyan-300">CV</p>
            <h3 className="text-xl font-semibold text-white">Rohan Kamble CV</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={profile.resumeUrl} download="Rohan_Kamble_CV.pdf" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-200">Download CV</a>
            <button type="button" onClick={onClose} className="rounded-full border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.06]">Close</button>
          </div>
        </div>
        <div className="h-[72vh] bg-white">
          <iframe src={profile.resumeUrl} title="Rohan Kamble CV" className="h-full w-full border-0" />
        </div>
      </div>
    </div>
  );
}

export default function RohanPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  const openImageLightbox = (images, index) => {
    if (!Array.isArray(images) || images.length === 0) return;
    setLightbox({ images, index });
  };

  const moveLightboxImage = (direction) => {
    setLightbox((current) => {
      if (!current) return current;
      const nextIndex = (current.index + direction + current.images.length) % current.images.length;
      return { ...current, index: nextIndex };
    });
  };

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    if (activeFilter === "Machine Learning") return projects.filter((project) => project.category === "Machine Learning" || project.category === "AI / NLP");
    if (activeFilter === "Cloud") return projects.filter((project) => project.category.includes("Cloud"));
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const ArrowUpRight = Icons.ArrowUpRight;
  const ChevronRight = Icons.ChevronRight;
  const Sparkles = Icons.Sparkles;
  const Mail = Icons.Mail;
  const Github = Icons.Github;
  const Linkedin = Icons.Linkedin;
  const MapPin = Icons.MapPin;
  const FileText = Icons.FileText;
  const BrainCircuit = Icons.BrainCircuit;

  return (
    <main className="min-h-screen bg-[#07070A] text-zinc-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-purple-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07070A]/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-sm font-bold text-black">RK</div>
            <div>
              <p className="text-sm font-semibold text-white">Rohan Kamble</p>
              <p className="text-xs text-zinc-500">Data Scientist</p>
            </div>
          </a>
          <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-cyan-200">Hire Me <ArrowUpRight className="h-4 w-4" /></a>
        </nav>
      </header>

      <section id="home" className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300"><Sparkles className="h-4 w-4 text-cyan-300" /> MSc Data Science · NLP · Cloud Analytics · BI</div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">{profile.name}<span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">{profile.title}</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">{profile.summary}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200">View Projects <ChevronRight className="h-4 w-4" /></a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]">Contact Me <Mail className="h-4 w-4" /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]">GitHub <Github className="h-4 w-4" /></a>
              <button type="button" onClick={() => setIsCvOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]">CV <FileText className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-cyan-500/10">
              <div className="rounded-[1.5rem] border border-white/10 bg-[#0D0D13] p-6">
                <ProfilePhoto />
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-zinc-500">Current focus</p>
                    <p className="font-semibold text-white">Responsible AI & Analytics Engineering</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10"><BrainCircuit className="h-6 w-6 text-cyan-300" /></div>
                </div>
                <div className="space-y-3">
                  {["Large-scale NLP pipelines", "Cloud-native BI dashboards", "Predictive analytics for business decisions", "Explainable model evaluation"].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-sm text-zinc-300"><div className="h-2 w-2 rounded-full bg-cyan-300" />{item}</div>
                  ))}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  {stats.map((stat) => <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4"><p className="text-2xl font-semibold text-white">{stat.value}</p><p className="mt-1 text-xs leading-5 text-zinc-500">{stat.label}</p></div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] py-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 md:grid-cols-4 md:px-8">
          {stats.map((stat) => <div key={stat.label} className="text-center"><p className="text-3xl font-semibold text-white md:text-4xl">{stat.value}</p><p className="mt-2 text-sm text-zinc-500">{stat.label}</p></div>)}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader eyebrow="Projects" title="Data, machine learning, NLP, SQL, and BI projects" description="These projects show the work I have done across data cleaning, analysis, modelling, dashboards, database design, and business insight." />
        <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm transition ${activeFilter === filter ? "bg-white text-black" : "border border-white/10 bg-white/[0.03] text-zinc-400 hover:text-white"}`}>{filter}</button>)}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {visibleProjects.map((project) => <ProjectCard key={project.title} project={project} onOpen={() => setSelectedProject(project)} onImageOpen={openImageLightbox} />)}
        </div>
      </section>

      <section id="skills" className="relative border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Capabilities" title="Technical toolkit" description="A balanced stack across data science, NLP, business intelligence, cloud analytics, and production-minded deployment." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const SkillIcon = getIcon(skill.icon);
              return (
                <div key={skill.group} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10"><SkillIcon className="h-6 w-6 text-cyan-300" /></div>
                  <h3 className="text-lg font-semibold text-white">{skill.group}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">{skill.items.map((item) => <Badge key={item}>{item}</Badge>)}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <SectionHeader eyebrow="Experience" title="Analytics experience with measurable impact" description="Professional and internship experience focused on SQL, reporting, validation, KPI dashboards, and stakeholder-facing insights." />
        <div className="mx-auto max-w-4xl space-y-5">
          {experience.map((item) => <div key={`${item.role}-${item.company}`} className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"><div className="flex flex-col justify-between gap-3 md:flex-row md:items-start"><div><h3 className="text-xl font-semibold text-white">{item.role}</h3><p className="mt-1 text-cyan-300">{item.company}</p></div><p className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-400">{item.period}</p></div><ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-400">{item.details.map((detail) => <li key={detail} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{detail}</li>)}</ul></div>)}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-white/[0.025] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Education" title="MSc Data Science" description="Focused on analytics, machine learning, databases, cloud computing, and NLP." />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"><h3 className="text-xl font-semibold text-white">University of Surrey</h3><p className="mt-2 text-cyan-300">MSc Data Science · 2:1 Merit</p><p className="mt-4 text-sm leading-6 text-zinc-400">Key modules include Practical Business Analytics, Machine Learning & Data Mining, Database Systems, Cloud Computing, and Natural Language Processing.</p></div>
            <div className="rounded-3xl border border-white/10 bg-zinc-950/70 p-6"><h3 className="text-xl font-semibold text-white">SPPU University</h3><p className="mt-2 text-cyan-300">B.E. Computer Engineering · First Class</p><p className="mt-4 text-sm leading-6 text-zinc-400">Computer engineering background supporting software development, databases, system analysis, and data-driven application development.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/80 p-8 text-center shadow-2xl shadow-black/30 md:p-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-cyan-300">Let’s connect</p>
          <h2 className="text-3xl font-semibold text-white md:text-5xl">Open to Data Analyst, Data Scientist & AI Engineer roles</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-400">Interested in roles where I can use data analysis, machine learning, NLP, AI systems, and clear business communication to turn data into practical decisions.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-200"><Mail className="h-4 w-4" /> Email Me</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]"><Github className="h-4 w-4" /> GitHub</a>
            <button type="button" onClick={() => setIsCvOpen(true)} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/[0.04]"><FileText className="h-4 w-4" /> CV</button>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-500"><span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4" /> {profile.location}</span></div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Rohan Kamble.</p>
          <div className="flex gap-4"><a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a><a href={`mailto:${profile.email}`} className="hover:text-white">Email</a></div>
        </div>
      </footer>

      <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} onImageOpen={openImageLightbox} />
      <ImageLightbox lightbox={lightbox} onClose={() => setLightbox(null)} onMove={moveLightboxImage} />
      {isCvOpen && <CvModal onClose={() => setIsCvOpen(false)} />}
    </main>
  );
}
