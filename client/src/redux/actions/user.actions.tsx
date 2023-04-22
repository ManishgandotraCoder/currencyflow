import * as cryptoApi from "../apis/user.api"
import * as cryptoTypes from "../constants/user.types"

export const authenticate = async (email: string, password: string) => {
    const response: any = await cryptoApi.authenticate(email, password)
    return {
        type: cryptoTypes.default.AUTHENTICATE,
        payload: response.data
    }
}
export const register = async (email: string, password: string , name :string) => {
    const response: any = await cryptoApi.register(email, password , name)
    return {
        type: cryptoTypes.default.REGISTER,
        payload: response.data
    }
}