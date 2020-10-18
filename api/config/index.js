require('dotenv').config();

module.exports = (app) => {
    const PORT= process.env.PORT;
    app.listen(PORT);
}