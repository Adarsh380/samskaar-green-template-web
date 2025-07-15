
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch to learn more about our work, volunteer opportunities, or partnership possibilities.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            
            {/* Founder Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Meet Our Founder</h2>
              
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <Avatar className="w-24 h-24 flex-shrink-0">
                      <AvatarImage 
                        src="/lovable-uploads/27eda1c2-615d-4e44-82ac-d78f063f1a1e.png" 
                        alt="Adarsh Vikas" 
                      />
                      <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-foreground mb-2">Adarsh Vikas</h3>
                      <p className="text-primary font-medium mb-4">Founder & Director</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Adarsh is an IBDP Year 2 student with a deep passion for computer science and business. 
                        Driven by a vision to make education equitable for all, he founded Samskaar Foundation 
                        to bridge the educational gap between government and private schools. His commitment to 
                        social impact and educational reform continues to drive the foundation's mission of 
                        transforming rural education and empowering underserved communities.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
              
              <div className="bg-primary/5 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ways to Get Involved</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Volunteer</h4>
                      <p className="text-sm text-muted-foreground">Join our team and make a direct impact in rural education</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Partner</h4>
                      <p className="text-sm text-muted-foreground">Collaborate with us on educational initiatives</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-foreground">Donate</h4>
                      <p className="text-sm text-muted-foreground">Support our programs with financial contributions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Email Us</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Personal Contact</p>
                      <a href="mailto:s.adarshvikas@gmail.com" className="text-primary hover:underline">
                        s.adarshvikas@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                    <Mail className="w-5 h-5 text-primary mr-3" />
                    <div>
                      <p className="font-medium text-foreground">Foundation Contact</p>
                      <a href="mailto:samskaar.foundation@gmail.com" className="text-primary hover:underline">
                        samskaar.foundation@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
