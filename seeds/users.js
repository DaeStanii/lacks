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
            email:'admin@fakeemail.com',
            password: hashed
        },
        {
            username:'jeremy',
            email:'fake@fakeemail.com',
            password: jeremyPass
        },
        {
            username:'diego',
            email:'fake@fakeemail.com',
            password: diegoPass
        },
        {
            username:'daestanii',
            email:'fake@fakeemail.com',
            password: daestaniiPass
        },
        {
            username:'patrick',
            email:'fake@fakeemail.com',
            password: patrickPass
        },
    ];
    
    await User.bulkCreate(userData);
}


module.exports = seedUsers;