import React from "react";
import { Box, Typography } from "@mui/material";
import CustomContainer from "../components/CustomContainer";

const IconBar: React.FC = () => {
  const iconBarItems = [
    {
      icon: "/images/icons/cashback.png",
      title: "FREE TO EARN",
      subtitle: "CASH BACK",
    },
    {
      icon: "/images/icons/race.png",
      title: "RANKING",
      subtitle: "TOP PLAYERS",
    },
    {
      icon: "/images/icons/Video.png",
      title: "VIDEO-NFT",
      subtitle: "WATCH & EARN",
    },
    {
      icon: "/images/icons/HowToPlay.png",
      title: "HOW TO BUY",
      subtitle: "GUIDE",
    },
    {
      icon: "/images/icons/New.png",
      title: "NEW NFTS",
      subtitle: "LATEST DROPS",
    },
    {
      icon: "/images/icons/Roadmaps.png",
      title: "ROADMAPS",
      subtitle: "FUTURE PLANS",
    },
  ];

  return (
    <Box sx={{ py: 2, bgcolor: "#2A2A2A" }}>
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
            justifyContent: "center",
          }}
        >
          {iconBarItems.map((item, index) => (
            <Box
              key={index}
              sx={{ textAlign: "center", flex: "1 1 150px", minWidth: 150 }}
            >
              <Box sx={{ mb: 1.5 }}>
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: "auto", height: "41px" }}
                />
              </Box>
              <Typography
                variant="body1"
                fontWeight="bold"
                color="text.primary"
                gutterBottom
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default IconBar;
