import ForgotPasswordContainerComponent from "./ForgotPasswordContainerComponent"
import * as userActions from "../../../redux/actions/user.actions"
import { useDispatch, useSelector } from 'react-redux';
import * as React from 'react';

const ForgotPasswordHelperComponent = () => {
    const dispatch = useDispatch();
    const userInfo: any = useSelector((user: any) => user.user)
    const [loader, setLoader] = React.useState(false);
    const [sucessMessage, setSucessMessage] = React.useState('');
    const handleSubmit = async (event: any, message :string) => {
        console.log(message);
        
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const emailID: any = data.get('email')
        const otp: any = data.get('otp')


        setLoader(true)
        if (sucessMessage === "OTP sent successfully, Please check your email") {
            dispatch(await userActions.verifyOTP(emailID, otp))

        } else {
            dispatch(await userActions.forgotpassword(emailID))

        }
        setLoader(false)
    };

    return <>
        <ForgotPasswordContainerComponent sucessMessage={userInfo.otpGeneratedMessage} handleSubmit={(event: any) => handleSubmit(event , "")} loader={loader} />
    </>

}

export default ForgotPasswordHelperComponent