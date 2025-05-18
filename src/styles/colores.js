import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
    primary: {
      main: "#3B6BA5", // azul institucional
    },
    secondary: {
      main: "#6BA539", // verde Mapuche
    },
    background: {
        default: "#f4f4f4",
    },
    text: {
        primary: "#333",
    },
    },
    typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    },
});

export default theme;