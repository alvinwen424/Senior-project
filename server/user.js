'use strict'
const api = require('express').Router()
const db = require('../db')
const {Campus, User} = require('../db/models')

api.get('/', (req, res, next) =>{
	User.findAll()
	.then(students =>{
		res.json(students)
	})
})

api.get('/:studentId', (req, res, next) =>{
	User.findOne({
		where: {
			id: req.params.studentId
		}
	})
	.then(users =>{
		res.json(users)
	})
})


api.post('/', (req, res, next)=>{
	return User.create({
		name: req.body.name,
		email: req.body.email,
		campusId: req.body.campusId,
	})
	.then(student=>{
		res.json(student)
	})
})

api.put('/:studentId', (req, res, next) =>{
	User.findOne({
		where:{
			id: req.params.studentId
		}
	})
	.then(student =>{
		return student.update({
			name: req.body.name,
			campusId: req.body.campusId, 
			email: req.body.email
		})
	})
	.then(updated =>{
		res.json(updated)
	})
})

api.delete('/:studentId', (req, res, next) =>{
	return User.destroy({
		where:{
			id: req.params.studentId
		}
	})
	.then(destroyed =>{
		res.json(destroyed)
	})
})


module.exports = api