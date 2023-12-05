import React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography, useMediaQuery } from '@mui/material'
import Home from '../../components/home/Home'
import { styles } from '../../styles/style'
import image from '../../assets/images/item.png';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BestSellingItems from '../../components/bestSellingItems/BestSellingItems';
import { useLocation } from 'react-router-dom';

const SingleProductPage = () => {
  const matches = useMediaQuery('(max-width:498px)');
  const [expanded, setExpanded] = React.useState<string | false>('');
  const {state} = useLocation();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  console.log(state)
  return (
    <Box>
      <Home />
      <Box sx={matches ? styles.respBx3 : styles.bx3}>
        <Box sx={matches ? styles.s11 : styles.s1}>
          <Box>
            <Box sx={styles.s2}>
              {
                !matches ? (
                  <Box>
                    <Box sx={styles.s3}>
                      <img src={state?.image_url} alt="" style={styles.sImg} />
                    </Box>
                    <Box sx={styles.s3}>
                      <img src={state?.image_url} alt="" style={styles.sImg} />
                    </Box>
                    <Box sx={styles.s3}>
                      <img src={state?.image_url} alt="" style={styles.sImg} />
                    </Box>
                  </Box>

                ) : ''
              }
              <Box sx={styles.s4}>
                <img src={state?.image_url} alt="custom_image" style={styles.lImg}/>
              </Box>
            </Box>
          </Box>
          <Box sx={!matches ? {marginLeft:2} : {marginLeft:0}}>
            <Typography variant='h5' sx={styles.title}>{state?.name}</Typography>
            <Typography variant="h6" sx={styles.code}>
              SKU Number: {state?.sku}
            </Typography>
            <Typography variant="h6" sx={styles.code}>
              <span style={styles.price}>Price: $ {state?.item_price} </span>/each
            </Typography>
            <Box sx={!matches ? styles.respSBx : styles.sBx}>
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
              <Box sx={styles.dx}>
                <Button sx={styles.sAddToCart}>Add to Cart</Button>
              </Box>
              <Box sx={styles.likeBtn}>
                <FavoriteBorderOutlinedIcon sx={{ color: '#228fad' }} />
              </Box>
            </Box>
            <Box sx={{ marginTop: 6 }}>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{ maxWidth: '600px' }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='h5' sx={styles.title1}>ADDITIONAL INFORMATION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="h6" sx={styles.desc2}>
                    Vendor Name: <span style={styles.code1}>{state?.vendor_name}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Manufacturers Name: <span style={styles.code1}>{state?.manufacturer_name}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Brand Name: <span style={styles.code1}>{state?.manufacturer_name}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Days of Deliver: <span style={styles.code1}>{state?.daysOfDeliver}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Country of Origin: <span style={styles.code1}>{state?.origin}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Product Specification: <span style={styles.code1}>{state?.specification}</span>
                  </Typography>
                  <Typography variant="h6" sx={styles.desc2}>
                    Pack Size: <span style={styles.code1}>{state?.packSize}</span>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{ maxWidth: '600px' }}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography variant='h5' sx={styles.title1}>LONG DESCRIPTION</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                   {state?.name}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Box>
      </Box>
      <BestSellingItems/>
    </Box>
  )
}

export default SingleProductPage
