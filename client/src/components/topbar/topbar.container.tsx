
import * as React from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu,
    Tooltip
} from '@mui/material';
import { AccountCircle, LoginOutlined } from '@mui/icons-material';
import MoreIcon from '@mui/icons-material/MoreVert';
import AppIcon from "../../images/main_icon.svg"
import LogoutIcon from '@mui/icons-material/Logout';
import "./topbar.scss"
import * as colors from "../../commonscss/color"
import { Toolbartype } from './topbar.type';
import MenuWebHelperComponent from '../MenuWeb/menu.web.helper';
import MenuMobileHelperComponent from '../MenuMobile/menu.mobile.helper';
import { useNavigate } from 'react-router-dom';

const color = colors.default
export default function TopbarComponentContainer(props: Toolbartype) {
    const navigate = useNavigate()
    const renderMenu = (<MenuWebHelperComponent
        anchorEl={props.anchorEl}
        menuId={"webmenu"}
        islogin={props.islogin}
        isMenuOpen={props.isMenuOpen}
        handleMenuClose={props.handleMenuClose}
        menuArray={[
            // { "key": "Profile", "name": "Profile", icon: <AccountCircle sx={{ color: color.main_color }} /> },
            { "key": "Logout", "name": "Logout", icon: <LogoutIcon sx={{ color: color.main_color }} /> }
        ]}
    />
    );

    const renderMobileMenu = (
        <MenuMobileHelperComponent
            mobileMoreAnchorEl={props.mobileMoreAnchorEl}
            isMobileMenuOpen={props.isMobileMenuOpen}
            handleMobileMenuClose={props.handleMobileMenuClose}
            islogin={props.islogin}
            mobileMenuId={"mobilemenu"}
            menuArray={[
                // { "key": "Profile", "name": "Profile", icon: <AccountCircle sx={{ color: color.main_color }} /> },
                { "key": "Logout", "name": "Logout", icon: <LogoutIcon sx={{ color: color.main_color }} /> }
            ]} />
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

                    {props.islogin && <Box sx={{ display: { xs: 'none', md: 'flex' } }}>


                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={"webmenu"}
                            aria-haspopup="true"
                            onClick={(event: React.MouseEvent<HTMLElement>) => props.handleProfileMenuOpen(event)}
                            color="inherit"
                        >
                            <AccountCircle sx={{ color: color.main_color }} />
                        </IconButton>

                    </Box> || <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                            <Tooltip title="Click here to login">

                                <IconButton
                                    size="large"
                                    edge="end"
                                    aria-label="account of current user"
                                    aria-controls={"webmenu"}
                                    aria-haspopup="true"
                                    onClick={(event: React.MouseEvent<HTMLElement>) => navigate('/login')}
                                    color="inherit"
                                >
                                    <LoginOutlined sx={{ color: color.main_color }} />
                                </IconButton>
                            </Tooltip>
                        </Box>}

                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        {props.islogin && <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={"mobilemenu"}
                            aria-haspopup="true"
                            onClick={(event: React.MouseEvent<HTMLElement>) => props.handleMobileMenuOpen(event)}
                            color="inherit"
                        >
                            <MoreIcon sx={{ color: color.main_color }} />
                        </IconButton> ||
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={"mobilemenu"}
                                aria-haspopup="true"
                                onClick={(event: React.MouseEvent<HTMLElement>) => navigate('/login')}
                                color="inherit"
                            >
                                <Tooltip title="Click here to login">

                                    <LoginOutlined sx={{ color: color.main_color }} />
                                </Tooltip>
                            </IconButton>}
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
