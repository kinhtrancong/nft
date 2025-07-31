import React from 'react';
import { Box, Container } from '@mui/material';

interface CustomContainerProps {
  children: React.ReactNode;
  sx?: any;
}

const CustomContainer: React.FC<CustomContainerProps> = ({ children, sx = {} }) => {
  return (
    <Container 
      maxWidth={false}
      sx={{
        maxWidth: '1128px !important',
        width: '100%',
        px: { xs: 2, sm: 3, md: 4 },
        mx: 'auto',
        ...sx
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer; 