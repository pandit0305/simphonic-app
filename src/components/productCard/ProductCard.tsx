import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styles } from '../../styles/style'
import items from '../../assets/images/item.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductCard = () => {
    const matches = useMediaQuery('(max-width:498px)');

    return (
        <Box sx={matches ? styles.respItemsBx : styles.itemsBx}>
            <Box>
                <img src={items} alt="" style={styles.itemsImg} />
            </Box>
            <Box>
                <Typography variant="h6" sx={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur.
                </Typography>
                <Typography variant="h6" sx={styles.code}>
                    411134
                </Typography>
                <Typography variant="h6" sx={styles.code}>
                    <span style={styles.price}>$ 0.98 </span>/each
                </Typography>
            </Box>
            {
                !matches ? (
                    <Box>
                        <Typography variant="h6" sx={styles.tx}>
                            Saving % 4.60
                        </Typography>
                        <Typography variant="h6" sx={styles.desc}>
                            Supplier: <span style={styles.code1}>Supplier</span>
                        </Typography>
                        <Typography variant="h6" sx={styles.desc}>
                            Delivery by: <span style={styles.code1}>20-Jan-2024</span>
                        </Typography>
                    </Box>
                ) : ''
            }
            {
                !matches ? (
                    <Box sx={styles.btnBx}>
                        <Box sx={styles.btnIncDec}>
                            <Typography variant="h6" sx={styles.desc1}>
                                -
                            </Typography>
                            <Typography variant="h6" sx={styles.desc1}>
                                1
                            </Typography>
                            <Typography variant="h6" sx={styles.desc1}>
                                +
                            </Typography>
                        </Box>
                        <Box sx={styles.likeBtn}>
                            <FavoriteBorderOutlinedIcon sx={{ color: '#228fad' }} />
                        </Box>
                    </Box>
                ) : ''
            }
            <Box sx={matches ? styles.respBtnBx : styles.block}>
                {
                    matches ? (
                        <Box sx={styles.respLikeBtn}>
                            <FavoriteBorderOutlinedIcon sx={{ color: '#228fad' }} />
                        </Box>
                    ):''
                }

                <Box sx={styles.addBtn}>
                    <Button sx={!matches? styles.respAddToBtn : styles.addToBtn}>{matches ? 'Add' : 'Add to Cart'}</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ProductCard
