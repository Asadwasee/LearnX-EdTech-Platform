import Card from "./Card";

const CategoryCard = ({ category }) => {
  return (
    <Card className={`text-center ${category.gradient}`}>
      <div className="flex flex-col items-center justify-center py-6">
        
        {/* Icon */}
        <div className="text-3xl">
          {category.icon}
        </div>

        {/* Title */}
        <h3 className="mt-3 text-lg font-semibold text-gray-900">
          {category.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-gray-600">
          {category.description}
        </p>
      </div>
    </Card>
  );
};

export default CategoryCard;