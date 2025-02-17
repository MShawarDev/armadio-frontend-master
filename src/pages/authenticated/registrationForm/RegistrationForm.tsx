import React, { useEffect, useState } from 'react';
import { Box, Button, Step, StepLabel, Stepper, Typography } from '@mui/material';
import './RegistrationForm.scss';
import { userRoute } from '../../../api/axios/apiRoute';
import { useParams } from 'react-router-dom';
import { TabsResponse } from '../../../types/api/api.types';
import { LazyLoading } from '../../../components/lazyLoading';
import CustomStepIcon from './components/CustomStepIcon';
import ArmadioVirtualeForm from '../../../components/armadioVirtualeForm/armadioVirtualeForm';

const steps = ['Select Role', 'Personal Details', 'Account Information'];

const RegistrationForm: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [role, setRole] = useState<string>('');
    const [pageTitle, setPageTitle] = useState<string>('');
    const [stepsData, setStepsData] = useState<TabsResponse[]>([]);
    const [formData, setFormData] = useState({});

    const { id } = useParams<{ id: string }>();



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
                const { data, status } = await userRoute.GetRegistrationForm(id!!);

                if (status === 200) {
                    setStepsData(
                        [
                            {
                                "title": "Company Information",
                                "tabID": 1,
                                "fields": [
                                    {
                                        "fieldType": "textInput",
                                        "inputProps": {
                                            "name": "title",
                                            "type": "text",
                                            "placeholder": "Enter The Title",
                                            "ariaLabel": "Title"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": true,
                                                "message": "The Title is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    },
                                    {
                                        "fieldType": "dropDown",
                                        "dropDownList": [
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            },
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            }
                                        ],
                                        "inputProps": {
                                            "name": "request_type",
                                            "type": "text",
                                            "placeholder": "Choose Request Type",
                                            "ariaLabel": "Request Type"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": false,
                                                "message": ""
                                            },
                                            "disabled": true
                                        },
                                        fieldTagID: ''
                                    },
                                    {
                                        "fieldType": "textarea",
                                        "value": "",
                                        "inputProps": {
                                            "name": "description",
                                            "type": "text",
                                            "placeholder": "Add request description",
                                            "ariaLabel": "Description"
                                        },
                                        "validateFiled": {
                                            "requiredField": {
                                                "value": true,
                                                "message": "Description is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    }
                                ]
                            },
                            {
                                "title": "Company Information",
                                "tabID": 2,
                                "fields": [
                                    {
                                        "fieldType": "textInput",
                                        "inputProps": {
                                            "name": "title",
                                            "type": "text",
                                            "placeholder": "Enter The Title",
                                            "ariaLabel": "Title"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": true,
                                                "message": "The Title is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    },
                                    {
                                        "fieldType": "dropDown",
                                        "dropDownList": [
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            },
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            }
                                        ],
                                        "inputProps": {
                                            "name": "request_type",
                                            "type": "text",
                                            "placeholder": "Choose Request Type",
                                            "ariaLabel": "Request Type"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": false,
                                                "message": ""
                                            },
                                            "disabled": true
                                        },
                                        fieldTagID: ''
                                    },
                                    {
                                        "fieldType": "textarea",
                                        "value": "",
                                        "inputProps": {
                                            "name": "description",
                                            "type": "text",
                                            "placeholder": "Add request description",
                                            "ariaLabel": "Description"
                                        },
                                        "validateFiled": {
                                            "requiredField": {
                                                "value": true,
                                                "message": "Description is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    }
                                ]
                            },
                            {
                                "title": "Designer Information",
                                "tabID": 3,
                                "fields": [
                                    {
                                        "fieldType": "textInput",
                                        "inputProps": {
                                            "name": "title",
                                            "type": "text",
                                            "placeholder": "Enter The Title",
                                            "ariaLabel": "Title"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": true,
                                                "message": "The Title is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    },
                                    {
                                        "fieldType": "dropDown",
                                        "dropDownList": [
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            },
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            }
                                        ],
                                        "inputProps": {
                                            "name": "request_type",
                                            "type": "text",
                                            "placeholder": "Choose Request Type",
                                            "ariaLabel": "Request Type"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": false,
                                                "message": ""
                                            },
                                            "disabled": true
                                        },
                                        fieldTagID: ''
                                    },
                                    {
                                        "fieldType": "textarea",
                                        "value": "",
                                        "inputProps": {
                                            "name": "description",
                                            "type": "text",
                                            "placeholder": "Add request description",
                                            "ariaLabel": "Description"
                                        },
                                        "validateFiled": {
                                            "requiredField": {
                                                "value": true,
                                                "message": "Description is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    }
                                ]
                            },
                            {
                                "title": "Add Designer",
                                "tabID": 4,
                                "fields": [
                                    {
                                        "fieldType": "textInput",
                                        "inputProps": {
                                            "name": "title",
                                            "type": "text",
                                            "placeholder": "Enter The Title",
                                            "ariaLabel": "Title"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": true,
                                                "message": "The Title is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    },
                                    {
                                        "fieldType": "dropDown",
                                        "dropDownList": [
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            },
                                            {
                                                "label": "hamza",
                                                "value": 1,
                                                fieldTagID: ''
                                            }
                                        ],
                                        "inputProps": {
                                            "name": "request_type",
                                            "type": "text",
                                            "placeholder": "Choose Request Type",
                                            "ariaLabel": "Request Type"
                                        },
                                        "validateFiled": {
                                            "ValidateType": "error",
                                            "requiredField": {
                                                "value": false,
                                                "message": ""
                                            },
                                            "disabled": true
                                        },
                                        fieldTagID: ''
                                    },
                                    {
                                        "fieldType": "textarea",
                                        "value": "",
                                        "inputProps": {
                                            "name": "description",
                                            "type": "text",
                                            "placeholder": "Add request description",
                                            "ariaLabel": "Description"
                                        },
                                        "validateFiled": {
                                            "requiredField": {
                                                "value": true,
                                                "message": "Description is required."
                                            }
                                        },
                                        fieldTagID: '',
                                        dropDownList: []
                                    }
                                ]
                            }
                        ])
                    setPageTitle("Enter your company information")
                    // setPageTitle(data?.data?.pageTitle)
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
                    {stepsData.length > 0 && <Button
                        onClick={() => activeStep === steps.length ? console.log('Finished') : handleNext()}
                        className="stepButton"
                    >
                        {activeStep === steps.length ? 'Finish' : 'Next'}
                    </Button>}
                    {activeStep === steps.length && <Button className="stepButton" onClick={handleReset}>Reset</Button>}
                </Box>}
            </Box>
        </Box >
    );
};

export default RegistrationForm;
