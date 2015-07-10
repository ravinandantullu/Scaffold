/// <reference path="../typings/tsd.d.ts" />
'use strict'

var pkg = require('../package.json');
var configJson = require('./config/environment');

module.exports = function(app){
	
	app.route('/api').get((req, res) => {
		res.json({"name": pkg.name, "version": "v1", "rev": pkg.version });
	});

	app.get('/',function(req,res){
	  res.sendFile('server/Home/home.html',{ root: './' });
	});
	
	app.get('/myapps',function(req,res){
	  res.sendFile('server/myapps/apps.html',{ root: './' });
	});
	
	app.get('/products',function(req,res){
	  res.sendFile('server/products/home.html',{ root: './' });
	});
	
	app.get('/communities',function(req,res){
	  res.sendFile('server/communities/index.html',{ root: './' });
	});
	
	app.get('/docs',function(req,res){
	  res.sendFile('server/docs/index.html',{ root: './' });
	});
	
	app.get('/devices',function(req,res){
	  res.sendFile('server/devices/index.html',{ root: './' });
	});
	
	app.use(function(req, res) {
      res.sendFile('server/Error/error.html',{ root: './' });
	});
	
}