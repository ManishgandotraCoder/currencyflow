import * as userTypes from "../constants/user.types"

const initialState = {
    userInformation: {},
    loginMessage: ""
};
const change = (state = initialState, action: any) => {
    switch (action.type) {

        case userTypes.default.AUTHENTICATE:
            return { userInformation: action.payload.body, loginMessage: action.payload.message };
        case userTypes.default.REGISTER:
            return action.payload
        default: return state;
    }
}
export default change;