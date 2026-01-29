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
              <FormLabel>{t("form.fullName.label")}</FormLabel>

              <TextField
                {...field}
                placeholder={t("form.fullName.placeholder")}
              />

              <FormHelperText>
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
              <FormLabel>{t("form.nationalId.label")}</FormLabel>

              <TextField
                {...field}
                placeholder={t("form.nationalId.placeholder")}
              />

              <FormHelperText>
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
              <FormLabel>{t("form.dateOfBirth.label")}</FormLabel>

              <TextField {...field} type="date" />

              <FormHelperText>
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
              <FormLabel>{t("form.gender.label")}</FormLabel>

              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>{t("form.gender.default")}</em>
                </MenuItem>
                {GENDER.map((g) => (
                  <MenuItem key={g.id} value={g.id}>
                    {g.label}
                  </MenuItem>
                ))}
              </Select>

              <FormHelperText>
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
                options={COUNTRIES}
                getOptionLabel={(option) => option.label}
                onChange={(_, value) => field.onChange(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    placeholder={t("form.country.placeholder")}
                  />
                )}
              />

              <FormHelperText>
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
              <FormLabel>{t("form.state.label")}</FormLabel>

              <TextField {...field} placeholder={t("form.state.placeholder")} />

              <FormHelperText>
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
              <FormLabel>{t("form.city.label")}</FormLabel>

              <TextField {...field} placeholder={t("form.city.placeholder")} />

              <FormHelperText>
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
              <FormLabel>{t("form.address.label")}</FormLabel>

              <TextField
                {...field}
                placeholder={t("form.address.placeholder")}
              />

              <FormHelperText>
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
              <FormLabel>{t("form.phone.label")}</FormLabel>

              <TextField
                {...field}
                inputMode="tel"
                placeholder={t("form.phone.placeholder")}
              />

              <FormHelperText>
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
              <FormLabel>{t("form.email.label")}</FormLabel>

              <TextField
                {...field}
                type="email"
                placeholder={t("form.email.placeholder")}
              />

              <FormHelperText>
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
