import React from 'react';
import items from '../../assets/images/item.png';
import { Box, Typography } from '@mui/material';
import { styles } from '../../styles/style';
import useMediaQuery from '@mui/material/useMediaQuery';

const bestSellingCategories = [
    {
        image:items,
        id:0
    },
    {
        image:items,
        id:1
    },
    {
        image:items,
        id:2
    },
    {
        image:items,
        id:3
    },
    {
        image:items,
        id:4
    }
];

const BestSellingCategories = () => {
  const matches = useMediaQuery('(max-width:498px)');

  return (
    <Box sx={matches ? styles.respBx3 : styles.bx3}>
        <Box >
            <Box sx={matches ? styles.respHeading :styles.headingBx}>
                <Typography variant="h5" sx={styles.heading}>BEST SELLING CATEGORIES</Typography>
            </Box>
            <Box sx={matches ? styles.respBx4 : styles.bx4}>
                {
                    bestSellingCategories.map((res)=>(
                        <Box sx={matches ? styles.respItemsBx : styles.itemsBx} key={res.id}>
                            <img src={res.image} alt="" style={styles.itemImg}/>
                            <Typography variant="h6" sx={matches ? styles.respItemFont : styles.ItemFont}>Food and Beverages</Typography>
                        </Box>
                    ))
                }
            </Box>
        </Box>
    </Box>
  )
}

export default BestSellingCategories
