import Card from "./Card";

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="h-12 w-12 rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-900">
            {testimonial.name}
          </h4>
          <p className="text-xs text-gray-500">
            {testimonial.role}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-gray-600">
        "{testimonial.message}"
      </p>

      <div className="mt-3 text-yellow-500 text-sm">
        {"⭐".repeat(testimonial.rating)}
      </div>
    </Card>
  );
};

export default TestimonialCard;