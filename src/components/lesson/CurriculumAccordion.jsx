import React, { useEffect, useMemo, useState } from "react";

export default function CurriculumAccordion({
                                                lessons,
                                                selectedLesson,
                                                onSelectLesson,
                                            }) {
    const groupedLessons = useMemo(() => {
        return lessons.reduce((groups, lesson) => {
            const unitName = lesson.unit || "Course Content";

            if (!groups[unitName]) {
                groups[unitName] = [];
            }

            groups[unitName].push(lesson);
            return groups;
        }, {});
    }, [lessons]);

    const unitNames = Object.keys(groupedLessons);

    const [openUnits, setOpenUnits] = useState(() => {
        return selectedLesson?.unit ? [selectedLesson.unit] : [unitNames[0]];
    });

    useEffect(() => {
        if (!selectedLesson?.unit) return;

        setOpenUnits((currentUnits) => {
            if (currentUnits.includes(selectedLesson.unit)) {
                return currentUnits;
            }

            return [...currentUnits, selectedLesson.unit];
        });
    }, [selectedLesson]);

    function toggleUnit(unitName) {
        setOpenUnits((currentUnits) => {
            if (currentUnits.includes(unitName)) {
                return currentUnits.filter((unit) => unit !== unitName);
            }

            return [...currentUnits, unitName];
        });
    }

    return (
        <aside className="lesson-curriculum-panel">
            <div className="lesson-curriculum-header">
                <span className="lesson-section-label">Curriculum</span>
                <h3>Course Content</h3>
            </div>

            <div className="lesson-curriculum-list">
                {unitNames.map((unitName) => {
                    const unitLessons = groupedLessons[unitName];
                    const isOpen = openUnits.includes(unitName);

                    return (
                        <section key={unitName} className="lesson-curriculum-unit">
                            <button
                                type="button"
                                className="lesson-unit-trigger"
                                onClick={() => toggleUnit(unitName)}
                                aria-expanded={isOpen}
                            >
                                <span>{unitName}</span>
                                <small>{unitLessons.length} lessons</small>
                                <strong>{isOpen ? "-" : "+"}</strong>
                            </button>

                            {isOpen && (
                                <div className="lesson-unit-content">
                                    {unitLessons.map((lesson) => {
                                        const isActive = lesson.id === selectedLesson.id;

                                        return (
                                            <button
                                                key={lesson.id}
                                                type="button"
                                                className={
                                                    isActive
                                                        ? "lesson-curriculum-item lesson-curriculum-item-active"
                                                        : "lesson-curriculum-item"
                                                }
                                                onClick={() => onSelectLesson(lesson)}
                                            >
                                                <span>{lesson.title}</span>
                                                <small>{lesson.duration}</small>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </section>
                    );
                })}
            </div>
        </aside>
    );
}