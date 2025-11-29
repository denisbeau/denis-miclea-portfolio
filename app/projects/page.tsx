import Navigation from "@/components/Navigation";

export default function Projects() {
  const projects = [
    {
      id: "trajetalpaca",
      title: "TrajetAlpaca – Alpaca Farm Tracker",
      type: "School Project / Java Application",
      description:
        "A comprehensive farm management application for tracking alpaca movement and farm operations. This project demonstrates my ability to work with complex data structures, implement ViewModel architecture, and create intuitive user interfaces.",
      technologies: ["Java", "JavaFX", "ViewModel Architecture", "Data Classes", "JSON"],
      features: [
        "Alpaca movement tracking",
        "Farm management tools",
        "Custom UI design in JavaFX",
        "Data persistence with JSON",
      ],
      challenges:
        "Implemented ViewModel architecture to separate business logic from UI, handled JSON data integration for persistent storage, and designed an intuitive interface for farm management operations.",
    },
    {
      id: "pacman",
      title: "Pac-Man Joystick Game",
      type: "Personal Project / Python Game",
      description:
        "A Python-based Pac-Man game with joystick control support. This project showcases my game development skills, including movement logic, collision detection, and input handling.",
      technologies: ["Python", "Game Development", "Joystick Input Handling"],
      features: [
        "Joystick movement (including vertical handling)",
        "Game logic implementation",
        "Smooth movement mechanics",
        "Classic Pac-Man gameplay",
      ],
      challenges:
        "Implemented joystick input handling with proper vertical movement support, created smooth game mechanics, and structured the codebase for maintainability.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-4">
            My Projects
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            A showcase of my technical work, from school projects to personal
            creations. Each project demonstrates different aspects of my skills and
            learning journey.
          </p>

          <div className="space-y-16">
            {projects.map((project) => (
              <div
                key={project.id}
                id={project.id}
                className="bg-white p-8 md:p-12 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {project.type}
                  </span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {project.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">{project.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Challenges & Solutions
                  </h3>
                  <p className="text-gray-700">{project.challenges}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">
              More projects coming soon as I continue to learn and build!
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

