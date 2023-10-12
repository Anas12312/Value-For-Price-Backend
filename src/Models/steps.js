const pool = require("../../DB/Postgres")

//GET BY OFFERS_ID
const getByOfferId = async (offerId) => {
    const { rows, rowCount } = await pool.query("SELECT * FROM steps WHERE offerId = $1 ORDER BY no", [offerId]);
    if(rowCount > 0) return rows
    else undefined
}

module.exports = {
    getByOfferId
}