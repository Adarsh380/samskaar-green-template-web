
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Monitor, ExternalLink } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Pustak Dhaan - Book Donation Platform",
      description: "Our digital platform connecting book donors with schools and libraries in need. Facilitating the collection and distribution of educational resources to underserved communities.",
      features: ["Easy book donation process", "Direct connection to schools", "Transparent tracking", "Community-driven initiative"],
      link: "https://github.com/Adarsh380/Pustak-Dhaan",
      buttonText: "Visit Pustak Dhaan"
    },
    {
      icon: Monitor,
      title: "Digital Literacy Programs",
      description: "Solar-powered educational technology solutions for remote areas. Bringing digital learning opportunities to tribal communities without electricity access.",
      features: ["Solar TV installations", "Digital content delivery", "Remote area accessibility", "Sustainable technology"],
      link: "/impact",
      buttonText: "Learn More"
    },
    {
      icon: Users,
      title: "Educational Camp Programs",
      description: "Comprehensive summer camps combining academics, STEM education, and fitness. Training student volunteers to create engaging learning experiences.",
      features: ["Holistic curriculum", "Volunteer training", "STEM focus", "Health & fitness integration"],
      link: "/impact",
      buttonText: "See Impact"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive educational solutions designed to bridge the gap in rural and underserved communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 h-full">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 flex flex-col h-full">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  className="w-full mt-auto"
                  onClick={() => {
                    if (service.link.startsWith('http')) {
                      window.open(service.link, '_blank');
                    } else {
                      window.location.href = service.link;
                    }
                  }}
                >
                  {service.buttonText}
                  {service.link.startsWith('http') && <ExternalLink className="w-4 h-4 ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Get Involved with Our Services
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
            Whether you want to donate books through Pustak Dhaan, volunteer for our educational camps, 
            or support our digital literacy initiatives, there are many ways to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('https://github.com/Adarsh380/Pustak-Dhaan', '_blank')}
            >
              Donate Books <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.location.href = '/contact'}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
