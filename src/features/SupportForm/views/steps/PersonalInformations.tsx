import {
  Autocomplete,
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
import { COUNTRIES, GENDER } from "../../utils/consts";
import { useTranslation } from "react-i18next";

const PersonalInformations = () => {
  const { t } = useTranslation();
  const { control } = useFormContext<UserFormValues>();

  return (
    <Grid container rowSpacing="20px" columnSpacing="16px">
      {/* Full Name */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="name">{t("form.fullName.label")}</FormLabel>
              <TextField
                {...field}
                id="name"
                placeholder={t("form.fullName.placeholder")}
                aria-describedby="name-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="name-helper">
                {error?.message ? t(error.message) : t("form.fullName.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* National ID */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="national_id"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="national_id">
                {t("form.nationalId.label")}
              </FormLabel>
              <TextField
                {...field}
                id="national_id"
                placeholder={t("form.nationalId.placeholder")}
                aria-describedby="national-id-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="national-id-helper">
                {error?.message
                  ? t(error.message)
                  : t("form.nationalId.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Date of Birth */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="date_of_birth"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="date_of_birth">
                {t("form.dateOfBirth.label")}
              </FormLabel>
              <TextField
                {...field}
                id="date_of_birth"
                type="date"
                aria-describedby="dob-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="dob-helper">
                {error?.message
                  ? t(error.message)
                  : t("form.dateOfBirth.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Gender */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="gender">{t("form.gender.label")}</FormLabel>
              <Select
                {...field}
                id="gender"
                displayEmpty
                aria-describedby="gender-helper"
                aria-invalid={!!error}
              >
                <MenuItem value="">
                  <em>{t("form.gender.default")}</em>
                </MenuItem>
                {GENDER.map((g) => (
                  <MenuItem value={g.id}>{t(`gender.${g.id}`)}</MenuItem>
                ))}
              </Select>
              <FormHelperText id="gender-helper">
                {error?.message ? t(error.message) : t("form.gender.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Country */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="country"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>{t("form.country.label")}</FormLabel>
              <Autocomplete
                {...field}
                options={COUNTRIES}
                getOptionLabel={(option) => t(`countries.${option.code}`)}
                onChange={(_, value) => field.onChange(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={t("form.country.placeholder")}
                    aria-describedby="country-helper"
                    aria-invalid={!!error}
                  />
                )}
              />
              <FormHelperText id="country-helper">
                {error?.message ? t(error.message) : t("form.country.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* State */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="state"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="state">{t("form.state.label")}</FormLabel>
              <TextField
                {...field}
                id="state"
                placeholder={t("form.state.placeholder")}
                aria-describedby="state-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="state-helper">
                {error?.message ? t(error.message) : t("form.state.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* City */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="city">{t("form.city.label")}</FormLabel>
              <TextField
                {...field}
                id="city"
                placeholder={t("form.city.placeholder")}
                aria-describedby="city-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="city-helper">
                {error?.message ? t(error.message) : t("form.city.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Address */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="address">{t("form.address.label")}</FormLabel>
              <TextField
                {...field}
                id="address"
                placeholder={t("form.address.placeholder")}
                aria-describedby="address-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="address-helper">
                {error?.message ? t(error.message) : t("form.address.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Phone */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="phone">{t("form.phone.label")}</FormLabel>
              <TextField
                {...field}
                id="phone"
                inputMode="tel"
                placeholder={t("form.phone.placeholder")}
                aria-describedby="phone-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="phone-helper">
                {error?.message ? t(error.message) : t("form.phone.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      {/* Email */}
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel htmlFor="email">{t("form.email.label")}</FormLabel>
              <TextField
                {...field}
                id="email"
                type="email"
                placeholder={t("form.email.placeholder")}
                aria-describedby="email-helper"
                aria-invalid={!!error}
              />
              <FormHelperText id="email-helper">
                {error?.message ? t(error.message) : t("form.email.helper")}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInformations;
