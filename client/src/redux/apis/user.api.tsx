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
function register(email: string, password: string, name: string) {
    return axios.post(`${base_url}signup`, {
        email: email,
        password: password,
        name: name
    })
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });

}
export { authenticate, register }