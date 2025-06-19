
export const Mission = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
              Rooted in Justice, Care, and 
              <span className="text-amber-600"> Indigenous Values</span>
            </h2>
            
            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              Emily Johnson / Catalyst works to increase recognition, support, and equity 
              for Indigenous performance practices, presenting, and research. The work honors 
              healing, relationality, and self-determined community processes while upholding 
              Indigenous sovereignty.
            </p>
            
            <p className="text-lg text-stone-700 mb-8 leading-relaxed">
              At its core, this project is about dismantling harm and reclaiming the radical 
              power of performance as a force for cultural and structural change.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-stone-700">Guide conversations and reveal patterns</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-stone-700">Foster long-term transformative shifts</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-stone-700">Root decision-making in consent and kinship</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">EJ</span>
                </div>
                <p className="text-stone-700 font-medium">Emily Johnson</p>
                <p className="text-stone-600 text-sm">Choreographer & Catalyst</p>
                <p className="text-stone-600 text-sm">Citizen of the Yup'ik Nation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
