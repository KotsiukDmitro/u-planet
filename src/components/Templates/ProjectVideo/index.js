import React from 'react'

const ProjectVideo = ({ videoUrl, sliderRef, videoCover, videoClass }) => {

    const onPauseVideo = () => {
        sliderRef.current?.slickPlay()
    }

    const onPlayVideo = () => {
        sliderRef.current?.slickPause()
    }

    return (
        <div className={'relative'}>
            <video controls
                poster={videoCover}
                onPause={onPauseVideo}
                onEnded={onPauseVideo}
                onPlay={onPlayVideo}
                src={videoUrl}
                className={['w-full items-center justify-center object-contain', videoClass].join(' ')}
                preload={'metadata'}
            />

        </div>
    )
}

export default ProjectVideo