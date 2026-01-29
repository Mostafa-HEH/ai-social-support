import { Box, Button } from "@mui/material";
import { useStepper } from "./StepperContext";
import styles from "../styles/FormActions.module.scss";
import { FORM_STEPS } from "../../utils/steps";
import { useTranslation } from "react-i18next";

const FormActions = () => {
  const { t } = useTranslation();
  const { setActiveStep, activeStep } = useStepper();
  const lastStep = FORM_STEPS?.length - 1 === activeStep;

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
    <Box
      className={styles.container}
      role="navigation"
      aria-label={t("common.formNavigation")}
    >
      {activeStep !== 0 && (
        <Button
          type="button"
          variant="outlined"
          onClick={() => changeStep({ variant: "prev" })}
          aria-label={t("common.previous")}
        >
          {t("common.previous")}
        </Button>
      )}

      {!lastStep && (
        <Button
          type="button"
          variant="contained"
          onClick={() => changeStep({ variant: "next" })}
          aria-label={t("common.next")}
        >
          {t("common.next")}
        </Button>
      )}

      {lastStep && (
        <Button
          type="submit"
          variant="contained"
          aria-label={t("common.submit")}
        >
          {t("common.submit")}
        </Button>
      )}
    </Box>
  );
};
export default FormActions;
