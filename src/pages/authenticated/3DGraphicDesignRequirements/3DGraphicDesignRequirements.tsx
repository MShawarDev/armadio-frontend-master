import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import './3DGraphicDesignRequirements.scss';

const GraphicDesignRequirements: React.FC = () => {
    const [checked, setChecked] = useState(false);
    const [videoPlaying, setVideoPlaying] = useState(true);

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const handleVideoClick = () => {
        setVideoPlaying(!videoPlaying);
    };

    return (
        <Box className="requirements-page">
            <Box className="right-column">
                <Typography className="requirements_title">3D Graphic Design Requirements</Typography>
                <ul className="requirements-list">
                    <li>- file extension FBX</li>
                    <li>- ⁠don’t rescale the object or make any edits on it</li>
                    <li>- ⁠The uploaded design must be a FBX file and exported without the Manekkan.</li>
                    <li>- Vertex count should be maximum ......</li>
                    <li>Male 8,298 - 293,492</li>
                    <li>Female 3,194 - 243,412</li>
                </ul>
                <FormControlLabel
                    control={
                        <span className="custom-checkbox">
                            <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheckboxChange}
                                style={{ color: '#fff' }}
                            />
                        </span>
                    }
                    label="I agree to Armadiovirtuale terms"
                />
                <Button variant="contained" className="download-button" disabled={!checked}>
                    Download
                </Button>
            </Box>
            <Box className="left-column">
                {/* {!videoPlaying && (
                    <PlayCircleOutlineIcon className="play-icon" onClick={handleVideoClick} />
                )} */}
                {videoPlaying && (
                    <video width={450}
                        height={450} controls autoPlay>
                        <source src="path/to/your/video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </Box>

        </Box >
    );
};

export default GraphicDesignRequirements;
