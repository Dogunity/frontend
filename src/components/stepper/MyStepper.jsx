import React from "react";
import {
  Container,
  Box,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
} from "@mui/material";
import useStepper from "../../hooks/common/useStepper";

const MyStepper = ({ stepLabels }) => {
  const { currentStep, handleNextStepButtonClick, handlePrevStepButtonClick } =
    useStepper();

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          Create Community
        </Typography>
        <Stepper activeStep={currentStep}>
          {stepLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {currentStep === stepLabels.length ? (
          <React.Fragment>
            <Typography variant="h5" gutterBottom>
              POST
            </Typography>
            <Typography variant="subtitle1">
              Create your own community
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {currentStep !== 0 && (
                <Button
                  sx={{ mt: 3, ml: 1 }}
                  onClick={handlePrevStepButtonClick}
                >
                  Back
                </Button>
              )}
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={handleNextStepButtonClick}
              >
                {currentStep === stepLabels.length - 1 ? "Create" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Paper>
    </Container>
  );
};

export default MyStepper;
