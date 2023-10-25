import { useRef } from "react"

import VideoFile from "../../../assets/mizo.mp4"

function Video() {

    const videoRef = useRef(null)
    

    function mouseEnter() {

        videoRef.current.play()

    }


    function mouseLeave() {

        videoRef.current.pause()

    }

    return (
        <div>
            <video ref={videoRef}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                src={VideoFile}>Mizo Video</video>
        </div>
    )
}

export default Video