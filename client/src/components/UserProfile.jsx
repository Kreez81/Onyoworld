import { Box, Typography, useTheme } from "@mui/material";

const UserImage = ({ firstName, size = "60px" }) => {
    const { palette } = useTheme();
    const primaryLight = palette.primary.light;
  return (
    <Box width={size} height={size} sx={{backgroundColor: primaryLight,borderRadius:"50%"}} display="flex" justifyContent="center" alignItems="center">
      <Typography sx={{fontSize:"3.2vh"}}>{firstName}</Typography>
    </Box>
  );
};

export default UserImage;