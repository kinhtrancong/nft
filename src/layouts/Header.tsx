import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  IconButton,
  Box,
  Stack,
  Link,
} from "@mui/material";
import { CloseOutlined, Menu as MenuIcon } from "@mui/icons-material";

interface HeaderProps {
  onDrawerToggle: () => void;
  mobileOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle, mobileOpen }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{ bgcolor: "#000000", borderRadius: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters variant="regular">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            {mobileOpen ? <CloseOutlined /> : <MenuIcon />}
          </IconButton>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }} pr={3}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {/* Bird Logo */}
              <Link href="/">
                <img src="/images/logo.png" alt="Logo" width={71} height={39} />
              </Link>
            </Box>
          </Box>

          {/* Navigation Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* HOME Button - Active State */}
            <Button
              sx={{
                bgcolor: "#333333",
                color: "#FFD700",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 3,
                py: 1,
                borderRadius: "20px",
                border: "none",
                "&:hover": {
                  bgcolor: "#444444",
                },
              }}
            >
              HOME
            </Button>

            {/* Other Navigation Items */}
            <Button
              color="inherit"
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              ITEMS1
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              ITEMS2
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              ITEMS3
            </Button>
            <Button
              color="inherit"
              sx={{
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 2,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              ITEMS4
            </Button>
          </Box>

          {/* Action Buttons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ ml: 3 }}
            display="flex"
            justifyContent="end"
            flex={1}
          >
            {/* SIGN UP Button */}
            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: "#FFD700",
                color: "#000000",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 3,
                py: 1,
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: "#FFE55C",
                },
              }}
            >
              SIGN UP
            </Button>

            {/* LOG IN Button */}
            <Button
              variant="outlined"
              size="medium"
              sx={{
                bgcolor: "#000000",
                color: "#FFFFFF",
                textTransform: "uppercase",
                fontWeight: "bold",
                fontSize: "0.875rem",
                px: 3,
                py: 0.75,
                borderRadius: "20px",
                border: "2px solid #FFD700",
                "&:hover": {
                  bgcolor: "rgba(255, 215, 0, 0.1)",
                  borderColor: "#FFE55C",
                },
              }}
            >
              LOG IN
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
