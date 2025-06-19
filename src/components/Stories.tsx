
import { useState } from "react";
import { Quote } from "lucide-react";

export const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const stories = [
    {
      title: "Museum Partnership Success",
      organization: "Contemporary Arts Center",
      quote: "The Decolonization Rider transformed how we approach artist relationships. We've built genuine partnerships rooted in respect and equity.",
      impact: "50% increase in Indigenous artist programming",
      category: "Museum"
    },
    {
      title: "Festival Transformation",
      organization: "Regional Arts Festival",
      quote: "Using the assessment tools helped us identify blind spots and create meaningful change in our programming and operations.",
      impact: "Community trust rebuilt, diverse programming expanded",
      category: "Festival"
    },
    {
      title: "University Integration",
      organization: "State University Arts Department",
      quote: "These tools provided the framework we needed to address systemic issues in our curriculum and faculty practices.",
      impact: "Curriculum redesigned with Indigenous perspectives",
      category: "Education"
    }
  ];

  return (
    <section id="stories" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            Stories of Change
          </h2>
          <p className="text-xl text-stone-700 max-w-3xl mx-auto">
            Real institutions sharing their transformation journeys and the impact of decolonial practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                selectedStory === index
                  ? "bg-gradient-to-br from-amber-100 to-orange-100 shadow-lg"
                  : "bg-stone-50 hover:bg-stone-100"
              }`}
              onClick={() => setSelectedStory(index)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedStory === index
                    ? "bg-amber-200 text-amber-800"
                    : "bg-stone-200 text-stone-700"
                }`}>
                  {story.category}
                </span>
                <Quote size={20} className={selectedStory === index ? "text-amber-600" : "text-stone-400"} />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">{story.title}</h3>
              <p className="text-stone-700 text-sm">{story.organization}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-stone-50 to-amber-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <Quote size={48} className="text-amber-600 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-medium text-stone-900 mb-6 leading-relaxed">
              "{stories[selectedStory].quote}"
            </blockquote>
            <div className="mb-4">
              <p className="text-lg font-semibold text-stone-800">{stories[selectedStory].organization}</p>
              <p className="text-stone-600">{stories[selectedStory].category}</p>
            </div>
            <div className="bg-white rounded-full px-6 py-3 inline-block">
              <p className="text-sm font-medium text-amber-700">
                Impact: {stories[selectedStory].impact}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
