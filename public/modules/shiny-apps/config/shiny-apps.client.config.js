'use strict';

// Configuring the Articles module
angular.module('shiny-apps').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Shiny apps', 'shiny-apps', 'dropdown', '/shiny-apps(/create)?', undefined, undefined, 99);
		Menus.addSubMenuItem('topbar', 'shiny-apps', 'List apps', 'shiny-apps');
		Menus.addSubMenuItem('topbar', 'shiny-apps', 'New app', 'shiny-apps/create');
	}
]);
