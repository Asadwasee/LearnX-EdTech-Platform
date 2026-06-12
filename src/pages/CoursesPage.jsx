import React, { useState } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';

const allCourses = [
  {
    id: 1,
    title: "MERN Development Bootcamp",
    instructor: "Instructor: A. Khan",
    duration: "5 hours",
    rating: 4.9,
    category: "Web Dev",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "React + Vite Practical",
    instructor: "Instructor: S. Gupta",
    duration: "8 hours",
    rating: 4.8,
    category: "Web Dev",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Advanced JavaScript Patterns",
    instructor: "Instructor: R. Patel",
    duration: "3 hours",
    rating: 4.7,
    category: "Web Dev",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Python for Data Science",
    instructor: "Instructor: M. Sharma",
    duration: "5 hours",
    rating: 4.8,
    category: "AI",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "Deep Learning & Neural Networks",
    instructor: "Instructor: P. Verma",
    duration: "7 hours",
    rating: 4.9,
    category: "AI",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    instructor: "Instructor: N. Reddy",
    duration: "2 hours",
    rating: 4.6,
    category: "Design",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
  },
  {
    id: 7,
    title: "Advanced UI Patterns",
    instructor: "Instructor: K. Joshi",
    duration: "9 hours",
    rating: 4.7,
    category: "Design",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop"
  },
  {
    id: 8,
    title: "Full Stack Web Development",
    instructor: "Instructor: A. Khan",
    duration: "6 hours",
    rating: 5.0,
    category: "Web Dev",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
  },
  {
    id: 9,
    title: "Machine Learning Basics",
    instructor: "Instructor: S. Gupta",
    duration: "8 hours",
    rating: 4.7,
    category: "AI",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=250&fit=crop"
  }
];

// Duration Icon Component (stylish SVG)
const DurationIcon = () => (
  <svg 
    className="w-4 h-4 text-gray-500" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-sm text-gray-600 ml-1">{rating}</span>
    </div>
  );
};

export default function CoursesPage() {
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');

  const categories = ['All', 'Web Dev', 'AI', 'Design'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = allCourses.filter((course) => {
    if (category !== 'All' && course.category !== category) return false;
    if (level !== 'All' && course.level !== level) return false;
    return true;
  });

  return (
    <div className="py-10">
      <Container>
        <SectionTitle 
          title="Explore Technical Programs" 
          subtitle="Filter through verified catalog directories to accelerate your active tracking goals." 
        />

        {/* Filter Section */}
        <div className="flex flex-wrap gap-6 mb-8 p-5 bg-gray-50 rounded-xl border border-gray-200">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 text-sm rounded-full transition ${
                    category === cat
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
            <div className="flex flex-wrap gap-2">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setLevel(lvl)}
                  className={`px-4 py-1.5 text-sm rounded-full transition ${
                    level === lvl
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredCourses.length} of {allCourses.length} courses
        </p>

        {/* Course Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No courses match your filters. Try adjusting them.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} course={course}>
                {/* Custom card content can go here if needed */}
              </Card>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}