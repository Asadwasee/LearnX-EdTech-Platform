import CategoryCard from "../ui/CategoryCard";

const categories = [
  {
    id: 1,
    icon: "🤖",
    title: "Artificial Intelligence",
    description: "Explore machine learning & AI tools",
    gradient: "bg-gradient-to-br from-indigo-50 to-indigo-100",
  },
  {
    id: 2,
    icon: "💻",
    title: "Web Development",
    description: "Build modern responsive websites",
    gradient: "bg-gradient-to-br from-blue-50 to-blue-100",
  },
  {
    id: 3,
    icon: "🎨",
    title: "UI/UX Design",
    description: "Design beautiful user experiences",
    gradient: "bg-gradient-to-br from-pink-50 to-pink-100",
  },
  {
    id: 4,
    icon: "📈",
    title: "Digital Marketing",
    description: "Grow brands with online strategies",
    gradient: "bg-gradient-to-br from-green-50 to-green-100",
  },
];

const CategoriesGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="p-6 border-2 border-dashed border-gray-200 rounded-xl bg-secondary-white">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore Categories
          </h2>
          <p className="mt-3 text-gray-600">
            Choose your learning path and start growing
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategoriesGrid;