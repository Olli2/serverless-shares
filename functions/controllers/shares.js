const sharesRouter = require('express').Router()
const sharesService = require('../services/shares')

sharesRouter.get('/:market', async (request, response) => {
    try {
        console.log('market: ', request.params.market)
        const shares = await sharesService.getShares(request.params.market);
        response.json(shares).status(200);
    } catch (exception) {
        response.json({
            error: 'something stumbled bad'
        }).status(500);
    }
});

module.exports = sharesRouter;