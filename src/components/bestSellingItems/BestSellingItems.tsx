import React from 'react'
import { Box, Typography } from '@mui/material'
import ProductCard from '../productCard/ProductCard'
import { styles } from '../../styles/style'
import useMediaQuery from '@mui/material/useMediaQuery';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const BestSellingItems = () => {
    const matches = useMediaQuery('(max-width:498px)');

    const settings = {
        dots: true,
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
                    dots: true
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
    return (
        <Box sx={matches ? styles.respBx3 : styles.bx3}>
            <Box >
                <Box sx={matches ? styles.respHeading : styles.headingBx}>
                    <Typography variant="h5" sx={styles.heading}>BEST SELLING ITEMS</Typography>
                </Box>
                <Box sx={styles.slider}>
                    <Slider {...settings}>
                    
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                            <div>
                                <ProductCard />
                            </div>
                    </Slider>
                </Box>
            </Box>
        </Box>

    )
}

export default BestSellingItems
