import { extendTheme } from "@mui/material/styles";

const getMuiTheme = (direction: "ltr" | "rtl") =>
  extendTheme({
    cssVarPrefix: "app",
    direction,

    colorSchemes: {
      light: {
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
            borderRadius: 14,
            minHeight: 48,
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
            fontWeight: 500,
            color: "var(--app-palette-text-primary)",

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
            },
          },

          {
            props: { variant: "outlined", color: "primary" },
            style: {
              background:
                "linear-gradient(151.44deg, #FFFFFF -62.65%, #FBFBFE 83.01%)",
              border: "1px solid #D9DBE9",
              color: "var(--app-palette-text-primary)",
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
              background: "transparent",
              color: "var(--app-palette-primary-main)",
            },
          },
        ],
      },

      MuiStepper: {
        styleOverrides: {
          root: {
            padding: 24,
            gap: 16,
            height: 38,
            backgroundColor: "#F1F0FB",
            border: "0.5px solid #EAE8FF",
            borderRadius: 16,
          },
        },
      },
    },
  });

export default getMuiTheme;
