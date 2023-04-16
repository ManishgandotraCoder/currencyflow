import axios from "axios"
import base_url from "../../constants/path"
import resp from "../../constants/error.helper";

function getData(currency: string, page: Number, limit: Number) {

    return axios.get(`${base_url}crypto/getCrypto/${currency}?page=1&limit=10`)
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });

}

function getCoinGraph(coin: string, currency: string, days: Number) {
    return axios.post(`${base_url}crypto/getCryptoGraph`, {
        coin: coin,
        days: days,
        currency: currency
    })
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });

}
function getCoinDetails(coin: string) {
    return axios.get(`${base_url}crypto/getCryptoDetails/${coin}`)
        .then(response => {
            return resp(response?.data, response.status, "success_message");
        })
        .catch(error => {
            return resp([], error.response?.status, error.response?.statusText);
        });

}
export { getData, getCoinDetails, getCoinGraph }