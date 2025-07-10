
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star, Users, Globe, Target } from "lucide-react";

const ServicesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Easy Book Donation",
      description: "Simple online platform to donate books directly to rural schools and libraries"
    },
    {
      icon: Target,
      title: "Real-time Tracking",
      description: "Track your donated books' journey from your shelf to students who need them"
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Connect with a community of donors making education accessible to all"
    },
    {
      icon: Globe,
      title: "Wide Reach",
      description: "Supporting schools and libraries across rural areas to bridge the education gap"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Service
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pustak Dhaan - A revolutionary book donation platform connecting generous donors 
            with rural schools and libraries, making quality education accessible to every child.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Service Card */}
          <Card className="border-primary shadow-xl mb-12">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Pustak Dhaan - Book Donation Platform
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our flagship service transforms how books reach students in need. Through our 
                user-friendly platform, donors can easily contribute books while tracking their 
                impact on rural education.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-muted/50">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.open('http://localhost:5173/', '_blank')}
                >
                  <Star className="w-5 h-5 mr-2" />
                  Explore Pustak Dhaan
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Call to Action */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join thousands of donors who are transforming rural education through book donations. 
              Every book you donate brings a child one step closer to a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('http://localhost:5173/', '_blank')}
              >
                <Heart className="w-5 h-5 mr-2" />
                Start Donating Books
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/contact'}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
