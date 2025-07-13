
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImpactSection from "@/components/ImpactSection";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, BookOpen, Heart, Target } from "lucide-react";

const Impact = () => {
  const journeySteps = [
    {
      year: "2022",
      title: "The Beginning - Library Initiative",
      description: "My journey began with setting up libraries in collaboration with Joy of Reading NGO. Starting humbly within our community and school, we collected over 1000 books and established libraries in 10 government schools in Hyderabad, Telangana.",
      impact: "10 libraries established, 1000+ books collected",
      icon: BookOpen
    },
    {
      year: "2023", 
      title: "Summer Camp Program Launch",
      description: "Designed a comprehensive summer camp program for high school students. We coached student volunteers to run camps in government high schools, focusing on reading practices, STEM education, and health & fitness with a holistic approach.",
      impact: "Overwhelming participation from students and volunteers",
      icon: Target
    },
    {
      year: "2024",
      title: "Digital Literacy Expansion",
      description: "In collaboration with Indigenous Development Organization, we launched solar-powered digital education across 15 bridge schools in Bhadrachalam. Our pilot with one Solar TV increased attendance from 5 to over 50 students, leading to a successful Ketto fundraising campaign.",
      impact: "450+ students reached, 15 Solar TVs planned",
      icon: Heart
    }
  ];

  const projects = [
    {
      title: "Government School Libraries",
      location: "Hyderabad, Telangana",
      date: "2022",
      students: "10 Libraries",
      description: "In collaboration with Joy of Reading NGO, established fully equipped libraries in 10 government schools. Started with collecting over 1000 books from our community, creating dedicated reading spaces that fostered academic excellence.",
      achievements: ["10 libraries established", "1000+ books collected", "Community collaboration", "Partnership with Joy of Reading NGO"]
    },
    {
      title: "Summer Educational Camps",
      location: "ZPHS Gachibowli, Telangana",
      date: "Summer 2023",
      students: "20 Students",
      description: "Designed and implemented holistic summer camps with trained student volunteers. Programs combined reading practices, STEM education, and health & fitness, creating an engaging learning environment during school holidays for government middle school students.",
      achievements: ["Holistic curriculum design", "Student volunteer training", "STEM & fitness integration", "20 government middle school students"]
    },
    {
      title: "Solar-Powered Digital Education",
      location: "Bhadrachalam Bridge Schools",
      date: "2024-25",
      students: "450+",
      description: "Partnered with Indigenous Development Organization to bring digital literacy to tribal communities. Installed Solar TVs in areas without electricity, with our pilot program dramatically increasing attendance from 5 to over 50 students.",
      achievements: ["15 bridge schools targeted", "Solar TV pilot success", "Ketto fundraising campaign", "₹5.85 lakh raised"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Impact Journey
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From humble beginnings in 2022 to transforming education across Telangana - 
              discover how Samskaar Foundation has grown through community partnerships and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      <ImpactSection />

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Journey Through Time</h2>
            <p className="text-lg text-muted-foreground">
              Each year has brought new challenges, partnerships, and breakthroughs in our mission to transform rural education.
            </p>
          </div>

          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.year}
                  </div>
                </div>
                <Card className="flex-1 bg-white shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{step.title}</h3>
                        <p className="text-sm text-primary font-medium">{step.impact}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Project Deep Dive</h2>
          
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
                          {project.students}
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

          <div className="mt-16 bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partnerships That Make a Difference
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-6">
              Our success stems from meaningful collaborations with organizations like Joy of Reading and Indigenous Development Organization. 
              Together, we've proven that community-driven initiatives can create lasting educational transformation.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Joy of Reading</h4>
                <p className="text-sm text-muted-foreground">Library establishment partner</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2">Indigenous Development Organization</h4>
                <p className="text-sm text-muted-foreground">Tribal education collaboration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impact;
