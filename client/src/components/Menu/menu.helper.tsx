import MenuContainerComponent from "./menu.container"
import { menutypes } from "./menu.type"

const MenuHelperComponent = (props: menutypes) => {
    return <MenuContainerComponent {...props} />
}
export default MenuHelperComponent