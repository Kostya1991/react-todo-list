import CssBaseline from "@mui/material/CssBaseline";
import {ThemeProvider, createTheme} from "@mui/material/styles";

import App from "../../App";
import {useSelector} from "react-redux";
import {themeSelector} from "../../store/theme/selectors/theme.selector";

export const Root = () => {
  const mode = useSelector(themeSelector);

  const theme = createTheme({
    colorSchemes: {
      dark: mode === "dark",
      light: mode === "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
};
