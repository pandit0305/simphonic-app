import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { styles } from '../../styles/style'
import items from '../../assets/images/item.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useNavigate } from 'react-router-dom';

const ProductCard = (data:any) => {
    const matches = useMediaQuery('(max-width:498px)');
    const navigate = useNavigate();
    const item = data?.data;

    const gotoDetailPage =(item:any)=>{
       return navigate(`/${item?.manufacturer_id}`, {state:item});
    }
    return (
        <Box sx={matches ? styles.respItemsBx : styles.itemsBx} onClick={()=>gotoDetailPage(item)}>
            <Box sx={styles.mainImg}>
                <img src={item?.image_url || items} alt="" style={styles.itemsImg} />
            </Box>
            <Box sx={{marginTop:1}}>
                <Typography variant="h6" sx={styles.nameDesc}>
                    {item?.name}
                </Typography>
                <Typography variant="h6" sx={styles.code}>
                    {item?.number_of_reviews}
                </Typography>
                <Typography variant="h6" sx={styles.code}>
                    <span style={styles.price}>$ {item?.item_price} </span>/each
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
