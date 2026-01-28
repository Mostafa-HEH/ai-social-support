import { Box, Button } from "@mui/material";
import { useStepper } from "./StepperContext";
import styles from "../styles/FormActions.module.scss";

const FormActions = () => {
  const { setActiveStep } = useStepper();

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
    <Box className={styles.container}>
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
    </Box>
  );
};
export default FormActions;
