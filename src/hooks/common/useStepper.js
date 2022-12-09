import { useCallback, useState } from "react";

const useStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNextStepButtonClick = useCallback(() => {
    setCurrentStep(currentStep + 1);
  }, [currentStep, setCurrentStep]);

  const handlePrevStepButtonClick = useCallback(() => {
    setCurrentStep(currentStep - 1);
  }, [currentStep, setCurrentStep]);

  return {
    currentStep,
    handleNextStepButtonClick,
    handlePrevStepButtonClick,
  };
};

export default useStepper;
