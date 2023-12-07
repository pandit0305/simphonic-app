import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styles } from '../../styles/style';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Autocomplete, Select, SelectChangeEvent, TextField } from '@mui/material';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(1),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  right: '0px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const getAutoComplete = async () => {
  const options = {
    method: 'GET',
    url: 'https://wayfair.p.rapidapi.com/auto-complete',
    params: {
      query: 'red pillow'
    },
    headers: {
      'X-RapidAPI-Key': 'dc2410b7d1msh3ba387ec63350f6p19c227jsn59fd5f96fdca',
      'X-RapidAPI-Host': 'wayfair.p.rapidapi.com'
    }
  };

  try {
    const response = await axios(options);
    console.log(response?.data?.response);
    return response?.data?.response;
  } catch (error) {
    console.error(error);
  }
}

const pages = ['Catalog', 'BuyDesk', 'History', 'Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const matches = useMediaQuery('(max-width:800px)');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState('');
  const [list, setList]  = React.useState([]);
  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const getList =async()=>{
    try{
      const data = await getAutoComplete();
      setList(data);
    }catch(error){
      console.log(error)
    }
  }
  React.useEffect(()=>{
    getList();
  },[0])

  return (
    <AppBar position="sticky" sx={styles.bg} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            sx={{ marginLeft: '-10px' }}
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={styles.page1}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logo}
          >
            LOGO
          </Typography>

          <Box sx={styles.menu}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={styles.page}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {
            !matches ? (
              <Box sx={styles.mpage}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={styles.pageLink}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            ) : ''
          }
          {
            !matches ? (
              <Box>
                <Box sx={styles.searchBox}>
                  <Box sx={styles.searchAdd}>
                    <Select sx={styles.address}
                      value={value}
                      displayEmpty
                      inputProps={{ 'aria-label': 'Without label' }}
                      onChange={handleChange}
                    >
                      <MenuItem value=""><em>PO</em></MenuItem>
                    </Select>
                  </Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon sx={{ color: 'rgba(0,0,0,0.25)' }} />
                    </SearchIconWrapper>
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      sx={{ width: '250px' }}
                      disableClearable
                      options={list && list.map((option:{value:string})=>{
                        return option.value;
                      })}
                      renderInput={(params) => (
                        <TextField
                          {...params}

                          InputProps={{
                            ...params.InputProps,
                            type: 'search',
                          }}
                        />
                      )}
                    />
                  </Search>
                </Box>
              </Box>
            ) : ''
          }
          {
            !matches ? (
              <Box sx={styles.help}>
                <Typography>Help</Typography>
              </Box>
            ) : ''
          }
          <Box sx={styles.icons}>
            <FolderOpenOutlinedIcon sx={styles.iconColor} />
          </Box>
          <Box sx={styles.icons}>
            <FavoriteBorderIcon sx={styles.iconColor} />
          </Box>
          <Box sx={styles.icons}>
            <ShoppingCartOutlinedIcon sx={styles.iconColor} />
          </Box>
          <Box sx={styles.icons}>
            <NotificationsNoneOutlinedIcon sx={styles.iconColor} />
          </Box>
          <Box sx={styles.flexGrow0}>
            <Box>
              <IconButton>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={styles.avatar} />
              </IconButton>
              {
                !matches ? (
                  <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                    <select style={{ marginLeft: '10px', border: 'none', outline: 'none' }}>
                      <option value="">Pandit</option>
                    </select>
                  </IconButton>
                ) : ''
              }
            </Box>
            <Menu
              sx={styles.mt45}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 }]