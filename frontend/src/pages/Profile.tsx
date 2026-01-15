import { useState } from "react";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<
    "about" | "experience" | "skills"
  >("about");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* ================= PROFILE HEADER ================= */}
      <div className="flex items-center gap-6 bg-white p-6 rounded-xl shadow">
        <div className="w-24 h-24 rounded-full bg-teal-500 flex items-center justify-center text-white text-3xl font-bold">
          T
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold">Tom Developer</h1>
          <p className="text-gray-500">Full Stack Developer</p>

          <div className="flex gap-4 mt-3 text-sm text-gray-600">
            <span>📍 France</span>
            <span>💼 Available for work</span>
          </div>
        </div>
      </div>

      {/* ================= TABS ================= */}
      <div className="flex gap-2">
        <TabButton
          label="About"
          active={activeTab === "about"}
          onClick={() => setActiveTab("about")}
        />
        <TabButton
          label="Experience"
          active={activeTab === "experience"}
          onClick={() => setActiveTab("experience")}
        />
        <TabButton
          label="Skills"
          active={activeTab === "skills"}
          onClick={() => setActiveTab("skills")}
        />
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="bg-white p-6 rounded-xl shadow">
        {activeTab === "about" && (
          <>
            <h2 className="text-xl font-semibold mb-3">About</h2>
            <p className="text-gray-600 leading-relaxed">
              I’m a passionate full-stack developer focused on building clean,
              scalable, and user-friendly web applications. I enjoy working
              with modern technologies like React, FastAPI, and Supabase.
              Currently open to freelance projects and collaborations.
            </p>
          </>
        )}

        {activeTab === "experience" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Experience</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold">
                  Senior Frontend Developer
                </h3>
                <p className="text-sm text-gray-500">
                  TechCorp · 2022 – Present
                </p>
                <p className="text-gray-600 mt-1">
                  Built scalable React applications, improved performance,
                  and collaborated closely with designers and backend teams.
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="font-semibold">
                  Full Stack Developer
                </h3>
                <p className="text-sm text-gray-500">
                  StartupX · 2020 – 2022
                </p>
                <p className="text-gray-600 mt-1">
                  Developed REST APIs with FastAPI, handled PostgreSQL
                  databases, and shipped production features end-to-end.
                </p>
              </div>
            </div>
          </>
        )}

        {activeTab === "skills" && (
          <>
            <h2 className="text-xl font-semibold mb-4">Skills</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "FastAPI",
                "Supabase",
                "PostgreSQL",
                "Docker",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= TAB BUTTON COMPONENT ================= */

function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition
        ${
          active
            ? "bg-teal-500 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );
}
