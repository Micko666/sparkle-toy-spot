import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-toys.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium text-accent-foreground">New Arrivals Every Week!</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Magical Toys for{" "}
              <span className="text-primary">Every Child</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Discover a world of imagination, learning, and endless fun. Quality toys that spark creativity and joy in every child.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="text-lg group">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                View Collections
              </Button>
            </div>
            
            <div className="flex gap-8 justify-center lg:justify-start pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Happy Toys</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Smiling Kids</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-muted-foreground">Safe & Fun</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl" />
            <img
              src={heroImage}
              alt="Colorful toys for children"
              className="relative rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
