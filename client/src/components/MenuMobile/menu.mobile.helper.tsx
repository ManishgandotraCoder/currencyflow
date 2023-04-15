import MenuContainerComponent from "./menu.mobile.container"
import { menutypes } from "./menu.mobile.type"

const MenuMobileHelperComponent = (props: menutypes) => {
    return <MenuContainerComponent {...props} />
}
export default MenuMobileHelperComponent