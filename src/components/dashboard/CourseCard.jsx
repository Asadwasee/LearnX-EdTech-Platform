import React from 'react';
import Card from '../../components/ui/Card';
import ProgressBar from './ProgressBar';
import { Link } from 'react-router-dom';

export default function CourseCard({ course }) {
  return (
    <Card className="flex flex-col justify-between">
      <div>
        <h4 className="text-lg font-semibold text-text-dark mb-1">{course.title}</h4>
        <div className="text-sm text-text-muted mb-3">Instructor: {course.instructor}</div>
        <div className="text-sm text-text-muted">{course.lessonsCount} lessons</div>
      </div>

      <div className="mt-4">
        <ProgressBar value={course.progress} />
        <div className="mt-3 flex items-center justify-between">
          <Link to={`/courses/${course.id}`} className="text-sm text-primary-blue font-medium">Continue</Link>
          <div className="text-xs text-text-muted">Last lesson: {course.lastViewedLessonId}</div>
        </div>
      </div>
    </Card>
  );
}
