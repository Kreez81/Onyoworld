import { Box, Typography, useTheme, useMediaQuery, IconButton } from "@mui/material";
import {
  DarkMode,
  LightMode
} from "@mui/icons-material";
import { setMode } from "state";
import { useDispatch } from "react-redux";
import Form from "./Form";

function LoginPage() {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const dispatch = useDispatch();
  const dark = theme.palette.neutral.dark;

  return (
     <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          Onyoworld
        </Typography>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{ fontSize: "25px" }} />
          ) : (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          )}
        </IconButton>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500"  textAlign="center" variant="h5" sx={{ mb: "1.5rem" }}>
          This is Onyoworld, connect your world with others!
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;