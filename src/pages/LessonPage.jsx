import  { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import "../components/lesson/lesson.css";
import { lessons } from '../data/lessons';
import CurriculumAccordion from "../components/lesson/CurriculumAccordion";


export default function LessonPage() {
  // search/bookmark feature
  const [searchTerm, setSearchTerm] = useState("");

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("lesson-theme") || "light";
  });

  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    return JSON.parse(localStorage.getItem("lesson-bookmarks") || "[]");
  });
  useEffect(() => {
    localStorage.setItem("lesson-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("lesson-bookmarks", JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function toggleBookmark(lessonId) {
    setBookmarkedIds((currentIds) => {
      if (currentIds.includes(lessonId)) {
        return currentIds.filter((id) => id !== lessonId);
      }

      return [...currentIds, lessonId];
    });
  }

  function isBookmarked(lessonId) {
    return bookmarkedIds.includes(lessonId);
  }
  const { id } = useParams();
  const navigate = useNavigate();

  const activeLesson = useMemo(() => {
    return lessons.find((lesson) => lesson.id === Number(id)) || lessons[0];
  }, [id]);

  const activeIndex = lessons.findIndex((lesson) => lesson.id === activeLesson.id);
  const previousLesson = lessons[activeIndex - 1];
  const nextLesson = lessons[activeIndex + 1];

  const notesKey = `lesson-notes-${activeLesson.id}`;
  const [notes, setNotes] = useState("");

  useEffect(() => {
    setNotes(localStorage.getItem(notesKey) || "");
  }, [notesKey]);

  function handleNotesChange(event) {
    const value = event.target.value;
    setNotes(value);
    localStorage.setItem(notesKey, value);
  }

  function goToLesson(lesson) {
    if (!lesson) return;
    navigate(`/lesson/${lesson.id}`);
  }

  return (
      <div className="lesson-page-shell py-6" data-theme={theme}>
        <Container>
          {/* ======================================================================================
             INTEGRATION LANDMARK: UNKNOWN MEMBER (LESSON RENDER FLOW & INTERACTION)
            Requirements:
            - Video player view interaction terminal console frame UI
            - Lesson details headers matching current video tracking array indexes
            - Shared workspace notes input tracking section element textarea
            - Structural control action navigation buttons (Next / Prev Unit Switches)
            - Extracted Curriculum Dropdown Accordion List Mapping Components
           ====================================================================================== */}
          {/*lesson controls*/}
          <div className="lesson-toolbar">
            <div className="text-xs font-mono text-text-muted">
              Active Stream ID Identifier Index:{" "}
              <span className="text-primary-blue font-bold">{activeLesson.id}</span>
            </div>

            <button type="button" className="lesson-theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              <div className="w-full max-w-4xl aspect-video border border-primary-green/30 bg-secondary-white rounded-xl overflow-hidden">
                <video
                    key={activeLesson.id}
                    src={activeLesson.videoUrl}
                    controls
                    className="w-full h-full object-cover bg-black"
                >
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-secondary-white border border-secondary-gray-dark rounded-xl">
                <div>
                  <p className="text-xs text-text-muted font-semibold">
                    {activeLesson.unit} • {activeLesson.duration}
                  </p>
                  <h2 className="text-lg font-bold text-text-dark">
                    {activeLesson.title}
                  </h2>
                </div>

                <div className="flex gap-2">
                  <button
                      type="button"
                      onClick={() => goToLesson(previousLesson)}
                      disabled={!previousLesson}
                      className="px-4 py-2 text-sm font-semibold border border-secondary-gray-dark rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Previous Lesson
                  </button>

                  <button
                      type="button"
                      onClick={() => goToLesson(nextLesson)}
                      disabled={!nextLesson}
                      className="px-4 py-2 text-sm font-semibold bg-primary-blue text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Next Lesson
                  </button>
                </div>
              </div>

              <div className="p-5 bg-secondary-white border border-secondary-gray-dark rounded-xl">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <h4 className="text-sm font-bold text-text-dark">
                    Student Interactive Notes
                  </h4>

                  <span className="text-xs text-text-muted">
                  Auto-saved
                </span>
                </div>

                <textarea
                    className="w-full min-h-32 p-3 text-sm bg-secondary-gray border border-secondary-gray-dark rounded-lg resize-y"
                    placeholder={`Write your notes for "${activeLesson.title}"...`}
                    value={notes}
                    onChange={handleNotesChange}
                />
              </div>
            </div>


            <CurriculumAccordion
                lessons={lessons}
                selectedLesson={activeLesson}
                onSelectLesson={goToLesson}
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
                isBookmarked={isBookmarked}
            />
          </div>
        </Container>
      </div>
  );
}