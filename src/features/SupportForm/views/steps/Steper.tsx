import { Grid, Step, StepLabel, Stepper } from "@mui/material";
import { FORM_STEPS } from "../../utils/steps";
import { useStepper } from "./StepperContext";

import styles from "../styles/Steper.module.scss";
import FormActions from "./FormActions";

const Steper = () => {
  const { activeStep, setActiveStep } = useStepper();

  const stepAsset = FORM_STEPS?.[activeStep];

  return (
    <Grid container spacing={32 / 8} className={styles.container}>
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
      <Grid container spacing={32 / 8} className={styles.form}>
        <Grid size={{ xs: 12 }} className={styles.formHeader}>
          {stepAsset?.label}
        </Grid>
        <Grid size={{ xs: 12 }}>{stepAsset?.component}</Grid>
        <Grid size={{ xs: 12 }}>
          <FormActions />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Steper;
