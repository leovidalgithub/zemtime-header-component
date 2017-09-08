(function () {
  'use strict';

  require('./sass/comp-header.scss')

  var templateFile = require('./template.html')

  angular
    .module('zemtime-header', [])
    .directive('zemHeader', zemHeader)

  function zemHeader() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: templateFile
    };
  }
}());
