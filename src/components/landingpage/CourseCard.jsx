import Card from "../ui/Card";
import Button from "../common/Button";

const CourseCard = ({ course }) => {
  return (
    <Card>
      <img
        src={course.image}
        alt={course.title}
        className="h-40 w-full rounded-lg object-cover"
      />

      <h3 className="mt-4 text-lg font-semibold">
        {course.title}
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        {course.description}
      </p>

      <div className="mt-4">
        <Button>View Course</Button>
      </div>
    </Card>
  );
};

export default CourseCard;