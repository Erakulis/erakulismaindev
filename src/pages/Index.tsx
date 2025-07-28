import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            in this page we will insert the homepage content
          </h1>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <a href="https://erakulishomepage.lovable.app" target="_blank" rel="noopener noreferrer">
              check the page
            </a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;