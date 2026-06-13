import CourseCard from "./CourseCard";

const courses = [
  {
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    title: "Web Development",
    description: "Learn React, Tailwind & modern frontend development",
    students: "15K+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
    title: "Artificial Intelligence",
    description: "Master AI concepts and real-world applications",
    students: "12K+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    title: "UI/UX Design",
    description: "Design beautiful and user-friendly interfaces",
    students: "8K+",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    title: "Digital Marketing",
    description: "Grow brands with modern marketing strategies",
    students: "10K+",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl bg-secondary-white">
        
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Courses
          </h2>
          <p className="mt-3 text-gray-600">
            Explore our most popular and trending courses
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;