import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MapPin, 
  Fuel, 
  Hospital,
  Wrench,
  Navigation,
  Phone,
  Clock,
  Star,
  ChevronRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Simulated nearby services data
const nearbyServices = {
  petrolPumps: [
    { id: 1, name: "Indian Oil - Highway Point", distance: "1.2 km", time: "3 min", rating: 4.5, open: true, phone: "9876543210", fuel: ["Petrol", "Diesel", "CNG"] },
    { id: 2, name: "HP Petroleum Station", distance: "2.8 km", time: "6 min", rating: 4.2, open: true, phone: "9876543211", fuel: ["Petrol", "Diesel"] },
    { id: 3, name: "Bharat Petroleum - Express", distance: "4.5 km", time: "10 min", rating: 4.7, open: true, phone: "9876543212", fuel: ["Petrol", "Diesel", "EV Charging"] },
  ],
  hospitals: [
    { id: 1, name: "Highway Care Hospital", distance: "3.2 km", time: "7 min", rating: 4.8, open: true, phone: "108", emergency: true },
    { id: 2, name: "City Medical Center", distance: "5.1 km", time: "12 min", rating: 4.5, open: true, phone: "9876543220", emergency: true },
    { id: 3, name: "Apollo Clinic", distance: "6.8 km", time: "15 min", rating: 4.6, open: true, phone: "9876543221", emergency: false },
  ],
  garages: [
    { id: 1, name: "Road Buddy Service Point", distance: "0.8 km", time: "2 min", rating: 4.9, open: true, phone: "1800-ROADBUDDY", partner: true },
    { id: 2, name: "Highway Auto Workshop", distance: "2.1 km", time: "5 min", rating: 4.3, open: true, phone: "9876543230", partner: false },
    { id: 3, name: "Quick Fix Garage", distance: "3.5 km", time: "8 min", rating: 4.4, open: false, phone: "9876543231", partner: false },
  ],
};

const NearbyServices = () => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<string>("Detecting location...");
  const [isLocating, setIsLocating] = useState(false);

  const handleDetectLocation = () => {
    setIsLocating(true);
    setUserLocation("Detecting...");
    
    setTimeout(() => {
      setUserLocation("NH-48, Near Manesar Toll Plaza");
      setIsLocating(false);
      toast({
        title: "Location Detected",
        description: "Showing services near NH-48, Manesar",
      });
    }, 1500);
  };

  const handleCall = (phone: string, name: string) => {
    window.location.href = `tel:${phone}`;
    toast({
      title: `Calling ${name}`,
      description: `Dialing ${phone}...`,
    });
  };

  const handleNavigate = (name: string) => {
    toast({
      title: "Opening Navigation",
      description: `Getting directions to ${name}...`,
    });
  };

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nearby Services
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Find petrol pumps, hospitals, and garages near your location
          </p>
          
          {/* Location Bar */}
          <div className="flex items-center justify-center gap-4 bg-muted rounded-xl p-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">{userLocation}</span>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDetectLocation}
              disabled={isLocating}
            >
              {isLocating ? "Detecting..." : "Update Location"}
            </Button>
          </div>
        </div>

        {/* Simulated Map */}
        <Card className="mb-8 overflow-hidden">
          <div className="relative h-64 md:h-80 bg-gradient-to-br from-muted to-muted/50">
            {/* Simulated Map Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
            </div>
            
            {/* User Location Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg emergency-pulse">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-center mt-2 bg-background/90 px-2 py-1 rounded text-xs font-medium">
                You are here
              </div>
            </div>
            
            {/* Service Markers */}
            <div className="absolute top-1/4 left-1/3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-md">
                <Fuel className="w-4 h-4 text-success-foreground" />
              </div>
            </div>
            <div className="absolute top-1/3 right-1/4">
              <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center shadow-md">
                <Hospital className="w-4 h-4 text-destructive-foreground" />
              </div>
            </div>
            <div className="absolute bottom-1/3 left-1/4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Wrench className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
            <div className="absolute bottom-1/4 right-1/3">
              <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center shadow-md">
                <Fuel className="w-4 h-4 text-success-foreground" />
              </div>
            </div>
            
            {/* Map Legend */}
            <div className="absolute bottom-4 left-4 bg-background/95 rounded-lg p-3 shadow-lg">
              <div className="flex flex-wrap gap-3 text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-success rounded-full" />
                  <span>Petrol Pump</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-destructive rounded-full" />
                  <span>Hospital</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 bg-primary rounded-full" />
                  <span>Garage</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Service Tabs */}
        <Tabs defaultValue="petrol" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="petrol" className="flex items-center gap-2">
              <Fuel className="w-4 h-4" />
              <span className="hidden sm:inline">Petrol Pumps</span>
              <span className="sm:hidden">Fuel</span>
            </TabsTrigger>
            <TabsTrigger value="hospital" className="flex items-center gap-2">
              <Hospital className="w-4 h-4" />
              <span className="hidden sm:inline">Hospitals</span>
              <span className="sm:hidden">Hospital</span>
            </TabsTrigger>
            <TabsTrigger value="garage" className="flex items-center gap-2">
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Garages</span>
              <span className="sm:hidden">Garage</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="petrol">
            <div className="space-y-4">
              {nearbyServices.petrolPumps.map((pump) => (
                <Card key={pump.id} variant="service" className="overflow-hidden">
                  <div className="flex items-center justify-between p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 text-success flex items-center justify-center flex-shrink-0">
                        <Fuel className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{pump.name}</h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {pump.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {pump.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-warning" />
                            {pump.rating}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {pump.fuel.map((f) => (
                            <span key={f} className="text-xs bg-muted px-2 py-0.5 rounded-full">
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" onClick={() => handleNavigate(pump.name)}>
                        <Navigation className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleCall(pump.phone, pump.name)}>
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hospital">
            <div className="space-y-4">
              {nearbyServices.hospitals.map((hospital) => (
                <Card key={hospital.id} variant="service" className="overflow-hidden">
                  <div className="flex items-center justify-between p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                        <Hospital className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{hospital.name}</h3>
                          {hospital.emergency && (
                            <span className="text-xs bg-destructive/10 text-destructive px-2 py-0.5 rounded-full font-medium">
                              24x7 Emergency
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {hospital.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {hospital.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-warning" />
                            {hospital.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" onClick={() => handleNavigate(hospital.name)}>
                        <Navigation className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleCall(hospital.phone, hospital.name)}>
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="garage">
            <div className="space-y-4">
              {nearbyServices.garages.map((garage) => (
                <Card key={garage.id} variant="service" className={`overflow-hidden ${garage.partner ? "ring-2 ring-primary" : ""}`}>
                  <div className="flex items-center justify-between p-4 md:p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{garage.name}</h3>
                          {garage.partner && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                              Road Buddy Partner
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {garage.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {garage.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-warning" />
                            {garage.rating}
                          </span>
                          <span className={`font-medium ${garage.open ? "text-success" : "text-destructive"}`}>
                            {garage.open ? "Open Now" : "Closed"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" onClick={() => handleNavigate(garage.name)}>
                        <Navigation className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => handleCall(garage.phone, garage.name)}>
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NearbyServices;
