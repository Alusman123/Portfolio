import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Projects", "Experience", "Contact"];

const SKILLS = [
  { name: "React Native", category: "Mobile" },
  { name: "React", category: "Frontend" },
  { name: "HTML / CSS / JS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "Firebase", category: "Backend" },
  { name: "Git", category: "DevOps" },
  { name: "Vercel", category: "DevOps" },
  { name: "Render", category: "DevOps" },
  { name: "Quality Assurance", category: "QA" },
  { name: "AI Prompting", category: "AI" },
];

const CATEGORY_COLORS: Record<string, string> = {
  Mobile: "#00e5ff",
  Frontend: "#7c3aed",
  Backend: "#10b981",
  DevOps: "#f59e0b",
  QA: "#f43f5e",
  AI: "#a855f7",
};

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [copied, setCopied] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("Alimansu76@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.getAttribute("data-section");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("[data-section]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Syne', sans-serif", background: "#050810", color: "#e8eaf0", minHeight: "100vh", overflowX: "hidden" }}>
      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050810; }
        ::-webkit-scrollbar-thumb { background: #00e5ff44; border-radius: 2px; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gridPulse { 0%,100%{opacity:.03} 50%{opacity:.07} }
        @keyframes float { 0%,100%{transform:translateY(0px) rotate(0deg)} 50%{transform:translateY(-18px) rotate(3deg)} }
        @keyframes glitch {
          0%,95%,100%{text-shadow:none}
          96%{text-shadow:-2px 0 #f43f5e, 2px 0 #00e5ff}
          97%{text-shadow:2px 0 #f43f5e, -2px 0 #00e5ff}
          98%{text-shadow:-2px 0 #f43f5e}
        }
        @keyframes borderSpin { to { background-position: 200% center; } }
        @keyframes tagSlide { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
        .nav-link { position:relative; cursor:pointer; font-size:13px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:#8892a4; transition:color .3s; padding:4px 0; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#00e5ff; transition:width .3s; }
        .nav-link:hover,.nav-link.active { color:#e8eaf0; }
        .nav-link:hover::after,.nav-link.active::after { width:100%; }
        .skill-tag { display:inline-flex; align-items:center; gap:6px; padding:7px 14px; border-radius:4px; font-size:13px; font-weight:600; font-family:'Space Mono',monospace; transition:transform .2s, box-shadow .2s; animation: tagSlide .4s ease both; }
        .skill-tag:hover { transform:translateY(-2px); box-shadow:0 8px 24px #0008; }
        .card { background:#0c1220; border:1px solid #1a2438; border-radius:12px; padding:28px; transition:border-color .3s, transform .3s, box-shadow .3s; }
        .card:hover { border-color:#00e5ff33; transform:translateY(-4px); box-shadow:0 16px 48px #00e5ff0a; }
        .section-label { font-family:'Space Mono',monospace; font-size:11px; letter-spacing:.25em; text-transform:uppercase; color:#00e5ff; margin-bottom:12px; }
        .section-title { font-size:clamp(28px,5vw,48px); font-weight:800; line-height:1.1; }
        .dot { display:inline-block; width:6px; height:6px; background:#00e5ff; border-radius:50%; margin-right:8px; vertical-align:middle; }
        .timeline-line { position:absolute; left:11px; top:24px; bottom:0; width:1px; background:linear-gradient(to bottom,#00e5ff44,transparent); }
        .btn-primary { display:inline-flex; align-items:center; gap:8px; padding:12px 28px; background:transparent; border:1px solid #00e5ff; color:#00e5ff; border-radius:6px; font-family:'Space Mono',monospace; font-size:13px; font-weight:700; letter-spacing:.08em; cursor:pointer; transition:all .3s; text-decoration:none; }
        .btn-primary:hover { background:#00e5ff18; box-shadow:0 0 24px #00e5ff33; transform:translateY(-2px); }
        .btn-ghost { display:inline-flex; align-items:center; gap:8px; padding:12px 28px; background:transparent; border:1px solid #1a2438; color:#8892a4; border-radius:6px; font-family:'Space Mono',monospace; font-size:13px; font-weight:700; letter-spacing:.08em; cursor:pointer; transition:all .3s; text-decoration:none; }
        .btn-ghost:hover { border-color:#8892a4; color:#e8eaf0; }
        input,textarea { background:#0c1220; border:1px solid #1a2438; color:#e8eaf0; padding:12px 16px; border-radius:6px; font-family:'Syne',sans-serif; font-size:15px; width:100%; outline:none; transition:border-color .3s; }
        input:focus,textarea:focus { border-color:#00e5ff55; }
        input::placeholder,textarea::placeholder { color:#3a4558; }
      `}</style>

      {/* Noise overlay */}
      <div style={{ position:"fixed", inset:0, opacity:.025, backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundSize:"200px", pointerEvents:"none", zIndex:100 }} />

      {/* Grid BG */}
      <div style={{ position:"fixed", inset:0, backgroundImage:"linear-gradient(#1a2438 1px,transparent 1px),linear-gradient(90deg,#1a2438 1px,transparent 1px)", backgroundSize:"60px 60px", opacity:.04, animation:"gridPulse 6s ease-in-out infinite", pointerEvents:"none" }} />

      {/* Glow orbs */}
      <div style={{ position:"fixed", top:"-20%", right:"-10%", width:"600px", height:"600px", background:"radial-gradient(circle,#00e5ff08 0%,transparent 70%)", pointerEvents:"none" }} />
      <div style={{ position:"fixed", bottom:"-20%", left:"-10%", width:"500px", height:"500px", background:"radial-gradient(circle,#7c3aed08 0%,transparent 70%)", pointerEvents:"none" }} />

      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:50, borderBottom: scrollY > 40 ? "1px solid #1a2438" : "1px solid transparent", background: scrollY > 40 ? "#050810ee" : "transparent", backdropFilter: scrollY > 40 ? "blur(12px)" : "none", transition:"all .4s", padding:"0 clamp(20px,5vw,60px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", height:64 }}>
          <span style={{ fontFamily:"'Space Mono',monospace", fontWeight:700, fontSize:16, color:"#00e5ff", letterSpacing:".06em" }}>AU<span style={{ color:"#e8eaf0" }}>.dev</span></span>
          <div style={{ display:"flex", gap:32 }} className="desktop-nav">
            {NAV_LINKS.map((l) => (
              <span key={l} className={`nav-link${active === l ? " active" : ""}`} onClick={() => scrollTo(l)}>{l}</span>
            ))}
          </div>
          <button onClick={copyEmail} className="btn-primary" style={{ padding:"8px 18px", fontSize:12, border:"1px solid #00e5ff" }}>{copied ? "Copied! ✓" : "Hire Me"}</button>
        </div>
      </nav>

      {/* HERO */}
      <section id="about" data-section="About" ref={heroRef} style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"100px clamp(20px,5vw,60px) 60px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"1fr auto", gap:60, alignItems:"center" }}>
          <div style={{ animation:"fadeUp .8s ease both" }}>
            <div style={{ fontFamily:"'Space Mono',monospace", fontSize:12, letterSpacing:".3em", color:"#00e5ff", textTransform:"uppercase", marginBottom:20, display:"flex", alignItems:"center", gap:8 }}>
              <span style={{ width:32, height:1, background:"#00e5ff", display:"inline-block" }} />
          Full-Stack Developer
            </div>
            <h1 style={{ fontSize:"clamp(48px,8vw,88px)", fontWeight:800, lineHeight:.95, marginBottom:24, animation:"glitch 8s ease infinite" }}>
              Al<br />
              <span style={{ color:"#00e5ff" }}>Usman</span><br />
      
            </h1>
            <p style={{ fontSize:16, lineHeight:1.8, color:"#8892a4", maxWidth:520, marginBottom:32, animation:"fadeUp .8s .2s ease both", opacity:0, animationFillMode:"forwards" }}>
              Full-Stack Developer & QA Engineer. I build performant web and mobile applications — from React Native UIs to Node.js APIs — and ship them with confidence using modern deployment pipelines.
            </p>
            <div style={{ display:"flex", gap:12, flexWrap:"wrap", animation:"fadeUp .8s .4s ease both", opacity:0, animationFillMode:"forwards" }}>
              <a href="https://portfolio-alusman.vercel.app/" target="_blank" rel="noreferrer" className="btn-primary">GitHub ↗</a>
            
            </div>
            <div style={{ marginTop:40, display:"flex", gap:32, animation:"fadeUp .8s .5s ease both", opacity:0, animationFillMode:"forwards" }}>
              {[["300+","Hours Interned"],["2","Major Projects"],["1","Startup Role"]].map(([n,l]) => (
                <div key={l}>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:28, fontWeight:700, color:"#00e5ff" }}>{n}</div>
                  <div style={{ fontSize:12, color:"#3a4558", letterSpacing:".08em", marginTop:2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Avatar / Decoration */}
       
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" data-section="Skills" style={{ padding:"100px clamp(20px,5vw,60px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="section-label">Tech Stack</div>
          <h2 className="section-title" style={{ marginBottom:48 }}>Skills &<br /><span style={{ color:"#00e5ff" }}>Tools</span></h2>
          <div style={{ display:"flex", flexWrap:"wrap", gap:10 }}>
            {SKILLS.map((s, i) => (
              <span key={s.name} className="skill-tag" style={{ animationDelay:`${i * 60}ms`, background:`${CATEGORY_COLORS[s.category]}12`, border:`1px solid ${CATEGORY_COLORS[s.category]}44`, color: CATEGORY_COLORS[s.category] }}>
                <span style={{ width:6, height:6, borderRadius:"50%", background: CATEGORY_COLORS[s.category], flexShrink:0 }} />
                {s.name}
              </span>
            ))}
          </div>
          <div style={{ marginTop:32, display:"flex", gap:16, flexWrap:"wrap" }}>
            {Object.entries(CATEGORY_COLORS).map(([cat, col]) => (
              <span key={cat} style={{ display:"flex", alignItems:"center", gap:6, fontSize:12, color:"#3a4558", fontFamily:"'Space Mono',monospace" }}>
                <span style={{ width:8, height:8, borderRadius:"50%", background:col }} />{cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" data-section="Projects" style={{ padding:"100px clamp(20px,5vw,60px)", background:"#070b14" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="section-label">Work</div>
          <h2 className="section-title" style={{ marginBottom:48 }}>Major<br /><span style={{ color:"#00e5ff" }}>Projects</span></h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(320px,1fr))", gap:24 }}>
            {/* PAWS */}
            <div className="card">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:".2em", color:"#10b981", background:"#10b98112", border:"1px solid #10b98133", padding:"4px 10px", borderRadius:4 }}>THESIS</span>
                <span style={{ fontSize:24 }}>🌱</span>
              </div>
              <h3 style={{ fontSize:20, fontWeight:700, marginBottom:10, lineHeight:1.3 }}>PAWS — Plant Auto Watering System</h3>
              <p style={{ fontSize:14, color:"#8892a4", lineHeight:1.7, marginBottom:20 }}>
                Automated plant watering solution using soil moisture sensing. Real-time Firebase database + ESP8266 wireless communication. React Native mobile app with live monitoring and push notifications.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {["React Native","Firebase","ESP8266","HTML/CSS/JS"].map((t) => (
                  <span key={t} style={{ fontSize:11, padding:"3px 8px", background:"#1a2438", color:"#8892a4", borderRadius:3, fontFamily:"'Space Mono',monospace" }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop:16, paddingTop:16, borderTop:"1px solid #1a2438", display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ width:6, height:6, background:"#10b981", borderRadius:"50%", animation:"gridPulse 2s infinite" }} />
                <span style={{ fontSize:12, color:"#3a4558", fontFamily:"'Space Mono',monospace" }}>Team Leader · Head Programmer</span>
              </div>
            </div>

            {/* Grid Property */}
            <div className="card">
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
                <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:".2em", color:"#00e5ff", background:"#00e5ff12", border:"1px solid #00e5ff33", padding:"4px 10px", borderRadius:4 }}>INTERNSHIP</span>
                <span style={{ fontSize:24 }}>🏢</span>
              </div>
              <h3 style={{ fontSize:20, fontWeight:700, marginBottom:10, lineHeight:1.3 }}>Grid Property Ventures<br />Mobile App</h3>
              <p style={{ fontSize:14, color:"#8892a4", lineHeight:1.7, marginBottom:20 }}>
                Real estate startup mobile application. Contributed to property listing, management, and user interaction features. Handled testing, performance optimization, and QA within a fast-paced team environment.
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {["React Native","Mobile Dev","QA","Team Collab"].map((t) => (
                  <span key={t} style={{ fontSize:11, padding:"3px 8px", background:"#1a2438", color:"#8892a4", borderRadius:3, fontFamily:"'Space Mono',monospace" }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop:16, paddingTop:16, borderTop:"1px solid #1a2438", display:"flex", gap:8, alignItems:"center" }}>
                <span style={{ width:6, height:6, background:"#00e5ff", borderRadius:"50%", animation:"gridPulse 2s infinite" }} />
                <span style={{ fontSize:12, color:"#3a4558", fontFamily:"'Space Mono',monospace" }}>300 hrs · Frontend · Mobile · QA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" data-section="Experience" style={{ padding:"100px clamp(20px,5vw,60px)" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="section-label">Journey</div>
          <h2 className="section-title" style={{ marginBottom:56 }}>Experience &<br /><span style={{ color:"#00e5ff" }}>Education</span></h2>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60 }}>
            {/* Experience */}
            <div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:".2em", color:"#7c3aed", marginBottom:28 }}>— EXPERIENCE</div>
              <div style={{ position:"relative", paddingLeft:32 }}>
                <div className="timeline-line" />
                {[
                  {
                    role:"Part-Time Full-Stack Developer",
                    company:"Startup Company",
                    period:"2026 – Present",
                    color:"#00e5ff",
                    desc:"Building full-stack features using Node.js, Express, and MongoDB on the backend; React on the frontend. Deploying to Render and Vercel.",
                    tags:["Node.js","Express","MongoDB","React","Render","Vercel"]
                  },
                  {
                    role:"Frontend · Mobile Dev · QA Intern",
                    company:"Grid Property Ventures Inc.",
                    period:"2026 · 300 hrs",
                    color:"#10b981",
                    desc:"Developed, tested, and optimized mobile application features for a real estate platform. Collaborated with design and backend teams.",
                    tags:["React Native","QA","Mobile","Real Estate"]
                  },
                ].map((exp, i) => (
                  <div key={i} style={{ position:"relative", marginBottom:36 }}>
                    <div style={{ position:"absolute", left:-26, top:4, width:10, height:10, borderRadius:"50%", background:exp.color, boxShadow:`0 0 12px ${exp.color}` }} />
                    <div className="card" style={{ padding:20 }}>
                      <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:exp.color, marginBottom:6 }}>{exp.period}</div>
                      <div style={{ fontWeight:700, fontSize:16, marginBottom:2 }}>{exp.role}</div>
                      <div style={{ fontSize:13, color:"#3a4558", marginBottom:12 }}>{exp.company}</div>
                      <p style={{ fontSize:13, color:"#8892a4", lineHeight:1.7, marginBottom:12 }}>{exp.desc}</p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                        {exp.tags.map((t) => <span key={t} style={{ fontSize:11, padding:"2px 7px", background:"#1a2438", color:"#8892a4", borderRadius:3, fontFamily:"'Space Mono',monospace" }}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, letterSpacing:".2em", color:"#f59e0b", marginBottom:28 }}>— EDUCATION</div>
              <div style={{ position:"relative", paddingLeft:32 }}>
                <div className="timeline-line" style={{ background:"linear-gradient(to bottom,#f59e0b44,transparent)" }} />
                {[
                  {
                    degree:"B.S. Computer Science",
                    school:"STI College Pasay–EDSA",
                    period:"2022 – 2026",
                    color:"#f59e0b",
                    desc:"Bachelor of Science in Computer Science. Focused on software development, algorithms, and real-world project building."
                  },
                  {
                    degree:"Senior High School — TVL · ICT",
                    school:"Cotabato City National High School",
                    period:"2020 – 2022",
                    color:"#a855f7",
                    desc:"Technical-Vocational Learners track with ICT specialization. Built early foundations in programming and computer systems."
                  },
                ].map((edu, i) => (
                  <div key={i} style={{ position:"relative", marginBottom:36 }}>
                    <div style={{ position:"absolute", left:-26, top:4, width:10, height:10, borderRadius:"50%", background:edu.color, boxShadow:`0 0 12px ${edu.color}` }} />
                    <div className="card" style={{ padding:20 }}>
                      <div style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:edu.color, marginBottom:6 }}>{edu.period}</div>
                      <div style={{ fontWeight:700, fontSize:16, marginBottom:2 }}>{edu.degree}</div>
                      <div style={{ fontSize:13, color:"#3a4558", marginBottom:12 }}>{edu.school}</div>
                      <p style={{ fontSize:13, color:"#8892a4", lineHeight:1.7 }}>{edu.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" data-section="Contact" style={{ padding:"100px clamp(20px,5vw,60px)", background:"#070b14" }}>
        <div style={{ maxWidth:700, margin:"0 auto", textAlign:"center" }}>
          <div className="section-label" style={{ textAlign:"center" }}>Get In Touch</div>
          <h2 className="section-title" style={{ marginBottom:16 }}>Let's <span style={{ color:"#00e5ff" }}>Work</span><br />Together</h2>
          <p style={{ fontSize:15, color:"#8892a4", lineHeight:1.8, marginBottom:48 }}>
            Open for full-time roles, freelance projects, or just a good chat about tech. Send me a message!
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:24, flexWrap:"wrap", marginBottom:48 }}>
            <a href="mailto:Alimansu76@gmail.com" className="btn-primary" style={{ fontSize:15, padding:"16px 32px" }}>✉ Alimansu76@gmail.com</a>
            <a href="tel:+639091931036" className="btn-ghost" style={{ fontSize:15, padding:"16px 32px" }}>📞 +63 909 193 1036</a>
          </div>
          <div style={{ display:"flex", justifyContent:"center", gap:32, flexWrap:"wrap" }}>
            {[
              { label:"Portfolio", val:"portfolio-alusman.vercel.app", href:"https://portfolio-alusman.vercel.app/" },
              { label:"GitHub", val:"Alusman123", href:"https://github.com/Alusman123" },
            ].map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration:"none", textAlign:"center" }}>
                <div style={{ fontSize:11, color:"#3a4558", fontFamily:"'Space Mono',monospace", letterSpacing:".15em", marginBottom:4 }}>{c.label}</div>
                <div style={{ fontSize:13, color:"#00e5ff" }}>{c.val}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop:"1px solid #1a2438", padding:"24px clamp(20px,5vw,60px)", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:12 }}>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:13, color:"#3a4558" }}>© 2026 Al K. Usman Jr.</span>
        <span style={{ fontFamily:"'Space Mono',monospace", fontSize:11, color:"#1a2438" }}>Built with React · Deployed on Vercel</span>
      </footer>
    </div>
  );
}