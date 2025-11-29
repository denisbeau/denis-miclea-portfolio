export default function SkillsOverview() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "Tailwind CSS", "React", "SEO"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "JavaFX", "Android Studio", "JSON"],
    },
    {
      title: "Design",
      skills: ["Graphic Design", "UI/UX", "Branding"],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Skills Overview
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-700 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            href="/skills"
            className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Skills →
          </a>
        </div>
      </div>
    </section>
  );
}

