var _data = arguments[0] || {};

/* Action Views */
function goBack(e)
{
	Alloy.Globals.pop($.main_window);
}

function sendNewMessage(e)
{
	Alloy.Globals.openWindow('NewMessageWindow',{});
}

function toggleLike(e)
{
	if(e.source.tag == 0)
	{
		e.source.backgroundColor = '#00cece';
		e.source.title = 'I like this';
		e.source.tag = 1;
	}
	else
	{
		e.source.backgroundColor = '#9ab6b5';
		e.source.title = 'Like this';
		e.source.tag = 0;
	}
}
