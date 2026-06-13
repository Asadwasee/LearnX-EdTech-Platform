
import HeroSection from '../components/landingpage/HeroSection';
import FeaturedCourses from '../components/landingpage/FeaturedCourses';
import CategoriesGrid from '../components/landingpage/CategoriesGrid';
import Testimonials from '../components/landingpage/Testinomials';

export default function HomePage() {
  return (
    <div className="py-6 space-y-24">
      
      {/* =========================================================================
          INTEGRATION LANDMARK: FIZA (HOME PAGE DESIGN & HERO INTERFACES)
          Requirements: 
          - Hero Component ("Learn Skills That Matter", Custom CTA actions)
          - Featured Courses Layout Row Mapping
          - Categories Nav Blocks Grid (AI, Web Dev, UI/UX)
          - Testimonials Slider Component Carousel
          - Instructor Highlight Cards
         ========================================================================= */}
         <HeroSection/>
         <FeaturedCourses/>
         <CategoriesGrid/>
         <Testimonials/>
         </div>
  );
}