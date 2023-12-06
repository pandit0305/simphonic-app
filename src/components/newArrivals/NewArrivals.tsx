import { Box, Typography } from '@mui/material'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { styles } from '../../styles/style'
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';

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
            'X-RapidAPI-Key': '5c798b513fmshbea314e3e145a59p1ca7e6jsnb19696403526',
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
const NewArrivals = () => {
    const matches = useMediaQuery('(max-width:498px)');
    const [list, setList] = React.useState([]);

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
    return (
        <Box sx={matches ? styles.respBx3 : styles.bx3}>
            <Box >
                <Box sx={matches ? styles.respHeading : styles.headingBx}>
                    <Typography variant="h5" sx={styles.heading}>NEW ARRIVALS</Typography>
                </Box>
                <Box sx={styles.slider}>
                    <Slider {...settings}>
                        {
                            list && list.map((res: any) => (
                                <Box sx={styles.sliderBx}>
                                    <ProductCard key={res.manufacturer_id + Math.random()} data={res} />
                                </Box>
                            ))
                        }
                    </Slider>
                </Box>
            </Box>
        </Box>

    )
}

export default NewArrivals
