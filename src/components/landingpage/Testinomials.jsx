import TestimonialCard from "../ui/Testinomialcard";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Frontend Developer",
    message: "This platform helped me learn React in just a few weeks!",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Ali Raza",
    role: "UI/UX Designer",
    message: "Amazing courses and very easy to follow content.",
    rating: 4,
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    role: "Student",
    message: "Best learning experience I’ve ever had online.",
    rating: 5,
    image: "https://i.pravatar.cc/150?img=3",
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