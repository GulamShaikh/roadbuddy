import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ShieldAlert } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/request-help", label: "Request Help" },
    { href: "/services", label: "Services" },
    { href: "/nearby-services", label: "Nearby Services" },
    { href: "/women-safety", label: "Women Safety", highlight: true },
    { href: "/live-units", label: "Live Units" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Road Buddy Logo"
              className="w-10 h-10 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg md:text-xl text-foreground leading-tight">
                Road Buddy
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Aapka roadside sathi
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                <Button
                  variant={link.highlight ? "emergency" : "nav"}
                  size="sm"
                  className={`${isActive(link.href) ? "text-primary font-semibold" : ""} ${link.highlight ? "flex items-center gap-1" : ""}`}
                >
                  {link.highlight && <ShieldAlert className="w-3 h-3" />}
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/request-help">
              <Button variant="hero" size="default">
                <Phone className="w-4 h-4" />
                Get Help Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    link.highlight 
                      ? "bg-destructive/10 text-destructive" 
                      : isActive(link.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-muted"
                  }`}
                >
                  {link.highlight && <ShieldAlert className="w-4 h-4" />}
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 px-4">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full">
                    Login
                  </Button>
                </Link>
                <Link to="/request-help" onClick={() => setIsOpen(false)}>
                  <Button variant="hero" className="w-full">
                    <Phone className="w-4 h-4" />
                    Get Help Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
