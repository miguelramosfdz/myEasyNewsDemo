function init(){
	$.activity_indicator.show();
	//$.black_view.hide();
}
exports.showIndicator = function(){
	$.activity_indicator.show();
	$.black_view.setVisible(true);
};

exports.hideIndicator = function(){
	$.black_view.setVisible(false);
};
/*
Ti.App.addEventListener('showLoadingIndicator',function(){
	$.black_view.show();
});

Ti.App.addEventListener('hideLoadingIndicator',function(){
	$.black_view.hide();
});

init();
*/