import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-down">
            Light is essential to{" "}
            <span className="text-primary">our lives</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-up">
            Delivering sustainable, smart lighting that boosts your productivity
            while also protecting the planet.
          </p>
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;