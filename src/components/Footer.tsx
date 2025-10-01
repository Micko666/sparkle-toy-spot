import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">ToyJoy</h3>
            <p className="text-muted-foreground">
              Bringing smiles to children worldwide with quality, safe, and fun toys.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Educational Toys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creative Toys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Outdoor Toys</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Arrivals</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Safety Standards</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-primary fill-primary" /> for children everywhere
          </p>
          <p className="mt-2">© 2025 ToyJoy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
