// The contents of this file will be executed before any of
// your view controllers are ever executed, including the index.
// You have access to all functionality on the `Alloy` namespace.
//
// This is a great place to do any initialization for your app
// or create any global variables/functions that you'd like to
// make available throughout your app. You can easily make things
// accessible globally by attaching them to the `Alloy.Globals`
// object. For example:
//
// Alloy.Globals.someGlobalFunction = function(){};
Alloy.Globals.Facebook = require('facebook');
Alloy.Globals.Facebook.appid = '258183441016921';
Alloy.Globals.Facebook.permissions = ['basic_info', 'read_stream'];
//fb.authorize();
Alloy.Globals.openWindow = function(controllerName, arguments){
	var controller = Alloy.createController(controllerName, arguments).getView();
	if(OS_ANDROID)
	{
		var Menu = require('menu');
		var menu = new Menu(controller);
		menu.actionBar.setDisplayHomeAsUp(true);
		menu.actionBar.setOnHomeIconItemSelected(function(){Alloy.Globals.pop(controller);});
		controller.open(controller, {modal : false});
	}
	else
	{
		Alloy.Globals.navigation_window.openWindow(controller, {animated : true});
	}
};

Alloy.Globals.pop = function(windowToClose){
	if(OS_IOS)
	{
		Alloy.Globals.navigation_window.closeWindow(windowToClose, {animated : true});
	}
	else
	{
		windowToClose.close();
	}
};

Alloy.Globals.modalWindow = function(controllerName, arguments){
	var controller = Alloy.createController(controllerName, arguments).getView();
	if(OS_ANDROID)
	{
		var Menu = require('menu');
		var menu = new Menu(controller);
		menu.actionBar.setDisplayHomeAsUp(true);
		menu.actionBar.setOnHomeIconItemSelected(function(){Alloy.Globals.pop(controller);});
	}
	controller.open(controller, {modal : OS_IOS});
};

Alloy.Globals.dismissWindow = function(controller){
	controller.close();
};
