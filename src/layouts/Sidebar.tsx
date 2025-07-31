import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Store as StoreIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  ContactSupport as ContactIcon,
} from "@mui/icons-material";

const Sidebar: React.FC = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <List sx={{ pt: 2, textAlign: 'center' }}>
        <ListItem>
          <ListItemButton>
            
            <ListItemText primary="HOME" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            
            <ListItemText primary="ITEMS1" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            
            <ListItemText primary="ITEMS2" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            
            <ListItemText primary="ITEMS3" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            
            <ListItemText primary="ITEMS4" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
