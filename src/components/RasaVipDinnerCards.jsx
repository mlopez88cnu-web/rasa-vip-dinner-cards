import { useState } from "react";

/* ── Embedded SVG brand marks ── */
const logos = {
  "Credit Acceptance": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#003366"/>
      <text x="26" y="21" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="18" fill="#ffffff">CA</text>
      <rect x="10" y="28" width="32" height="2.5" rx="1" fill="#4DA8DA"/>
      <rect x="14" y="33" width="24" height="2.5" rx="1" fill="#4DA8DA" opacity="0.6"/>
    </svg>
  ),
  "Nutanix": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#024DA1"/>
      <g transform="translate(26,26)">
        <polygon points="0,-14 12,7 -12,7" fill="#69BE28" />
        <polygon points="-6,-2 6,-2 0,12" fill="#ffffff" opacity="0.9"/>
      </g>
    </svg>
  ),
  "BMO": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#0075BE"/>
      <circle cx="26" cy="22" r="10" fill="none" stroke="#ffffff" strokeWidth="2.5"/>
      <text x="26" y="40" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="11" fill="#ffffff">BMO</text>
    </svg>
  ),
  "Uber": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#000000"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="16" fill="#ffffff" letterSpacing="1">Uber</text>
    </svg>
  ),
  "Vituity": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#00857C"/>
      <text x="26" y="33" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="24" fill="#ffffff">V</text>
      <circle cx="26" cy="40" r="2" fill="#A5D867"/>
    </svg>
  ),
  "Goldman Sachs": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#1A1F36"/>
      <text x="26" y="27" textAnchor="middle" fontFamily="Georgia,serif" fontWeight="700" fontSize="22" fill="#7EB0D5">GS</text>
      <rect x="12" y="33" width="28" height="1.5" rx="0.75" fill="#7EB0D5" opacity="0.5"/>
      <rect x="16" y="37" width="20" height="1.5" rx="0.75" fill="#7EB0D5" opacity="0.3"/>
    </svg>
  ),
  "Kaiser Permanente": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#002B5C"/>
      <g transform="translate(26,24)">
        <rect x="-3" y="-10" width="6" height="20" rx="1" fill="#E31837"/>
        <rect x="-10" y="-3" width="20" height="6" rx="1" fill="#E31837"/>
      </g>
      <text x="26" y="44" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="7" fill="#ffffff" letterSpacing="0.5">KAISER</text>
    </svg>
  ),
  "New American Funding": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#1B2A4A"/>
      <g transform="translate(26,22)">
        <polygon points="0,-12 14,8 -14,8" fill="none" stroke="#C41230" strokeWidth="2.5" strokeLinejoin="round"/>
      </g>
      <text x="26" y="42" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="7.5" fill="#ffffff" letterSpacing="0.3">NAF</text>
    </svg>
  ),
  "T-Mobile": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#E20074"/>
      <text x="26" y="33" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="26" fill="#ffffff">T</text>
      <rect x="14" y="12" width="24" height="3" rx="1.5" fill="#ffffff" opacity="0.4"/>
    </svg>
  ),
  "Ciena": (s) => (
    <svg viewBox="0 0 52 52" width={s} height={s}>
      <rect width="52" height="52" rx="12" fill="#6B2D8B"/>
      <text x="26" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="14" fill="#ffffff" letterSpacing="1">ciena</text>
      <circle cx="15" cy="15" r="4" fill="#00AEEF" opacity="0.7"/>
      <circle cx="37" cy="15" r="3" fill="#78BE20" opacity="0.7"/>
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
    name: "David Zhou",
    title: "VP of Engineering, Data",
    company: "Credit Acceptance",
    industry: "Financial Services",
    photoUrl: "data:image/jpeg;base64,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",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "Building a centralized Gen-AI platform with Databricks and Snowflake. Hiring senior AI leadership to scale production-grade ML/LLM operations enterprise-wide. Exploring advanced reasoning frameworks (CoT, ToT) foundational to agentic AI.",
    conversationStarters: [
      "He's been engaging with content on open-source AI tooling and data architecture redesign — ask about their approach to moving beyond traditional data pipelines.",
      "Credit Acceptance is building an internal Gen-AI platform — a great opening to discuss the build vs. buy tension at scale.",
      "He's interested in foundational data strategy over flashy AI products — aligns well with Rasa's infrastructure-first philosophy."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Amarnath Purohit",
    title: "AI Enterprise Program Leader",
    company: "Nutanix",
    photoUrl: "data:image/jpeg;base64,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",
    industry: "Enterprise Infrastructure",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "Just launched 'Nutanix Agentic AI' (March 2026) — a full-stack platform for building and governing AI agents and factories. Strong NVIDIA partnership. Also offers 'GPT-in-a-Box' for on-prem AI deployment.",
    conversationStarters: [
      "Nutanix just launched their Agentic AI platform in March — ask how they're seeing enterprise customers adopt it and where orchestration gaps remain.",
      "He's been engaging with content on the difficulty of building AI factories — fragmented infra, fast-changing hardware. A natural bridge to Rasa's orchestration story.",
      "The NVIDIA partnership is top of mind — explore how they see the GPU/compute layer intersecting with the agent orchestration layer."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Edward (EJ) Achtner",
    title: "VP, Head of Applied AI",
    company: "BMO",
    photoUrl: "data:image/jpeg;base64,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",
    industry: "Banking & Financial Services",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "Production AI assistants deployed (Lumi), Chief AI Officer in place, enterprise-wide AI literacy programs running. Actively piloting AI agents for wealth management and internal banker workflows with a dedicated responsible AI framework.",
    conversationStarters: [
      "His LinkedIn handle is literally 'responsibleai' — lead with governance, safety, and trust in agentic systems. He'll engage deeply here.",
      "BMO is piloting AI agents for wealth management — ask what guardrails they've found essential when agents interact with clients' money.",
      "He attended a Stanford convening on antidiscrimination law and AI — a thoughtful opener about fairness and bias in deployed AI systems."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Anindya Sundar Das",
    title: "Senior Director, Head of Global Service Design",
    company: "Uber",
    photoUrl: "data:image/jpeg;base64,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",
    industry: "Technology / Mobility",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "5,000+ models in production serving 10M predictions/second via their Michelangelo platform. Extended to full LLMOps for generative AI. Commercializing AI expertise externally through data and evaluation services.",
    conversationStarters: [
      "He's been engaging with content about AI moving from reading/summarizing to taking action via 'agent layers' — directly relevant to Rasa's agentic positioning.",
      "The Uber-Zoox robotaxi partnership is a recent highlight — a light opener before pivoting to how Uber thinks about autonomous decision-making in their service layer.",
      "Uber's Michelangelo platform is legendary in MLOps — ask how they're thinking about the orchestration layer on top of it for generative AI."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Andrew Smith",
    title: "Chief Operations & Innovation Officer",
    company: "Vituity",
    photoUrl: "data:image/jpeg;base64,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",
    industry: "Healthcare",
    aiStage: "Experimenting",
    buildVsBuy: "Mixed",
    agenticReadiness: "Low",
    companyBrief: "Early-stage AI adoption focused on data foundations and ML for supply chain optimization. Established data science team but no production generative AI or agentic workflows yet — significant greenfield opportunity.",
    conversationStarters: [
      "He recently led a healthcare leadership conversation at SXSW — ask what innovation themes resonated most with healthcare operators.",
      "He's also involved with a startup (CitizenWorks) — showing entrepreneurial instincts. A founder-to-founder rapport angle could work well.",
      "Vituity is pre-agentic but has real ML in production for operations — explore what it would take to bring conversational AI into their clinical workflows."
    ],
    hasLinkedIn: false,
  },
  {
    name: "Sonia Johnson",
    title: "Senior VP of Product: AI Engineering & Science",
    company: "Goldman Sachs",
    industry: "Financial Services",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "GS AI Assistant deployed to 10,000+ employees for document analysis and coding. CIO has publicly stated the next step is 'agentic behavior' — models completing tasks autonomously. Sophisticated MLOps infrastructure with multiple external LLMs.",
    conversationStarters: [
      "Goldman's CIO publicly said 'agentic behavior' is the next phase for GS AI Assistant — ask how her product team is architecting that transition.",
      "She's been engaging with content about 'AI natives' transforming the workforce — a great angle on how agentic tools change the developer and analyst experience.",
      "Goldman runs one of the most advanced internal AI platforms on Wall Street — explore where orchestration and multi-step agent workflows fit into their roadmap."
    ],
    hasLinkedIn: true,
  },
  {
    name: "Neil Cowles",
    title: "Chief Information & Technology Officer",
    company: "Kaiser Permanente",
    industry: "Healthcare",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Low",
    companyBrief: "Ambient AI documentation deployed across 40 hospitals and 600+ offices. Running the AIM-HI research program for real-world AI diagnostics. Focused on high-governance, safety-critical AI integrated into clinical workflows.",
    conversationStarters: [
      "No public LinkedIn activity — keep openers company-focused. The ambient AI rollout across 40 hospitals is massive; ask about the governance lessons learned at that scale.",
      "Healthcare AI is uniquely constrained by safety and regulation — ask how they evaluate new AI capabilities while maintaining clinical trust.",
      "The AIM-HI research program funds real-world AI diagnostic studies — explore what they've learned about bringing AI from research into clinical practice."
    ],
    hasLinkedIn: false,
  },
  {
    name: "Vino Pyata",
    title: "VP of Engineering, Data",
    company: "New American Funding",
    industry: "Mortgage & Financial Services",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "Medium",
    companyBrief: "Successfully moved Document AI and LLM-powered accounting automation from pilot to production with 80% efficiency gains. Partners with evolv.consulting and Snowflake. Opportunity to expand automated workflows across departments.",
    conversationStarters: [
      "No public LinkedIn activity — lead with their impressive 80% efficiency gain from Document AI. Ask what made the difference between pilot and production success.",
      "They've implemented end-to-end automated document workflows — close to agentic patterns even if not branded that way. Explore where they see the next leap.",
      "Mortgage processing is document-heavy and workflow-intensive — a natural fit for conversational AI that can orchestrate multi-step processes."
    ],
    hasLinkedIn: false,
  },
  {
    name: "Nandan Thor",
    title: "VP of AI, Product & Engineering",
    company: "T-Mobile",
    industry: "Telecommunications",
    aiStage: "Scaling",
    buildVsBuy: "Mixed",
    agenticReadiness: "High",
    companyBrief: "Landmark OpenAI partnership driving production AI (IntentCX). Deploying Microsoft Copilot agents. Hiring Principal AI Engineers specifically for agentic system optimization via prompt engineering and reinforcement learning.",
    conversationStarters: [
      "No public LinkedIn activity — lead with T-Mobile's OpenAI partnership and IntentCX. Ask how they're thinking about customer intent resolution through agentic systems.",
      "They're hiring specifically for 'agentic AI system optimization' — a strong signal they're investing deeply. Ask what challenges they're hitting as they scale.",
      "T-Mobile is deploying Copilot agents internally — explore how they see the stack evolving between Microsoft's ecosystem and custom-built orchestration."
    ],
    hasLinkedIn: false,
  },
  {
    name: "Satish Kanna",
    title: "VP Engineering, Blue Planet at Ciena",
    company: "Ciena",
    industry: "Networking & Telecom",
    aiStage: "Scaling",
    buildVsBuy: "Building",
    agenticReadiness: "Medium",
    companyBrief: "Blue Planet Intelligent Automation is a closed-loop, AI-powered portfolio that automates network and service operations. Strong 'build' orientation with in-house AI model optimization. Investing in AIOps and data science talent.",
    conversationStarters: [
      "No public LinkedIn activity — lead with Blue Planet's closed-loop automation vision. Ask how they think about the 'autonomous network' and where human-in-the-loop still matters.",
      "Ciena is one of the few guests with a 'Building' orientation (vs. Mixed) — explore what drove that conviction and where they see limits of building everything in-house.",
      "Network operations is a high-stakes domain for autonomous AI — a great segue into Rasa's enterprise governance and orchestration capabilities."
    ],
    hasLinkedIn: false,
  }
];

/* ── Styling helpers ── */
const readinessColor = (level) => {
  if (level === "High") return { bg: "#1a3a2a", text: "#4ade80", border: "#2d6b47" };
  if (level === "Medium") return { bg: "#3a2f1a", text: "#fbbf24", border: "#6b5a2d" };
  return { bg: "#3a1a1a", text: "#f87171", border: "#6b2d2d" };
};

const stageColor = (stage) => {
  if (stage === "Scaling") return { bg: "#1a2a3a", text: "#60a5fa", border: "#2d4a6b" };
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
      padding: "36px 40px 32px", maxWidth: 720, margin: "0 auto 32px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: "linear-gradient(90deg, #7c5cfc 0%, #5b8def 50%, #4ade80 100%)",
      }} />

      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <ProfilePhoto url={guest.photoUrl} name={guest.name} size={56} />
            <CompanyLogo company={guest.company} size={32} />
          </div>
          <div>
            <div style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 28, fontWeight: 700, color: "#f0f0f5",
              lineHeight: 1.2, marginBottom: 4,
            }}>{guest.name}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13, color: "#8b8fa3", marginBottom: 2,
            }}>{guest.title}</div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14, color: "#7c5cfc", fontWeight: 600,
            }}>
              {guest.company}
              <span style={{ color: "#3a3d50", margin: "0 8px" }}>|</span>
              <span style={{ color: "#5a5d70", fontWeight: 400, fontSize: 12 }}>{guest.industry}</span>
            </div>
          </div>
        </div>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: "#3a3d50", textAlign: "right", paddingTop: 4,
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

