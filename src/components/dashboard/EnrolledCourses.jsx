import React from 'react';
import CourseCard from './CourseCard';

export default function EnrolledCourses({ courses = [] }) {
  if (!courses.length) return <div className="text-sm text-text-muted">No enrolled courses yet.</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {courses.map((c) => (
        <CourseCard key={c.id} course={c} />
      ))}
    </div>
  );
}
