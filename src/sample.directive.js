(function() {
  'use strict';

  angular.module('app.directive.sample', [])
    .directive('appSample', sampleDirective);

  sampleDirective.$inject = [];

  /**
   * @classdesc 検索結果を描画する
   *
   * @namespace appSearchlist
   * @class appSearchlist
   * @constructor
   */
  function sampleDirective($timeout) {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'sample.directive.html',
      scope: {},
    };
  }

})();
