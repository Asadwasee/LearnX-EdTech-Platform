import React from 'react';
import Card from '../../components/ui/Card';

export default function RecentlyViewed({ lessons = [] }) {
  if (!lessons.length) return null;

  return (
    <div>
      <h3 className="text-sm font-semibold text-text-dark mb-3">Recently Viewed Lessons</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {lessons.map((l) => (
          <Card key={l.id} className="p-3 flex items-start gap-3">
            <div className="w-12 h-8 bg-secondary-gray-dark rounded-md flex items-center justify-center text-xs font-medium">{l.unit}</div>
            <div>
              <div className="text-sm font-medium text-text-dark">{l.title}</div>
              <div className="text-xs text-text-muted">Duration: {l.duration}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
