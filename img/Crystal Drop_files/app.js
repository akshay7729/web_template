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
			pack: '30',
			perCan: '60',
			price: '1800',
		},
		{
			pack: '60',
			perCan: '54',
			price: '3240',
		},
		{
			pack: '90',
			perCan: '54',
			price: '4860',
		}
	];

	this.features = [
		{
			title: 'Purest',
			desc: 'CystalDrop Mineralized Drinking Water is processed in the most advanced plant with zero human touch. It is treated through a multiple process of purification so that the quality of water conforms or exceeds to the Packaged Drinking Water Quality Standards (PDWQS) as specified by Food Safety and Standards Authority of India (FSAI). Our water filtration process is ISI certified.',
		},
		{
			title: 'Safest',
			desc: 'CystalDrop Mineralized Drinking Water is the safest in the world. The safety comes from an inbuilt ability to verify the quality, source, mineral composition and batch level test reports of every single dispenser via a QR Code.',
		},
		{
			title: 'Easiest',
			desc: 'CystalDrop Mineralized Drinking Water comes with a way of tracking your delivery status.',
		}
	];


}]);