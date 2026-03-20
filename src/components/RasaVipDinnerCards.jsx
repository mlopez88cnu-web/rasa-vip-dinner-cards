import { useState, useRef, useCallback } from "react";

/* ── Embedded SVG brand marks ── */
const logos = {
  "JP Morgan Chase": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#00205B"/>
      <text x="26" y="27" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="18" fill="#ffffff">JPM</text>
      <rect x="12" y="33" width="28" height="1.5" rx="0.75" fill="#ffffff" opacity="0.4"/>
      <rect x="16" y="37" width="20" height="1.5" rx="0.75" fill="#ffffff" opacity="0.25"/>
    </svg>
  ),
  "FICO": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#F15A22"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="14" fill="#ffffff" letterSpacing="1">FICO</text>
    </svg>
  ),
  "BMO": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#0075BE"/>
      <circle cx="26" cy="22" r="10" fill="none" stroke="#ffffff" strokeWidth="2.5"/>
      <text x="26" y="40" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#ffffff">BMO</text>
    </svg>
  ),
  "US Bank": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#0C2340"/>
      <rect x="10" y="14" width="32" height="3" rx="1.5" fill="#CC0000"/>
      <text x="26" y="34" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="#ffffff">USB</text>
    </svg>
  ),
  "Moody's Analytics": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#002B5C"/>
      <text x="26" y="33" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="28" fill="#ffffff">M</text>
    </svg>
  ),
  "Silicon Valley Bank": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#003B5C"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="#ffffff">SVB</text>
    </svg>
  ),
  "Uber": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#000000"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16" fill="#ffffff" letterSpacing="1">Uber</text>
    </svg>
  ),
  "Walmart": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#0071CE"/>
      <text x="26" y="30" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="9" fill="#ffffff" letterSpacing="0.5">Walmart</text>
      <g transform="translate(26,40)">
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-4.3" y1="-2.5" x2="4.3" y2="2.5" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="-4.3" y1="2.5" x2="4.3" y2="-2.5" stroke="#FFC220" strokeWidth="2.5" strokeLinecap="round"/>
      </g>
    </svg>
  ),
  "AudioCodes": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#005BAA"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="20" fill="#ffffff">AC</text>
    </svg>
  ),
  "Visa": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#1A1F71"/>
      <rect x="0" y="8" width="52" height="3" rx="1" fill="#F7B600"/>
      <text x="26" y="34" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="16" fill="#ffffff" letterSpacing="1">VISA</text>
    </svg>
  ),
};

function CompanyLogo({ company, size = 52 }) {
  const renderLogo = logos[company];
  if (renderLogo) return <div style={{ flexShrink: 0, lineHeight: 0 }}>{renderLogo(size)}</div>;
  const initials = company.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  return (
    <div style={{
      width: size, height: size, borderRadius: 12,
      background: "linear-gradient(135deg, #1a1b2e 0%, #252640 100%)",
      border: "1px solid #2a2d45",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "'JetBrains Mono', monospace", fontSize: size * 0.33,
      fontWeight: 700, color: "#7c5cfc", flexShrink: 0,
    }}>{initials}</div>
  );
}

