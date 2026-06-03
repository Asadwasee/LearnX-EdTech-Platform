import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-extrabold text-primary-blue tracking-tight">404</h1>
      <h2 className="text-xl sm:text-2xl font-bold text-text-dark mt-4">Module Endpoint Not Located</h2>
      <p className="text-text-muted mt-2 max-w-md text-sm sm:text-base">
        The application path requested does not exist or has been relocated to another sub-routing node structure directory.
      </p>
      <div className="mt-8">
        <Button variant="primary" size="md" onClick={() => navigate('/')}>
          Return to Hub Portal
        </Button>
      </div>
    </div>
  );
}