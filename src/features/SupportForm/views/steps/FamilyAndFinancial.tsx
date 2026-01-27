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

const FamilyAndFinancial = () => {
  const { control } = useFormContext<UserFormValues>();

  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12 }}>
        <Controller
          name="marital_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Marital Status</FormLabel>
              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>Select marital status</em>
                </MenuItem>
                {MARITAL_STATUS?.map((state, idx) => (
                  <MenuItem key={idx} value={state?.id}>
                    {state?.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {error?.message || "Please select marital status"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="dependents"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Number of Dependents</FormLabel>
              <TextField
                {...field}
                type="number"
                placeholder="Enter number of dependents"
              />
              <FormHelperText>
                {error?.message || "Please enter number of dependents"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="employment_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Employment Status</FormLabel>

              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>Select employment status</em>
                </MenuItem>
                {EMPLOYMENT_STATUS.map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>

              <FormHelperText>
                {error?.message || "Please select employment status"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="monthly_income"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Monthly Income</FormLabel>
              <TextField
                {...field}
                type="number"
                placeholder="Enter monthly income"
              />
              <FormHelperText>
                {error?.message || "Please enter monthly income"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>

      <Grid size={{ xs: 12 }}>
        <Controller
          name="housing_status"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <FormControl error={!!error}>
              <FormLabel>Housing Status</FormLabel>
              <Select {...field} displayEmpty>
                <MenuItem value="">
                  <em>Select housing status</em>
                </MenuItem>
                {HOUSING_STATUS.map((status) => (
                  <MenuItem key={status.id} value={status.id}>
                    {status.label}
                  </MenuItem>
                ))}
              </Select>
              <FormHelperText>
                {error?.message || "Please select housing status"}
              </FormHelperText>
            </FormControl>
          )}
        />
      </Grid>
    </Grid>
  );
};

export default FamilyAndFinancial;
