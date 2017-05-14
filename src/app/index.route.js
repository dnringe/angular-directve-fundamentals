(function() {
  'use strict';

  angular
    .module('angularDirectveFundamentals')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('aboutus', {
        url: '/aboutus',
        templateUrl: 'app/components/aboutus/aboutus.html',
        controller: 'AboutusController',
        controllerAs: 'vm'
      }); 

    $urlRouterProvider.otherwise('/');
  }

})();
