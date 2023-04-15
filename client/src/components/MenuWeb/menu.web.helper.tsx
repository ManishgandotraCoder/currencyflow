import MenuContainerComponent from "./menu.web.container"
import { menutypes } from "./menu.web.type"

const MenuWebHelperComponent = (props: menutypes) => {
    return <MenuContainerComponent {...props} />
}
export default MenuWebHelperComponent