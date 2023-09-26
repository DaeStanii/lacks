const seedUsers = require('./users');   
const seedThreads = require('./threads');
const seedComments = require('./comments');
const sequelize = require('../config/config');

//this function I(Jeremy) I based from my homework mod14 for simplicity

const seedAllTheThings = async () => {
    //force:true will overwrite the db contents with these new ones every time we run this
    await sequelize.sync({force:true});
    await seedUsers();
    console.log('\n----- USER DATA SYNCED -----\n');
    await seedThreads();
    console.log('\n----- THREAD DATA SYNCED -----\n');
    await seedComments();
    console.log('\n----- COMMENT DATA SYNCED -----\n');
    console.log('\n----- DATABASE SYNCED -----\n');
    process.exit();
};

seedAllTheThings();