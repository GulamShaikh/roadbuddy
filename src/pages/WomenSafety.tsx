import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  ShieldAlert, 
  Phone, 
  MapPin, 
  AlertTriangle,
  Siren,
  Share2,
  MessageSquare,
  Navigation,
  Users,
  CheckCircle2
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const emergencyNumbers = [
  {
    name: "Women Helpline",
    number: "181",
    description: "24x7 Women Helpline",
    primary: true,
  },
  {
    name: "Police",
    number: "100",
    description: "Emergency Police",
    primary: true,
  },
  {
    name: "Emergency",
    number: "112",
    description: "Universal Emergency Number",
    primary: true,
  },
  {
    name: "Ambulance",
    number: "108",
    description: "Medical Emergency",
    primary: false,
  },
  {
    name: "Highway Police",
    number: "1033",
    description: "Highway Emergency",
    primary: false,
  },
  {
    name: "NCW Helpline",
    number: "7827-170-170",
    description: "National Commission for Women",
    primary: false,
  },
];

const safetyFeatures = [
  {
    icon: MapPin,
    title: "Live Location Sharing",
    description: "Share your real-time location with trusted contacts and police",
  },
  {
    icon: Siren,
    title: "Silent SOS Alert",
    description: "Send distress signal without alerting the threat",
  },
  {
    icon: Users,
    title: "Trusted Contacts",
    description: "Pre-save emergency contacts for quick alerts",
  },
  {
    icon: MessageSquare,
    title: "Voice-Activated SOS",
    description: "Say the code word to trigger emergency alert",
  },
];

const WomenSafety = () => {
  const { toast } = useToast();
  const [isSharing, setIsSharing] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const handleEmergencyCall = (number: string, name: string) => {
    window.location.href = `tel:${number}`;
    toast({
      title: `Calling ${name}`,
      description: `Dialing ${number}...`,
    });
  };

  const handleShareLocation = () => {
    setIsSharing(true);
    toast({
      title: "Sharing Location",
      description: "Your live location is being shared with trusted contacts and authorities",
    });
    
    // Simulate location sharing
    setTimeout(() => {
      toast({
        title: "Location Shared ✓",
        description: "Police and your emergency contacts have been notified",
      });
    }, 2000);
  };

  const handleSOSAlert = () => {
    setSosActive(true);
    toast({
      title: "🚨 SOS ALERT ACTIVATED",
      description: "Emergency services and contacts are being notified",
      variant: "destructive",
    });
    
    setTimeout(() => {
      toast({
        title: "Help is on the way",
        description: "Nearest patrol unit dispatched. Stay calm.",
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold flex items-center justify-center gap-2">
            <ShieldAlert className="w-5 h-5" />
            In immediate danger? Press SOS button below
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
            <ShieldAlert className="w-5 h-5" />
            <span className="font-medium">Women Safety</span>
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Your Safety is Our Priority
          </h1>
          <p className="text-lg text-muted-foreground">
            Quick access to emergency services, location sharing, and SOS alerts. 
            Road Buddy is here to protect you on every journey.
          </p>
        </div>

        {/* SOS Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={handleSOSAlert}
            className={`w-40 h-40 rounded-full flex flex-col items-center justify-center gap-2 text-white font-bold text-xl shadow-2xl transition-all ${
              sosActive 
                ? "bg-destructive animate-pulse" 
                : "bg-gradient-to-br from-destructive to-red-700 hover:scale-105 emergency-pulse"
            }`}
          >
            <Siren className="w-12 h-12" />
            SOS
          </button>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Button 
            variant="destructive" 
            size="lg" 
            className="h-auto py-4 flex flex-col gap-2"
            onClick={() => handleEmergencyCall("100", "Police")}
          >
            <Phone className="w-6 h-6" />
            <span>Call Police</span>
            <span className="text-xs opacity-80">100</span>
          </Button>
          <Button 
            variant="destructive" 
            size="lg" 
            className="h-auto py-4 flex flex-col gap-2"
            onClick={() => handleEmergencyCall("181", "Women Helpline")}
          >
            <ShieldAlert className="w-6 h-6" />
            <span>Women Helpline</span>
            <span className="text-xs opacity-80">181</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex flex-col gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
            onClick={handleShareLocation}
          >
            <Share2 className="w-6 h-6" />
            <span>Share Location</span>
            <span className="text-xs opacity-80">With Police</span>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="h-auto py-4 flex flex-col gap-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
            onClick={() => handleEmergencyCall("112", "Emergency")}
          >
            <AlertTriangle className="w-6 h-6" />
            <span>Emergency</span>
            <span className="text-xs opacity-80">112</span>
          </Button>
        </div>

        {/* All Emergency Numbers */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-destructive" />
              Emergency Numbers
            </CardTitle>
            <CardDescription>
              Save these numbers for quick access during emergencies
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {emergencyNumbers.map((item) => (
                <button
                  key={item.number}
                  onClick={() => handleEmergencyCall(item.number, item.name)}
                  className={`p-4 rounded-xl text-left transition-all hover:scale-[1.02] ${
                    item.primary 
                      ? "bg-destructive/10 border-2 border-destructive/30 hover:border-destructive" 
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-semibold ${item.primary ? "text-destructive" : "text-foreground"}`}>
                      {item.name}
                    </span>
                    <Phone className={`w-4 h-4 ${item.primary ? "text-destructive" : "text-muted-foreground"}`} />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {item.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {item.description}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Safety Features */}
        <div className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
            Safety Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyFeatures.map((feature) => (
              <Card key={feature.title} variant="service" className="text-center p-6">
                <div className="w-14 h-14 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>Safety Tips for Highway Travel</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {[
                "Always share your travel plan with family members",
                "Keep your phone fully charged before starting the journey",
                "Travel during daylight hours when possible",
                "Park only in well-lit, populated areas",
                "If you feel unsafe, drive to the nearest police station or toll plaza",
                "Keep doors locked and windows up while driving",
                "Trust your instincts - if something feels wrong, seek help immediately",
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WomenSafety;
