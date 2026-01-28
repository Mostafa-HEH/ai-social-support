import { createTheme } from "@mui/material";

const muiTheme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: "#4A3AFF",
    },
    background: {
      paper: "#FBFBFE",
    },
    text: {
      primary: "#170f49",
    },
  },
  components: {
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "14px",
          minHeight: "48px",
          boxShadow: "0px 0.5px 1px rgba(25, 33, 61, 0.04)",
        },
        notchedOutline: {
          borderColor: "#D9DBE9",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          marginBottom: 12,
          color: "var(--app-palette-text-primary)",
          fontWeight: 500,

          "&.Mui-focused": {
            color: "var(--app-palette-text-primary)",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 12,
          minHeight: 48,
          padding: "0 18px",
          minWidth: 150,
          textTransform: "none",
        },
      },

      variants: [
        {
          props: { variant: "contained", color: "primary" },
          style: {
            background:
              "linear-gradient(160.41deg, #8C82FF -5.15%, #4A3AFF 87.35%)",
            border: "0.5px solid #D2CEFF",
            boxShadow:
              "0px 2px 5px rgba(74, 58, 255, 0.25), " +
              "inset 0px -2px 2px rgba(0, 66, 137, 0.15), " +
              "inset 0px 1px 1px rgba(255, 255, 255, 0.1), " +
              "inset 0px 3px 4px rgba(223, 238, 255, 0.1)",

            "&:hover": {
              background:
                "linear-gradient(160.41deg, #7A70FF -5.15%, #3F30FF 87.35%)",
              boxShadow:
                "0px 4px 8px rgba(74, 58, 255, 0.35), " +
                "inset 0px -2px 2px rgba(0, 66, 137, 0.2)",
            },

            "&:active": {
              boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.15)",
            },

            "&.Mui-disabled": {
              background: "#E5E7EB",
              borderColor: "#D1D5DB",
              color: "#9CA3AF",
              boxShadow: "none",
            },
          },
        },
        {
          props: { variant: "outlined", color: "primary" },
          style: {
            background:
              "linear-gradient(151.44deg, #FFFFFF -62.65%, #FBFBFE 83.01%)",
            border: "1px solid #D9DBE9",

            boxShadow:
              "0px 3px 6px rgba(7, 0, 110, 0.03), " +
              "inset 0px -2px 2px rgba(27, 35, 85, 0.07), " +
              "inset 0px 4px 6px rgba(255, 255, 255, 0.4)",

            color: "var(--app-palette-text-primary)",

            "&:hover": {
              background:
                "linear-gradient(151.44deg, #FFFFFF -62.65%, #F3F4FF 83.01%)",
              borderColor: "#C7C9E5",
            },

            "&:active": {
              boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
            },

            "&.Mui-disabled": {
              background: "#F3F4F6",
              borderColor: "#E5E7EB",
              color: "#9CA3AF",
              boxShadow: "none",
            },
          },
        },
        {
          props: { size: "small" },
          style: {
            minWidth: "unset",
            minHeight: "unset",
            padding: "2px 8px",
            borderRadius: 8,
            fontSize: 12,
            fontWeight: 500,
            lineHeight: 1.2,

            background: "transparent",
            boxShadow: "none",
            color: "var(--app-palette-primary-main)",

            "&:hover": {
              background: "rgba(74, 58, 255, 0.08)",
              boxShadow: "none",
            },

            "&:active": {
              background: "rgba(74, 58, 255, 0.12)",
            },
          },
        },
      ],
    },
  },
});

export default muiTheme;
