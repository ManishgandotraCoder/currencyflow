import * as userTypes from "../constants/user.types"

const initialState = {
    userInformation: {},
    loginMessage: "",
    signupMessage: '',
    otpGeneratedMessage: "",
    otpVerifiedMessage: ""
};
const change = (state = initialState, action: any) => {
    switch (action.type) {

        case userTypes.default.AUTHENTICATE:
            return { ...state, userInformation: action.payload.body, loginMessage: action.payload.message };
        case userTypes.default.REGISTER:
            return { ...state, userInformation: action.payload.body, signupMessage: action.payload.message }
        case userTypes.default.FORGOT_PASSWORD:
            return { ...state, otpGeneratedMessage: action.payload.message }
        case userTypes.default.VERIFY_OTP:
            return { ...state, otpVerifiedMessage: action.payload.message }
        default: return state;
    }
}
export default change;