import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Container from '../components/ui/Container';

// Master Dataset: Mapping directly to your existing allCourses catalog schema
const courseDetailsPool = {
  1: {
    title: "MERN Development Bootcamp",
    instructor: "A. Khan",
    instructorTitle: "Senior Full Stack Engineer & Author",
    instructorBio: "A. Khan is a veteran software architect specializing in distributed systems, modern JavaScript patterns, and cloud-native backend infrastructures.",
    instructorSkills: ["React", "Node.js", "MongoDB", "Express", "System Architecture"],
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    duration: "5 hours",
    rating: 4.9,
    category: "Web Dev",
    level: "Intermediate",
    price: "$99",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop",
    summary: "Master the complete MERN ecosystem with absolute production-ready practices, structural state routing, and complex database aggregation.",
    overview: "Step into an intensive development pipeline built for aspiring professional engineers. This comprehensive bootcamp bridges the gap between basic component structures and elite architectural patterns used by global development teams.",
    learnings: ["Architect clean, modular backend routing models.", "Design advanced state tracking patterns.", "Optimize MongoDB Atlas aggregation pipelines.", "Deploy scalable apps to production cloud environment."],
    benefits: "Gain hands-on architectural experience, an elite portfolio asset, and immediate access to community-driven source repositories."
  },
  2: {
    title: "React + Vite Practical",
    instructor: "S. Gupta",
    instructorTitle: "Frontend Architect",
    instructorBio: "S. Gupta has engineered massive user interfaces globally and is an core contributor to modern build tool optimization workflows.",
    instructorSkills: ["React.js", "Vite", "Tailwind CSS", "Performance Tuning"],
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    duration: "8 hours",
    rating: 4.8,
    category: "Web Dev",
    level: "Intermediate",
    price: "$49",
    thumbnail: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=500&fit=crop",
    summary: "Accelerate your frontend compilation development speed using the lightning-fast configurations of Vite and modern React patterns.",
    overview: "Ditch slow webpack bundles. Learn to scaffold, develop, and optimize blazing fast Single Page Applications (SPAs) using clean reactive state declarations and strict functional structures.",
    learnings: ["Configure tailored configuration profiles in Vite.", "Implement atomic design state folder principles.", "Optimize asset delivery bundles safely.", "Handle complex responsive layout structures."],
    benefits: "Build ultra-performant modern frontends that achieve 100% lighthouse metrics scores out of the box."
  },
  3: {
    title: "Advanced JavaScript Patterns",
    instructor: "R. Patel",
    instructorTitle: "Compiler Engineer",
    instructorBio: "R. Patel works deeply on runtime optimization layouts and engine configurations for next-generation ECMAScript proposals.",
    instructorSkills: ["JavaScript", "ESNext", "Design Patterns", "Memory Optimization"],
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    duration: "3 hours",
    rating: 4.7,
    category: "Web Dev",
    level: "Advanced",
    price: "$79",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop",
    summary: "Deep dive into execution contexts, closures, structural design prototypes, and memory management optimization patterns.",
    overview: "Unlock the true underlying mechanics of runtime compilation. This advanced structural module trains your eye to write bulletproof patterns capable of executing high-intensity processing logic seamlessly.",
    learnings: ["Master closures, scope chaining, and lexical environments.", "Implement behavioral design patterns smoothly.", "Profile and patch severe memory leak routines.", "Write asynchronous non-blocking script arrays."],
    benefits: "Prepare directly for elite technical interviews and senior-level application design challenges."
  },
  4: {
    title: "Python for Data Science",
    instructor: "M. Sharma",
    instructorTitle: "Data Scientist & Researcher",
    instructorBio: "M. Sharma conducts complex algorithm modeling sequences for automated industrial analytical pipelines.",
    instructorSkills: ["Python", "Pandas", "NumPy", "Data Visualizations"],
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop",
    duration: "5 hours",
    rating: 4.8,
    category: "AI",
    level: "Beginner",
    price: "$59",
    thumbnail: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=500&fit=crop",
    summary: "Transform raw datasets into actionable intelligence arrays utilizing the core analytical libraries of Python architecture.",
    overview: "Begin your artificial intelligence data tracking pipeline. Learn structural parsing patterns, clean missing parameter blocks, and generate high-impact visual metric reports effortlessly.",
    learnings: ["Parse and structure tabular matrices cleanly.", "Generate custom multi-axis dynamic plots.", "Automate database ingestion routines.", "Build foundational mathematical regressions."],
    benefits: "Establish the mandatory technical data-manipulation foundation required before starting neural model training blocks."
  },
  5: {
    title: "Deep Learning & Neural Networks",
    instructor: "P. Verma",
    instructorTitle: "AI Research Lead",
    instructorBio: "P. Verma builds advanced multi-layered computer vision solutions and optimization systems for automated logistics operations.",
    instructorSkills: ["TensorFlow", "Keras", "CNNs", "Computer Vision"],
    instructorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    duration: "7 hours",
    rating: 4.9,
    category: "AI",
    level: "Advanced",
    price: "$149",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    summary: "Construct, train, and deploy high-accuracy Convolutional Neural Networks (CNNs) and deep custom mathematical model structures.",
    overview: "Move beyond standard libraries. Program specialized layer configurations, design backpropagation matrices from scratch, and evaluate complex edge case prediction weights.",
    learnings: ["Design multi-tiered deep network layer meshes.", "Optimize gradient descent tuning boundaries.", "Process computer vision datasets via custom CNN filters.", "Configure predictive weights for validation tasks."],
    benefits: "Acquire the practical skill-set required to deploy autonomous processing modules onto scalable server nodes."
  },
  6: {
    title: "UI/UX Design Fundamentals",
    instructor: "N. Reddy",
    instructorTitle: "Lead Product Designer",
    instructorBio: "N. Reddy establishes design system architectures and aesthetic visual framework guidelines for consumer products.",
    instructorSkills: ["Figma", "Wireframing", "Visual Hierarchy", "Design Systems"],
    instructorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    duration: "2 hours",
    rating: 4.6,
    category: "Design",
    level: "Beginner",
    price: "$39",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop",
    summary: "Master typography rules, whitespace math, composition layouts, and structural wireframing principles to create stunning software interfaces.",
    overview: "Great engineering requires beautiful interface clarity. Learn the psychological layout strategies that drive high user retention rates, manage visual focus, and standardize design components.",
    learnings: ["Establish logical typographic scale metrics.", "Map cohesive corporate color palettes.", "Construct clean low-fidelity digital wireframes.", "Apply fundamental user psychology patterns."],
    benefits: "Bridge the communication boundaries between design layout systems and frontend component execution workflows."
  },
  7: {
    title: "Advanced UI Patterns",
    instructor: "K. Joshi",
    instructorTitle: "Creative Director",
    instructorBio: "K. Joshi directs aesthetic design overhauls for major digital platforms, focusing on interface interactions.",
    instructorSkills: ["Interactive Prototyping", "Micro-interactions", "A11y Standards"],
    instructorAvatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop",
    duration: "9 hours",
    rating: 4.7,
    category: "Design",
    level: "Advanced",
    price: "$89",
    thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
    summary: "Architect component design tokens, complex layout micro-animations, and full accessibility-compliant application interfaces.",
    overview: "Take your interface layouts to an exceptional level. Build design files housing fully tokenized component variants, interactive micro-states, and high-fidelity clickable models.",
    learnings: ["Construct advanced responsive auto-layout components.", "Configure precise timing curves for animations.", "Audit and implement strict accessibility parameters.", "Manage cross-platform scaling visual variables."],
    benefits: "Build modern, accessible design systems ready for large-scale enterprise environment production mapping."
  },
  8: {
    title: "Full Stack Web Development",
    instructor: "A. Khan",
    instructorTitle: "Senior Full Stack Engineer & Author",
    instructorBio: "A. Khan is a veteran software architect specializing in distributed systems, modern JavaScript patterns, and cloud-native backend infrastructures.",
    instructorSkills: ["React", "Node.js", "SQL/NoSQL", "DevOps Pipelines"],
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    duration: "6 hours",
    rating: 5.0,
    category: "Web Dev",
    level: "Intermediate",
    price: "$119",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    summary: "Integrate rich single-page interfaces safely with scalable backend APIs, database caches, and continuous deployment workflows.",
    overview: "The complete engineering path. Learn how to securely bridge frontend interface state management logic with robust backend servers, configuring safe multi-point data pathways.",
    learnings: ["Build structured relational and document databases.", "Program protected authentication middleware layers.", "Deploy operational build pipelines to live hosting environments.", "Configure automated unit-testing suites for route endpoints."],
    benefits: "Deliver complete end-to-end application lifecycle assets without relying on pre-built server wrappers."
  },
  9: {
    title: "Machine Learning Basics",
    instructor: "S. Gupta",
    instructorTitle: "Frontend Architect & AI Enthusiast",
    instructorBio: "S. Gupta has engineered massive user interfaces globally and develops optimization algorithms for structural data modeling.",
    instructorSkills: ["Scikit-Learn", "Regression Models", "Data Pipelines"],
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    duration: "8 hours",
    rating: 4.7,
    category: "AI",
    level: "Beginner",
    price: "$69",
    thumbnail: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=500&fit=crop",
    summary: "Understand foundational statistical learning theories, clean variable parameters, and train common regression models.",
    overview: "Your introductory launchpad into predictive computation. Demystify mathematical datasets by writing clean algorithmic data pipelines that automatically detect hidden structural correlations.",
    learnings: ["Clean datasets containing missing data nodes.", "Train linear, logistic, and random-forest models.", "Evaluate accuracy scores utilizing precision matrices.", "Structure modular pipeline scripts for predictions."],
    benefits: "Gain a solid entry-level grasp of automated model operations to smoothly transition into neural computing layers."
  }
};

const DurationIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const LevelIcon = () => (
  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
  </svg>
);

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-sm font-semibold text-gray-800 ml-1.5">{rating}</span>
    </div>
  );
};

export default function CourseDetailPage() {
  const { id } = useParams();
  
  // Safe Match Check: Convert URL param to a standard safe key check
  const course = courseDetailsPool[id];

  // Professional Error Handling "Course Not Found" Page UI
  if (!course) {
    return (
      <div className="py-20 text-center bg-white">
        <Container>
          <div className="max-w-md mx-auto space-y-6 p-8 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Course Not Found</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The technical program directory you are trying to access does not exist or has been removed from our active databases.
            </p>
            <Link 
              to="/courses" 
              className="inline-block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm transition text-sm text-center tracking-wide"
            >
              Return to Courses Page
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-10 bg-white">
      <Container>
        <div className="mb-6">
          <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Technical Programs
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* LEFT SIDEBAR */}
          <div className="lg:col-span-2 space-y-8">
            <section className="space-y-4">
              <div className="inline-flex items-center gap-2">
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                  {course.category}
                </span>
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-gray-100 text-gray-700">
                  {course.level}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                {course.title}
              </h1>
              
              <p className="text-lg text-gray-600 font-normal leading-relaxed">
                {course.summary}
              </p>

              <div className="flex flex-wrap items-center gap-5 pt-2 text-sm text-gray-600 border-b border-gray-100 pb-6">
                <div className="flex items-center gap-1.5">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                    {course.instructor.charAt(0)}
                  </div>
                  <span>Instructor: <strong className="font-medium text-gray-800">{course.instructor}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DurationIcon />
                  <span>Duration: <strong className="font-medium text-gray-800">{course.duration}</strong></span>
                </div>
                <div className="flex items-center gap-1.5">
                  <StarRating rating={course.rating} />
                </div>
              </div>
            </section>

            {/* Mobile Adaptive Blocks */}
            <div className="block lg:hidden space-y-6">
              <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-md bg-gray-900 aspect-video group">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <button className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-blue-700 transform hover:scale-105 transition-all">
                    <svg className="w-6 h-6 ml-1 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </button>
                </div>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 shadow-sm space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-medium text-gray-500">Access Fee</span>
                  <span className="text-3xl font-extrabold text-gray-900">{course.price}</span>
                </div>
                <button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm transition-all text-center">
                  Enroll Now
                </button>
              </div>
            </div>

            {/* Course Description Section */}
            <section className="space-y-6 pt-2">
              <div className="space-y-3">
                <h2 className="text-xl font-bold text-gray-900">Program Overview</h2>
                <p className="text-gray-600 leading-relaxed text-base">{course.overview}</p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 space-y-3">
                <h3 className="text-base font-bold text-gray-800">What you will learn</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.learnings.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-bold text-gray-800">Benefits of joining</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{course.benefits}</p>
              </div>
            </section>

            {/* Instructor Section */}
            <section className="pt-4 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Your Instructor</h2>
              <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <img src={course.instructorAvatar} alt={course.instructor} className="w-16 h-16 rounded-full object-cover border-2 border-gray-100 shadow-inner shrink-0" />
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{course.instructor}</h3>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{course.instructorTitle}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{course.instructorBio}</p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {course.instructorSkills.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-gray-100 border border-gray-200 text-gray-700 text-xs rounded-md font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* RIGHT SIDEBAR (Desktop) */}
          <div className="hidden lg:block lg:col-span-1 lg:sticky lg:top-6 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md">
              <div className="relative bg-gray-950 aspect-video w-full group">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover opacity-85" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all cursor-pointer">
                    <svg className="w-5 h-5 ml-0.5 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Course Price</span>
                  <span className="text-3xl font-black text-gray-900 tracking-tight">{course.price}</span>
                </div>

                <div className="space-y-2.5 border-t border-b border-gray-100 py-4 text-xs font-medium text-gray-600">
                  <div className="flex items-center gap-2">
                    <DurationIcon />
                    <span>Total Runtime: <strong className="text-gray-800">{course.duration}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LevelIcon />
                    <span>Skill Rank: <strong className="text-gray-800">{course.level}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                    <span>Full Lifetime Platform Access</span>
                  </div>
                </div>

                <button className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-sm hover:shadow-md transition-all text-sm tracking-wide">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}