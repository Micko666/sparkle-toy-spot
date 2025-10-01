import { Card } from "@/components/ui/card";
import { BookOpen, Palette, Sun } from "lucide-react";
import educationalImage from "@/assets/educational-toys.jpg";
import creativeImage from "@/assets/creative-toys.jpg";
import outdoorImage from "@/assets/outdoor-toys.jpg";

const categories = [
  {
    title: "Educational",
    description: "Learn while playing with our brain-boosting toys",
    icon: BookOpen,
    image: educationalImage,
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Creative",
    description: "Unleash imagination with arts and crafts",
    icon: Palette,
    image: creativeImage,
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Outdoor Fun",
    description: "Active play for healthy, happy kids",
    icon: Sun,
    image: outdoorImage,
    color: "from-accent/20 to-accent/5",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Shop by <span className="text-primary">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find the perfect toys for every interest and age group
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-3 rounded-full">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
