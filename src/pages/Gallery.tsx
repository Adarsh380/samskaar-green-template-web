
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      src: "/lovable-uploads/1fc09e82-87ab-4b2e-86a4-fcd8c8e28b69.png",
      alt: "Library setup at government school",
      category: "Libraries"
    },
    {
      src: "/lovable-uploads/0bdd1176-1d26-4038-a01a-4dae2dff5164.png",
      alt: "Students participating in summer camp activities",
      category: "Summer Camps"
    },
    {
      src: "/lovable-uploads/5793e3b5-4bb8-4f19-8046-1400354ee1fb.png",
      alt: "Digital literacy session with Solar TV",
      category: "Digital Education"
    },
    {
      src: "/lovable-uploads/28d7e233-addb-4bfe-a3b7-78954beb6f4c.png",
      alt: "Community engagement and book distribution",
      category: "Community Outreach"
    },
    {
      src: "/lovable-uploads/83e8b645-7c0f-4c8b-858e-06ee66eda41c.png",
      alt: "Student volunteers conducting educational activities",
      category: "Volunteer Activities"
    },
    {
      src: "/lovable-uploads/3b22770d-a9e7-408d-928e-7f2db64b7072.png",
      alt: "Reading session in newly established library",
      category: "Libraries"
    },
    {
      src: "/lovable-uploads/205d5f0c-6079-436a-9b14-c3ee95124b57.png",
      alt: "STEM education activities during summer camp",
      category: "Summer Camps"
    },
    {
      src: "/lovable-uploads/624abae4-7db3-4328-ac3f-b850c3fe1a90.png",
      alt: "Solar TV installation in tribal hamlet",
      category: "Digital Education"
    },
    {
      src: "/lovable-uploads/bd130b47-4b42-482d-a313-f9f33cdaf89b.png",
      alt: "Health and fitness activities with students",
      category: "Summer Camps"
    },
    {
      src: "/lovable-uploads/baae805d-74b7-43ed-9876-7db4693b568f.png",
      alt: "Book collection and sorting for libraries",
      category: "Community Outreach"
    },
    {
      src: "/lovable-uploads/c538c174-87ea-45ee-96d6-97208e9a7c5d.png",
      alt: "Students engaged in digital learning",
      category: "Digital Education"
    },
    {
      src: "/lovable-uploads/c82d35fa-f4e2-450a-a652-ab9880414857.png",
      alt: "Educational games and activities",
      category: "Summer Camps"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey in Pictures
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Witness the transformation happening in government schools and tribal communities across Telangana. 
              These moments capture the essence of our mission - bringing quality education to every child.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-sm font-medium px-3 py-1 bg-black/50 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">{image.alt}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stories Behind the Pictures
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Each photograph tells a story of hope, determination, and transformation. From the joy of 
              receiving new books to the excitement of learning through Solar TVs, these images capture 
              the human impact of our educational initiatives.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">10</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Government Schools</h3>
                <p className="text-sm text-muted-foreground">Libraries established with community support</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">13</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Solar TVs</h3>
                <p className="text-sm text-muted-foreground">Bringing digital education to tribal areas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">450+</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Students Impacted</h3>
                <p className="text-sm text-muted-foreground">Lives transformed through education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
