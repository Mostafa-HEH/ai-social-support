import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import type { UserFormValues } from "../../validations/formValidations";
import {
  EMPLOYMENT_STATUS,
  HOUSING_STATUS,
  MARITAL_STATUS,
} from "../../utils/consts";
import { useTranslation } from "react-i18next";

const FamilyAndFinancial = () => {
  const { t } = useTranslation();
  const { control } = useFormContext<UserFormValues>();

  return (
    <Grid container rowSpacing="20px" columnSpacing="16px">
      {/* Marital Status */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="marital_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.maritalStatus.label")}</FormLabel>

              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>{t("form.maritalStatus.default")}</em>
                </MenuItem>
                {MARITAL_STATUS.map((state) => (
                  <MenuItem key={state.id} value={state.id}>
                    {state.label}
                  </MenuItem>
                ))}
              </Select>

              <FormHelperText>
                {error?.message
                  ? t(error.message)
                  : t("form.maritalStatus.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Dependents */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="dependents"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.dependents.label")}</FormLabel>

              <TextField
                {...field}
                type="number"
                placeholder={t("form.dependents.placeholder")}
              />

              <FormHelperText>
                {error?.message
                  ? t(error.message)
                  : t("form.dependents.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Employment Status */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="employment_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.employmentStatus.label")}</FormLabel>

              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>{t("form.employmentStatus.default")}</em>
                </MenuItem>
                {EMPLOYMENT_STATUS.map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>

              <FormHelperText>
                {error?.message
                  ? t(error.message)
                  : t("form.employmentStatus.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Monthly Income */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="monthly_income"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.monthlyIncome.label")}</FormLabel>

              <TextField
                {...field}
                type="number"
                placeholder={t("form.monthlyIncome.placeholder")}
              />

              <FormHelperText>
                {error?.message
                  ? t(error.message)
                  : t("form.monthlyIncome.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Housing Status */}
      <Grid size={{ xs: 12 }}>
        <Controller
          name="housing_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.housingStatus.label")}</FormLabel>

              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>{t("form.housingStatus.default")}</em>
                </MenuItem>
                {HOUSING_STATUS.map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>

              <FormHelperText>
                {error?.message
                  ? t(error.message)
                  : t("form.housingStatus.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default FamilyAndFinancial;
