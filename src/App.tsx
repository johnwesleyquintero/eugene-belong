import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Briefcase,
  GraduationCap,
  Award,
  ChevronRight,
  Building2,
  Calendar,
  User,
  Target,
  Layers,
} from "lucide-react";
import { resumeData } from "./resumeData";
import { useState } from "react";

function App() {
  const [expandedExp, setExpandedExp] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedExp(expandedExp === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#37352f] font-['Inter',_'Segoe_UI',system-ui,sans-serif]">
      {/* Top Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8e8e4]">
        <div className="max-w-4xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#2383e2] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">E</span>
            </div>
            <span className="font-semibold text-[15px] text-[#37352f]">Eugene Belong</span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-[13px] text-[#787774]">
            <a href="#summary" className="hover:text-[#37352f] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#37352f] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#37352f] transition-colors">Experience</a>
            <a href="#education" className="hover:text-[#37352f] transition-colors">Education</a>
          </div>
          <a
            href={resumeData.profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[13px] text-[#2383e2] hover:underline"
          >
            <Linkedin size={14} />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-4xl mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <div className="flex-shrink-0">
            <img
              src={resumeData.profile.image}
              alt={resumeData.profile.name}
              className="w-28 h-28 rounded-full object-cover border-2 border-[#e8e8e4] shadow-sm"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-[32px] font-bold text-[#37352f] leading-tight tracking-tight">
              {resumeData.profile.name}
            </h1>
            <p className="text-[17px] text-[#787774] mt-1 font-medium">
              {resumeData.profile.title}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-[#787774]">
              <a
                href={`tel:${resumeData.profile.phone}`}
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Phone size={14} />
                {resumeData.profile.phone}
              </a>
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Mail size={14} />
                {resumeData.profile.email}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
                {resumeData.profile.location}
              </span>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Linkedin size={14} />
                {resumeData.profile.linkedinDisplay}
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <hr className="border-[#e8e8e4]" />

        {/* Professional Summary */}
        <section id="summary" className="py-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded flex items-center justify-center bg-[#e8f4fd]">
              <User size={16} className="text-[#2383e2]" />
            </div>
            <h2 className="text-[20px] font-semibold text-[#37352f]">Professional Summary</h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-[#37352f]/85 pl-11">
            {resumeData.summary}
          </p>
        </section>

        <hr className="border-[#e8e8e4]" />

        {/* Core Skills */}
        <section id="skills" className="py-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded flex items-center justify-center bg-[#fce8e8]">
              <Target size={16} className="text-[#e03e3e]" />
            </div>
            <h2 className="text-[20px] font-semibold text-[#37352f]">Core Skills</h2>
          </div>
          <div className="pl-11 flex flex-wrap gap-2">
            {resumeData.coreSkills.map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-3 py-1.5 rounded-md text-[13px] font-medium bg-[#f1f1ef] text-[#37352f]/80 border border-[#e8e8e4] hover:bg-[#e8f4fd] hover:text-[#2383e2] hover:border-[#2383e2]/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <hr className="border-[#e8e8e4]" />

        {/* Professional Experience */}
        <section id="experience" className="py-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded flex items-center justify-center bg-[#e8fde8]">
              <Briefcase size={16} className="text-[#2ea44f]" />
            </div>
            <h2 className="text-[20px] font-semibold text-[#37352f]">Professional Experience</h2>
          </div>

          <div className="pl-11 space-y-1">
            {resumeData.experience.map((exp, index) => (
              <div
                key={index}
                className="group border border-transparent hover:border-[#e8e8e4] rounded-lg p-4 -ml-4 transition-all duration-200 hover:bg-[#fafafa] cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <ChevronRight
                        size={14}
                        className={`text-[#787774] transition-transform duration-200 ${
                          expandedExp === index ? "rotate-90" : ""
                        }`}
                      />
                      <h3 className="text-[15px] font-semibold text-[#37352f] truncate">
                        {exp.role}
                      </h3>
                    </div>
                    <div className="flex items-center gap-1.5 ml-5.5 text-[13.5px] text-[#787774]">
                      <Building2 size={13} className="flex-shrink-0" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="flex items-center gap-1.5 text-[13px] text-[#787774]">
                      <Calendar size={12} />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {expandedExp === index && (
                  <div className="mt-4 ml-5.5 animate-in fade-in">
                    <p className="text-[13px] text-[#787774] mb-3 flex items-center gap-1.5">
                      <MapPin size={12} />
                      {exp.location}
                    </p>
                    <ul className="space-y-2.5">
                      {exp.bullets.map((bullet, bIndex) => (
                        <li
                          key={bIndex}
                          className="text-[14px] text-[#37352f]/80 leading-[1.7] flex items-start gap-2.5"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#787774] mt-2 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIndex) => (
                        <span
                          key={sIndex}
                          className="inline-flex items-center px-2.5 py-1 rounded text-[12px] font-medium bg-[#f1f1ef] text-[#787774]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#e8e8e4]" />

        {/* Education */}
        <section id="education" className="py-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded flex items-center justify-center bg-[#f3e8fd]">
              <GraduationCap size={16} className="text-[#8b5cf6]" />
            </div>
            <h2 className="text-[20px] font-semibold text-[#37352f]">Education</h2>
          </div>

          <div className="pl-11 space-y-4">
            {resumeData.education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg border border-transparent hover:border-[#e8e8e4] hover:bg-[#fafafa] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-[#f1f1ef] flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={18} className="text-[#787774]" />
                </div>
                <div>
                  <h3 className="text-[15px] font-semibold text-[#37352f]">{edu.degree}</h3>
                  <p className="text-[14px] text-[#787774] mt-0.5">{edu.school}</p>
                  <p className="text-[13px] text-[#787774] mt-1 flex items-center gap-1.5">
                    <Calendar size={12} />
                    {edu.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-[#e8e8e4]" />

        {/* Quick Stats */}
        <section className="py-10">
          <div className="pl-0 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center p-5 rounded-xl bg-[#f9f9f8] border border-[#e8e8e4]">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#e8f4fd] flex items-center justify-center mb-3">
                <Briefcase size={18} className="text-[#2383e2]" />
              </div>
              <div className="text-[24px] font-bold text-[#37352f]">10+</div>
              <div className="text-[12px] text-[#787774] mt-1">Years Experience</div>
            </div>
            <div className="text-center p-5 rounded-xl bg-[#f9f9f8] border border-[#e8e8e4]">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#e8fde8] flex items-center justify-center mb-3">
                <Building2 size={18} className="text-[#2ea44f]" />
              </div>
              <div className="text-[24px] font-bold text-[#37352f]">13</div>
              <div className="text-[12px] text-[#787774] mt-1">Companies</div>
            </div>
            <div className="text-center p-5 rounded-xl bg-[#f9f9f8] border border-[#e8e8e4]">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#fce8e8] flex items-center justify-center mb-3">
                <Layers size={18} className="text-[#e03e3e]" />
              </div>
              <div className="text-[24px] font-bold text-[#37352f]">15</div>
              <div className="text-[12px] text-[#787774] mt-1">Core Skills</div>
            </div>
            <div className="text-center p-5 rounded-xl bg-[#f9f9f8] border border-[#e8e8e4]">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#f3e8fd] flex items-center justify-center mb-3">
                <Award size={18} className="text-[#8b5cf6]" />
              </div>
              <div className="text-[24px] font-bold text-[#37352f]">2</div>
              <div className="text-[12px] text-[#787774] mt-1">Degrees</div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-6 border-t border-[#e8e8e4]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[#787774]">
            <p>&copy; {new Date().getFullYear()} Eugene Belong. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href={`mailto:${resumeData.profile.email}`}
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Mail size={13} />
                Email
              </a>
              <a
                href={resumeData.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Linkedin size={13} />
                LinkedIn
              </a>
              <a
                href={`tel:${resumeData.profile.phone}`}
                className="flex items-center gap-1.5 hover:text-[#2383e2] transition-colors"
              >
                <Phone size={13} />
                Call
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
