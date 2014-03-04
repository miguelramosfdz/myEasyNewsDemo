var _baseUrl = 'http://192.168.0.15/WebService/task_manager/v1/';

exports.createNewClientUser = function(parameters, successHandler, failHandler)
{
	var url = _baseUrl+'register';
	executeRequest(url, 'POST', successHandler, failHandler, parameters);
};

exports.loginUser = function(parameters, successHandler, failHandler)
{
	successHandler();
};

exports.requestTaxi = function(parameters, successHandler, failHandler)
{
	successHandler();
};
exports.requestTaxiLocation = function(requestIdentifier, successHandler, failHandler)
{
	var response = {
		"driver" : {
			"name" : "Juan Perez"
		},
		"taxi" : {
			"latitude" : 21.043935,
			"longitude" : -89.641181,
			"plate" : "XYZ123",
			"model" : "Nissan Altima",
			"year" : "2009"
		},
		"requestIdentifier" : 00000000
	}
	successHandler(response);
};

function executeRequest(url, type, successHandler, failHandler, parameters)
{
	console.error(url);
	var xhr = Ti.Network.createHTTPClient({
		timeout : 10000,
		onerror : failHandler,
		onload : function(){
			successHandler(JSON.parse(this.responseData));
		}
	});

	xhr.open(type,url);

	if(type == 'GET')
	{
		xhr.send();
	}
	else if(type=='POST')
	{
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		xhr.send(JSON.stringify(parameters));
	}
}
