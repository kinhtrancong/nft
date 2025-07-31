import React from "react";
import { Box } from "@mui/material";
import useMobile from "../hooks/useMobile";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const isMobile = useMobile();
  return (
    <Box
      sx={{
        lineHeight: 0,
      }}
    >
      <img
        src={isMobile ? "/images/bannerMobile.png" : "/images/banner.png"}
        alt="Hero Background"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </Box>
  );
};

export default HeroSection;
