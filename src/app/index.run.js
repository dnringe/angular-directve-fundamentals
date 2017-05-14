(function() {
  'use strict';

  angular
    .module('angularDirectveFundamentals')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
