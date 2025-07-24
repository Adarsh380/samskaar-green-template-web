import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Newspaper, Globe } from "lucide-react";

const Recognitions = () => {
  const recognitions = [
    {
      title: "Youth Changemaker Award",
      organization: "Badari-Kothagudam District Authorities",
      description: "Recognized for outstanding contributions to tribal education and digital literacy initiatives in remote tribal hamlets, receiving the Champions of Change award for addressing critical issues of literacy in underserved communities.",
      type: "Award",
      year: "2024",
      icon: Award,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      image: "/lovable-uploads/f6bad3ba-c0ec-4eb2-b8c4-f11a0a9f4d9e.png"
    },
    {
      title: "City's Angels Award",
      organization: "Times of India",
      description: "Featured as one of the young changemakers making a significant impact in education and community development across Hyderabad.",
      type: "Media Recognition",
      year: "2024",
      icon: Newspaper,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      image: "/lovable-uploads/e580c2dd-42e7-40af-91e6-e0d541c8757e.png"
    },
    {
      title: "International Media Coverage",
      organization: "Solar Cell USA",
      description: "Featured in international publication highlighting innovative approach to bringing solar-powered digital education to tribal communities.",
      type: "International Coverage",
      year: "2025",
      icon: Globe,
      color: "text-green-600",
      bgColor: "bg-green-50",
      link: "https://usasolarcell.com/news/2025/01/27/teen-empowers-tribal-kids-with-solar-digital-education/",
      linkText: "Read Full Article"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recognitions & Awards
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Celebrating achievements and recognition for our commitment to transforming education in rural communities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {recognitions.map((recognition, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 ${recognition.bgColor} rounded-full flex items-center justify-center`}>
                      <recognition.icon className={`w-6 h-6 ${recognition.color}`} />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {recognition.year}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {recognition.title}
                  </CardTitle>
                  <div className="text-sm font-medium text-primary mb-2">
                    {recognition.organization}
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">
                    {recognition.type}
                  </Badge>
                </CardHeader>
                <CardContent className="pt-0">
                  {recognition.image && (
                    <div className="mb-4 rounded-lg overflow-hidden">
                      <img 
                        src={recognition.image} 
                        alt={recognition.title}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {recognition.description}
                  </p>
                  {recognition.link && (
                    <a 
                      href={recognition.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      {recognition.linkText}
                      <Globe className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Recognition Drives Our Mission Forward
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              These recognitions serve as motivation to continue our work in transforming educational landscapes 
              in rural and tribal communities. Each award and media coverage helps amplify our mission and 
              inspires others to join our cause for educational equity.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Recognitions;