import Navigation from "@/components/Navigation";

export default function Experience() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
            Experience & Education
          </h1>

          <div className="space-y-12">
            {/* Professional Experience */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Professional Experience
              </h2>

              <div className="border-l-4 border-blue-600 pl-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    IT Sales & Service Technician
                  </h3>
                  <p className="text-lg text-blue-600 font-semibold">
                    McMicrotech
                  </p>
                  <p className="text-gray-600">November 2023 – January 2024</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Key Responsibilities:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Troubleshot product issues for clients, ensuring timely
                      resolution and customer satisfaction
                    </li>
                    <li>
                      Identified and promoted cross-selling opportunities to
                      enhance customer value
                    </li>
                    <li>
                      Provided technical support and exceptional customer service
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Skills Developed:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Customer Service
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Technical Troubleshooting
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Sales
                    </span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      Problem Solving
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>

              <div className="border-l-4 border-green-600 pl-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Computer Science Student
                  </h3>
                  <p className="text-lg text-gray-700">First Year</p>
                  <p className="text-gray-600">Current</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    Activities & Involvement:
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Actively involved in several technical, creative, and
                      research-oriented personal projects
                    </li>
                    <li>
                      Building practical experience through hands-on development
                      work
                    </li>
                    <li>
                      Continuously learning and applying new technologies and
                      methodologies
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Academic Projects:
                  </h4>
                  <p className="text-gray-700 mb-2">
                    See my{" "}
                    <a
                      href="/projects"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Projects page
                    </a>{" "}
                    for examples of academic and personal work.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline Visualization */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Career Timeline
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2"></div>
                  <div className="ml-6">
                    <p className="text-sm font-semibold text-blue-600">2024</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Computer Science Studies
                    </p>
                    <p className="text-gray-600">
                      First-year student, building projects and skills
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 bg-green-600 rounded-full mt-2"></div>
                  <div className="ml-6">
                    <p className="text-sm font-semibold text-green-600">
                      Nov 2023 - Jan 2024
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      IT Sales & Service Technician
                    </p>
                    <p className="text-gray-600">McMicrotech</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

