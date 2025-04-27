const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

// Define models
const User = require('./User')(sequelize, DataTypes);
const Stylist = require('./Stylist')(sequelize, DataTypes);
const Service = require('./Service')(sequelize, DataTypes);
const Booking = require('./Booking')(sequelize, DataTypes);
const Message = require('./Message')(sequelize, DataTypes);
const Review = require('./Review')(sequelize, DataTypes);
const PortfolioImage = require('./PortfolioImage')(sequelize, DataTypes);
const Availability = require('./Availability')(sequelize, DataTypes);
const Location = require('./Location')(sequelize, DataTypes);

// Define associations
User.hasOne(Stylist);
Stylist.belongsTo(User);

Stylist.hasMany(Service);
Service.belongsTo(Stylist);

Stylist.hasMany(PortfolioImage);
PortfolioImage.belongsTo(Stylist);

Stylist.hasMany(Availability);
Availability.belongsTo(Stylist);

Stylist.hasOne(Location);
Location.belongsTo(Stylist);

User.hasMany(Booking, { as: 'CustomerBookings', foreignKey: 'customerId' });
Stylist.hasMany(Booking, { foreignKey: 'stylistId' });
Booking.belongsTo(User, { as: 'Customer', foreignKey: 'customerId' });
Booking.belongsTo(Stylist);
Booking.belongsTo(Service);

// Messages for chat
User.hasMany(Message, { as: 'SentMessages', foreignKey: 'senderId' });
User.hasMany(Message, { as: 'ReceivedMessages', foreignKey: 'receiverId' });
Message.belongsTo(User, { as: 'Sender', foreignKey: 'senderId' });
Message.belongsTo(User, { as: 'Receiver', foreignKey: 'receiverId' });

// Reviews and ratings
User.hasMany(Review, { as: 'WrittenReviews', foreignKey: 'customerId' });
Stylist.hasMany(Review, { foreignKey: 'stylistId' });
Review.belongsTo(User, { as: 'Customer', foreignKey: 'customerId' });
Review.belongsTo(Stylist);
Review.belongsTo(Booking);

module.exports = {
  sequelize,
  User,
  Stylist,
  Service,
  Booking,
  Message,
  Review,
  PortfolioImage,
  Availability,
  Location
}; 