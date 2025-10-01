import { Shield, Heart, Sparkles, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All toys tested and certified safe for children",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "Quality Materials",
    description: "Durable, non-toxic, and eco-friendly toys",
    color: "text-secondary",
  },
  {
    icon: Sparkles,
    title: "Educational Value",
    description: "Toys that help kids learn and grow",
    color: "text-accent",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and secure shipping to your door",
    color: "text-primary",
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose <span className="text-primary">ToyJoy</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing joy and quality to every family
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 mb-6 group-hover:shadow-lg transition-shadow">
                <feature.icon className={`h-10 w-10 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
