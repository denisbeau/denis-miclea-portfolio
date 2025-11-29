import Navigation from "@/components/Navigation";

export default function Skills() {
  const skillSections = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", level: "Intermediate", projects: ["TrajetAlpaca", "JavaFX Applications"] },
        { name: "Python", level: "Intermediate", projects: ["Pac-Man Game", "Scripts & Automation"] },
        { name: "JavaScript", level: "Beginner-Intermediate", projects: ["Web Development"] },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "React", level: "Learning" },
        { name: "SEO Basics", level: "Beginner" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" },
        { name: "JavaFX", level: "Intermediate", projects: ["TrajetAlpaca"] },
        { name: "Android Studio", level: "Beginner" },
        { name: "BurpSuite", level: "Beginner", note: "For security labs" },
        { name: "JSON", level: "Intermediate" },
      ],
    },
    {
      title: "Design Skills",
      skills: [
        { name: "Graphic Design", level: "Intermediate" },
        { name: "Branding", level: "Intermediate" },
        { name: "UI/UX Design", level: "Intermediate" },
        { name: "Video Scripting", level: "Beginner-Intermediate" },
      ],
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Creative Problem-Solving", level: "Strong" },
        { name: "Multilingual Communication", level: "Fluent", note: "French, English, Romanian" },
        { name: "Attention to Detail", level: "Strong" },
        { name: "Self-Directed Learning", level: "Strong" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    if (level.includes("Strong") || level.includes("Intermediate")) {
      return "bg-blue-600";
    } else if (level.includes("Learning") || level.includes("Beginner")) {
      return "bg-blue-400";
    }
    return "bg-gray-400";
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            Skills & Technologies
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and
            competencies. I&apos;m continuously learning and expanding my skill set.
          </p>

          <div className="space-y-12">
            {skillSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {section.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="border-l-4 border-blue-600 pl-4 py-2"
                    >
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {skill.name}
                        </h3>
                        <span className="text-sm text-gray-600">{skill.level}</span>
                      </div>
                      {skill.projects && (
                        <p className="text-sm text-gray-600 mb-2">
                          Used in: {skill.projects.join(", ")}
                        </p>
                      )}
                      {skill.note && (
                        <p className="text-sm text-gray-500 italic">{skill.note}</p>
                      )}
                      <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${getLevelColor(skill.level)} transition-all`}
                          style={{
                            width:
                              skill.level.includes("Strong") || skill.level.includes("Intermediate")
                                ? "75%"
                                : skill.level.includes("Learning") || skill.level.includes("Beginner")
                                ? "50%"
                                : "25%",
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Always Learning
            </h2>
            <p className="text-gray-700">
              I&apos;m constantly expanding my skill set and exploring new technologies.
              Currently focusing on React, Next.js, and advanced web development
              practices.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

