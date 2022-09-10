import React, { useState } from "react";
import Stepper from "./Controls/Stepper";
import StepperControl from "./Controls/StepperControl";
import Complete from "./Steps/Complete";
import Payment from "./Steps/Payment";
import { UseContextProvider } from "../../Hooks/StepperContext";
// import ApplicationPreview from "./Steps/ApplicationPreview";



const MakeCoffee = () => {


    const steps = [
        "Payment",
        "Complete",
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Payment />;
            case 2:
                return <Complete />;
            default:
        }
    };

    const handleClick = (direction) => {
        let newStep = currentStep;

        direction === "next" ? newStep++ : newStep--;
        // check if steps are within bounds
        newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);

    };

    return (
        <div className="bg-slate-100 max-w-7xl mx-auto">


            <div className="h-full w-full">
                <div className="card-body w-full">
                    <h1 className="text-primary text-2xl font-bold text-center">
                        Please Choose Your Coffee
                    </h1>
                    {/* Stepper */}
                    <div className="pb-5 px-5 lg:px-0 w-full lg:w-4/5 mx-auto">
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-4/5">
                        {/* Display Step */}
                        <div className="horizontal container mt-5 ">

                            <div className="my-10 p-10 ">
                                <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
                            </div>
                        </div>

                        {/* navigation button */}
                        {currentStep !== steps.length && (
                            <StepperControl handleClick={handleClick} currentStep={currentStep} steps={steps} />
                        )}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default MakeCoffee;