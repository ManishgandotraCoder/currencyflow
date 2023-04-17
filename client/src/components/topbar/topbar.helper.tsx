import * as React from 'react';

import ToolbarComponentComponent from "./topbar.container"
const TopbarComponentHelper = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const [islogin , setIslogin]= React.useState(false)
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login"
    }
    const handleMenuClose = () => {

        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return <ToolbarComponentComponent
        isMobileMenuOpen={isMobileMenuOpen}
        isMenuOpen={isMenuOpen}
        handleMobileMenuClose={() => handleMobileMenuClose()}
        handleProfileMenuOpen={(event: React.MouseEvent<HTMLElement>) => handleProfileMenuOpen(event)}
        handleMenuClose={() => handleMenuClose()}
        anchorEl={anchorEl}
        islogin={islogin}
        logout={() => logout()}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuOpen={(event: React.MouseEvent<HTMLElement>) => handleMobileMenuOpen(event)} />
}
export default TopbarComponentHelper;