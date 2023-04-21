// import Coin from '../pages/crypto-coin/coin';
import CryptoListComponentHelper from '../pages/CryptoListComponent/CryptoListComponent.Helper';
import CryptoCoinComponentHelper from '../pages/CryptoCoinComponent/CryptoCoinComponent.Helper';
import LoginHelperComponent from '../pages/user/login/LoginHelperComponent';
// import Signup from '../pages/user/signup/signup';

const router = [

  {
    path: "/",
    element: <CryptoListComponentHelper />,
    exact: true,
    toolbar: true,
    key: "crypto"
  },
  {
    path: "/crypto/bitcoin",
    element: <CryptoCoinComponentHelper />,
    exact: true,
    toolbar: true,
    key: "coin"
  },
  // {
  //   path: "/crypto",
  //   element: <Crypto />,
  //   toolbar: true
  // },
  // { 
  //   path: "/crypto/:coin",
  //   element: <Coin />,
  //   toolbar: true
  // },
  {
    path: "/login",
    element: <LoginHelperComponent />,
    toolbar: false
  },
  // {
  //   path: "/sign-up",
  //   element: <Signup />,
  //   toolbar: false
  // }
];
export default router;