import React from 'react'
import { Box } from '@mui/material';
import banner from '../../assets/images/banner.png';
import { styles } from '../../styles/style';

const Banner = () => {
  return (
    <Box>
    <img src={banner} alt="banner_image" style={styles.banner} />
  </Box>
  )
}

export default Banner;