/* ── Guest data ── */
const guests = [
  {
    name: "Jainesh Doshi",
    photoUrl: "/headshots/Jainesh Doshi.jpeg",
    title: "VP, Engineering Manager",
    company: "JP Morgan Chase",
    industry: "Financial Services",
    aiStage: "Exploring",
    buildVsBuy: "Buying",
    agenticReadiness: "Low",
    companyBrief: "While JP Morgan Chase is highly advanced in AI overall, Jainesh's specific domain shows no public AI activity yet — focused on foundational digital transformation. Sales efforts should focus on basic automation and infrastructure-first approaches.",
    conversationStarters: [
      "JP Morgan Chase is one of the most aggressive AI investors on Wall Street — ask how that top-down AI strategy filters into his engineering group.",
      "He's early in AI adoption in his domain — explore what foundational data or infrastructure work needs to happen before agentic workflows make sense.",
      "The gap between JPM's enterprise AI ambition and individual team readiness is a great opening for Rasa's incremental adoption story."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Sina Sohangir",
    photoUrl: "/headshots/Sina Sohangir.jpeg",
    title: "VP of AI Engineering",
    company: "FICO",
    industry: "Analytics & Decision Management",
    aiStage: "Optimizing",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "FICO has platformized AI delivery with a unified enterprise platform for MLOps and governance. Deployed proprietary 'Focused Foundation Models' providing real-time agent script guidance and 'Outcome Augmentation' for automatic workflow intervention.",
    conversationStarters: [
      "He's been engaging with content on assistant-driven enterprise UIs transforming into dynamic 'whiteboards' — ask how FICO envisions AI assistants reshaping their platform experience.",
      "FICO's Focused Foundation Models provide real-time script guidance to agents — a natural bridge to discuss how Rasa's orchestration could enhance that capability.",
      "He's interested in production-grade GenAI architecture for scalable deployments — explore where FICO sees the orchestration gaps in their current stack."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Edward (EJ) Achtner",
    photoUrl: "/headshots/EJ Achtner.jpeg",
    title: "VP, Head of Applied AI",
    company: "BMO",
    industry: "Banking & Financial Services",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "BMO is actively hiring for production-grade machine learning and agentic AI systems while establishing robust model governance. They utilize a mixed build/buy strategy, leveraging both commercial foundations and internal MLOps for custom model development.",
    conversationStarters: [
      "His LinkedIn handle is literally 'responsibleai' — lead with governance, safety, and trust in agentic systems. He'll engage deeply here.",
      "BMO is piloting AI agents for wealth management — ask what guardrails they've found essential when agents interact with clients' money.",
      "He attended a Stanford convening on antidiscrimination law and AI — a thoughtful opener about fairness and bias in deployed AI systems."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Siddharth Rallabandi",
    photoUrl: "/headshots/Siddharth Rallabandi.jpeg",
    title: "Software Engineer - AI/ML Product Owner",
    company: "US Bank",
    industry: "Banking & Financial Services",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "U.S. Bank has launched a live external GenAI Developer Assistant and is running production pilots in contact centers using an AWS and Anthropic stack. Building a centralized Machine Learning Platform for cloud-native AI development at scale.",
    conversationStarters: [
      "He shared excitement about NVIDIA's Nemotron-3 and reducing cognitive barriers — ask how US Bank thinks about 'thinking tax' reduction in their AI products.",
      "He posted about AI as a 'bicycle for the mind' enhancing creativity — explore how that philosophy shapes their GenAI Developer Assistant roadmap.",
      "He liked LangChain open-sourcing a Claude Code replica — a signal he's tracking agentic tooling closely. Great opening for Rasa's orchestration story."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Han-chung Lee",
    photoUrl: "/headshots/Han Chung Lee.jpeg",
    title: "Senior Director of Data & AI",
    company: "Moody's Analytics",
    industry: "Financial Services & Analytics",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "Moody's has productionized multiple AI tools including a Research Assistant for customers and an internal CoPilot for 14,000 employees. They explicitly advertise 'agentic solutions' and are embedding agentic AI into their data ecosystem.",
    conversationStarters: [
      "He's authoring a book on AI Evaluation and Alignment for Manning Publications — lead with governance and evaluation frameworks for agentic systems.",
      "Moody's has deployed an internal CoPilot to 14,000 employees — ask what they've learned about scaling AI adoption across a knowledge-work organization.",
      "They're explicitly marketing 'agentic solutions' — explore where orchestration and multi-step workflows fit into their data ecosystem vision."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Shilpa Daule",
    photoUrl: "/headshots/Shilpa Daule.jpeg",
    title: "Director - Product Management, Analytics and AI/ML",
    company: "Silicon Valley Bank",
    industry: "Banking & Financial Services",
    aiStage: "Exploring",
    buildVsBuy: "Buying",
    agenticReadiness: "Low",
    companyBrief: "SVB acts as a critical financial hub for the AI ecosystem, providing venture debt to AI startups and publishing research on AI investment trends. Strong thought leadership but no public signals of internal production AI platforms.",
    conversationStarters: [
      "She's been engaging with content on digital analytics and customer experience using AI and fintech tools — ask how SVB thinks about AI for their own operations vs. funding others.",
      "SVB sits at the nexus of the AI startup ecosystem — explore what patterns she's seeing across their portfolio companies that could inform SVB's own AI strategy.",
      "The data cloud and semantic layer innovations she's tracking are foundational to AI — a good bridge to discuss infrastructure-first approaches with Rasa."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Anindya Sundar Das",
    photoUrl: "/headshots/Anindya Sundar.jpeg",
    title: "Senior Director, Head of Global Service Design",
    company: "Uber",
    industry: "Technology / Mobility",
    aiStage: "Optimizing",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "Uber operates a mature ML-as-a-service platform (Michelangelo) supporting 5,000+ production models and 10M real-time predictions/second. Extending to full LLMOps and commercializing internal AI data-labeling and evaluation tools.",
    conversationStarters: [
      "He's been engaging with content about AI moving from reading/summarizing to taking action via 'agent layers' — directly relevant to Rasa's agentic positioning.",
      "The Uber-Zoox robotaxi partnership is a recent highlight — a light opener before pivoting to how Uber thinks about autonomous decision-making in their service layer.",
      "Uber's Michelangelo platform is legendary in MLOps — ask how they're thinking about the orchestration layer on top of it for generative AI."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Ankit Raheja",
    photoUrl: "/headshots/Ankit R.jpeg",
    title: "Principal Product Manager - AI Products",
    company: "Walmart",
    industry: "Retail & Technology",
    aiStage: "Scaling",
    buildVsBuy: "Building",
    agenticReadiness: "High",
    companyBrief: "Walmart maintains an internal ML platform (Element) and is aggressively hiring for production ML and GenAI roles including autonomous agent deployments. Job postings explicitly mention 'deploy autonomous AI agents.'",
    conversationStarters: [
      "He's been engaging with content on 'Production RAG' as a system — ask how Walmart's Element platform handles RAG at their massive scale.",
      "He launched the 'AI Super PM Competency Framework' — explore how Walmart thinks about the product management discipline for AI-native products.",
      "Walmart is one of few guests with a 'Building' orientation and High agentic readiness — ask what drove the conviction to build internally vs. buy."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Brandon Smith",
    photoUrl: "/headshots/Brandon Smith.jpeg",
    title: "Director of Sales, Contact Center",
    company: "AudioCodes",
    industry: "Enterprise Communications (Partner)",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "AudioCodes has launched production-ready generative AI products like AI Summary and maintains VoiceAI Connect, a platform that orchestrates call flows and integrates various bot frameworks as a gateway for automated conversational agents.",
    conversationStarters: [
      "AudioCodes' VoiceAI Connect orchestrates call flows and integrates bot frameworks — a natural partner conversation about Rasa's orchestration capabilities.",
      "He's been tracking AI speech tech events like Deepgram at Emerging Tech Expo — ask how AudioCodes sees the voice AI landscape evolving.",
      "As a Partner attendee, explore how AudioCodes and Rasa could create joint value for enterprise contact center customers."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Kevin Qian",
    photoUrl: "/headshots/Kevin Qian.jpeg",
    title: "AI Product Manager",
    company: "Visa",
    industry: "Financial Services & Payments",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "Visa has 150+ proprietary AI/ML models in production and launched 'Visa Intelligent Commerce' opening its payment network to AI agents. A massive internal team of thousands is dedicated to AI platforms.",
    conversationStarters: [
      "He's been tracking the 'Delegate AI coworker' product — ask how Visa thinks about AI assistants that can autonomously transact on behalf of users.",
      "Visa's 'Intelligent Commerce' initiative enables autonomous AI agents to transact on their network — directly relevant to Rasa's agentic orchestration story.",
      "He follows Compound AI's analyst tools closely — explore how Visa sees compound AI systems and multi-agent architectures fitting into payments."
    ],
    hasLinkedIn: true,
  },
];

/* ── Styling helpers ── */
const readinessColor = (level) => {
  if (level === "High") return { bg: "#1a3a2a", text: "#4ade80", border: "#2d6b47" };
  if (level === "Medium") return { bg: "#3a2f1a", text: "#fbbf24", border: "#6b5a2d" };
  return { bg: "#3a1a1a", text: "#f87171", border: "#6b2d2d" };
};

const stageColor = (stage) => {
  if (stage === "Scaling") return { bg: "#1a2a3a", text: "#60a5fa", border: "#2d4a6b" };
  if (stage === "Optimizing") return { bg: "#1a2a2a", text: "#2dd4bf", border: "#2d5a4a" };
  return { bg: "#2a1a3a", text: "#c084fc", border: "#4a2d6b" };
};

function Badge({ label, value, colorFn }) {
  const c = colorFn(value);
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      padding: "4px 12px", borderRadius: 6, fontSize: 12,
      fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
      letterSpacing: "0.03em", background: c.bg, color: c.text,
      border: `1px solid ${c.border}`,
    }}>
      <span style={{ opacity: 0.6, fontWeight: 400, textTransform: "uppercase", fontSize: 10 }}>{label}</span>
      {value}
    </span>
  );
}

function ProfilePhoto({ url, name, size = 52 }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  if (!url || failed) {
    return (
      <div style={{
        width: size, height: size, borderRadius: "50%",
        background: "linear-gradient(135deg, #252640 0%, #1a1b2e 100%)",
        border: "2px solid #2a2d45",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'JetBrains Mono', monospace", fontSize: size * 0.33,
        fontWeight: 700, color: "#7c5cfc", flexShrink: 0,
      }}>{initials}</div>
    );
  }

  return (
    <img
      src={url}
      alt={name}
      onError={() => setFailed(true)}
      style={{
        width: size, height: size, borderRadius: "50%",
        objectFit: "cover", flexShrink: 0,
        border: "2px solid #2a2d45",
      }}
    />
  );
}

function GuestCard({ guest, index, total }) {
  return (
    <div style={{
      background: "#0f1117", border: "1px solid #1e2030", borderRadius: 16,
      padding: "clamp(20px, 4vw, 36px) clamp(16px, 4vw, 40px) clamp(20px, 4vw, 32px)",
      maxWidth: 720, margin: "0 auto 32px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, #7c5cfc 0%, #5b8def 50%, #4ade80 100%)",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start", minWidth: 0 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <ProfilePhoto url={guest.photoUrl} name={guest.name} size={80} />
            <CompanyLogo company={guest.company} size={36} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(20px, 5vw, 28px)", fontWeight: 700, color: "#f0f0f5",
              lineHeight: 1.2, marginBottom: 4,
            }}>{guest.name}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(11px, 2.5vw, 13px)", color: "#8b8fa3", marginBottom: 2,
              wordWrap: "break-word",
            }}>{guest.title}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "clamp(11px, 2.5vw, 14px)", color: "#7c5cfc", fontWeight: 600,
            }}>
              {guest.company}
              <span style={{ color: "#3a3d50", margin: "0 8px" }}>|</span>
              <span style={{ color: "#5a5d70", fontWeight: 400, fontSize: "clamp(10px, 2vw, 12px)" }}>{guest.industry}</span>
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: "#3a3d50", textAlign: "right", paddingTop: 4, flexShrink: 0,
        }}>{index + 1} / {total}</div>
      </div>

      {/* Badges */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 24 }}>
        <Badge label="AI Stage" value={guest.aiStage} colorFn={stageColor} />
        <Badge label="Agentic" value={guest.agenticReadiness} colorFn={readinessColor} />
        <Badge label="Strategy" value={guest.buildVsBuy} colorFn={() => ({ bg: "#1a1a2a", text: "#a5a8c0", border: "#2d2d4a" })} />
        {guest.hasLinkedIn && (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 4,
            padding: "4px 10px", borderRadius: 6, fontSize: 11,
            fontFamily: "'JetBrains Mono', monospace",
            background: "#1a2a1a", color: "#4ade80", border: "1px solid #2d4a2d",
          }}>● LinkedIn Intel</span>
        )}
      </div>

      {/* Company Intelligence */}
      <div style={{ marginBottom: 24 }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.12em", color: "#4a4d60", marginBottom: 8,
        }}>Company Intelligence</div>
        <div style={{
          fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
          fontSize: 13.5, lineHeight: 1.65, color: "#c0c3d8",
          padding: "12px 16px", background: "#13141f",
          borderRadius: 10, border: "1px solid #1e2030",
        }}>{guest.companyBrief}</div>
      </div>

      {/* Conversation Starters */}
      <div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.12em", color: "#4a4d60", marginBottom: 10,
        }}>Conversation Starters</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {guest.conversationStarters.map((starter, i) => (
            <div key={i} style={{
              display: "flex", gap: 12, padding: "10px 14px",
              background: i === 0 ? "#17182a" : "#13141f",
              borderRadius: 10,
              border: i === 0 ? "1px solid #2d2d5a" : "1px solid #1e2030",
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                fontWeight: 700, color: i === 0 ? "#7c5cfc" : "#3a3d50",
                minWidth: 18, paddingTop: 1,
              }}>{i + 1}.</div>
              <div style={{
                fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
                fontSize: 13, lineHeight: 1.6,
                color: i === 0 ? "#d0d3e8" : "#9a9db5",
              }}>{starter}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function useSwipe(onSwipeLeft, onSwipeRight) {
  const touchStart = useRef(null);
  const touchEnd = useRef(null);
  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchMove = useCallback((e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    if (Math.abs(distance) >= minSwipeDistance) {
      if (distance > 0) onSwipeLeft();
      else onSwipeRight();
    }
    touchStart.current = null;
    touchEnd.current = null;
  }, [onSwipeLeft, onSwipeRight]);

  return { onTouchStart, onTouchMove, onTouchEnd };
}

export default function VIPDinnerCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("single");

  const goNext = useCallback(() => {
    setCurrentIndex(i => Math.min(guests.length - 1, i + 1));
  }, []);
  const goPrev = useCallback(() => {
    setCurrentIndex(i => Math.max(0, i - 1));
  }, []);

  const swipeHandlers = useSwipe(goNext, goPrev);

  return (
    <div style={{
      background: "#0a0b10", minHeight: "100vh", padding: "clamp(12px, 3vw, 24px) clamp(8px, 2vw, 16px)",
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{ maxWidth: 720, margin: "0 auto 28px", textAlign: "center" }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10, fontWeight: 600,
          textTransform: "uppercase", letterSpacing: "0.2em", color: "#7c5cfc", marginBottom: 6,
        }}>Rasa — VIP Dinner Briefing</div>
        <div style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(18px, 4vw, 22px)", fontWeight: 700, color: "#f0f0f5", marginBottom: 4,
        }}>Guest Intelligence Cards</div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#4a4d60",
        }}>{guests.length} Prospects · March 2026</div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
          {["single", "all"].map(m => (
            <button key={m} onClick={() => setViewMode(m)} style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
              padding: "6px 14px", borderRadius: 6,
              border: `1px solid ${viewMode === m ? "#7c5cfc" : "#1e2030"}`,
              background: viewMode === m ? "#1a1a3a" : "transparent",
              color: viewMode === m ? "#7c5cfc" : "#4a4d60", cursor: "pointer",
            }}>{m === "single" ? "One at a time" : "View all"}</button>
          ))}
        </div>
      </div>

      {viewMode === "single" ? (
        <>
          <div {...swipeHandlers} style={{ touchAction: "pan-y" }}>
            <GuestCard guest={guests[currentIndex]} index={currentIndex} total={guests.length} />
          </div>

          <div style={{
            maxWidth: 720, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
            gap: 8,
          }}>
            <button
              onClick={goPrev}
              disabled={currentIndex === 0}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(11px, 2.5vw, 12px)",
                padding: "8px clamp(10px, 2vw, 18px)", borderRadius: 8, border: "1px solid #1e2030",
                background: currentIndex === 0 ? "transparent" : "#13141f",
                color: currentIndex === 0 ? "#2a2d40" : "#8b8fa3",
                cursor: currentIndex === 0 ? "default" : "pointer",
                flexShrink: 0,
              }}>← Prev</button>

            <div style={{ display: "flex", gap: "clamp(3px, 0.8vw, 6px)", flexWrap: "wrap", justifyContent: "center" }}>
              {guests.map((g, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} title={g.name} style={{
                  width: i === currentIndex ? 24 : 8, height: 8, borderRadius: 4,
                  border: "none", background: i === currentIndex ? "#7c5cfc" : "#1e2030",
                  cursor: "pointer", transition: "all 0.2s ease", padding: 0,
                }} />
              ))}
            </div>

            <button
              onClick={goNext}
              disabled={currentIndex === guests.length - 1}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(11px, 2.5vw, 12px)",
                padding: "8px clamp(10px, 2vw, 18px)", borderRadius: 8, border: "1px solid #1e2030",
                background: currentIndex === guests.length - 1 ? "transparent" : "#13141f",
                color: currentIndex === guests.length - 1 ? "#2a2d40" : "#8b8fa3",
                cursor: currentIndex === guests.length - 1 ? "default" : "pointer",
                flexShrink: 0,
              }}>Next →</button>
          </div>

          <div style={{
            maxWidth: 720, margin: "24px auto 0",
            display: "flex", flexWrap: "wrap", gap: 4, justifyContent: "center",
          }}>
            {guests.map((g, i) => (
              <button key={i} onClick={() => setCurrentIndex(i)} style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                padding: "4px 10px", borderRadius: 4,
                border: `1px solid ${i === currentIndex ? "#7c5cfc" : "#1a1b25"}`,
                background: i === currentIndex ? "#1a1a3a" : "transparent",
                color: i === currentIndex ? "#7c5cfc" : "#3a3d50",
                cursor: "pointer", whiteSpace: "nowrap",
              }}>{g.name.split(" ")[0]}</button>
            ))}
          </div>
        </>
      ) : (
        <div>
          {guests.map((guest, i) => (
            <GuestCard key={i} guest={guest} index={i} total={guests.length} />
          ))}
        </div>
      )}
    </div>
  );
}
