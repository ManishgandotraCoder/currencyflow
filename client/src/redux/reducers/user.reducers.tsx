import * as userTypes from "../constants/user.types"

const initialState = {
    userInformation: {},
    loginMessage: "",
    signupMessage: ''

};
const change = (state = initialState, action: any) => {
    switch (action.type) {

        case userTypes.default.AUTHENTICATE:
            return { ...state, userInformation: action.payload.body, loginMessage: action.payload.message };
        case userTypes.default.REGISTER:
            console.log(action.payload.body);
            
            return { ...state, userInformation: action.payload.body, signupMessage: action.payload.message }
        default: return state;
    }
}
export default change;