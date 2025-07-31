import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold/Yellow
      light: '#FFE55C',
      dark: '#FFC107',
    },
    secondary: {
      main: '#FF69B4', // Hot Pink
      light: '#FF8AC5',
      dark: '#E91E63',
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B0B0B0',
    },
    success: {
      main: '#00FF88',
    },
    warning: {
      main: '#FF6B35',
    },
    error: {
      main: '#FF4757',
    },
    info: {
      main: '#00D2FF',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 900,
      lineHeight: 1.1,
      letterSpacing: '-0.025em',
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 800,
      lineHeight: 1.2,
      letterSpacing: '-0.025em',
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      textTransform: 'uppercase',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.4,
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderRadius: 8,
          padding: '12px 24px',
          fontWeight: 700,
          fontSize: '0.875rem',
          letterSpacing: '0.5px',
          minWidth: 'unset'
        },
        contained: {
          boxShadow: '0 4px 14px 0 rgba(255, 215, 0, 0.25)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 80, 
          '@media (min-width:600px)': {
            minHeight: 80, // desktop
          }// Set your desired height
        },
        
        dense: { // For dense variant
          minHeight: 32,
        },
      },
    }
  },
}); 