import Button from "../common/Button";

const HeroSection = () => {
  return (
    <section  id="hero-placeholder" className="bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-green/5 py-16 border-b border-secondary-gray-dark">
      <div className="p-8 md:p-12 border-2 border-dashed border-primary-blue/30 rounded-2xl bg-secondary-white text-center">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              🚀 Upskill Your Future
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900 lg:text-7xl">
              Learn Skills{" "}
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                That Matter
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              Master in-demand skills with expert-led courses in AI, Web
              Development, and UI/UX Design. Build real-world projects and
              accelerate your career.
            </p>

            <div className="mt-8">
              <Button>
                Start Learning
              </Button>
            </div>
          </div>

          {/* Right Side Illustration */}
          <div className="relative flex justify-center">
            <div className="relative h-[400px] w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
              
              <div className="rounded-2xl bg-indigo-100 p-4">
                <h3 className="font-semibold text-gray-800">
                  AI Fundamentals
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Learn Machine Learning & Generative AI
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-purple-100 p-4">
                <h3 className="font-semibold text-gray-800">
                  UI/UX Design
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Design modern digital experiences
                </p>
              </div>

              <div className="mt-4 rounded-2xl bg-emerald-100 p-4">
                <h3 className="font-semibold text-gray-800">
                  Web Development
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Build responsive web applications
                </p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -left-4 top-10 rounded-xl bg-white px-4 py-2 shadow-lg">
              ⭐ 4.9 Rating
            </div>

            <div className="absolute -right-4 bottom-10 rounded-xl bg-white px-4 py-2 shadow-lg">
              🎓 10K+ Students
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;