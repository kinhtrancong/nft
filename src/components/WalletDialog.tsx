import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  IconButton,
} from '@mui/material';
import {
  Close as CloseIcon,
} from '@mui/icons-material';

interface WalletDialogProps {
  open: boolean;
  onClose: () => void;
}

const WalletDialog: React.FC<WalletDialogProps> = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        Explore NFT Marketplace
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <TextField fullWidth label="Wallet Address" variant="outlined" />
          <TextField fullWidth label="Email Address" variant="outlined" />
          <TextField fullWidth label="Username" variant="outlined" />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} variant="contained">
          Connect Wallet
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WalletDialog; 