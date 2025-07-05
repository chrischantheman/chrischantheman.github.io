const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 bg-background border-b border-border z-50">
      <div className="container max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold font-heading text-foreground">
            Chris Chan
          </h1>
          
          <nav className="flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              About Me
            </button>
            <button 
              onClick={() => scrollToSection('posts')}
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Posts
            </button>
            <button 
              onClick={() => scrollToSection('find-me')}
              className="text-foreground hover:text-primary transition-colors font-body"
            >
              Find Me
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;