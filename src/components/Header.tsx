import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import { User } from "@supabase/supabase-js";
import { useToast } from "@/hooks/use-toast";

export default function Header() {
  const [user, setUser] = useState<User | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    // Set up auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out",
        description: "You have been signed out successfully",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-fredoka font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-sm">
            ToyJoy
          </span>
        </Link>
        
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link to="/create" className="hidden sm:inline text-sm text-muted-foreground hover:text-primary">Create</Link>
          <Link to="/gallery" className="hidden sm:inline text-sm text-muted-foreground hover:text-primary">Gallery</Link>
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">
                {user.email}
              </span>
              <Button onClick={handleSignOut} variant="outline" className="border-primary/40 hover:bg-primary/10">
                Sign Out
              </Button>
              <ThemeToggle />
            </>
          ) : (
            <>
              <Button asChild className="bg-gradient-to-r from-primary to-accent text-primary-foreground shadow">
                <Link to="/auth">Sign In</Link>
              </Button>
              <ThemeToggle />
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