export default function VIPDinnerCards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState("single");

  return (
    <div style={{
      background: "#0a0b10", minHeight: "100vh", padding: "24px 16px",
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
          fontSize: 22, fontWeight: 700, color: "#f0f0f5", marginBottom: 4,
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
          <GuestCard guest={guests[currentIndex]} index={currentIndex} total={guests.length} />

          <div style={{
            maxWidth: 720, margin: "0 auto",
            display: "flex", justifyContent: "space-between", alignItems: "center",
          }}>
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
                padding: "8px 18px", borderRadius: 8, border: "1px solid #1e2030",
                background: currentIndex === 0 ? "transparent" : "#13141f",
                color: currentIndex === 0 ? "#2a2d40" : "#8b8fa3",
                cursor: currentIndex === 0 ? "default" : "pointer",
              }}>← Previous</button>

            <div style={{ display: "flex", gap: 6 }}>
              {guests.map((g, i) => (
                <button key={i} onClick={() => setCurrentIndex(i)} title={g.name} style={{
                  width: i === currentIndex ? 24 : 8, height: 8, borderRadius: 4,
                  border: "none", background: i === currentIndex ? "#7c5cfc" : "#1e2030",
                  cursor: "pointer", transition: "all 0.2s ease", padding: 0,
                }} />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex(Math.min(guests.length - 1, currentIndex + 1))}
              disabled={currentIndex === guests.length - 1}
              style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 12,
                padding: "8px 18px", borderRadius: 8, border: "1px solid #1e2030",
                background: currentIndex === guests.length - 1 ? "transparent" : "#13141f",
                color: currentIndex === guests.length - 1 ? "#2a2d40" : "#8b8fa3",
                cursor: currentIndex === guests.length - 1 ? "default" : "pointer",
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
