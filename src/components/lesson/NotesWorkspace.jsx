import { useEffect, useState } from "react"

function NotesWorkspace({ lesson }) {
    const storageKey = `lesson-notes-${lesson.id}`
    const [notes, setNotes] = useState("")

    useEffect(() => {
        setNotes(localStorage.getItem(storageKey) || "")
    }, [storageKey])

    function handleChange(e) {
        const value = e.target.value
        setNotes(value)
        localStorage.setItem(storageKey, value)
    }

    function clearNotes() {
        setNotes("")
        localStorage.removeItem(storageKey)
    }

    return (
        <section className="notes-panel">
            <div className="notes-header">
                <div>
                    <span>Workspace</span>
                    <h3>My Notes</h3>
                </div>

                <button className="ghost-button" onClick={clearNotes}>
                    Clear
                </button>
            </div>

            <textarea
                value={notes}
                onChange={handleChange}
                placeholder={`Write notes for "${lesson.title}"...`}
            />

            <p className="save-status">Notes save automatically</p>
        </section>
    )
}

export default NotesWorkspace