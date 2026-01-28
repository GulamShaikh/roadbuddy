import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ShieldAlert } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="Road Buddy Logo"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-display font-bold text-xl block">Road Buddy</span>
                <span className="text-sm text-secondary-foreground/70">Aapka roadside sathi</span>
              </div>
            </div>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed">
              Your trusted companion on every journey. Instant roadside assistance when you need it most.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/nearby-services", label: "Nearby Services" },
                { href: "/live-units", label: "Live Units" },
                { href: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                "On-spot Repair",
                "Tyre Replacement",
                "Battery Jump-start",
                "Fuel Assistance",
                "Towing Service",
              ].map((service) => (
                <span
                  key={service}
                  className="text-secondary-foreground/70 text-sm"
                >
                  {service}
                </span>
              ))}
              <Link 
                to="/women-safety" 
                className="flex items-center gap-1 text-destructive hover:text-destructive/80 transition-colors text-sm font-medium"
              >
                <ShieldAlert className="w-3 h-3" />
                Women Safety
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Emergency Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:1800-ROADBUDDY"
                className="flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                1800-ROADBUDDY
              </a>
              <a
                href="mailto:help@roadbuddy.in"
                className="flex items-center gap-2 text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                help@roadbuddy.in
              </a>
              <div className="flex items-start gap-2 text-secondary-foreground/70 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Pan-India Highway Coverage</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-secondary-foreground/50 text-sm">
          <p>© 2025 Road Buddy — Aapka Roadside Sathi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
