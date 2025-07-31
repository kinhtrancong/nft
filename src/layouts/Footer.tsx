import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import { Phone as PhoneIcon } from "@mui/icons-material";
import CustomContainer from "../components/CustomContainer";

const Footer: React.FC = () => {
  const footerLinks = {
    about: [
      "Careers",
      "Company Details",
      "Terms & Conditions",
      "Help center",
      "Privacy Policy",
      "Affiliate",
    ],
    products: [
      "NFT Marketplace",
      "Slingshot",
      "Swaps",
      "NFT Launchpad",
      "Runes Platform",
      "Creator Dashboard",
    ],
    resources: [
      "Support",
      "API",
      "Feature Requests",
      "Trust & Safety",
      "Sitemap",
    ],
    contact: ["support@tech.email", "affiliate@tech.com"],
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "white",
        py: 6,
        borderTop: "1px solid #2A2A2A",
      }}
    >
      <CustomContainer>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Box
            sx={{
              flex: {
                xs: "1 1 calc(50% - 16px)",
                md: "1 1 200px", 
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              ABOUT US
            </Typography>
            <List dense>
              {footerLinks.about.map((link, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={link}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "0.875rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: {
                xs: "1 1 calc(50% - 16px)", 
                md: "1 1 200px", 
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              PRODUCTS
            </Typography>
            <List dense>
              {footerLinks.products.map((link, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={link}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "0.875rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: {
                xs: "1 1 calc(50% - 16px)", 
                md: "1 1 200px", 
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              RESOURCES
            </Typography>
            <List dense>
              {footerLinks.resources.map((link, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={link}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "0.875rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              flex: {
                xs: "1 1 calc(50% - 16px)", 
                md: "1 1 200px", 
              },
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              CONTACT US
            </Typography>
            <List dense>
              {footerLinks.contact.map((link, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemText
                    primary={link}
                    sx={{
                      "& .MuiListItemText-primary": { fontSize: "0.875rem" },
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Box sx={{ cursor: "pointer" }}>
              <img src="/images/installApp.png" alt="install app" />
            </Box>
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Footer;
