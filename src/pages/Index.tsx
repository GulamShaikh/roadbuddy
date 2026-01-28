import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  ArrowRight, 
  Clock, 
  MapPin, 
  Shield, 
  Zap,
  Phone,
  ChevronRight,
  ShieldAlert,
  Fuel,
  Hospital,
  Wrench
} from "lucide-react";
import heroImage from "@/assets/road-buddy-hero.jpg";

// Import service images
import repairImg from "@/assets/services/repair.jpg";
import tyreImg from "@/assets/services/tyre.jpg";
import batteryImg from "@/assets/services/battery.jpg";
import fuelImg from "@/assets/services/fuel.jpg";
import towingImg from "@/assets/services/towing.jpg";

const Index = () => {
  const features = [
    {
      icon: Clock,
      title: "Faster Response",
      description: "Average arrival time under 15 minutes from nearby highway stations.",
    },
    {
      icon: MapPin,
      title: "Nearest Unit Dispatched",
      description: "Smart routing ensures the closest available unit reaches you first.",
    },
    {
      icon: Shield,
      title: "Safer Highways",
      description: "Trained professionals equipped for any roadside emergency.",
    },
  ];

  const services = [
    { image: repairImg, name: "On-spot Repair", time: "~20 min" },
    { image: tyreImg, name: "Tyre Replacement", time: "~15 min" },
    { image: batteryImg, name: "Battery Jump-start", time: "~10 min" },
    { image: fuelImg, name: "Fuel Assistance", time: "~15 min" },
    { image: towingImg, name: "Towing Service", time: "~25 min" },
  ];

  const stats = [
    { value: "15K+", label: "Rescues Completed" },
    { value: "< 15min", label: "Avg. Response Time" },
    { value: "98%", label: "Customer Satisfaction" },
    { value: "500+", label: "Highway Coverage (km)" },
  ];

  const nearbyServices = [
    { icon: Fuel, name: "Petrol Pumps", count: "12 nearby" },
    { icon: Hospital, name: "Hospitals", count: "8 nearby" },
    { icon: Wrench, name: "Garages", count: "15 nearby" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Road Buddy Service"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6 slide-up">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Highway Emergency? Help is minutes away</span>
            </div>
            
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground mb-2 slide-up">
              Road Buddy
            </h1>
            <p className="text-xl md:text-2xl text-primary font-display font-semibold mb-6 slide-up">
              Aapka Roadside Sathi 🤝
            </p>
            
            <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-8 leading-relaxed slide-up">
              Instant roadside repair and towing support on highways. 
              Your trusted companion when you need help the most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 slide-up">
              <Link to="/request-help">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Request Help Now
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="xl" className="w-full sm:w-auto border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
                  View Services
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Women Safety Quick Access */}
            <Link to="/women-safety" className="inline-flex items-center gap-2 mt-6 text-destructive hover:text-destructive/80 transition-colors slide-up">
              <ShieldAlert className="w-5 h-5" />
              <span className="font-medium">Women Safety - Emergency SOS</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-secondary-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Services Quick Access */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="font-display text-xl font-bold text-foreground">
                Connected Services Near You
              </h2>
              <p className="text-muted-foreground text-sm">
                Find petrol pumps, hospitals & garages instantly
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {nearbyServices.map((service) => (
                <div key={service.name} className="flex items-center gap-2 bg-background rounded-lg px-4 py-2 shadow-sm">
                  <service.icon className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-sm text-foreground">{service.name}</div>
                    <div className="text-xs text-success">{service.count}</div>
                  </div>
                </div>
              ))}
              <Link to="/nearby-services">
                <Button variant="outline" size="sm">
                  View Map
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Road Buddy?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Traditional roadside assistance makes you wait. We bring the garage to you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <Card key={feature.title} variant="service" className="p-8">
                <div className="w-14 h-14 rounded-xl primary-gradient flex items-center justify-center mb-6 shadow-md">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                Our Services
              </h2>
              <p className="text-muted-foreground text-lg">
                Comprehensive roadside assistance for any situation
              </p>
            </div>
            <Link to="/services">
              <Button variant="outline" className="group">
                View All Services
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {services.map((service) => (
              <Card key={service.name} variant="service" className="overflow-hidden">
                <div className="relative h-32">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="font-semibold text-white text-sm">
                      {service.name}
                    </h4>
                    <span className="text-xs text-success font-medium">
                      {service.time}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Women Safety CTA */}
      <section className="py-12 bg-destructive/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-destructive/20 flex items-center justify-center">
                <ShieldAlert className="w-8 h-8 text-destructive" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Women Safety Feature
                </h3>
                <p className="text-muted-foreground">
                  SOS alerts, emergency numbers, live location sharing with police
                </p>
              </div>
            </div>
            <Link to="/women-safety">
              <Button variant="destructive" size="lg">
                Access Safety Features
                <ShieldAlert className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-foreground mb-6">
              Stranded on the Highway?
            </h2>
            <p className="text-xl text-secondary-foreground/80 mb-8">
              Don't wait for hours. Get instant help from the nearest Road Buddy unit.
            </p>
            <Link to="/request-help">
              <Button variant="hero" size="xl" className="shadow-2xl">
                <Phone className="w-5 h-5" />
                Request Help Now
              </Button>
            </Link>
            <p className="mt-6 text-secondary-foreground/60 text-sm">
              Or call our emergency hotline: <span className="text-primary font-semibold">1800-ROADBUDDY</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
