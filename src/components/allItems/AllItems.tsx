import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductCard from '../productCard/ProductCard'
import { styles } from '../../styles/style'
import useMediaQuery from '@mui/material/useMediaQuery';

const AllItems = () => {
    const matches = useMediaQuery('(max-width:498px)');
  return (
    <Box sx={matches ? styles.respBx3 : styles.bx3}>
             <Box >
            <Box sx={matches ? styles.respHeading :styles.headingBx}>
                <Typography variant="h5" sx={styles.heading}>ALL ITEMS</Typography>
                <Typography variant="h5" sx={styles.tx1}>See More</Typography>
            </Box>
            <Box sx={matches ? styles.respBx4 : styles.bx4}>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </Box>
        </Box>
    </Box>
  )
}

export default AllItems
