'use strict'
const api = require('express').Router()
const db = require('../db')
const {Campus, User} = require('../db/models')


api.get('/', (req, res, next) =>{
	Campus.findAll()
	.then(campuses =>{
		res.json(campuses)
	})
})

api.get('/:id', (req, res, next) =>{
	Campus.findOne({
		where: {
			id: req.params.id
		}
	})
	.then(campus =>{
		res.json(campus)
	})
})



api.post('/', (req, res, next)=>{
	return Campus.create({
		name: req.body.name, //why is this posting null in both fields?
		image: req.body.image,
	})
	.then(campus =>{
		res.json(campus)
	})
})




api.put('/:Id', (req, res, next) =>{
	Campus.findOne({
		where:{
			id: req.params.Id
		}
	})
	.then(campus =>{
		return campus.update({
			image: req.body.image, 
			name: req.body.name
		})
	})
	.then(updated =>{
		res.json(updated)
	})
})

api.delete('/:id', (req, res, next) =>{
	return Campus.destroy({
		where:{
			id: req.params.id
		}
	})
	.then(destroyed =>{
		res.json(destroyed)
	})
})


module.exports = api
