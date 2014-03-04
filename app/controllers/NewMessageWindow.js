var _data = arguments[0] || {};

function goBack(e)
{
	Alloy.Globals.pop($.main_window);
}

function init(e)
{
	$.txa_message.focus();
}

function hideHintText(e)
{
	if(e.source.value.length == 0)
		$.lbl_hint_text.setVisible(true);
	else
		$.lbl_hint_text.setVisible(false);
}

function sendMessage(e)
{
	var dialog = Ti.UI.createAlertDialog({
	buttonNames: ['Accept'],
	message: 'Your message has been sent to Eduardo',
	title: 'Success'
	});
	dialog.addEventListener('click', function(e){
		goBack();
	});
	dialog.show();
}
