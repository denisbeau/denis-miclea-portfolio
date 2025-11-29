export default function QuickStats() {
  const stats = [
    {
      label: "Languages",
      value: "3",
      description: "French, English, Romanian",
    },
    {
      label: "Experience",
      value: "1+",
      description: "Year in tech",
    },
    {
      label: "Projects",
      value: "2+",
      description: "Notable projects",
    },
    {
      label: "Technologies",
      value: "10+",
      description: "Technologies mastered",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

