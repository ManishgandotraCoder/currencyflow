import {
    MenuItem,
    Menu
} from '@mui/material';
import { menutypes } from './menu.web.type';

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
        {props.menuArray.map((item: any) => <MenuItem key ={item.name} onClick={() => props.handleMenuClose()}>
            {item.icon}
            &nbsp;{item.name}</MenuItem>)}

    </Menu>
}
export default MenuContainerComponent