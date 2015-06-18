angular.module( 'orderCloud.alerts', [
	'toastr'
])

	.run( AlertsTemplate )
	.config( AlertConfig )

;

function AlertsTemplate( $templateCache ) {
	var template = 	"<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">" +
		"	<i class=\"fa {{toastType}}\"></i>" +
		"	<div ng-switch on=\"allowHtml\">" +
		"		<div ng-switch-default ng-if=\"title\" class=\"{{titleClass}}\">{{title}}</div>" +
		"		<div ng-switch-default class=\"{{messageClass}}\">{{message}}</div>" +
		"		<div ng-switch-when=\"true\" ng-if=\"title\" class=\"{{titleClass}}\" ng-bind-html=\"title\"></div>" +
		"		<div ng-switch-when=\"true\" class=\"{{messageClass}}\" ng-bind-html=\"message\"></div>" +
		"	</div>" +
		"</div>";
	$templateCache.put('alerts/alerts.tpl.html', template);
}

function AlertConfig(toastrConfig) {
	//All values are from angular-toastr. Values that are default are commented out.
	angular.extend(toastrConfig, {
		//allowHtml: false,
		//autoDismiss: false,
		//closeButton: false,
		//closeHtml: '<button>&times;</button>',
		containerId: 'alert-container',
		extendedTimeOut:300,
		iconClasses: {
			error: 'alert-error',
			info: 'alert-info',
			success: 'alert-success',
			warning: 'alert-warning'
		},
		maxOpened: 3,
		messageClass: 'alert-message',
		//newestOnTop: true,
		//onHidden: null,
		//onShown: null,
		positionClass: 'alert-top-center',
		//preventDuplicates: false,
		//preventOpenDuplicates: false,
		//progressBar: false,
		//tapToDismiss: true,
		//target: 'body',
		templates: {
			toast: 'alerts/alerts.tpl.html'
			//progressbar: 'directives/progressbar/progressbar.html'
		},
		timeOut: 500,
		titleClass: 'alert-title',
		toastClass: 'alert'
	});
}