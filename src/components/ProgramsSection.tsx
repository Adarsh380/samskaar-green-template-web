
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Sun, Monitor, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "School Libraries",
      description: "Setting up fully equipped libraries in government schools to foster reading habits and academic excellence among students.",
      achievements: "10 libraries established",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: Sun,
      title: "Summer Camps",
      description: "Engaging educational summer camps that combine learning with fun activities, keeping students motivated during holidays.",
      achievements: "450+ students participated",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: Monitor,
      title: "Digital Literacy",
      description: "Installing Solar TVs and promoting digital literacy in bridge schools and tribal hamlets for modern education access.",
      achievements: "13 Solar TVs installed",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Working closely with local communities to ensure sustainable educational development and long-term impact.",
      achievements: "Multiple districts covered",
      color: "bg-purple-50 border-purple-200"
    }
  ];

  return (
    <section id="programs" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive educational initiatives designed to create lasting impact in rural communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card key={index} className={`${program.color} hover:shadow-lg transition-shadow duration-300`}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                    <div className="text-sm text-primary font-medium">{program.achievements}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Join Our Mission
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every contribution helps us reach more students and create more opportunities for quality education in rural areas.
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
