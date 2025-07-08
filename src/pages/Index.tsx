import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-4xl mx-auto px-6 py-12">
        {/* About Me Section */}
        <section id="about" className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
            About Me
          </h2>
          <div className="prose prose-lg font-body text-foreground max-w-none">
            <p className="mb-4">
              Welcome to my personal website. I'm Chris Chan, and this is where I share 
              my thoughts, projects, and connect with others.
            </p>
            <p>
              This space serves as a digital home where you can learn more about me, 
              read my latest posts, and find ways to get in touch.
            </p>
          </div>
        </section>


        {/* Find Me Section */}
        <section id="find-me" className="mb-20">
       <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
            Find Me
          </h2>
          <div className="space-y-4 font-body">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">Reddit:</span>
              <a 
                href="https://www.reddit.com/u/therealsaucebaws/s/xzSUVuzKBE" 
                className="text-primary hover:underline"
              >
                Reddit/therealsaucebaws
              </a>
            </div>

          <div className="space-y-4 font-body">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">X:</span>
              <a 
                href="https://x.com/chrischanthaman?s=21&t=VOiL--BNHEXTlEEKmAqXzg" 
                className="text-primary hover:underline"
              >
                X/chrischan
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">GitHub:</span>
              <a 
                href="https://github.com/chrischantheman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/chrischantheman
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">LinkedIn:</span>
              <a 
                href="https://linkedin.com/in/chrischantheman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/chrischan
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
