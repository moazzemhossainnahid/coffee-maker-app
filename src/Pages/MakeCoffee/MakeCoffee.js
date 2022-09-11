import React, { useState } from "react";
import Stepper from "./Controls/Stepper";
import StepperControl from "./Controls/StepperControl";
import Complete from "./Steps/Complete";
import Hub from "./Steps/Hub";
import { UseContextProvider } from "../../Hooks/StepperContext";
import Home from "./Steps/Home";
import AddOns from "./Steps/AddOns";
import Preview from "./Steps/Preview";
// import ApplicationPreview from "./Steps/ApplicationPreview";



const MakeCoffee = () => {


    const steps = [
        "Home",
        "Hub",
        "AddOns",
        "Preview",
        "Complete",
    ];

    const [currentStep, setCurrentStep] = useState(1);

    const displayStep = (step) => {
        switch (step) {
            case 1:
                return <Home />;
            case 2:
                return <Hub />;
            case 3:
                return <AddOns />;
            case 4:
                return <Preview />;
            case 5:
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
        <div className="bg-gray-900 max-w-7xl h-screen mx-auto">


            <div className="h-full w-full">
                <div className="card-body w-full">
                    {/* <h1 className="text-white text-2xl font-bold text-center"> Please Choose Your Coffee </h1> */}
                    {/* Stepper */}
                    <div className="pb-0 px-5 lg:px-0 w-full lg:w-4/5 mx-auto">
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                    <div className="mx-auto rounded-2xl bg-slate-300 pb-2 shadow-xl md:w-4/5">
                        {/* Display Step */}
                        <div className="horizontal container mt-2 ">

                            <div className="my-0 p-7 ">
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