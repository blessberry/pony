const requireAuth = require('../helpers/requireAuth');

module.exports = (router) => {
    router.use(requireAuth);
}