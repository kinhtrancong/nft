import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  Drawer,
} from "@mui/material";

// Theme
import { theme } from "./theme";

// Layouts
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import Footer from "./layouts/Footer";

// Sections
import HeroSection from "./sections/HeroSection";
import IconBar from "./sections/IconBar";
import NFTCollections from "./sections/NFTCollections";
import CombinedNFTSection from "./sections/CombinedNFTSection";

// Components
import WalletDialog from "./components/WalletDialog";

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* Header */}
      <Header onDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} />

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { 
            boxSizing: "border-box", 
            width: "100%", 
            bgcolor: "background.paper",
            top: "80px",
            height: "calc(100% - 80px)",
            border: "none",
            borderRadius: 0,
           
          },
          "& .MuiBackdrop-root": {
            background: 'unset',
          },
        }}
      >
        <Sidebar />
      </Drawer>

      {/* Main Content */}
      <Box sx={{ pt: 10 }}>
        {/* Hero Section */}
        <HeroSection onExploreClick={handleDialogOpen} />

        {/* Icon Bar */}
        <IconBar />

        {/* New NFT Collections */}
        <NFTCollections />

        {/* Combined NFT Section */}
        <CombinedNFTSection />
      </Box>

      {/* Footer */}
      <Footer />

      {/* Wallet Dialog */}
      <WalletDialog open={openDialog} onClose={handleDialogClose} />
    </ThemeProvider>
  );
}

export default App;
