(function () {
  'use strict';

  angular
    .module('angularDirectveFundamentals')
    .controller('AboutusController', AboutusController);

  /** @ngInject */
  function AboutusController() {
    var vm = this;
    vm.msg = "this is aboutus";
    vm.user1 = {
      name: 'Sudarshan',
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
    /*vm.user2 = {
      name: 'Prasanna',
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
    }*/




  }
})();

(function () {
  angular
    .module('angularDirectveFundamentals')
    .directive('userInfoCard', function () {
      return {
        templateUrl: "app/components/aboutus/userInfoCard.html",
        restrict: "E",
        scope: {
          user: '='
        },
        controller: function ($scope) {
          $scope.vm.collapsed = false;
          $scope.knightMe = function (user) {
            $scope.vm.user.rank = "knight";
          }
          $scope.vm.collapse = function () {
            $scope.vm.collapsed = !$scope.vm.collapsed;
          }
        },
        controllerAs: 'vm',
        bindToController: true
      }
    });
  angular.module('angularDirectveFundamentals').directive('address', function () {
    return {
      templateUrl: "app/components/aboutus/address.html",
      restrict: "E",
      controller: function ($scope) {

      },
      controllerAs: 'vm',
      bindToController: true
    }
  });

})();
