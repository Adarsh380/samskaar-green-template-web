
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe every child deserves access to quality education regardless of their background."
    },
    {
      icon: Target,
      title: "Impact",
      description: "We focus on creating measurable, sustainable change in rural educational communities."
    },
    {
      icon: Users,
      title: "Community",
      description: "We work hand-in-hand with local communities to ensure long-lasting transformation."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all our educational programs and initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Samskaar Foundation
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforming rural education through dedicated community partnerships and innovative learning solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Samskaar Foundation was born from a simple yet powerful belief: every child, regardless of their geographical location or economic background, deserves access to quality education. Our journey began when we witnessed the educational challenges faced by students in rural Telangana.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                What started as a small initiative to set up libraries in government schools has grown into a comprehensive educational transformation program. We've expanded our reach to include summer camps, digital literacy programs, and community engagement initiatives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we're proud to have impacted over 450 students across 10 government schools and 13 tribal hamlets, with a focus on sustainable, community-driven change.
              </p>
            </div>
            <div className="bg-primary/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To bridge the educational gap in rural communities by providing access to quality learning resources, digital literacy, and holistic educational experiences that empower students to achieve their full potential.
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A future where every rural student has equal access to transformative education, creating empowered communities and breaking cycles of educational inequality.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
