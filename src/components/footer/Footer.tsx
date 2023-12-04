import React from 'react';
import { Box, Typography } from '@mui/material';
import { styles } from '../../styles/style';
import useMediaQuery from '@mui/material/useMediaQuery';

const searches = [
  {
    keywords: "Construction Helmet",
    id: 0
  },
  {
    keywords: "Saws",
    id: 1
  },
  {
    keywords: "Cider",
    id: 2
  },
  {
    keywords: "Apple Juice",
    id: 3
  },
  {
    keywords: "Tapes",
    id: 4
  },
  {
    keywords: "Construction Suite",
    id: 5
  },
  {
    keywords: "Pullers",
    id: 6
  },
  {
    keywords: "Pickaxes and Crowbars",
    id: 7
  },
  {
    keywords: "Carrots",
    id: 8
  },
  {
    keywords: "Construction hammer",
    id: 9
  },
  {
    keywords: "Wrenches",
    id: 10
  },
  {
    keywords: "Construction Shovels",
    id: 11
  },
];

const Footer = () => {
  const matches = useMediaQuery('(max-width:498px)');

  return (
    <>
      <Box sx={matches ? styles.respBx3 : styles.bx3}>
        <Box >
          <Box sx={matches ? styles.respHeading : styles.headingBx}>
            <Typography variant="h5" sx={styles.heading}>PEOPLE SEARCHING FOR</Typography>
          </Box>
          <Box sx={styles.searchBx}>
            {
              searches.map((res)=>(
                <Typography sx={styles.searchText} key={res.id}>{res.keywords}</Typography>
              ))
            }
          </Box>
        </Box>
      </Box>
      <Box sx={styles.cpyBx}>
        <Typography sx={styles.cpy}>@ 2024 - simphonic</Typography>
      </Box>
    </>
  )
}

export default Footer
