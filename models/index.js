// import models
const CandyBox = require('./CandyBox');
const Candies = require('./Candies');
const Users = require('./Users');
const Subscription = require('./Subscription');

Candies.belongsTo(CandyBox, {
  foreignKey: 'candybox_id'
})
CandyBox.hasMany(Candies, {
  foreignKey: 'candybox_id'
})

CandyBox.belongsToMany(Users, {
  through: Subscription,
  foreignKey: 'candybox_id',
  onUpdate: 'cascade',
  onDelete: 'set null'
});


Users.belongsToMany(CandyBox, {
  through: Subscription,
  foreignKey: 'users_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

module.exports = {
  CandyBox,
  Candies,
  Users,
  Subscription

};
