const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 text-center">
      <div className="max-w-4xl mx-auto space-y-8">
        <span className="inline-block bg-orange-400 px-3 py-1 rounded-full text-xs font-semibold text-white">
          ⚡ Join 10,000+ entrepreneurs
        </span>

        <h1 className="text-4xl md:text-6xl font-bold">
          Network smarter, not harder
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Connect with the right people at the right time. A modern networking
          platform built for entrepreneurs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/signup">
            <button className="h-11 px-8 rounded-md bg-teal-500 text-white">
              Start Connecting Free
            </button>
          </a>
          <button className="h-11 px-8 rounded-md border">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
