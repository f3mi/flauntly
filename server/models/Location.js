module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    stylistId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Stylists',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'United Kingdom'
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    isHomeStudio: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    travelDistance: {
      type: DataTypes.INTEGER, // in kilometers
      allowNull: true,
      defaultValue: 0
    },
    travelFee: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true,
      defaultValue: 0
    },
    isWillingToTravel: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    locationNotes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: true
  });

  return Location;
}; 