
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const galleryItems = [
    {
      title: "Library Setup",
      description: "Students exploring new books in their school library",
      category: "Libraries"
    },
    {
      title: "Summer Camp Activities",
      description: "Children engaged in creative learning activities",
      category: "Summer Camps"
    },
    {
      title: "Solar TV Installation",
      description: "Digital literacy program in tribal hamlet",
      category: "Digital Literacy"
    },
    {
      title: "Reading Session",
      description: "Students participating in group reading sessions",
      category: "Libraries"
    },
    {
      title: "Community Gathering",
      description: "Parents and teachers attending awareness program",
      category: "Community"
    },
    {
      title: "Educational Workshop",
      description: "Teachers training on modern teaching methods",
      category: "Training"
    }
  ];

  const categories = ["All", "Libraries", "Summer Camps", "Digital Literacy", "Community", "Training"];

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
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📸</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Photo Coming Soon</p>
                  </div>
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
