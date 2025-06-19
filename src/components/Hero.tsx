
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 leading-tight">
            Decolonization
            <span className="block text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">
              Tools for Change
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Supporting artists and institutions in building accountable, transparent, 
            and equity-centered relationships through the Decolonization Rider and Assessment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200">
              Download the Rider
            </button>
            <button className="border-2 border-stone-800 text-stone-800 px-8 py-4 rounded-full font-semibold text-lg hover:bg-stone-800 hover:text-white transition-all duration-200">
              Take Assessment
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-stone-600" />
      </div>
    </section>
  );
};
