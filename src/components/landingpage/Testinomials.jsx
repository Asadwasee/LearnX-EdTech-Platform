import TestimonialCard from "../ui/Testinomialcard";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Frontend Developer",
    message: "This platform helped me learn React in just a few weeks!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "UI/UX Designer",
    message: "Amazing courses and very easy to follow content.",
    rating: 4,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    role: "Student",
    message: "Best learning experience I’ve ever had online.",
    rating: 5,
    image: "https://plus.unsplash.com/premium_photo-1705018501151-4045c97658a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHdvbWFufGVufDB8fDB8fHww",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl bg-secondary-white">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            What Students Say
          </h2>
          <p className="mt-3 text-gray-600">
            Real feedback from our learners
          </p>
        </div>

        {/* Cards (slider-like grid) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;