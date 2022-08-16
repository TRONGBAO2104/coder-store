/** THIS IS A LOGIN PAGE WHEN USER NEED LOGIN ACCOUNT TO SEE HOMEPAGE
 *
 */

import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Logo from "../components/Logo";
import { Stack } from "@mui/material";

const HeaderStyle = styled("header")(({ theme }) => ({
  top: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  position: "absolute",
}));

/** BLANKLAYOUT
 * 1_Logo image
 * 2_Form user input username
 */

function BlankLayout() {
  return (
    <Stack minHeight="120vh" justifyContent="center" alignItems="center">
      {/* Logo display here */}
      <HeaderStyle>
        <Logo sx={{ width: 200 }} />
      </HeaderStyle>

      {/* 
      - Form for user input username 
      - Route BlankLayout wrap Route LoginPage and NotFoundPage and put it here
      */}
      <Outlet />
    </Stack>
  );
}

export default BlankLayout;
