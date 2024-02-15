"use client";
import { Noto_Sans_KR } from "next/font/google";
import { Theme, createTheme } from "@mui/material/styles";
import { grey, red, teal } from "@mui/material/colors";

const notoSans_kr = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

/**
 * 다크모드와 라이트모드를 구분하기 위한 타입
 */
export type PaletteMode = "light" | "dark";

const baseTheme = {
  typography: {
    fontSize: 12,
    fontFamily: notoSans_kr.style.fontFamily,
    h1: {
      fontSize: "3rem",
      lineHeight: 1.167,
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.76rem",
      lineHeight: 1.167,
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.6rem",
      lineHeight: 1.167,
      fontWeight: 600,
    },
    h4: {
      fontSize: "1.4rem",
      lineHeight: 1.167,
      fontWeight: 600,
    },
    h5: {
      fontSize: "1.1rem",
      lineHeight: 1.167,
      fontWeight: 600,
    },
    h6: {
      fontSize: "0.92rem",
      lineHeight: 1,
      fontWeight: 600,
    },
    h7: {
      fontSize: "0.82rem",
      lineHeight: 1,
      fontWeight: 600,
    },
    body1: {
      lineHeight: 1.25,
      fontSize: ".82rem",
    },
    body2: {
      fontSize: ".77rem",
    },
    subtitle1: {
      fontSize: ".68rem",
      fontWeight: 600,
    },
    subtitle2: {
      fontSize: ".6rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiButtonGroup: {
      styleOverrides: {
        grouped: ({ theme }: { theme: Theme }) => ({
          ":not(:last-of-type)": {
            borderRight: `1px solid ${theme.palette.divider}`,
          },
          minWidth: 30,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "8px 22px",
        },

        sizeLarge: {
          fontSize: ".9rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          paddingBottom: "2%",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minWidth: 30,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paperAnchorRight: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontSize: "0.75rem",
        },
      },
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: ({ theme }: { theme: Theme }) => ({
          backgroundColor: theme.palette.background.default,
        }),
      },
    },
  },
};

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "dark",
    primary: {
      main: teal[800],
    },
    secondary: {
      main: teal[500],
    },
    background: {
      default: grey[900],
      paper: grey[800],
    },
    error: {
      main: red[400],
    },

    divider: grey[700],
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    mode: "light",
    primary: {
      main: teal[500],
    },
    secondary: {
      main: teal[800],
    },
    background: {
      default: grey[50],
      paper: grey[100],
    },
    error: {
      main: red[500],
    },
    divider: grey[200],
  },
});

export { lightTheme, darkTheme };
