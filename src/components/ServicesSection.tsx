
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Heart, Star, Users, Globe, Target, Monitor, Zap } from "lucide-react";

const ServicesSection = () => {
  const pustakDhaanFeatures = [
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

  const fundraiserFeatures = [
    {
      icon: Monitor,
      title: "Digital Access",
      description: "Providing solar TVs to give tribal students access to educational content"
    },
    {
      icon: Zap,
      title: "Solar Powered",
      description: "Each solar TV costs ₹45,000 and will be delivered personally to these schools"
    },
    {
      icon: Target,
      title: "Direct Impact",
      description: "Goal: ₹5,85 lakhs to enhance digital learning for more than 450 tribal students"
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Supporting tribal students in Kotturkonda district, Telangana"
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
            Empowering education through innovative solutions and community-driven initiatives 
            that bridge the gap between privileged and underserved students.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Pustak Dhaan Service */}
          <Card className="border-primary shadow-xl">
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
                {pustakDhaanFeatures.map((feature, index) => (
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
                  onClick={() => window.open('https://vercel.com/adarshs-projects-dd03218c/pustakdhaan', '_blank')}
                >
                  <Star className="w-5 h-5 mr-2" />
                  Explore Pustak Dhaan
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Digital Education Fundraiser Service */}
          <Card className="border-primary shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Monitor className="w-8 h-8" />
              </div>
              <CardTitle className="text-2xl md:text-3xl mb-4">
                Digital Education Fundraiser
              </CardTitle>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Igniting digital learning for tribal students in Telangana. We're raising funds to provide 
                solar-powered TVs that deliver educational content to remote tribal schools, ensuring 
                no student misses out on quality digital education.
              </p>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {fundraiserFeatures.map((feature, index) => (
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
                  onClick={() => window.open('https://www.ketto.org/fundraiser/ignite-digital-learning-of-tribal-students', '_blank')}
                >
                  <Heart className="w-5 h-5 mr-2" />
                  Support Our Fundraiser
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
              Join our mission to transform education for underserved communities. Whether through 
              book donations or supporting digital learning initiatives, every contribution counts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => window.open('https://vercel.com/adarshs-projects-dd03218c/pustakdhaan', '_blank')}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Donate Books
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.open('https://www.ketto.org/fundraiser/ignite-digital-learning-of-tribal-students', '_blank')}
              >
                <Monitor className="w-5 h-5 mr-2" />
                Fund Digital Learning
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
