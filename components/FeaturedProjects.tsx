import Link from "next/link";

export default function FeaturedProjects() {
  const projects = [
    {
      title: "TrajetAlpaca – Alpaca Farm Tracker",
      description:
        "A comprehensive farm management application for tracking alpaca movement and farm operations with custom UI design.",
      tech: ["Java", "JavaFX", "JSON"],
      href: "/projects#trajetalpaca",
    },
    {
      title: "Pac-Man Joystick Game",
      description:
        "A Python-based Pac-Man game with joystick control support, including vertical movement handling.",
      tech: ["Python", "Game Development"],
      href: "/projects#pacman",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href={project.href}
                className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View Project →
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

