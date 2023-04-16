import axios from "axios"
import base_url from "../../constants/path"
import resp from "../../constants/error.helper";

function authenticate(email: string, password: string) {
    return axios.post(`${base_url}login`, {
        email: email,
        password: password
    })
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });
}
function register() {
    return axios.post(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false`)
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });

}
export { authenticate, register }