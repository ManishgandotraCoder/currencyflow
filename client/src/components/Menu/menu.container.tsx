import {
    MenuItem,
    Menu
} from '@mui/material';
import * as colors from "../../commonscss/color"
import LogoutIcon from '@mui/icons-material/Logout';
import { AccountCircle } from '@mui/icons-material';
import { menutypes } from './menu.type';

const color = colors.default
const MenuContainerComponent = (props: menutypes) => {
    return <Menu
        anchorEl={props.anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={props.menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={props.isMenuOpen}
        onClose={() => props.handleMenuClose()}
    >
        <MenuItem onClick={() => props.handleMenuClose()}>
            <AccountCircle sx={{ color: color.main_color }} />
            &nbsp;Profile</MenuItem>
        <MenuItem onClick={() => props.handleMenuClose()}><LogoutIcon sx={{ color: color.main_color }} />
            &nbsp;Logout</MenuItem>
    </Menu>
}
export default MenuContainerComponent