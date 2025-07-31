# React TypeScript NFT Marketplace

A modern NFT marketplace interface built with React, TypeScript, and Material-UI (MUI) featuring a dark theme with neon accents.

## Features

- **Dark Theme Design**: Modern dark interface with neon color accents
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Material-UI Components**: Modern, accessible UI components
- **TypeScript**: Type-safe development
- **Hero Section**: Eye-catching landing area with NFT guide content
- **Icon Bar**: Quick access to key features (Free to Earn, Ranking, Video-NFT, etc.)
- **NFT Collections**: Showcase of new NFT collections with pricing
- **NFT Drops Calendar**: Calendar for upcoming NFT drops
- **Hot NFT & Promotion**: Featured NFTs and promotional content
- **Footer**: Comprehensive footer with links and contact information

## Technologies Used

- React 19
- TypeScript
- Material-UI (MUI) v7
- Emotion (CSS-in-JS)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Create a production build:
```bash
npm run build
```

## Project Structure

```
src/
├── App.tsx          # Main NFT marketplace component
├── index.tsx        # Application entry point
├── index.css        # Global styles
└── ...
```

## Sections

- **Navigation Bar**: Fixed header with TECH logo, menu items (HOME, ITEMS1-4), and auth buttons (SIGN UP, LOG IN)
- **Hero Section**: Dark gradient background with "THINGS TO CHECK BEFORE BUYING NFTS" headline and call-to-action buttons
- **Icon Bar**: Six feature icons (Free to Earn, Ranking, Video-NFT, How to Buy, New NFTs, Roadmaps)
- **New NFT Collections**: Grid of NFT cards with pricing and rarity levels
- **NFT Drops Calendar**: Calendar section for upcoming drops
- **Hot NFT & Promotion**: Featured NFT and promotional content
- **Footer**: Four-column footer with About Us, Products, Resources, and Contact sections

## Design System

### Color Palette
- **Primary**: Gold/Yellow (#FFD700) - Used for main accents and buttons
- **Secondary**: Hot Pink (#FF69B4) - Used for highlights and secondary elements
- **Background**: Dark theme (#0A0A0A, #1A1A1A, #2A2A2A)
- **Text**: White (#FFFFFF) and light gray (#B0B0B0)
- **Success**: Neon Green (#00FF88)
- **Warning**: Orange (#FF6B35)
- **Error**: Red (#FF4757)
- **Info**: Cyan (#00D2FF)

### Typography
- **Font Family**: Orbitron (with fallbacks) - Futuristic, tech-focused font
- **Text Transform**: Uppercase for headings and buttons
- **Font Weights**: Bold (700-900) for impact

### Components
All components feature:
- Dark backgrounds with subtle gradients
- Neon color accents
- Glowing effects and shadows
- Rounded corners (12-16px border radius)
- Glass-morphism effects

## Customization

The theme can be customized by modifying the `createTheme` configuration in `App.tsx`:

```typescript
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFD700', // Gold
    },
    secondary: {
      main: '#FF69B4', // Hot Pink
    },
    background: {
      default: '#0A0A0A',
      paper: '#1A1A1A',
    },
  },
  typography: {
    fontFamily: '"Orbitron", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 900,
      textTransform: 'uppercase',
    },
  },
});
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Learn More

To learn more about the technologies used:

- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Material-UI Documentation](https://mui.com/)
