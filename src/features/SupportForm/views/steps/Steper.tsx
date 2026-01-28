import { Button, Grid, Step, StepLabel, Stepper } from "@mui/material";
import { FORM_STEPS } from "../../utils/steps";
import { useStepper } from "./StepperContext";

const Steper = () => {
  const { activeStep, setActiveStep } = useStepper();

  const changeStep = ({ variant }: { variant: "next" | "prev" }) => {
    switch (variant) {
      case "next":
        setActiveStep((current) => current + 1);
        break;
      case "prev":
        setActiveStep((current) => current - 1);
        break;
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Stepper activeStep={activeStep}>
          {FORM_STEPS.map((x, idx) => {
            return (
              <Step key={x?.id} onClick={() => setActiveStep(idx)}>
                <StepLabel>{x?.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid size={{ xs: 12 }}>{FORM_STEPS?.[activeStep]?.component}</Grid>
      <Grid size={{ xs: 12 }}>
        <Button
          variant="outlined"
          onClick={() => changeStep({ variant: "prev" })}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          onClick={() => changeStep({ variant: "next" })}
        >
          Next
        </Button>
      </Grid>
    </Grid>
  );
};

export default Steper;
