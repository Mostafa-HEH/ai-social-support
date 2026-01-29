import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  TextField,
} from "@mui/material";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import styles from "./TextFieldWithAi.module.scss";
import { useTranslation } from "react-i18next";

interface TextFieldWithAiProps<TFieldValues extends FieldValues = FieldValues> {
  label: string;
  placeholder?: string;
  rows?: number;
  field: ControllerRenderProps<TFieldValues, Path<TFieldValues>>;
  error?: string;
  aiPreview?: string | null;
  onGenerateAi: () => void;
  onAcceptAi: () => void;
  onDiscardAi: () => void;
}

const TextFieldWithAi = <TFieldValues extends FieldValues = FieldValues>({
  label,
  placeholder,
  rows = 4,
  field,
  error,
  aiPreview,
  onGenerateAi,
  onAcceptAi,
  onDiscardAi,
}: TextFieldWithAiProps<TFieldValues>) => {
  const { t } = useTranslation();

  return (
    <FormControl error={!!error}>
      <Box className={styles.label}>
        <FormLabel>{label}</FormLabel>
        {!aiPreview && (
          <Button size="small" onClick={onGenerateAi}>
            {t("form.common.aiHelp")}
          </Button>
        )}
      </Box>

      <TextField
        {...field}
        multiline
        rows={rows}
        placeholder={placeholder}
        error={!!error}
      />

      <FormHelperText>{error}</FormHelperText>

      {aiPreview && (
        <Box className={styles.aiboxContainer}>
          <Box className={styles.title}>{t("form.common.aiSuggestion")}</Box>

          <Box className={styles.content}>{aiPreview}</Box>

          <Box className={styles.actions}>
            <Button variant="outlined" size="small" onClick={onDiscardAi}>
              {t("form.common.discard")}
            </Button>
            <Button variant="contained" size="small" onClick={onAcceptAi}>
              {t("form.common.use")}
            </Button>
          </Box>
        </Box>
      )}
    </FormControl>
  );
};

export default TextFieldWithAi;
