import { Link as RouterLink } from "react-router-dom";
import { Box } from "@mui/material";
import logoImg from "../logo.png";

function Logo({ disabledLink = false, sx }) {
  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      <img src={logoImg} alt="logo" width="100%" />
    </Box>
  );

  // If dev wanna Logo is a logo, code below:
  if (disabledLink) {
    return <>{logo}</>;
  }

  // If dev wanna Logo is a link to HomePage, code below:
  return <RouterLink to="/">{logo}</RouterLink>;
}

export default Logo;
