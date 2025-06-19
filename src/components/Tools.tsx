
import { useState } from "react";
import { Download, FileText, BarChart3, Users } from "lucide-react";

export const Tools = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tools = [
    {
      title: "Decolonization Rider",
      icon: <FileText size={32} />,
      description: "A comprehensive template for artists and institutions to establish equity-centered relationships and practices.",
      features: ["Transparent agreements", "Accountability measures", "Consent-based practices", "Fair compensation structures"]
    },
    {
      title: "Individual Assessment",
      icon: <Users size={32} />,
      description: "Personal reflection tool for artists to evaluate their own practices and growth in decolonial work.",
      features: ["Self-reflection prompts", "Progress tracking", "Personal goal setting", "Community connection"]
    },
    {
      title: "Institutional Assessment",
      icon: <BarChart3 size={32} />,
      description: "Comprehensive evaluation framework for organizations to assess and improve their decolonial practices.",
      features: ["Organizational audit", "Data visualization", "Action planning", "Progress measurement"]
    }
  ];

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Transformation Tools
          </h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Free and accessible resources designed to support meaningful change in artistic and institutional practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeTab === index
                  ? "bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg scale-105"
                  : "bg-white hover:shadow-md"
              }`}
              onClick={() => setActiveTab(index)}
            >
              <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center ${
                activeTab === index
                  ? "bg-gradient-to-br from-amber-600 to-orange-600 text-white"
                  : "bg-stone-100 text-stone-600"
              }`}>
                {tool.icon}
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">{tool.title}</h3>
              <p className="text-stone-700 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                {tools[activeTab].title}
              </h3>
              <p className="text-lg text-stone-700 mb-6">
                {tools[activeTab].description}
              </p>
              <ul className="space-y-3 mb-6">
                {tools[activeTab].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                    <span className="text-stone-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-200">
                <Download size={20} />
                Download Tool
              </button>
            </div>
            <div className="bg-gradient-to-br from-stone-100 to-amber-50 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-stone-600 text-center">Interactive preview space</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
