import React from 'react';
import Container from '../components/ui/Container';
import Sidebar from '../components/dashboard/Sidebar';
import EnrolledCourses from '../components/dashboard/EnrolledCourses';
import RecentlyViewed from '../components/dashboard/RecentlyViewed';
import ProgressBar from '../components/dashboard/ProgressBar';
import Certificates from '../components/dashboard/Certificates';
import { courses } from '../data/courses';
import { lessons } from '../data/lessons';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function DashboardPage() {
  // In a real app this would come from an API / global state
  const enrolled = courses;
  // take a few recently viewed lessons by mapping lastViewed ids
  const recent = lessons.filter((l) => enrolled.some((c) => c.lastViewedLessonId === l.id));

  const overall = Math.round(enrolled.reduce((s, c) => s + c.progress, 0) / Math.max(1, enrolled.length));
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [location.hash]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <Container className="py-8 flex-grow flex flex-col">

        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          {/* Main Workspace */}
          <main className="md:col-span-3 p-6 bg-secondary-white rounded-xl">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-text-dark mb-2">Welcome back — Your Learning Dashboard</h2>
              <p className="text-sm text-text-muted">Overview of enrolled courses, live progress, and recently viewed lessons.</p>
            </div>

            <section className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Enrolled Courses</h3>
              <EnrolledCourses courses={enrolled} />
            </section>

            <section>
              <RecentlyViewed lessons={recent} />
            </section>
          </main>
        </div>
      </Container>
    </div>
  );
}