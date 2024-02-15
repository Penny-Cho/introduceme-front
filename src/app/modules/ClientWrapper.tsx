"use client";

import { darkTheme, lightTheme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React, { useEffect, useState } from "react";

interface IClientWrapper {
  children: React.ReactNode;
}

const ClientWrapper = ({ children }: IClientWrapper) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // 사용자의 시스템 테마 선호도를 감지
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(prefersDarkMode ? "dark" : "light");
  }, []);

  // 현재 테마에 따라 MUI 테마 객체 선택
  const currentTheme = theme === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ClientWrapper;
