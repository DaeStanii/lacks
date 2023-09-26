const { User } =  require('../models');
const bcrypt = require('bcrypt');

//much of the basis of this Jeremy copied form his homework assignment module 14
//mainly for the bcrypt hash function to store our passwords to the db hashed
const hashPass = async (pass) => {
    const hashed = await bcrypt.hash(pass, 10);
    return hashed;
};
const seedUsers = async () => {
    const hashed = await hashPass('01234567890');
    const jeremyPass = await hashPass('password');
    const diegoPass = await hashPass('password');
    const daestaniiPass = await hashPass('password');
    const patrickPass = await hashPass('password');
    const userData = [
        {
            username:'admin',
            password: hashed
        },
        {
            username:'jeremy',
            password: jeremyPass
        },
        {
            username:'diego',
            password: diegoPass
        },
        {
            username:'daestanii',
            password: daestaniiPass
        },
        {
            username:'patrick',
            password: patrickPass
        },
    ];
    
    await User.bulkCreate(userData);
}


module.exports = seedUsers;