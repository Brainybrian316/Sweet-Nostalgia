// Modules to require
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// const bcrypt = require("bcrypt");

//create our user model
class Users extends Model {
  // //  the method that will hash the password
  // checkPassword(loginPw) {
  //   return bcrypt.compareSync(loginPw, this.password);
  // }
}

//define table columns and configuration
Users.init(
  {
    // defines id column
    id: {
      // defines type of data in the column
      type: DataTypes.INTEGER,
      // does not allow value to be empty
      allowNull: false,
      // makes it the primary key
      primaryKey: true,
      // auto increments the id by 1
      autoIncrement: true,
    },

    // defines the first_name column
    first_name: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    // defines the last_name column
    last_name: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    // defines the email column
    email: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
      // the email must be unique meaning it cannot be the same as another email
      unique: true,
      // the email must be a valid email
      validate: {
        // checks if the email is valid
        isEmail: true,
      },
    },
    // defines the password column
    password: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
      // we want to validate the password to match our requirements
      validate: {
        len: [8],
        // checks if password has 1 letter 1 number and 1 special character
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      },
    },
    //  dfines the address column
    address: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    // defines the city column
    city: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    // defines the country column
    state: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
    // defines the zipcode column
    zipCode: {
      // defines type of data in the column
      type: DataTypes.STRING,
      // does not allow value to be empty
      allowNull: false,
    },
  },
  {
    // // the purpose of the hooks is to do something before or after the model method is run
    // hooks: {
    //   // beforeCreate is a hook that runs before the create method is run
    //   async beforeCreate(newUserData) {
    //     //    we are hashing the password
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     // using the bcrypt module to hash the password and store it in the password column
    //     return newUserData;
    //   },
    //   // beforeUpdate is a hook that runs before the update method is run
    //   async beforeUpdate(newUserData) {
    //     // if the password column is being updated we are hashing the password
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     // using the bcrypt module to hash the password and store it in the password column
    //     return newUserData;
    //   },
    // }, // adding our database connection to our model... this is ES6 shorthand for sequelize: sequelize
    sequelize,
    // the purpose of timestamp is to automatically add the created_at and updated_at columns to the table
    timestamp: false,
    // the purpose of the freezeTableName is to freeze the table name to the name of the model
    freezeTableName: true,
    // the purpose of the underscored is to make the table name lowercase and use underscores instead of camelCase
    underscore: true,
    // the purpose of the modelName is to change the name of the table to the name of the model
    modelName: "users",
  }
);

module.exports = Users;
