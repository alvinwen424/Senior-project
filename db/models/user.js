'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name: Sequelize.STRING,
  email:{
  	type: Sequelize.STRING,
  	allowNull: false,
  	validate:{
  		isEmail: true,
  	}
  }
})
