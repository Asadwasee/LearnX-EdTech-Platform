import React, { useState } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';


const allCourses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    rating: 4.8,
    category: "Web Dev",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop"
  },
  {
    id: 2,
    title: "Advanced React & Next.js",
    instructor: "John Smith",
    duration: "5 hours",
    rating: 4.9,
    category: "Web Dev",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=250&fit=crop"
  },
  {
    id: 3,
    title: "Python for Data Science & AI",
    instructor: "Emily Chen",
    duration: "8 hours",
    rating: 4.7,
    category: "AI",
    level: "Intermediate",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop"
  },
  {
    id: 4,
    title: "Deep Learning & Neural Networks",
    instructor: "Michael Lee",
    duration: "10 hours",
    rating: 4.9,
    category: "AI",
    level: "Advanced",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop"
  },
  {
    id: 5,
    title: "UI/UX Design Masterclass",
    instructor: "Lisa Anderson",
    duration: "6 hours",
    rating: 4.6,
    category: "Design",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=250&fit=crop"
  },
  {
    id: 6,
    title: "Responsive Web Design",
    instructor: "Mark Williams",
    duration: "5 hours",
    rating: 4.5,
    category: "Web Dev",
    level: "Beginner",
    thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop"
  }
];

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

        <p className="text-sm text-gray-500 mb-4">
          Showing {filteredCourses.length} of {allCourses.length} courses
        </p>

        {filteredCourses.length === 0 ? (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <p className="text-gray-500">No courses match your filters. Try adjusting them.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} course={course} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}