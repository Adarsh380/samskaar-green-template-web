
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, BookOpen } from "lucide-react";

const Impact = () => {
  const projects = [
    {
      title: "Government School Libraries",
      location: "Telangana State",
      date: "2023-2024",
      students: "300+",
      description: "Established fully equipped libraries in 10 government schools, providing access to educational books, reference materials, and creating dedicated reading spaces for students.",
      achievements: ["10 libraries established", "3000+ books distributed", "Reading programs initiated"]
    },
    {
      title: "Summer Educational Camps",
      location: "Rural Telangana",
      date: "Summer 2024",
      students: "450+",
      description: "Organized comprehensive summer camps combining academics with creative activities, keeping students engaged during vacation periods and preventing learning loss.",
      achievements: ["450+ students participated", "6 camps conducted", "Skill development programs"]
    },
    {
      title: "Digital Literacy Initiative",
      location: "Badari-Kothagudam District",
      date: "2024",
      students: "200+",
      description: "Installed Solar TVs in 13 tribal hamlets to promote digital literacy among tribal students, bridging the digital divide in remote areas.",
      achievements: ["13 Solar TVs installed", "Digital content delivery", "Technical training provided"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Impact
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Measuring the difference we've made in rural education across Telangana and beyond.
            </p>
          </div>
        </div>
      </section>

      <ImpactSection />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Project Highlights</h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-2 text-primary" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          {project.date}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          {project.students} Students
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="w-4 h-4 mr-2 text-primary" />
                          Education Focus
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-primary/5 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
