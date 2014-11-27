##sass = require('node-sass')
##fs = require('fs')
sendMail = require './mail'


exports.root = (req, res) ->
	section = req.param "section"
	section ||= "main"
	res.render('root.jade', {section: section})


exports.contact = (req, res) ->
  console.log(req.body)
  sendMail(req.body, res)

