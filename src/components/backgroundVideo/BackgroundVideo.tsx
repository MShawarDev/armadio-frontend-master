import React, { ReactNode, useRef, useState } from 'react';
import './BackgroundVideo.scss';
import { Box } from '@mui/material';
import VideoCover from "../../assest/home/video-cover.png";
interface BackgroundVideoProps {
    children: ReactNode;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(prev => !prev);
        }
    };

    return (
        <div className="video-container">

            <video ref={videoRef} loop muted className="video" style={{ display: isPlaying ? 'block' : 'none' }}>
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <img src={VideoCover} alt='video cover' className="video" style={{ display: !isPlaying ? 'block' : 'none' }} />

            <div className="video-overlay"></div>
            <div className="content">
                <Box>
                    {children}
                </Box>
                <Box>
                    {/* {!isPlaying && ( */}
                    <div className="play-icon-container" onClick={handlePlayClick}>
                        <div className="play-icon">&#9658;</div>
                    </div>
                    {/* )} */}
                </Box>
            </div>
        </div>
    );
};

export default BackgroundVideo;
