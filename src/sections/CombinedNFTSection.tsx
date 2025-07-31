import React from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  Button,
} from "@mui/material";
import {
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon,
  QrCode as QIcon,
  FavoriteBorder as HeartIcon,
  PlayCircleOutline as PlayIcon,
  BookmarkBorder as BookmarkIcon,
} from "@mui/icons-material";
import CustomContainer from "../components/CustomContainer";
import useMobile from "../hooks/useMobile";

const CombinedNFTSection: React.FC = () => {
  const isMobile = useMobile();

  return (
    <Box sx={{ pt: 2, pb: 5, bgcolor: "background.default" }}>
      <CustomContainer>
        {isMobile ? (
          // Mobile Layout - 2 columns
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {/* NFT Drops Calendar - Full width */}
            <Box>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h3" color="primary.main">
                  NFT DROPS CALENDAR
                </Typography>
                <Box>
                  <Button
                    color="primary"
                    size="small"
                    sx={{
                      height: "40px",
                      width: "40px",
                      zIndex: 1,
                      color: "text.primary",
                      padding: 0,
                      bgcolor: "#383A42",
                      borderRadius: 1,
                      marginRight: 1,
                    }}
                  >
                    <ArrowLeftIcon />
                  </Button>
                  <Button
                    color="secondary"
                    size="small"
                    sx={{
                      height: "40px",
                      width: "40px",
                      padding: 0,
                      zIndex: 1,
                      color: "text.primary",
                      bgcolor: "#383A42",
                      borderRadius: 1,
                    }}
                  >
                    <ArrowRightIcon />
                  </Button>
                </Box>
              </Box>
              <Box mt={2} borderRadius={1}>
                <img
                  src="/images/newNft.png"
                  alt="new NFT"
                  height={200}
                  width={"100%"}
                />
              </Box>
            </Box>

            {/* Hot NFT & Promotion - 2 columns */}
            <Box display="flex" gap={2}>
              <Box flex={1}>
                <Typography variant="h3" color="primary.main">
                  HOT NFT
                </Typography>
                <Box mt={2} borderRadius={1}>
                  <img
                    src="/images/hotNft.png"
                    alt="hot nft"
                    width="100%"
                    height={200}
                  />
                </Box>
              </Box>
              <Box flex={1}>
                <Typography variant="h3" color="primary.main">
                  PROMOTION
                </Typography>
                <Box mt={2} borderRadius={1}>
                  <img
                    src="/images/nftPromotion.png"
                    alt="promotion NFT"
                    width="100%"
                    height={200}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        ) : (
          // Desktop Layout - Original layout
          <Box sx={{ display: "flex", gap: 2 }}>
            <Box flex={1}>
              <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Typography variant="h3" color="primary.main">
                  NFT DROPS CALENDAR
                </Typography>
                <Box>
                  <Button
                    color="primary"
                    size="small"
                    sx={{
                      height: "40px",
                      width: "40px",
                      zIndex: 1,
                      color: "text.primary",
                      padding: 0,
                      bgcolor: "#383A42",
                      borderRadius: 1,
                      marginRight: 1,
                    }}
                  >
                    <ArrowLeftIcon />
                  </Button>
                  <Button
                    color="secondary"
                    size="small"
                    sx={{
                      height: "40px",
                      width: "40px",
                      padding: 0,
                      zIndex: 1,
                      color: "text.primary",
                      bgcolor: "#383A42",
                      borderRadius: 1,
                    }}
                  >
                    <ArrowRightIcon />
                  </Button>
                </Box>
              </Box>
              <Box mt={2} borderRadius={1}>
                <img
                  src="/images/newNft.png"
                  alt="new NFT"
                  height={240}
                  width={"100%"}
                />
              </Box>
            </Box>
            <Box display="flex" gap={2}>
              <Box>
                <Typography variant="h3" color="primary.main">
                  HOT NFT
                </Typography>
                <Box mt={2} borderRadius={1}>
                  <img
                    src="/images/hotNft.png"
                    alt="hot nft"
                    width={240}
                    height={240}
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="h3" color="primary.main">
                  PROMOTION
                </Typography>
                <Box mt={2} borderRadius={1}>
                  <img
                    src="/images/nftPromotion.png"
                    alt="promotion NFT"
                    width={240}
                    height={240}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        )}
      </CustomContainer>
    </Box>
  );
};

export default CombinedNFTSection;
