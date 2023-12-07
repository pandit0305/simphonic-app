import React from 'react'
import { Autocomplete, Box, Divider, InputBase, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { styles } from '../../styles/style';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from "redux";
import { useDispatch } from "react-redux";
import { addProduct } from '../../store/actions';

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  width: '100%',
  display: 'flex',
  borderRadius: '5px',
  height:'55px'

}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100px',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
  border: '1px solid #228fad',
  backgroundColor: '#228fad',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(34,143,173,0.75)',
    color: 'white',
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  fontSize: '13px',
  width: '100%',
  padding: '3px',
  '& .MuiInputBase-input': {
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));
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
      'X-RapidAPI-Key': 'dc2410b7d1msh3ba387ec63350f6p19c227jsn59fd5f96fdca',
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
const getList = async () => {
  const options = {
    // method: 'GET',
    // url: 'https://wayfair.p.rapidapi.com/categories/list',
    // params: { caid: '214970' },
    // headers: {
    //   'X-RapidAPI-Key': 'bd4bcc618cmshe7110a5ab7ceadap1510dejsnb7786dfb19a3',
    //   'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    // }
  };

  try {
    const response = await axios(options);
    const list = response.data?.response?.categoryAppData?.departmentCategories;
    return list;
  } catch (error) {
    console.error(error);
  }
}
function Home() {
  const matches = useMediaQuery('(max-width:800px)');
  const [value, setValue] = React.useState('');
  const [text, setText] = React.useState('');
  const [search, setSearch] = React.useState(false);
  const [categories, setCategories] = React.useState([]);
  const [searchList, setSearchList] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch()

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);

  };

  const onSearchHandler = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input) {
      setLoading(true);
      setSearch(true);
      setText(input)
      try {
          const list = await getSearchList(input);
          setSearchList(list);
          setLoading(false)
      } catch (error) {
        console.log(error);
        setLoading(false)
      }
    } else {
      setSearch(false);
    }
    
  }
  const onSearch = () => {
    setSearch(false);
    dispatch(addProduct({data:searchList, keyword:text}));
    navigate('/products');
  }

  const onSelected = async () => {
    setSearch(false);
    dispatch(addProduct({data:searchList, keyword:text}));
    navigate('/products');
  }

  const getCateList =async()=>{
    try {
      const list = await getList();
      setCategories(list);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(()=>{
    getCateList();
  },[0])

  return (
    <>
      <Box sx={styles.pad}>
        {
          matches ? (
            <Box sx={styles.cat}>
              <Select sx={styles.bx1} value={value}
                onChange={handleChange}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem value={value}><em>All Categories</em></MenuItem>
                {
                  categories && categories.map((category: { categoryId: number, displayName: string }) => (
                    <MenuItem key={category.categoryId + Math.random()} value={category.categoryId}>{category.displayName}</MenuItem>
                  ))
                }
              </Select>
            </Box>
          ) : ''
        }
        <Box sx={styles.featureBx}>
          <Box sx={matches ? styles.mWidth : styles.searchBox1}>
            <Search>
              <StyledInputBase
                onChange={onSearchHandler}
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                value={text}
              />
              <SearchIconWrapper onClick={onSearch}>
                <SearchIcon sx={{ color: 'white' }} />
              </SearchIconWrapper>
            </Search>
            {
              search && (
                <Box sx={styles.inputBox}>
                    {
                      loading && (<Typography sx={{textAlign:'center', paddingTop:"10px"}}>Loading...</Typography>)
                    }
                  {
                    searchList && searchList.map((list: { name: string, manufacturer_id: number }) => (
                      <Box key={list.manufacturer_id + Math.random()}>
                        <Typography sx={styles.textInput} onClick={onSelected}>{list?.name}</Typography>
                        <Divider />
                      </Box>
                    ))
                  }
                </Box>
              )
            }
          </Box>

          {
            !matches ? (
              <>
                <Box sx={styles.text1}>
                  <Typography sx={styles.font}>Upload</Typography>
                </Box>
                <Box sx={styles.mr2}>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value=""> <em>Filter</em></MenuItem>
                    <MenuItem value="">Filter</MenuItem>
                    <MenuItem value="">Filter</MenuItem>
                    <MenuItem value="">Filter</MenuItem>
                  </Select>
                </Box>
                <Box sx={styles.mr2}>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}>
                    <MenuItem value=""> <em>Sort By</em></MenuItem>
                    <MenuItem value="AZ">Title:A to Z</MenuItem>
                    <MenuItem value="ZA">Title: Z to A</MenuItem>
                    <MenuItem value="HL">Price: High to Low</MenuItem>
                    <MenuItem value="LH">Price: Low to High</MenuItem>
                  </Select>
                </Box>
                <Box sx={styles.cat}>
                  <Select sx={styles.bx} value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value={value}><em>All Categories</em></MenuItem>
                    {
                      categories && categories.map((category: { categoryId: number, displayName: string }) => (
                        <MenuItem key={category.categoryId} value={category.categoryId}>{category.displayName}</MenuItem>
                      ))
                    }
                  </Select>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=""><em>Fruits</em></MenuItem>
                    <MenuItem value="Mango">Mango</MenuItem>
                    <MenuItem value="Mango">Mango</MenuItem>
                    <MenuItem value="Mango">Mango</MenuItem>
                  </Select>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=""><em>Vegetables</em></MenuItem>
                    <MenuItem value="Vegetables">Vegetables</MenuItem>
                    <MenuItem value="Vegetables">Vegetables</MenuItem>
                    <MenuItem value="Vegetables">Vegetables</MenuItem>
                  </Select>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=""><em>Dairy</em></MenuItem>
                    <MenuItem value="Dairy">Dairy</MenuItem>
                    <MenuItem value="Dairy">Dairy</MenuItem>
                    <MenuItem value="Dairy">Dairy</MenuItem>
                  </Select>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=""><em>Meat & Poultry</em></MenuItem>
                    <MenuItem value="Meat & Poultry">Meat & Poultry</MenuItem>
                    <MenuItem value="Meat & Poultry">Meat & Poultry</MenuItem>
                    <MenuItem value="Meat & Poultry">Meat & Poultry</MenuItem>
                  </Select>
                  <Select sx={styles.bx} value={value}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value=""><em>Sea Food</em></MenuItem>
                    <MenuItem value="Sea Food">Sea Food</MenuItem>
                    <MenuItem value="Sea Food">Sea Food</MenuItem>
                    <MenuItem value="Sea Food">Sea Food</MenuItem>
                  </Select>
                </Box>
              </>

            ) : ''
          }
        </Box>
      </Box>
    </>
  )
}

export default Home;


const top100Films = [
  { name: 'The Shawshank Redemption', year: 1994 },
  { name: 'The Godfather', year: 1972 },
  { name: 'The Godfather: Part II', year: 1974 },
  { name: 'The Dark Knight', year: 2008 },
  { name: '12 Angry Men', year: 1957 },
  { name: "Schindler's List", year: 1993 },
  { name: 'Pulp Fiction', year: 1994 },
 ];