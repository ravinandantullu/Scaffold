/// <reference path="../../typings/angularjs/angular.d.ts" />
'use strict'

angular.module('uiApp',[
	'ui.router',
	'uiApp.home'
	])
	.config(config);
	
function config($urlRouterProvider, $locationProvider){
	$urlRouterProvider.otherwise('/home');
}