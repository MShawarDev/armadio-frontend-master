import React from 'react';
import { StepIconProps } from '@mui/material/StepIcon';
import { makeStyles } from '@mui/styles';
import Check from '@mui/icons-material/Check';

const useStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#353535',
        boxShadow: '0px 3px 6px #00000029',
        border: '1px solid #FFFFFF57',
        borderRadius: '18px',
        opacity: 1,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 24,
        height: 24,
        color: '#878787',
    },
    active: {
        backgroundColor: '#5D5D5D',
        color: '#FFFFFF',
    },
    completed: {
        backgroundColor: '#FFFFFF',
        color: '#FFFFFF',
    },
    icon: {
        color: '#878787',
    },
    activeIcon: {
        color: '#FFFFFF',
    },
    completedIcon: {
        color: 'red',
        fontSize: "16px"
    }
});

const CustomStepIcon: React.FC<StepIconProps & { stepNumber: number }> = (props) => {
    const classes = useStepIconStyles();
    const { active, completed, stepNumber } = props;

    return (
        <div
            className={`${classes.root} ${active ? classes.active : completed ? classes.completed : ''}`}
        >
            {completed ? (
                <Check className={classes.completedIcon} />
            ) : (
                <span className={`${active ? classes.activeIcon : classes.icon}`}>
                    {stepNumber + 1}
                </span>
            )}
        </div>
    );
};

export default CustomStepIcon;
