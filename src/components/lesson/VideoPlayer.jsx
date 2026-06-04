function VideoPlayer({ lesson }) {
    return (
        <section className="video-panel">
            <div className="video-header">
                <span>Current Lesson</span>
                <h2>{lesson.title}</h2>
            </div>

            <div className="video-frame">
                <video src={lesson.videoUrl} controls />
            </div>
        </section>
    )
}

export default VideoPlayer