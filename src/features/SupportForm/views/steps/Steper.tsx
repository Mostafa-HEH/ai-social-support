import {
  Box,
  Grid,
  Step,
  StepLabel,
  Stepper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FORM_STEPS } from "../../utils/steps";
import { useStepper } from "./StepperContext";

import styles from "../styles/Steper.module.scss";
import FormActions from "./FormActions";
import LanguageChange from "../../../../shared/components/LanguageChange/LanguageChange";

const Steper = () => {
  const { activeStep, setActiveStep } = useStepper();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  const stepAsset = FORM_STEPS?.[activeStep];

  return (
    <Grid container spacing={32 / 8} className={styles.container}>
      <Grid size={{ xs: 12 }}>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {FORM_STEPS.map((x, idx) => {
            return (
              <Step key={x?.id} onClick={() => setActiveStep(idx)}>
                <StepLabel>{isMobile ? x.shortLabel : x.label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid container spacing={32 / 8} className={styles.form}>
        <Grid size={{ xs: 12 }} className={styles.formHeader}>
          <Box component="span" className={styles.stepLabel}>
            {stepAsset?.label}
          </Box>
        </Grid>
        <Grid size={{ xs: 12 }}>{stepAsset?.component}</Grid>
        <Grid size={{ xs: 12 }}>
          <FormActions />
        </Grid>
      </Grid>
      <Grid size={{ xs: 12 }}>
        <LanguageChange />
      </Grid>
    </Grid>
  );
};

export default Steper;
