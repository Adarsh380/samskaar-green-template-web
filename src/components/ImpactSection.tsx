
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Users, BookOpen, Zap } from "lucide-react";

const ImpactSection = () => {
  const impacts = [
    {
      icon: Users,
      number: "1000+",
      title: "Government School & Tribal Students",
      description: "Lives changed through our educational programs",
      color: "text-green-600"
    },
    {
      icon: BookOpen,
      number: "10",
      title: "Government School Libraries",
      description: "Libraries established impacting over 500 students",
      color: "text-blue-600"
    },
    {
      icon: Monitor,
      number: "450+",
      title: "Tribal Students",
      description: "Digital literacy program beneficiaries",
      color: "text-purple-600"
    },
    {
      icon: Zap,
      number: "₹5.85 Lakh",
      title: "Funds Raised",
      description: "Invested in tribal student education",
      color: "text-orange-600"
    }
  ];

  return (
    <section id="impact" className="relative py-20 bg-muted/30 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/lovable-uploads/d8bbb5d0-c938-4247-82b7-04cfe3b1b7b1.png)' }}
      />
      <div className="absolute inset-0 bg-white/80" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Impact So Far
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Measurable change in rural education through dedicated efforts and community support
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 ${impact.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <impact.icon className={`w-8 h-8 ${impact.color}`} />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{impact.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{impact.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Transforming Communities, One School at a Time
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our work in Telangana's government schools and tribal hamlets in Badari-Kothagudam district 
            demonstrates the power of targeted educational interventions. Through libraries, summer camps, 
            and digital literacy programs, we're creating sustainable change that empowers students and communities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
