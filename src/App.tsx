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
} from "lucide-react";
import { resumeData } from "./resumeData";
import { useEffect, useRef } from "react";

function App() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#37352f] font-['Inter',_'Segoe_UI',system-ui,sans-serif]">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#faf8f5]/95 to-[#f5f3ef]/90 backdrop-blur-md border-b border-[#e8e4db] shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#798b72] to-[#5a6b54] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-bold text-[16px] text-[#3d4a3f]">Eugene Belong</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-[13px] text-[#6b7a6e]">
            <a href="#summary" className="hover:text-[#798b72] transition-all hover:translate-y-[-1px] font-medium">About</a>
            <a href="#skills" className="hover:text-[#798b72] transition-all hover:translate-y-[-1px] font-medium">Skills</a>
            <a href="#experience" className="hover:text-[#798b72] transition-all hover:translate-y-[-1px] font-medium">Experience</a>
            <a href="#education" className="hover:text-[#798b72] transition-all hover:translate-y-[-1px] font-medium">Education</a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={resumeData.profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[13px] text-[#798b72] hover:text-[#5a6b54] transition-all hover:translate-y-[-1px] font-medium"
            >
              <Linkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
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
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-10 fade-in-up">
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
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
        
        {/* Profile Info */}
        <div className="pl-0 sm:pl-44">
          <h1 className="text-[36px] font-extrabold leading-tight tracking-tight gradient-text">
            {resumeData.profile.name}
          </h1>
          <p className="text-[18px] text-[#6b7a6e] mt-2 font-medium">
            {resumeData.profile.title}
          </p>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-[14px] text-[#6b7a6e]">
              <a
                href={`tel:${resumeData.profile.phone}`}
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-x-0.5"
              >
                <Phone size={15} className="text-[#798b72]" />
                <span>{resumeData.profile.phone}</span>
              </a>
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-x-0.5"
              >
                <Mail size={15} className="text-[#798b72]" />
                <span>{resumeData.profile.email}</span>
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} className="text-[#798b72]" />
                <span>{resumeData.profile.location}</span>
              </span>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-x-0.5"
              >
                <Linkedin size={15} className="text-[#798b72]" />
                <span>{resumeData.profile.linkedinDisplay}</span>
              </a>
            </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#e8e4db] to-transparent" />

        {/* Professional Summary */}
        <section id="summary" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#e8f0e6] to-[#d4e0d2] shadow-sm">
              <User size={17} className="text-[#798b72]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3d4a3f] section-accent">Professional Summary</h2>
          </div>
          <div className="pl-12">
            <p className="text-[15px] leading-[1.8] text-[#3d4a3f]/85 bg-gradient-to-r from-[#f0ede6] to-transparent p-4 rounded-lg border-l-2 border-[#798b72]/30">
              {resumeData.summary}
            </p>
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#e8e4db] to-transparent" />

        {/* Core Skills */}
        <section id="skills" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#f5e6d8] to-[#e8d5c4] shadow-sm">
              <Target size={17} className="text-[#a67c52]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3d4a3f] section-accent">Core Skills</h2>
          </div>
          <div className="pl-12 flex flex-wrap gap-2.5">
            {resumeData.coreSkills.map((skill, index) => (
              <span
                key={index}
                className={`skill-tag inline-flex items-center px-3.5 py-2 rounded-lg text-[13px] font-medium text-[#3d4a3f]/80 cursor-default shadow-sm fade-in-up stagger-${(index % 4) + 1}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#e8e4db] to-transparent" />

        {/* Professional Experience */}
        <section id="experience" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#e8f0e6] to-[#d4e0d2] shadow-sm">
              <Briefcase size={17} className="text-[#798b72]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3d4a3f] section-accent">Professional Experience</h2>
          </div>

          <div className="pl-12 space-y-4">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className={`exp-card rounded-xl p-5 -ml-4 fade-in-left stagger-${(index % 4) + 1}`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] font-bold text-[#3d4a3f] mb-1.5">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-[14px]">
                      <Building2 size={14} className="flex-shrink-0 text-[#798b72]" />
                      <span className="font-semibold text-[#798b72]">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-[13px] text-[#6b7a6e] bg-[#f0ede6] px-3 py-1.5 rounded-full">
                      <Calendar size={12} />
                      <span className="font-medium">{exp.date}</span>
                    </div>
                  </div>
                </div>

                <div className="ml-0">
                  <p className="text-[13px] text-[#6b7a6e] mb-4 flex items-center gap-1.5">
                    <MapPin size={12} className="text-[#6b7a6e]" />
                    {exp.location}
                  </p>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, bIndex) => (
                      <li
                        key={bIndex}
                        className="text-[14px] text-[#3d4a3f]/85 leading-[1.75] flex items-start gap-3"
                      >
                        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#798b72] to-[#5a6b54] mt-2 flex-shrink-0 shadow-sm" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.skills.map((skill, sIndex) => (
                      <span
                        key={sIndex}
                        className="skill-tag inline-flex items-center px-3 py-1.5 rounded-lg text-[12px] font-medium text-[#3d4a3f]/70 shadow-sm"
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

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#e8e4db] to-transparent" />

        {/* Education */}
        <section id="education" className="py-12 fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#e8e0d4] to-[#d4c8b8] shadow-sm">
              <GraduationCap size={17} className="text-[#8b6f47]" />
            </div>
            <h2 className="text-[22px] font-bold text-[#3d4a3f] section-accent">Education</h2>
          </div>

          <div className="pl-12 grid gap-4 sm:grid-cols-2">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className={`exp-card rounded-xl p-5 card-hover scale-in stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#e8e0d4] to-[#d4c8b8] flex items-center justify-center flex-shrink-0 shadow-sm">
                    <GraduationCap size={19} className="text-[#8b6f47]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[15px] font-bold text-[#3d4a3f]">{edu.degree}</h3>
                    <p className="text-[14px] text-[#6b7a6e] mt-1 font-medium">{edu.school}</p>
                    <p className="text-[13px] text-[#6b7a6e] mt-2 flex items-center gap-1.5 bg-[#f0ede6] px-2.5 py-1 rounded-full inline-flex">
                      <Calendar size={12} />
                      <span className="font-medium">{edu.year}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-0 h-px bg-gradient-to-r from-transparent via-[#e8e4db] to-transparent" />

        {/* Quick Stats */}
        <section className="py-12 fade-in-up">
          <div className="pl-0 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className={`stat-card text-center p-6 rounded-xl border border-[#e8e4db] shadow-sm scale-in stagger-1`}>
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#e8f0e6] to-[#d4e0d2] flex items-center justify-center mb-4 shadow-sm">
                <Briefcase size={20} className="text-[#798b72]" />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">12+</div>
              <div className="text-[12px] text-[#6b7a6e] mt-2 font-medium">Years Experience</div>
            </div>
            <div className={`stat-card text-center p-6 rounded-xl border border-[#e8e4db] shadow-sm scale-in stagger-2`}>
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#f5e6d8] to-[#e8d5c4] flex items-center justify-center mb-4 shadow-sm">
                <Building2 size={20} className="text-[#a67c52]" />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">18</div>
              <div className="text-[12px] text-[#6b7a6e] mt-2 font-medium">Companies</div>
            </div>
            <div className={`stat-card text-center p-6 rounded-xl border border-[#e8e4db] shadow-sm scale-in stagger-3`}>
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#e8e0d4] to-[#d4c8b8] flex items-center justify-center mb-4 shadow-sm">
                <Layers size={20} className="text-[#8b6f47]" />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">15</div>
              <div className="text-[12px] text-[#6b7a6e] mt-2 font-medium">Core Skills</div>
            </div>
            <div className={`stat-card text-center p-6 rounded-xl border border-[#e8e4db] shadow-sm scale-in stagger-4`}>
              <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#d8e4d4] to-[#c4d4c0] flex items-center justify-center mb-4 shadow-sm">
                <Award size={20} className="text-[#5a6b54]" />
              </div>
              <div className="text-[28px] font-extrabold gradient-text">2</div>
              <div className="text-[12px] text-[#6b7a6e] mt-2 font-medium">Degrees</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-10 pb-8 mt-12 border-t border-[#e8e4db] bg-gradient-to-b from-transparent to-[#f0ede6]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#6b7a6e]">
            <p className="font-medium">&copy; {new Date().getFullYear()} Eugene Belong. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-y-[-2px]"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-y-[-2px]"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <a
                href={`tel:${resumeData.profile.phone}`}
                className="flex items-center gap-2 hover:text-[#798b72] transition-all hover:translate-y-[-2px]"
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
