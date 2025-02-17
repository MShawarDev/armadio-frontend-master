import React, { useEffect, useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import '../registrationForm/RegistrationForm.scss';
import { userRoute } from '../../../api/axios/apiRoute';
import { useParams } from 'react-router-dom';
import { TabsResponse } from '../../../types/api/api.types';
import { LazyLoading } from '../../../components/lazyLoading';
import ArmadioVirtualeForm from '../../../components/armadioVirtualeForm/armadioVirtualeForm';
import CustomStepIcon from '../registrationForm/components/CustomStepIcon';

const steps = ['Select Role', 'Personal Details', 'Account Information'];

const SpecialDesignRequest: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [role, setRole] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>('');
    const [stepsData, setStepsData] = useState<TabsResponse[]>([]);
    const [formData, setFormData] = useState({});




    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setRole('');
    };

    useEffect(() => {
        setLoading(true)
        const fetchFormData = async () => {
            try {
                const { data, status } = await userRoute.GetRegistrationForm("1");

                if (status === 200) {
                    setStepsData([
                        {
                            "title": "Measurements",
                            "tabID": 1,
                            "fields": [
                                {
                                    "fieldType": "textInput",
                                    "fieldTagID": "COMPANY_NAME",
                                    "inputProps": {
                                        "name": "Measurements",
                                        "type": "text",
                                        "placeholder": "Enter Company Name",
                                        "ariaLabel": "Measurements"
                                    },
                                    "validateFiled": {
                                        "requiredField": {
                                            "value": true,
                                            "message": "The Company Name is required."
                                        },
                                        "disabled": false
                                    },
                                    "dropDownList": [

                                    ]
                                },
                                {
                                    "fieldType": "textInput",
                                    "fieldTagID": "OWNER_NAME",
                                    "inputProps": {
                                        "name": "Company Owner full Name",
                                        "type": "text",
                                        "placeholder": "Enter Company Owner full Name",
                                        "ariaLabel": "Company Owner full Name"
                                    },
                                    "validateFiled": {
                                        "requiredField": {
                                            "value": true,
                                            "message": "The Owne Name is Required"
                                        },
                                        "disabled": true
                                    },
                                    "dropDownList": [

                                    ]
                                },
                                {
                                    "fieldType": "dropDown",
                                    "fieldTagID": "YEAR_IN_B",
                                    "inputProps": {
                                        "name": "Years in Business",
                                        "type": "text",
                                        "placeholder": "Choose Years in Business",
                                        "ariaLabel": "Years in Business"
                                    },
                                    "validateFiled": {
                                        "requiredField": {
                                            "value": true,
                                            "message": "Choose Years in Business"
                                        },
                                        "disabled": true
                                    },
                                    "dropDownList": [
                                        {
                                            "label": "0-2 years",
                                            "value": 1,
                                            "fieldTagID": "YEAR_IN_B"
                                        },
                                        {
                                            "label": "3-5 years",
                                            "value": 2,
                                            "fieldTagID": "YEAR_IN_B"
                                        },
                                        {
                                            "label": "6-10 years",
                                            "value": 3,
                                            "fieldTagID": "YEAR_IN_B"
                                        },
                                        {
                                            "label": "10+ years",
                                            "value": 4,
                                            "fieldTagID": "YEAR_IN_B"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "title": "Design details",
                            "tabID": 2,
                            "fields": [

                            ]
                        },
                        {
                            "title": "Designer Information",
                            "tabID": 3,
                            "fields": [

                            ]
                        },
                        {
                            "title": "Add Designer",
                            "tabID": 4,
                            "fields": [

                            ]
                        }
                    ])
                    setPageTitle("Special Design Request")
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        };

        fetchFormData();
    }, []);


    const handleFormSubmit = (data: any) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [activeStep]: data,
        }));
        console.log("Final form data:", { ...formData, [activeStep]: data });

        if (activeStep === stepsData.length) {
            // Final step, post all form data
            console.log("Final form data:", { ...formData, [activeStep]: data });
            // Here you can make the API call to submit the collected form data
        } else {
            setActiveStep(prevActiveStep => prevActiveStep + 1);
        }
    };

    const handleNext = () => {
        const formElement = document.getElementById(`form-step-${activeStep}`);
        if (formElement) {
            const buttonElement = formElement.querySelector('button[type="submit"]');
            if (buttonElement instanceof HTMLButtonElement) {
                buttonElement.click();
            }
        }
    };
    return (
        <Box className="registrationForm">
            {loading ?
                <LazyLoading /> :
                <Box display='flex' justifyContent="space-between" p='2rem' width="100%">
                    <Typography variant='h6'>{pageTitle}</Typography>
                    <Stepper activeStep={activeStep} >
                        {stepsData!!.map((step, index) => (
                            <Step key={index}>
                                <StepLabel StepIconComponent={(props) => <CustomStepIcon {...props} stepNumber={index} />}>
                                    <span className={activeStep === index ? "activeStepLabel" : "inactiveStepLabel"}>
                                        {step?.title}
                                    </span>
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>
            }
            <Box className="stepContent">

                {!loading && <ArmadioVirtualeForm
                    fields={stepsData[activeStep]?.fields}
                    onSubmit={handleFormSubmit}
                    id={activeStep.toString()}
                    loading={loading}
                />}

                {!loading && <Box justifyContent='flex-end' display='flex'>
                    {activeStep !== 0 && <Button
                        onClick={handleBack}
                        className="stepButton"
                    >
                        Back
                    </Button>}
                    <Button
                        onClick={() => activeStep === steps.length ? console.log('Finished') : handleNext()}
                        className="stepButton"
                    >
                        {activeStep === steps.length ? 'Finish' : 'Next'}
                    </Button>
                    {activeStep === steps.length && <Button className="stepButton" onClick={handleReset}>Reset</Button>}
                </Box>}
            </Box>
        </Box >
    );
};

export default SpecialDesignRequest;
