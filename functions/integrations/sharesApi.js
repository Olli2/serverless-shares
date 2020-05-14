const axios = require('axios');

const fetchShares = (market) => {
    const sharesApiBaseUrl = process.env.SHARES_API_BASE_URL;
    return axios.get(`${sharesApiBaseUrl}/api/stocks/${market}/key_values?limit=150&sort=name%20down`);
}

module.exports = { fetchShares };