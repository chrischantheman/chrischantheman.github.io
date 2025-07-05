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

        {/* Posts Section */}
        <section id="posts" className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
            Posts
          </h2>
          <div className="space-y-6">
            <article className="border-b border-border pb-6">
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                Welcome to My Website
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                January 2024
              </p>
              <p className="font-body text-foreground">
                This is my first post on my new personal website. I'm excited to share 
                my thoughts and experiences here. Stay tuned for more content!
              </p>
            </article>
            
            <div className="text-center py-8">
              <p className="text-muted-foreground font-body">
                More posts coming soon...
              </p>
            </div>
          </div>
        </section>

        {/* Find Me Section */}
        <section id="find-me" className="mb-20">
          <h2 className="text-3xl font-bold font-heading text-foreground mb-6">
            Find Me
          </h2>
          <div className="space-y-4 font-body">
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">Email:</span>
              <a 
                href="mailto:hello@chrischan.com" 
                className="text-primary hover:underline"
              >
                hello@chrischan.com
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">GitHub:</span>
              <a 
                href="https://github.com/chrischan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                github.com/chrischan
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="font-semibold text-foreground">LinkedIn:</span>
              <a 
                href="https://linkedin.com/in/chrischan" 
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