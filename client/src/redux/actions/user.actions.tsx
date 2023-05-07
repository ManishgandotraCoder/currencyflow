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
export const forgotpassword = async (email: string) => {
    const response: any = await cryptoApi.forgotpassword(email)
    return {
        type: cryptoTypes.default.FORGOT_PASSWORD,
        payload: response.data
    }
}
export const verifyOTP = async (email: string, otp: number) => {
    const response: any = await cryptoApi.verifyOTP(email, otp)
    return {
        type: cryptoTypes.default.VERIFY_OTP,
        payload: response.data
    }
}
