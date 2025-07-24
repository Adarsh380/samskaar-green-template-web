
import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {

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
      title: "Outdoor Summer Camp Activity",
      description: "Children participating in outdoor group activities and games during summer camp",
      category: "Summer Camps",
      image: "/lovable-uploads/eb4e7d38-718c-4906-a17b-5e049d7e8aaf.png"
    },
    {
      title: "Certificate Presentation Ceremony",
      description: "Students receiving certificates of achievement in classroom setting",
      category: "Summer Camps",
      image: "/lovable-uploads/83e8b645-7c0f-4c8b-858e-06ee66eda41c.png"
    },
    {
      title: "Educational Program Session",
      description: "Volunteers and students participating in educational program activities",
      category: "Summer Camps",
      image: "/lovable-uploads/3b22770d-a9e7-408d-928e-7f2db64b7072.png"
    },
    {
      title: "Outdoor Group Activity",
      description: "Children forming chains and participating in team building exercises",
      category: "Summer Camps",
      image: "/lovable-uploads/205d5f0c-6079-436a-9b14-c3ee95124b57.png"
    },
    {
      title: "Achievement Recognition Event",
      description: "Group photo with students holding their certificates of completion",
      category: "Summer Camps",
      image: "/lovable-uploads/1fc09e82-87ab-4b2e-86a4-fcd8c8e28b69.png"
    },
    {
      title: "Individual Achievement Recognition",
      description: "Student receiving certificate of appreciation from program coordinator",
      category: "Summer Camps",
      image: "/lovable-uploads/cb41272c-3e4c-4884-906d-9e5bda5ef36a.png"
    },
    {
      title: "Academic Recognition Ceremony",
      description: "Certificate presentation acknowledging student participation and achievement",
      category: "Summer Camps",
      image: "/lovable-uploads/ee4c7bae-71e2-454e-8a65-4ff92ece6d42.png"
    },
    {
      title: "Program Completion Certificate",
      description: "Student proudly receiving completion certificate from education program",
      category: "Summer Camps",
      image: "/lovable-uploads/5793e3b5-4bb8-4f19-8046-1400354ee1fb.png"
    },
    {
      title: "Educational Excellence Recognition",
      description: "Certificate presentation ceremony recognizing outstanding student performance",
      category: "Summer Camps",
      image: "/lovable-uploads/baae805d-74b7-43ed-9876-7db4693b568f.png"
    },
    {
      title: "Interactive Learning Session",
      description: "Students engaged in collaborative learning activities with volunteer educators",
      category: "Summer Camps",
      image: "/lovable-uploads/cafbd77a-ed59-4c19-b74b-f3e8ad79ecd5.png"
    },
    {
      title: "Student Achievement Award",
      description: "Young student receiving certificate of achievement for academic excellence",
      category: "Summer Camps",
      image: "/lovable-uploads/c538c174-87ea-45ee-96d6-97208e9a7c5d.png"
    },
    {
      title: "Classroom Learning Environment",
      description: "Students participating in focused learning activities with environmental awareness",
      category: "Summer Camps",
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
      category: "Summer Camps",
      image: "/lovable-uploads/ed125601-0018-4c18-b1f0-258fb2f9548f.png"
    },
    {
      title: "Book Collection Drive",
      description: "Community book donation collection boxes set up for our literacy initiative",
      category: "Book Drive",
      image: "/lovable-uploads/28d7e233-addb-4bfe-a3b7-78954beb6f4c.png"
    },
    {
      title: "Volunteer Teaching Session",
      description: "Educational volunteers conducting interactive learning activities with tribal students",
      category: "Summer Camps",
      image: "/lovable-uploads/3a3c952f-c92b-4b56-b2ac-1f71442bea50.png"
    },
    {
      title: "Environmental Awareness Classroom",
      description: "Students participating in environmental education with 'Save Trees' awareness campaign",
      category: "Summer Camps", 
      image: "/lovable-uploads/3d9ee58c-67f6-43f6-b566-ea7a7025dde5.png"
    },
    {
      title: "One-on-One Learning Support",
      description: "Volunteer providing personalized educational assistance to students",
      category: "Summer Camps",
      image: "/lovable-uploads/2af1f58e-5cc1-4b4d-9030-3dc3baa7a7e4.png"
    },
    {
      title: "Collaborative Learning Activity",
      description: "Students working together on educational activities with peer support",
      category: "Summer Camps",
      image: "/lovable-uploads/87a3b434-0e3e-4452-a68a-fa98e0bd1bf7.png"
    },
    {
      title: "Interactive Educational Demonstration",
      description: "Students gathered for hands-on learning demonstration by volunteers",
      category: "Summer Camps",
      image: "/lovable-uploads/74605a97-2c57-469a-8be9-4720facaa787.png"
    },
    {
      title: "Summer Program Certificate Ceremony",
      description: "Students and volunteers celebrating successful completion of summer educational program",
      category: "Summer Camps",
      image: "/lovable-uploads/878be833-b7d3-4858-bb22-fdab63893718.png"
    },
    {
      title: "Community Book Donation Initiative",
      description: "Book collection drive box supporting literacy programs in rural communities",
      category: "Book Drive",
      image: "/lovable-uploads/aa9492a6-64b6-43ae-9d05-b23f5c878e94.png"
    },
    {
      title: "Young Literacy Champions",
      description: "Students proudly supporting book collection drive for community libraries",
      category: "Book Drive",
      image: "/lovable-uploads/45aa99aa-2639-40fb-a9a7-d8b92e72a826.png"
    }
  ];

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default Gallery;
