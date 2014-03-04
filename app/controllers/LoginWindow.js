var args = arguments[0] || {};

function init()
{

}

function displayLoginMessage()
{
	alert('You need to log in to Facebook to use this application');
}

function initSession()
{

	$.loading_indicator.showIndicator();
	setTimeout(facebookLoginHandler, 1000);
	//Alloy.Globals.Facebook.addEventListener('login',facebookLoginHandler);
	//Alloy.Globals.Facebook.authorize();
}

function showTermsOfService()
{
	alert('TOS');
}

/* Callbacks */
function facebookLoginHandler(e)
{
	$.loading_indicator.hideIndicator();
	Alloy.Globals.dismissWindow($.main_window);
	/*
	if (e.success)
	{
		alert('Exito');
		Alloy.Globals.dismissWindow();
	}
	else if (e.error)
	{
		alert(e.error);
	}
	else if (e.cancelled)
	{
		alert("Canceled");
	}*/
}
