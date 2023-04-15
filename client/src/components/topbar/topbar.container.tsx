
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
import LogoutIcon from '@mui/icons-material/Logout';
import "./topbar.scss"
import * as colors from "../../commonscss/color"
import { Toolbartype } from './topbar.type';
import MenuWebHelperComponent from '../MenuWeb/menu.web.helper';
import MenuMobileHelperComponent from '../MenuMobile/menu.mobile.helper';

const color = colors.default
export default function TopbarComponentContainer(props: Toolbartype) {


    const menuId = 'primary-search-account-menu';
    const renderMenu = (<MenuWebHelperComponent
        anchorEl={props.anchorEl}
        menuId={menuId}
        isMenuOpen={props.isMenuOpen}
        handleMenuClose={props.handleMenuClose}
        menuArray={[
            { "key": "Profile", "name": "Profile", icon: <AccountCircle sx={{ color: color.main_color }} /> },
            { "key": "Logout", "name": "Logout", icon: <LogoutIcon sx={{ color: color.main_color }} /> }
        ]}
    />
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <MenuMobileHelperComponent
            mobileMoreAnchorEl={props.mobileMoreAnchorEl}
            isMobileMenuOpen={props.isMobileMenuOpen}
            handleMobileMenuClose ={props.handleMobileMenuClose}
            mobileMenuId={mobileMenuId} 
            menuArray={[
                { "key": "Profile", "name": "Profile", icon: <AccountCircle sx={{ color: color.main_color }} /> },
                { "key": "Logout", "name": "Logout", icon: <LogoutIcon sx={{ color: color.main_color }} /> }
            ]}/>
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
                            onClick={(event: React.MouseEvent<HTMLElement>) => props.handleProfileMenuOpen(event)}
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
                            onClick={(event: React.MouseEvent<HTMLElement>) => props.handleMobileMenuOpen(event)}
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
