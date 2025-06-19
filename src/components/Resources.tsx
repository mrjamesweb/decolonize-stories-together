
import { Download, ExternalLink, BookOpen, Users } from "lucide-react";

export const Resources = () => {
  const resources = [
    {
      title: "Decolonization Rider Template",
      description: "Comprehensive template for establishing equity-centered agreements",
      type: "Template",
      icon: <Download size={20} />
    },
    {
      title: "Assessment Guides",
      description: "Step-by-step guides for individual and institutional assessments",
      type: "Guide",
      icon: <BookOpen size={20} />
    },
    {
      title: "Community Toolkit",
      description: "Resources for building accountable artistic communities",
      type: "Toolkit",
      icon: <Users size={20} />
    },
    {
      title: "Research & Reports",
      description: "Annual data insights and transformation stories",
      type: "Research",
      icon: <ExternalLink size={20} />
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Free Resources
          </h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            All tools and resources are freely available to support widespread adoption of decolonial practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center text-amber-700">
                    {resource.icon}
                  </div>
                  <span className="text-sm font-medium text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">{resource.title}</h3>
              <p className="text-stone-700 mb-4">{resource.description}</p>
              <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-shadow duration-200">
                Access Resource
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join the Movement</h3>
          <p className="text-xl text-stone-300 mb-6 max-w-2xl mx-auto">
            Connect with other artists and institutions committed to decolonial transformation. Share stories, insights, and support each other's growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-stone-900 px-8 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors duration-200">
              Join Community
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-stone-900 transition-all duration-200">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
