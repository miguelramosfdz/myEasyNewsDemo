var _dummyData = [
	[
		{
			profileImage: '/images/guykawazaki.png',
			userName: 'Guy Kawasaki'
		},
		{
			profileImage: '/images/john.png',
			userName: 'John Gotfried'
		},
		{
			profileImage: '/images/karen.png',
			userName: 'Karen Smith'
		}
	],
	[
		{
			profileImage: '',
			userName: ''
		},
		{
			profileImage: '',
			userName: ''
		}
	],
	[
		{
			profileImage: '',
			userName: ''
		},
		{
			profileImage: '',
			userName: ''
		}
	]
];

function init()
{
	if(OS_IOS)
	{
		Alloy.Globals.navigation_window = $.navigation_window;
	}
	Alloy.Globals.modalWindow('LoginWindow', {});
}

function populateTable(data)
{
	var rows = [];
	for(var i in data)
	{
		var row = Alloy.createController('Rows/SearchRow',data[i]).getView();
		rows.push(row);
	}
	$.tbl_search_results.setData(rows);
}

/* View Handlers */
function showUserProfile(e)
{
	Alloy.Globals.openWindow('ProfileWindow', {});
}

function setSearchMode(e)
{
	if(!$.txf_search.hasText() && $.lbl_emma.left != '70dp')
	{
		$.form_container.animate({top : 0});// = 0;

		$.label_container.animate({
			top : '20dp',
			height : Ti.UI.SIZE,
			width  : '360dp',
		}, function(){
			$.dark_view.show();
		});
		$.lbl_hello.applyProperties({
			top : 0,
			left: 0,
			font : {
				fontSize : '110dp',
				fontFamily : 'Wolf in the City Light'
			},
			color : '#000'
		});
		$.lbl_emma.applyProperties({
			top : 0,
			left: '180dp',
			font : {
				fontSize : '110dp',
				fontFamily : 'Wolf in the City Light'
			},
			color : '#57ccce'
		});
	}
}

function searchFriends(e)
{
	$.txf_search.blur();
	if($.txf_search.hasText())
	{
		/*
		if($.txf_search.value.toLowerCase() == 'guy kawasaki')
		{
			$.tbl_search_results.show();
			populateTable(_dummyData[0]);
		}
		else if($.txf_search.value.toLowerCase() == 'hannah alba')
		{
			populateTable(_dummyData[1]);
		}
		else if($.txf_search.value.toLowerCase() == 'hannah smith')
		{
			populateTable(_dummyData[2]);
		}*/
		$.tbl_search_results.show();
		populateTable(_dummyData[0]);
	}
	$.dark_view.hide();
}

if(OS_IOS)
	$.navigation_window.open();
else
	$.main_window.open();
