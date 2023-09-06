import { useRef, useState, useEffect } from 'react';
import { Html, Edges } from '@react-three/drei';
import { useModes } from './DarkModeContext';
import { MyPivotControls } from './MyPivotControls';
import { FiPlay, FiPause } from 'react-icons/fi';


export function Video({ imageUrl, linkUrl, videoURL, title, position, boxArgs, ...props })
{
    // console.log("Video component rendered");
    const { darkMode, editMode } = useModes();
    const wrapperRef = useRef(null);
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);


    const toggleVideoPlayback = () =>
    {
        const wrapper = wrapperRef.current;
        const video = videoRef.current;
        if (video) {
            if (video.paused || video.ended) {
                video.play();
                wrapper.classList.add('on')
                setIsPlaying(true)
            } else {
                video.pause();
                wrapper.classList.remove('on')
                setIsPlaying(false)
            }
        }
    };

    // Pre-loads video after page load
    const preLoadVideo = () =>
    {
        const video = videoRef.current
        if (video && !isLoaded) {
            setIsLoaded(true)
            video.load()
        }
    }

    // Resets video after ending
    useEffect(() =>
    {
        const video = videoRef.current
        const handleVideoEnd = () => setIsPlaying(false)

        if (video)
            video.addEventListener('ended', handleVideoEnd)

        return () =>
        {
            if (video)
                video.removeEventListener('ended', handleVideoEnd)
        }
    })


    return (
        <MyPivotControls>
            <group position={position}>
                <mesh castShadow position-y={boxArgs[1] / 2}>
                    <boxGeometry args={boxArgs} />
                    <meshStandardMaterial color={darkMode ? '#111' : '#ffffff'} />
                    <Edges color={darkMode ? '#ccc' : '#666'} />
                </mesh>
                {!editMode &&
                    <Html transform scale={0.309} position-y={boxArgs[1]} rotation-x={-Math.PI / 2}>
                        <div className="ImageWrapper" ref={wrapperRef}>
                            <span className={`ImageTitle ${darkMode ? 'dark-mode' : ''}`}>
                                {title} {isPlaying ? <FiPause style={{ strokeWidth: '1.5' }} /> : <FiPlay style={{ strokeWidth: '1.5' }} />}
                            </span>
                            <div className="ImageCropper">
                                <video onClick={toggleVideoPlayback} ref={(elem) =>
                                {
                                    videoRef.current = elem;
                                    if (elem) {
                                        preLoadVideo()
                                    }
                                }} src={videoURL} controls={false} width="100%" poster={imageUrl} preload="none"></video>
                            </div>
                        </div>
                    </Html>
                }
            </group>
        </MyPivotControls>
    );
}
