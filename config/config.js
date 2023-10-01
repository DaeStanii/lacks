const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.MYSQL_URL) {
    sequelize = new Sequelize(process.env.MYSQL_URL);

// } else {
//     sequelize = new Sequelize(
//         process.env.DB_NAME,
//         process.env.DB_USER,
//         process.env.DB_PASSWORD,
//         {
//             host: 'localhost',
//             dialect: 'mysql',
//         }
//     );
// }

} else {
    sequelize = new Sequelize(
        //,
        process.env.MYSQLDATABASE,
        process.env.MYSQLUSER,
        process.env.MYSQLPASSWORD,
        //process.env.MYSQLPORT,
        {
            host: process.env.MYSQLHOST,
            dialect: 'mysql',
        }
    );
}

module.exports = sequelize;