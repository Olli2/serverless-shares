const sharesApi = require('../integrations/sharesApi')

const getShares = async (market) => {
    try {
        const shares = await sharesApi.fetchShares(market)
        return shares.data.data;
    } catch (exception) {
        //logger(exception)
        throw new Error(exception);
    }
}

module.exports = { getShares }