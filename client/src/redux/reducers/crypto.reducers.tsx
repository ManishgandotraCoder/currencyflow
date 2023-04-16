import * as cryptoTypes from "../constants/crypto.types"

const initialState = {
    crypoList: [],
    crypto_graph_details: [],
    crypto_coin_details: {}
};

const change = (state = initialState, action: any) => {
    switch (action.type) {
        case cryptoTypes.default.GET_ALL_CRYPTO:
            return { ...state, crypoList: action.payload?.data?.body };
        case cryptoTypes.default.COIN_DETAILS:
            return { ...state, crypto_coin_details: action.payload?.body };
        case cryptoTypes.default.COIN_GRAPH:
            return { ...state, crypto_graph_details: action.payload?.body };

        default: return state;
    }
}
export default change;