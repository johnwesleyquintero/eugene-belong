import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  Building2,
  Calendar,
  User,
  Target,
  Layers,
  Printer,
  Sun,
  Moon,
} from "lucide-react";
import { resumeData } from "./resumeData";
import { NeuralBackground } from "./NeuralBackground";
import { useEffect, useRef, useState } from "react";

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in-up, .fade-in-left, .scale-in"
    );
    animatedElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className="min-h-screen relative">
      {/* Neural Background */}
      <NeuralBackground />
      
      {/* Top Navigation Bar */}
      <nav
        className="sticky top-0 z-50 backdrop-blur-md border-b shadow-sm"
        style={{
          background: `linear-gradient(to right, var(--bg-nav), var(--bg-nav))`,
          borderColor: "var(--border-primary)",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, var(--gradient-text-from), var(--gradient-text-to))",
              }}
            >
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span
              className="font-bold text-[16px]"
              style={{ color: "var(--text-primary)" }}
            >
              Eugene Belong
            </span>
          </div>
          <div
            className="hidden sm:flex items-center gap-6 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            <a href="#summary" className="hover:text-[var(--text-accent)] transition-all hover:translate-y-[-1px] font-medium">About</a>
            <a href="#skills" className="hover:text-[var(--text-accent)] transition-all hover:translate-y-[-1px] font-medium">Skills</a>
            <a href="#experience" className="hover:text-[var(--text-accent)] transition-all hover:translate-y-[-1px] font-medium">Experience</a>
            <a href="#education" className="hover:text-[var(--text-accent)] transition-all hover:translate-y-[-1px] font-medium">Education</a>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="theme-toggle flex items-center justify-center w-9 h-9 rounded-lg no-print"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={16} style={{ color: "var(--text-accent)" }} />
              ) : (
                <Moon size={16} style={{ color: "var(--text-accent)" }} />
              )}
            </button>
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-medium transition-all hover:translate-y-[-1px]"
              style={{ color: "var(--text-accent)" }}
            >
              <Linkedin size={14} />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => window.print()}
              className="print-btn flex items-center gap-2 px-4 py-2 text-[13px] font-semibold text-white rounded-lg shadow-md no-print"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-10 fade-in-up relative z-10">
        {/* Cover Photo Banner */}
        <div className="relative mb-16">
          <div className="cover-overlay h-48 sm:h-56 rounded-2xl overflow-hidden shadow-md">
            <img
              src={resumeData.profile.coverImage}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Profile Photo - Overlapping Cover */}
          <div className="absolute -bottom-14 left-8 sm:left-12">
            <div className="profile-ring">
              <img
                src={resumeData.profile.image}
                alt={resumeData.profile.name}
                className="w-32 h-32 rounded-full object-cover border-4 shadow-xl"
                style={{ borderColor: "var(--bg-surface)" }}
              />
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="pl-0 sm:pl-44">
          <h1 className="text-[36px] font-extrabold leading-tight tracking-tight gradient-text">
            {resumeData.profile.name}
          </h1>
          <p
            className="text-[18px] mt-2 font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {resumeData.profile.title}
          </p>
          <div
            className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[14px]"
            style={{ color: "var(--text-secondary)" }}
          >
            <a
              href={`tel:${resumeData.profile.phone}`}
              className="flex items-center gap-2 transition-all hover:translate-x-0.5"
              style={{ color: "var(--text-accent)" }}
            >
              <Phone size={15} />
              <span>{resumeData.profile.phone}</span>
            </a>
            <a
              href={`mailto:${resumeData.profile.email}`}
              className="flex items-center gap-2 transition-all hover:translate-x-0.5"
              style={{ color: "var(--text-accent)" }}
            >
              <Mail size={15} />
              <span>{resumeData.profile.email}</span>
            </a>
            <span className="flex items-center gap-2" style={{ color: "var(--text-accent)" }}>
              <MapPin size={15} />
              <span>{resumeData.profile.location}</span>
            </span>
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all hover:translate-x-0.5"
              style={{ color: "var(--text-accent)" }}
            >
              <Linkedin size={15} />
              <span>{resumeData.profile.linkedinDisplay}</span>
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-20 relative z-10">
        <hr
          className="border-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, var(--divider), transparent)",
          }}
        />

        {/* Professional Summary */}
        <section id="summary" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, var(--bg-icon-blue), var(--bg-icon-green))",
              }}
            >
              <User size={17} style={{ color: "var(--text-accent)" }} />
            </div>
            <h2
              className="text-[22px] font-bold section-accent"
              style={{ color: "var(--text-primary)" }}
            >
              Professional Summary
            </h2>
          </div>
          <div className="pl-12">
            <p
              className="text-[15px] leading-[1.8] p-4 rounded-lg border-l-2"
              style={{
                color: "var(--text-primary)",
                opacity: 0.85,
                background: "linear-gradient(to right, var(--bg-summary), transparent)",
                borderColor: "var(--border-summary)",
              }}
            >
              {resumeData.summary}
            </p>
          </div>
        </section>

        <hr
          className="border-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, var(--divider), transparent)",
          }}
        />

        {/* Core Skills */}
        <section id="skills" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, var(--bg-icon-warm), var(--bg-icon-earth))",
              }}
            >
              <Target size={17} style={{ color: "var(--text-accent)" }} />
            </div>
            <h2
              className="text-[22px] font-bold section-accent"
              style={{ color: "var(--text-primary)" }}
            >
              Core Skills
            </h2>
          </div>
          <div className="pl-12 flex flex-wrap gap-2.5">
            {resumeData.coreSkills.map((skill, index) => (
              <span
                key={index}
                className={`skill-tag inline-flex items-center px-3.5 py-2 rounded-lg text-[13px] font-medium cursor-default shadow-sm fade-in-up stagger-${(index % 4) + 1}`}
                style={{ color: "var(--text-primary)", opacity: 0.8 }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr
          className="border-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, var(--divider), transparent)",
          }}
        />

        {/* Professional Experience */}
        <section id="experience" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, var(--bg-icon-blue), var(--bg-icon-green))",
              }}
            >
              <Briefcase size={17} style={{ color: "var(--text-accent)" }} />
            </div>
            <h2
              className="text-[22px] font-bold section-accent"
              style={{ color: "var(--text-primary)" }}
            >
              Professional Experience
            </h2>
          </div>

          <div className="pl-12 space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className={`exp-card rounded-xl p-5 -ml-4 fade-in-left stagger-${(index % 4) + 1}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[16px] font-bold mb-1.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[14px]">
                      <Building2 size={14} className="flex-shrink-0" style={{ color: "var(--text-company)" }} />
                      <span className="font-semibold" style={{ color: "var(--text-company)" }}>
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div
                      className="flex items-center gap-1.5 text-[13px] px-3 py-1.5 rounded-full"
                      style={{
                        color: "var(--text-secondary)",
                        background: "var(--bg-badge)",
                      }}
                    >
                      <Calendar size={12} />
                      <span className="font-medium">{exp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="ml-0">
                  <p
                    className="text-[13px] mb-4 flex items-center gap-1.5"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <MapPin size={12} style={{ color: "var(--text-secondary)" }} />
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="text-[14px] leading-[1.75] flex items-start gap-3"
                        style={{ color: "var(--text-primary)", opacity: 0.85 }}
                      >
                        <span
                          className="w-2 h-2 rounded-full mt-2 flex-shrink-0 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, var(--gradient-bullet-from), var(--gradient-bullet-to))",
                          }}
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="skill-tag inline-flex items-center px-3 py-1.5 rounded-lg text-[12px] font-medium shadow-sm"
                        style={{ color: "var(--text-primary)", opacity: 0.7 }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr
          className="border-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, var(--divider), transparent)",
          }}
        />

        {/* Education */}
        <section id="education" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
              style={{
                background: "linear-gradient(135deg, var(--bg-icon-earth), var(--bg-icon-warm))",
              }}
            >
              <GraduationCap size={17} style={{ color: "var(--text-accent)" }} />
            </div>
            <h2
              className="text-[22px] font-bold section-accent"
              style={{ color: "var(--text-primary)" }}
            >
              Education
            </h2>
          </div>

          <div className="pl-12 grid gap-4 sm:grid-cols-2">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className={`exp-card rounded-xl p-5 card-hover scale-in stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, var(--bg-icon-earth), var(--bg-icon-warm))",
                    }}
                  >
                    <GraduationCap size={19} style={{ color: "var(--text-accent)" }} />
                  </div>
                  <div className="flex-1">
                    <h3
                      className="text-[15px] font-bold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {edu.degree}
                    </h3>
                    <p
                      className="text-[14px] mt-1 font-medium"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {edu.school}
                    </p>
                    <p
                      className="text-[13px] mt-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full inline-flex"
                      style={{
                        color: "var(--text-secondary)",
                        background: "var(--bg-badge)",
                      }}
                    >
                      <Calendar size={12} />
                      <span className="font-medium">{edu.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr
          className="border-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, var(--divider), transparent)",
          }}
        />

        {/* Quick Stats */}
        <section className="py-12 fade-in-up">
          <div className="pl-0 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div
              className={`stat-card text-center p-6 rounded-xl border shadow-sm scale-in stagger-1`}
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, var(--bg-icon-blue), var(--bg-icon-green))",
                }}
              >
                <Briefcase size={20} style={{ color: "var(--text-accent)" }} />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">12+</div>
              <div
                className="text-[12px] mt-2 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Years Experience
              </div>
            </div>
            <div
              className={`stat-card text-center p-6 rounded-xl border shadow-sm scale-in stagger-2`}
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, var(--bg-icon-warm), var(--bg-icon-earth))",
                }}
              >
                <Building2 size={20} style={{ color: "var(--text-accent)" }} />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">18</div>
              <div
                className="text-[12px] mt-2 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Companies
              </div>
            </div>
            <div
              className={`stat-card text-center p-6 rounded-xl border shadow-sm scale-in stagger-3`}
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, var(--bg-icon-earth), var(--bg-icon-warm))",
                }}
              >
                <Layers size={20} style={{ color: "var(--text-accent)" }} />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">15</div>
              <div
                className="text-[12px] mt-2 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Core Skills
              </div>
            </div>
            <div
              className={`stat-card text-center p-6 rounded-xl border shadow-sm scale-in stagger-4`}
              style={{ borderColor: "var(--border-primary)" }}
            >
              <div
                className="w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, var(--bg-icon-green), var(--bg-icon-blue))",
                }}
              >
                <Award size={20} style={{ color: "var(--text-accent)" }} />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">2</div>
              <div
                className="text-[12px] mt-2 font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Degrees
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="pt-10 pb-8 mt-12 border-t"
          style={{
            borderColor: "var(--border-primary)",
            background: "linear-gradient(to bottom, transparent, var(--bg-footer))",
          }}
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px]"
            style={{ color: "var(--text-secondary)" }}
          >
            <p className="font-medium">
              &copy; {new Date().getFullYear()} Eugene Belong. All rights reserved.
            </p>
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="flex items-center gap-2 transition-all hover:translate-y-[-2px]"
                style={{ color: "var(--text-accent)" }}
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-all hover:translate-y-[-2px]"
                style={{ color: "var(--text-accent)" }}
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`tel:${resumeData.profile.phone}`}
                className="flex items-center gap-2 transition-all hover:translate-y-[-2px]"
                style={{ color: "var(--text-accent)" }}
              >
                <Phone size={14} />
                <span>Call</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
