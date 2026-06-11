import React from 'react';
import Container from '../components/ui/Container';
import ProgressBar from '../components/dashboard/ProgressBar';
import { courses } from '../data/courses';
import Sidebar from '../components/dashboard/Sidebar';
import Card from '../components/ui/Card';

export default function DashboardProgressPage() {
  const overall = Math.round(courses.reduce((s, c) => s + c.progress, 0) / Math.max(1, courses.length));

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <Container className="py-8 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-start">
          <div className="md:col-span-1">
            <Sidebar />
          </div>

          <main className="md:col-span-3">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold mb-3">Your Overall Progress</h2>
              <p className="text-sm text-text-muted mb-6">This page shows your aggregate progress across enrolled courses.</p>

              <div className="mb-6">
                <ProgressBar value={overall} />
              </div>

              <div className="grid gap-4">
                {courses.map((c) => (
                  <Card key={c.id} className="p-4 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm">{c.title}</div>
                      <div className="text-sm text-text-muted">{c.progress}%</div>
                    </div>

                    <div className="w-full">
                      <div className="w-full h-2 bg-secondary-gray-dark rounded-full overflow-hidden">
                        <div className="h-full bg-primary-green rounded-full transition-all duration-700" style={{ width: `${c.progress}%` }} />
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </main>
        </div>
      </Container>
    </div>
  );
}
