window.app = angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.route', 'mean.system', 'mean.articles', 'oe.errors']);

angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('oe.errors', []);