// import Coin from '../pages/crypto-coin/coin';
import CryptoListComponentHelper from '../pages/CryptoListComponent/CryptoListComponent.Helper';
import CryptoCoinComponentHelper from '../pages/CryptoCoinComponent/CryptoCoinComponent.Helper';
// import Signup from '../pages/user/signup/signup';

const router = [

  {
    path: "/",
    element: <CryptoListComponentHelper />,
    exact: true,
    toolbar: true
  },
  {
    path: "/crypto/bitcoin",
    element: <CryptoCoinComponentHelper />,
    exact: true,
    toolbar: true
  }
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
  // {
  //   path: "/sign-in",
  //   element: <Login />,
  //   toolbar: false
  // },
  // {
  //   path: "/sign-up",
  //   element: <Signup />,
  //   toolbar: false
  // }
];
export default router;