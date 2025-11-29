import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Denis Miclea
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4">
            Computer Science Student | Full-Stack Developer | Creative Technologist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Building modern digital solutions with a focus on user experience.
            Bridging technical skills with creative design. Multilingual developer
            (French, English, Romanian) based in Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <a
              href="/resume.pdf"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

