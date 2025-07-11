
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const galleryItems = [
    {
      title: "Summer Camp Activities",
      description: "Students engaged in interactive learning sessions during our summer camp program",
      category: "Summer Camps",
      image: "/lovable-uploads/bd130b47-4b42-482d-a313-f9f33cdaf89b.png"
    },
    {
      title: "Student Interaction Session",
      description: "Volunteers conducting educational activities with students in classroom setting",
      category: "Summer Camps",
      image: "/lovable-uploads/fa949e39-2ff8-44a9-8403-5b1f4e3d05a2.png"
    },
    {
      title: "Classroom Learning Environment",
      description: "Students participating in focused learning activities with environmental awareness",
      category: "Educational Programs",
      image: "/lovable-uploads/c82d35fa-f4e2-450a-a652-ab9880414857.png"
    },
    {
      title: "Summer Camp Group Session",
      description: "Community volunteers engaging with students in summer educational programs",
      category: "Summer Camps",
      image: "/lovable-uploads/624abae4-7db3-4328-ac3f-b850c3fe1a90.png"
    },
    {
      title: "Achievement Recognition",
      description: "Certificate presentation ceremony recognizing student achievements",
      category: "Community",
      image: "/lovable-uploads/ed125601-0018-4c18-b1f0-258fb2f9548f.png"
    }
  ];

  const categories = ["All", "Summer Camps", "Educational Programs", "Community"];

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Capturing moments of transformation and joy in our educational initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">Share Your Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Have photos from our programs or events? We'd love to feature them in our gallery to showcase the impact of our work together.
              </p>
              <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                Submit Photos
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
