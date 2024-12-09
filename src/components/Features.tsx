import { LineChart, Lightbulb, Leaf } from "lucide-react";

const Features = () => {
  const stats = [
    { value: "25%", label: "Energy Savings" },
    { value: "0", label: "Carbon Emissions" },
    { value: "100%", label: "Renewable Energy" },
  ];

  const features = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Smart Lighting",
      description: "Intelligent controls that adapt to your needs",
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: "Energy Efficient",
      description: "Reduce your energy consumption and costs",
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Eco-Friendly",
      description: "Sustainable solutions for a greener future",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-lg text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/50 p-8 rounded-lg animate-fade-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;