
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Users, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Pustak Dhaan - Book Donation Platform",
      description: "Our flagship service connecting book donors with rural schools and libraries. Donate books online and track their journey to students who need them most.",
      features: ["Online book donation", "Real-time tracking", "Impact visibility", "Community building"],
      link: "https://github.com/Adarsh380/Pustak-Dhaan",
      primary: true
    },
    {
      icon: Users,
      title: "Educational Camp Programs",
      description: "Summer camps and educational workshops designed to enhance learning experiences for students in government schools.",
      features: ["Summer camps", "Skill workshops", "Interactive learning", "Mentorship programs"]
    },
    {
      icon: Globe,
      title: "Digital Literacy Initiative",
      description: "Installing solar-powered TVs and digital learning resources in remote tribal hamlets to bridge the digital divide.",
      features: ["Solar TV installations", "Digital content", "Technical training", "Sustainable solutions"]
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
            Comprehensive educational solutions designed to transform rural education through technology, 
            community engagement, and sustainable resource sharing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`${service.primary ? 'border-primary shadow-lg scale-105' : 'border-border'} hover:shadow-xl transition-all duration-300`}>
              <CardHeader>
                <div className={`w-12 h-12 ${service.primary ? 'bg-primary text-primary-foreground' : 'bg-primary/10 text-primary'} rounded-lg flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <Heart className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {service.link && (
                  <Button 
                    className="w-full"
                    onClick={() => window.open(service.link, '_blank')}
                  >
                    Learn More About Pustak Dhaan
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join our mission to transform rural education. Whether through book donations, 
              volunteering, or supporting our digital initiatives, every contribution counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://github.com/Adarsh380/Pustak-Dhaan', '_blank')}
              >
                Donate Books Now
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Get Involved
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
