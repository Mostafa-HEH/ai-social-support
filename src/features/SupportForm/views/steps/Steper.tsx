import {
  Alert,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FORM_STEPS } from "../../utils/steps";
import { useStepper } from "./StepperContext";

import styles from "../styles/Steper.module.scss";
import FormActions from "./FormActions";
import LanguageChange from "../../../../shared/components/LanguageChange/LanguageChange";
import { useTranslation } from "react-i18next";

const Steper = () => {
  const { t } = useTranslation();
  const { activeStep, submitStatus } = useStepper();
  const isMobile = useMediaQuery(useTheme().breakpoints.down("md"));

  const stepAsset = FORM_STEPS?.[activeStep];

  return (
    <Grid container spacing={32 / 8} className={styles.container}>
      <Grid size={{ xs: 12 }}>
        <Stepper activeStep={activeStep} className={styles.stepper}>
          {FORM_STEPS.map((x) => {
            return (
              <Step key={x?.id}>
                <StepLabel>{isMobile ? t(x.shortLabel) : t(x.label)}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid container spacing={2} className={styles.form}>
        <Grid size={{ xs: 12 }} className={styles.formHeader}>
          <Typography component="h3" className={styles.stepLabel}>
            {t(stepAsset.label)}
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          {submitStatus?.success && (
            <Alert severity="success">{submitStatus?.success}</Alert>
          )}
          {submitStatus?.error && (
            <Alert severity="error">{submitStatus?.error}</Alert>
          )}
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
