import SignupContainerComponent from "./SignupContainerComponent"
import * as userActions from "../../../redux/actions/user.actions"
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';

const SignupHelperComponent = () => {
    const dispatch = useDispatch();
    const userInfo: any = useSelector((user: any) => user.user)
    const [message, setMessage] = React.useState('')
    const [loader, setLoader] = React.useState(false);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const emailID: any = data.get('email')
        const password: any = data.get('password')
        const name: any = data.get('name')


        setLoader(true)
        dispatch(await userActions.register(emailID, password, name))
        setLoader(false)
    };
    React.useEffect(() => {
        if (userInfo.signupMessage === "User Already Exists") {
            setMessage(userInfo.signupMessage)
        }else {
            setMessage('')
        }
        if (userInfo.signupMessage === "User Signup successfully") {
            localStorage.setItem('user', JSON.stringify(userInfo?.userInformation));
            window.location.href = '/'
        }
       

    }, [userInfo.signupMessage])
    return <>
        <SignupContainerComponent message={message} handleSubmit={(event: any) => handleSubmit(event)} loader={loader} />
    </>

}

export default SignupHelperComponent