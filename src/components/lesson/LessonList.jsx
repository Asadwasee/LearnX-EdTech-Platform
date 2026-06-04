function LessonList({ lessons, selectedLesson, onSelectLesson }) {
    return (
        <section className="lesson-list">
            <h3>Course Lessons</h3>

            {lessons.map((lesson) => (
                <button
                    key={lesson.id}
                    className={
                        lesson.id === selectedLesson.id
                            ? "lesson-item active"
                            : "lesson-item"
                    }
                    onClick={() => onSelectLesson(lesson)}
                >
                    <span>{lesson.title}</span>
                    <small>{lesson.duration}</small>
                </button>
            ))}
        </section>
    )
}

export default LessonList