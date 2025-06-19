
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";

export const DataViz = () => {
  const stats = [
    { label: "Institutions Engaged", value: "150+", icon: <Users size={24} />, color: "from-blue-500 to-blue-600" },
    { label: "Assessments Completed", value: "500+", icon: <BarChart3 size={24} />, color: "from-green-500 to-green-600" },
    { label: "Artists Supported", value: "200+", icon: <Target size={24} />, color: "from-purple-500 to-purple-600" },
    { label: "Average Improvement", value: "65%", icon: <TrendingUp size={24} />, color: "from-amber-500 to-orange-600" }
  ];

  return (
    <section id="data" className="py-20 bg-gradient-to-b from-stone-900 to-stone-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Measuring Impact
          </h2>
          <p className="text-xl text-stone-300 max-w-3xl mx-auto">
            Data from our annual assessments reveals patterns of growth and areas for continued transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-stone-800 rounded-2xl p-6 text-center hover:bg-stone-700 transition-colors duration-200">
              <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
              <p className="text-stone-300">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-stone-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Assessment Insights</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-300">Organizational Accountability</span>
                  <span className="text-amber-400">72%</span>
                </div>
                <div className="w-full bg-stone-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-300">Artist Support Systems</span>
                  <span className="text-amber-400">68%</span>
                </div>
                <div className="w-full bg-stone-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-stone-300">Transparency Practices</span>
                  <span className="text-amber-400">81%</span>
                </div>
                <div className="w-full bg-stone-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: '81%' }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Growth Areas</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Community Engagement</h4>
                  <p className="text-stone-300 text-sm">Most organizations seek to deepen relationships with local Indigenous communities</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Leadership Development</h4>
                  <p className="text-stone-300 text-sm">Increasing Indigenous representation in decision-making roles</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-1 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold mb-1">Resource Allocation</h4>
                  <p className="text-stone-300 text-sm">Fair compensation and budget transparency remain priorities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
