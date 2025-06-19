
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Tools } from "@/components/Tools";
import { Stories } from "@/components/Stories";
import { DataViz } from "@/components/DataViz";
import { Resources } from "@/components/Resources";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-amber-50">
      <Navigation />
      <Hero />
      <Mission />
      <Tools />
      <Stories />
      <DataViz />
      <Resources />
    </div>
  );
};

export default Index;
