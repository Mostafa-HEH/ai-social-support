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

const PersonalInformations = () => {
  const { control } = useFormContext<UserFormValues>();

  return (
    <Grid container rowSpacing="20px" columnSpacing="16px">
      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="name"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Full Name</FormLabel>
              <TextField {...field} placeholder="Enter full name" />
              <FormHelperText>
                {error?.message || "Please enter full name"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="national_id"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>National ID</FormLabel>
              <TextField {...field} placeholder="Enter national ID" />
              <FormHelperText>
                {error?.message || "Please enter national ID"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="date_of_birth"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Date of Birth</FormLabel>
              <TextField {...field} type="date" />
              <FormHelperText>
                {error?.message || "Please select date of birth"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="gender"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Gender</FormLabel>
              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>Select gender</em>
                </MenuItem>
                {GENDER.map((g) => (
                  <MenuItem key={g.id} value={g.id}>
                    {g.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {error?.message || "Please select gender"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="country"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Country</FormLabel>
              <Autocomplete
                options={COUNTRIES}
                getOptionLabel={(option) => option.label}
                onChange={(_, value) => field.onChange(value)}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Select country" />
                )}
              />
              <FormHelperText>
                {error?.message || "Please select country"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="state"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>State / Province</FormLabel>
              <TextField {...field} placeholder="Enter state or province" />
              <FormHelperText>
                {error?.message || "Please enter state or province"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="city"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>City</FormLabel>
              <TextField {...field} placeholder="Enter city" />
              <FormHelperText>
                {error?.message || "Please enter your city"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="address"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Address</FormLabel>
              <TextField {...field} placeholder="Enter your address" />
              <FormHelperText>
                {error?.message || "Please enter your address"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="phone"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Phone</FormLabel>
              <TextField
                {...field}
                inputMode="tel"
                placeholder="Enter phone number"
              />
              <FormHelperText>
                {error?.message || "Please enter phone number"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Email</FormLabel>
              <TextField
                {...field}
                type="email"
                placeholder="Enter email address"
              />
              <FormHelperText>
                {error?.message || "Please enter a valid email"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default PersonalInformations;
