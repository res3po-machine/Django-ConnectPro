const Navbar: React.FC = () => {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className=" container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center text-white font-bold">
            CP
          </div>
          <span className="text-xl font-bold">ConnectPro</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </a>
          <a href="#about" className="text-sm font-medium hover:text-primary">
            About
          </a>
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <a href="/login">
            <button className="h-10 px-4 py-2 rounded-md text-sm hover:bg-accent">
              Login
            </button>
          </a>
          <a href="/signup">
            <button className="h-10 px-4 py-2 rounded-md text-sm bg-teal-500 text-white hover:bg-teal-500/90">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
