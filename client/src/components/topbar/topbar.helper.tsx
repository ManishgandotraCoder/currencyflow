import * as React from 'react';

import ToolbarComponentComponent from "./topbar.container"
const TopbarComponentHelper = (props: any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [islogin, setIslogin] = React.useState(props.user && true)
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = (type: string) => {
        setMobileMoreAnchorEl(null);
        if (type === "Logout") {
            logout()
        } else {
            setAnchorEl(null);
            handleMobileMenuClose('');
        }
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = "/#/login"
    }
    const handleMenuClose = (type: string) => {
        if (type === "Logout") {
            logout()
        } else {
            setAnchorEl(null);
            handleMobileMenuClose('');
        }
        // setAnchorEl(null);
        // handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return <ToolbarComponentComponent
        isMobileMenuOpen={isMobileMenuOpen}
        isMenuOpen={isMenuOpen}
        handleMobileMenuClose={(e: any) => handleMobileMenuClose(e)}
        handleProfileMenuOpen={(event: React.MouseEvent<HTMLElement>) => handleProfileMenuOpen(event)}
        handleMenuClose={(e: any) => handleMenuClose(e)}
        anchorEl={anchorEl}
        islogin={islogin}
        logout={() => logout()}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuOpen={(event: React.MouseEvent<HTMLElement>) => handleMobileMenuOpen(event)} />
}
export default TopbarComponentHelper;