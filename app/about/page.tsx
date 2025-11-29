import Navigation from "@/components/Navigation";

export default function About() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">About Me</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-6">
              I&apos;m Denis Miclea, a computer science student based in Canada. I speak
              French, English, and Romanian, and I am passionate about technology,
              software development, web design, AI, and creative digital projects.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              My Journey
            </h2>
            <p className="text-gray-700 mb-4">
              Currently, I&apos;m a first-year Computer Science student, actively involved
              in several technical, creative, and research-oriented personal projects.
              My professional experience includes working as an IT Sales & Service
              Technician at McMicrotech, where I helped clients troubleshoot product
              issues, promoted cross-selling opportunities, and provided technical
              support and customer service.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              What Makes Me Unique
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Multilingual Communication:</strong> Fluent in French, English,
                and Romanian, enabling me to work with diverse teams and clients
              </li>
              <li>
                <strong>Technical + Creative:</strong> Unique combination of technical
                skills and creative design abilities
              </li>
              <li>
                <strong>Self-Driven Learning:</strong> Consistently working on personal
                projects and self-improvement
              </li>
              <li>
                <strong>International Perspective:</strong> Canada-based with Romanian
                background, bringing diverse cultural insights
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              Interests & Values
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
                <p className="text-gray-700 text-sm">
                  AI and machine learning, web design and UX, cybersecurity
                  fundamentals
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Creative</h3>
                <p className="text-gray-700 text-sm">
                  Digital storytelling, video editing, graphic design
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Learning</h3>
                <p className="text-gray-700 text-sm">
                  Exploring technology trends, continuous self-improvement
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Travel</h3>
                <p className="text-gray-700 text-sm">
                  Especially Japan - nature + city mix
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">
              My Goals
            </h2>
            <p className="text-gray-700 mb-4">
              My goal is to build modern digital solutions while developing strong
              professional experience in tech. I&apos;m seeking opportunities to apply my
              technical skills, creative problem-solving abilities, and multilingual
              communication skills in a professional setting.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

