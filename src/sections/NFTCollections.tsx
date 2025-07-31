import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './NFTCollections.css';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  IconButton,
  Avatar,
} from '@mui/material';
import {
  KeyboardArrowLeft as ArrowLeftIcon,
  KeyboardArrowRight as ArrowRightIcon,
  FavoriteBorder as FavoriteIcon,
  Favorite as FavoriteFilledIcon,
} from '@mui/icons-material';
import CustomContainer from '../components/CustomContainer';
import useMobile from '../hooks/useMobile';

const nftCollections = [
  {
    id: 1,
    name: 'Classical Bust Pink',
    artist: 'CryptoArtist',
    image: '/images/nftCollections/nft1.png',
    price: '0.5 ETH',
    rarity: 'Rare',
    description: 'Pink classical bust with neon blue grid overlay',
    avatar: 'https://via.placeholder.com/40x40/FF69B4/FFFFFF?text=CA',
  },
  {
    id: 2,
    name: 'Halo Bust',
    artist: 'DigitalDreamer',
    image: '/images/nftCollections/nft2.png',
    price: '0.8 ETH',
    rarity: 'Epic',
    description: 'Pink bust with glowing white halo',
    avatar: 'https://via.placeholder.com/40x40/FFB6C1/FFFFFF?text=DD',
  },
  {
    id: 3,
    name: 'Retro Grid Bust',
    artist: 'PixelMaster',
    image: 'images/nftCollections/nft3.png',
    price: '1.2 ETH',
    rarity: 'Legendary',
    description: 'Blue fractured bust with retro grid',
    avatar: 'https://via.placeholder.com/40x40/00D2FF/FFFFFF?text=PM',
  },
  {
    id: 4,
    name: 'Purple Character',
    artist: 'ArtVault',
    image: 'images/nftCollections/nft4.png',
    price: '0.3 ETH',
    rarity: 'Common',
    description: '3D cartoon with purple hair and neon glasses',
    avatar: 'https://via.placeholder.com/40x40/8A2BE2/FFFFFF?text=AV',
  },
  {
    id: 5,
    name: 'Masked Character',
    artist: 'MetaCreator',
    image: 'images/nftCollections/nft5.png',
    price: '0.7 ETH',
    rarity: 'Rare',
    description: 'Stylized figure with metallic eyepiece',
    avatar: 'https://via.placeholder.com/40x40/FF6B35/FFFFFF?text=MC',
  },
  {
    id: 6,
    name: 'Crystal Diamond',
    artist: 'GemArtist',
    image: 'images/nftCollections/nft6.png',
    price: '2.0 ETH',
    rarity: 'Mythic',
    description: 'Iridescent crystal with floating gems',
    avatar: 'https://via.placeholder.com/40x40/00FF88/FFFFFF?text=GA',
  }


];

const NFTCollections: React.FC = () => {
  const isMobile = useMobile();

  // Custom arrow components
  const CustomPrevArrow = ({ onClick, className }: any) => (
    <Button 
      onClick={onClick}
      className={className}
      color='primary'
      size='small'
      sx={{ 
        height: '40px',
        width: '40px',
        position: 'absolute',
        right: 48,
        left: 'unset !important',
        top: -34,
        zIndex: 1,
        color: 'text.primary',
        padding: 0,
        bgcolor: '#383A42',
        borderRadius: 1
        
      }}
    >
      <ArrowLeftIcon />
    </Button>
  );

  const CustomNextArrow = ({ onClick, className }: any) => (
    <Button 
      onClick={onClick}
      className={className}
      color='secondary'
      size='small'
      sx={{ 
        height: '40px',
        width: '40px',
        position: 'absolute',
        right: 0,
        top: -34,
        padding: 0,
        zIndex: 1,
        color: 'text.primary',
        bgcolor: '#383A42',
        borderRadius: 1
      }}
    >
      <ArrowRightIcon />
    </Button>
  );

  // Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    pauseOnHover: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  return (
    <Box sx={{ py: 5, bgcolor: 'background.default' }}>
      <CustomContainer>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h3" color="primary.main" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
            NEW NFT COLLECTIONS
          </Typography>
        </Box>
        
        {/* Slick Carousel */}
        <Box sx={{ position: 'relative' }}>
          <Slider {...settings}>
            {nftCollections.map((nft) => (
              <Box key={nft.id}>
               
                  <CardMedia
                    component="img"
                    image={nft.image}
                    alt={nft.name}
                    sx={{
                      width: isMobile ? '102px': '180px',
                      height: isMobile ? '140px' : '245px',
                      objectFit: 'cover',
                      display: 'block',
                      p: 0,
                      m: 0,
                      borderRadius: 1.5,
                    }}
                  />
               
              </Box>
            ))}
          </Slider>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default NFTCollections; 