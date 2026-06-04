import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// Architectural Page Level Imports
import HomePage from '../pages/HomePage';
import CoursesPage from '../pages/CoursesPage';
import CourseDetailPage from '../pages/CourseDetailPage';
import DashboardPage from '../pages/DashboardPage';
import LessonPage from '../pages/LessonPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import LessonsPage from "../pages/LessonsPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* All Routes Nested Cleanly under Global Main Layout Framework */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="courses/:id" element={<CourseDetailPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="lesson/:id" element={<LessonPage />} />
        <Route path="lessons/:id" element={<LessonsPage />} />
        <Route path="contact" element={<ContactPage />} />
        
        {/* Wildcard Match targeting 404 Layout Error Page */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}