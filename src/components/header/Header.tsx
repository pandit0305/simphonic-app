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
import { Select, SelectChangeEvent } from '@mui/material';

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

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'black',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const pages = ['Catalog', 'BuyDesk', 'History', 'Dashboard'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {
  const matches = useMediaQuery('(max-width:800px)');
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const [value, setValue] = React.useState('');

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

  const onSearchHandler =(event:React.ChangeEvent<HTMLInputElement>)=>{
    console.log(event.target.value);
  }
  return (
    <AppBar position="sticky" sx={styles.bg} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton 
            sx={{marginLeft:'-10px'}}
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
            href="#app-bar-with-responsive-menu"
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
            ):''
          }
          {
            !matches ? (
              <Box>
              <Box sx={styles.searchBox}>
                <Box sx={styles.searchAdd}>
                  <Select sx={styles.address} 
                    value=""
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
                  <StyledInputBase
                    onChange={onSearchHandler}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Box>
            </Box>
            ) :''
          }
          {
            !matches ? (
              <Box sx={styles.help}>
                <Typography>Help</Typography>
              </Box>
            ):''
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
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"  sx={styles.avatar}/>
              </IconButton>
              {
                !matches ? (
                  <IconButton sx={{ p: 0 }} onClick={handleOpenUserMenu}>
                    <select style={{marginLeft:'10px', border:'none', outline:'none'}}>
                      <option value="">Pandit</option>
                    </select>
                  </IconButton>
                ):''
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
