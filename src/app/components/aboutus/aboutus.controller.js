(function () {
  'use strict';

  angular
    .module('angularDirectveFundamentals')
    .controller('AboutusController', AboutusController);

  /** @ngInject */
  function AboutusController() {
    var vm = this;
    vm.msg = "this is aboutus";
    vm.user = {
      name: 'sudarshan',
      address: {
        street: 'PO Box 123',
        city: 'select Rebel Base',
        planet: 'Yavin 4'
      },
      friends: [
        'Han',
        'Leia',
        'Chewbacca'
      ]
    }

  }
})();

(function () {
  angular
    .module('angularDirectveFundamentals')
    .directive('userInfoCard', function () {
      return {
        templateUrl: "app/components/aboutus/userInfoCard.html",
        restrict: "E"
      }
    })
})();
