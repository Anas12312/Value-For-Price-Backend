const pool = require("../../DB/Postgres")

//GET ALL (search)
const getAll = async (search, start, count) => {

    const offset = (start-1) * count;

    let data;

    if(!search) data = await pool.query("SELECT * FROM restaurants LIMIT $2 OFFSET $1", [offset, count]);
    else data = await pool.query("SELECT * FROM restaurants WHERE ( LOWER(name) LIKE $1 ) LIMIT $3 OFFSET $2", ['%'+search+'%', offset, count]);

    return data.rows;
}

module.exports = {
    getAll
}