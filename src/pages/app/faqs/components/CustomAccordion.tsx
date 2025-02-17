
import React, { useState } from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type CustomAccordionProps = {
    question: string;
    answer: string;
};

export const CustomAccordion = ({ question, answer }: CustomAccordionProps) => {
    const [expanded, setExpanded] = useState(false);

    const handleChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion
            expanded={expanded}
            onChange={handleChange}
            sx={{
                backgroundColor: expanded ? '#640B0B' : "transparent",
                color: '#fff',
                border: "0.5px solid #fff",
                mt: 1,
                '&:before': {
                    display: 'none',
                },
                '&.MuiAccordion-root': {
                    boxShadow: 'none',
                },
            }}
        >
            <AccordionSummary
                expandIcon={expanded ? <ExpandLessIcon sx={{ color: '#fff' }} /> : <ExpandMoreIcon sx={{ color: '#000' }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    backgroundColor: expanded ? '#640B0B' : "transparent",
                    color: '#fff',

                }}
            >
                <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    );
};