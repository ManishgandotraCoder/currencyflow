import { AccountCircle } from '@mui/icons-material';
import * as colors from "../../commonscss/color"

import { menutypes } from './menu.mobile.type';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    MenuItem,
    Menu
} from '@mui/material';
const color = colors.default

const MenuMobileContainerComponent = (props: menutypes) => {
    return <Menu
        anchorEl={props.mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={props.mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={props.isMobileMenuOpen}
        onClose={() => props.handleMobileMenuClose()}
    >
        {props.menuArray.map((item: any) =>
            <MenuItem key ={item.name} onClick={() => props.handleMobileMenuClose()}>
                <IconButton
                    size="medium"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    {item.icon}
                </IconButton>
                <p>{item.name}</p>
            </MenuItem>)}

    </Menu>
}
export default MenuMobileContainerComponent