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

  const inputId = field.name;
  const helperId = `${field.name}-helper`;
  const aiRegionId = `${field.name}-ai-region`;

  return (
    <FormControl error={!!error}>
      <Box className={styles.label}>
        <FormLabel htmlFor={inputId}>{label}</FormLabel>
        {!aiPreview && (
          <Button
            type="button"
            size="small"
            onClick={onGenerateAi}
            aria-label={t("form.common.aiHelp")}
          >
            {t("form.common.aiHelp")}
          </Button>
        )}
      </Box>
      <TextField
        {...field}
        id={inputId}
        multiline
        rows={rows}
        placeholder={placeholder}
        error={!!error}
        aria-describedby={helperId}
        aria-invalid={!!error}
      />
      <FormHelperText id={helperId}>{error}</FormHelperText>
      {aiPreview && (
        <Box
          id={aiRegionId}
          className={styles.aiboxContainer}
          role="region"
          aria-live="polite"
          aria-label={t("form.common.aiSuggestion")}
        >
          <Box className={styles.title}>{t("form.common.aiSuggestion")}</Box>
          <Box className={styles.content}>{aiPreview}</Box>
          <Box className={styles.actions}>
            <Button
              type="button"
              variant="outlined"
              size="small"
              onClick={onDiscardAi}
            >
              {t("form.common.discard")}
            </Button>
            <Button
              type="button"
              variant="contained"
              size="small"
              onClick={onAcceptAi}
            >
              {t("form.common.use")}
            </Button>
          </Box>
        </Box>
      )}
    </FormControl>
  );
};

export default TextFieldWithAi;
