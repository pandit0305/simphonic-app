import React from 'react'
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styles } from '../../styles/style';
import Home from '../../components/home/Home';
import ProductCard from '../../components/productCard/ProductCard';
import { useSelector, shallowEqual, useDispatch } from "react-redux";


const ViewPage = () => {
  const matches = useMediaQuery('(max-width:498px)');

  const {data, keyword, isLoading} = useSelector(
    (state: ProductState) => {
      return {
        data : state.data,
        keyword: state.keyword,
        isLoading: state.isLoading
      }
    },
    shallowEqual
  )
  console.log(data);
  return (
    <Box>
      <Home />
      <Box sx={matches ? styles.respBx3 : styles.bx3}>
        {}
        <Box >
          <Box sx={matches ? styles.respHeading : styles.headingBx}>
            {
              keyword && (
                <Typography variant="h5" sx={styles.heading}>"{keyword}" <br /><span style={styles.code}>Found {data.length} items</span></Typography>
              )
            }
          </Box>
          <Box sx={matches ? styles.respBx4 : styles.bx4}>
            {
              data && data.map((res: any) => (
                <ProductCard key={res.manufacturer_id + Math.random()} data={res} />
              ))
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ViewPage
