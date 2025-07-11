
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

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
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <select className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>General Inquiry</option>
                      <option>Volunteer Opportunity</option>
                      <option>Partnership</option>
                      <option>Donation</option>
                      <option>Media Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-2 border border-input rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us how we can help you or how you'd like to get involved..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
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
