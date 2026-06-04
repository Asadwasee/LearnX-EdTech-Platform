import { useState } from "react"
import { lessons } from "../data/lessons"
import VideoPlayer from "../components/lesson/VideoPlayer"
import NotesWorkspace from "../components/lesson/NotesWorkspace"
import LessonList from "../components/lesson/LessonList"

function LessonPage() {
    const [selectedLesson, setSelectedLesson] = useState(lessons[0])

    return (
        <main className="lesson-page">
            <header className="lesson-hero">
                <div>
                    <span>LearnX Course</span>
                    <h1>Frontend Development Essentials</h1>
                    <p>Watch lessons, switch chapters, and keep notes in one workspace.</p>
                </div>
            </header>

            <div className="lesson-layout">
                <div className="main-column">
                    <VideoPlayer lesson={selectedLesson} />
                    <NotesWorkspace lesson={selectedLesson} />
                </div>
                <LessonList
                    lessons={lessons}
                    selectedLesson={selectedLesson}
                    onSelectLesson={setSelectedLesson}
                />

            </div>
        </main>
    )
}

export default LessonPage