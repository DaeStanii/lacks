const User = require('./User');
const Thread = require('./Thread');
const Comment = require('./Comment');


//a user can have many threads but a thread can only have one user

User.hasMany(Thread, {
    onDelete:'CASCADE'
});
Thread.belongsTo(User);

//a user can have many comments but a comment can only have one user
User.hasMany(Comment, {
    onDelete:'CASCADE'
});
Comment.belongsTo(User);

//a thread can have many comments buts a comment can only have one thread
Thread.hasMany(Comment, {
    onDelete:'CASCADE'
});
Comment.belongsTo(Thread);

module.exports = {User, Thread, Comment};