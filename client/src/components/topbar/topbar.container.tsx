
import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppIcon from "../../images/main_icon.svg"
import "./topbar.scss"
import * as colors from "../../commonscss/color"
const color = colors.default
export default function TopbarComponentContainer(props: any) {


    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={props.anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.isMenuOpen}
            onClose={props.handleMenuClose}
        >
            <MenuItem onClick={props.handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={props.handleMenuClose}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={props.mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={props.isMobileMenuOpen}
            onClose={props.handleMobileMenuClose}
        >

            <MenuItem onClick={props.handleMobileMenuClose}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle className='icon' />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
            <MenuItem onClick={props.handleMobileMenuClose}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle sx={{ color: color.main_color }} />
                </IconButton>
                <p>Logout</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: '#FFF' }}>
                <Toolbar variant="dense">
                    <img className="profile" src={AppIcon} />
                    <Typography
                        variant="h6"
                        noWrap
                        className="app_name"
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' } }}
                    >
                        Currency Flow
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={props.handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle sx={{ color: color.main_color }} />
                        </IconButton>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={props.handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon sx={{ color: color.main_color }} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
