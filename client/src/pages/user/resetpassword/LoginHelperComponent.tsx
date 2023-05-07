import LoginContainerComponent from "./LoginContainerComponent"
import * as userActions from "./../../../redux/actions/user.actions"
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';

const LoginHelperComponent = () => {
    const dispatch = useDispatch();
    const userInfo: any = useSelector((user: any) => user.user)
    const [loader, setLoader] = React.useState(false);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const emailID: any = data.get('email')
        const password: any = data.get('password')


        setLoader(true)
        dispatch(await userActions.authenticate(emailID, password))
        setLoader(false)
    };
    console.log(userInfo);
    
    React.useEffect(() => {
        if (userInfo.loginMessage === "User login successfully") {
            localStorage.setItem('user', JSON.stringify(userInfo?.userInformation));
            window.location.href = '/'
        }

    }, [userInfo.loginMessage])
    return <>
        <LoginContainerComponent handleSubmit={(event: any) => handleSubmit(event)} loader={loader} />
    </>

}

export default LoginHelperComponent