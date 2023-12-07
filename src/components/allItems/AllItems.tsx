import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductCard from '../productCard/ProductCard'
import { styles } from '../../styles/style'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { addProduct } from '../../store/actions';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";

const getSearchList = async (keywords: string) => {
  const options = {
    method: 'GET',
    url: 'https://wayfair.p.rapidapi.com/products/search',
    params: {
      keyword: `${keywords}`,
      sortby: '0',
      curpage: '1',
      itemsperpage: '48'
    },
    headers: {
      'X-RapidAPI-Key': 'bd4bcc618cmshe7110a5ab7ceadap1510dejsnb7786dfb19a3',
      'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    }
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    const list = response.data?.response?.product_collection;
    return list;
  } catch (error) {
    console.error(error);
  }
}
const AllItems = () => {
  const matches = useMediaQuery('(max-width:498px)');
  const navigate = useNavigate();
  const [list, setList] = React.useState([]);
  const dispatch: Dispatch<any> = useDispatch();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getList = async () => {
    try {
      const list = await getSearchList("light shaded room");
      setList(list);
      console.log(list)
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    getList();
  }, [0])

  const gotoViewPage = () => {
    dispatch(addProduct({data:list, keyword: "All Items"}));
    navigate('/products')
  }
  return (
    <Box sx={matches ? styles.respBx3 : styles.bx3}>
      <Box >
        <Box sx={matches ? styles.respHeading : styles.headingBx}>
          <Typography variant="h5" sx={styles.heading}>ALL ITEMS</Typography>
          <Typography variant="h5" sx={styles.tx1} onClick={gotoViewPage}>See More</Typography>
        </Box>
        <Box sx={matches ? styles.respBx4 : styles.bx4}>
          {
            list && list.map((res: any, index:number) => {
              if(index < 10){
                return <ProductCard key={res.manufacturer_id + Math.random()} data={res} />
              }
            })
          }
        </Box>
      </Box>
    </Box>
  )
}

export default AllItems
