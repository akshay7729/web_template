"use strict";
var myApp = angular.module('myApp', []);
myApp.controller('MainController', ['$scope', function(){
	this.icons = [ 
		{icon: 'pinterest',},
		{icon: 'facebook',},
		{icon: 'instagram',},
		{icon: 'skype',},
		{icon: 'dribbble'}
	];

	this.pricing = [
		{
			pack: 'Free',
			perCan: '20',
			price: 'for 50 products only',
		},
		{
			pack: 'Enterprise',
			perCan: '14',
			price: 'for 500 products only',
		},
		{
			pack: 'Premium',
			perCan: '12',
			price: 'unlimited orders',
		}
	];

	this.features = [
		{
			title: 'Water for everyone',
			desc: 'We wish to provide water for everyone and ensure that you get sufficent water for it. We are here for you',
		},
		{
			title: 'Quality',
			desc: 'Water quality is measured by several factors, such as the concentration of dissolved oxygen, bacteria levels, the amount of salt (or salinity), or the amount of material suspended in the water (turbidity). In some bodies of water, the concentration of microscopic algae and quantities of pesticides, herbicides, heavy metals, and other contaminants may also be measured to determine water quality.',
		},
		{
			title: 'COD',
			desc: 'Cash on delivery (COD), sometimes called collect on delivery, is the sale of goods by mail order where payment is made on delivery rather than in advance. If the goods are not paid for, they are returned to the retailer.[1] Originally, the term applied only to payment by cash but as other forms of payment have become more common, the word "cash" has sometimes been replaced with the word "collect" to include transactions by checks, credit cards or debit cards.',
		}
	];


}]);