import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Join the <span className="text-primary">ToyJoy</span> Family!
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Get exclusive deals, new arrivals, and parenting tips straight to your inbox
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 text-base"
            />
            <Button size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
