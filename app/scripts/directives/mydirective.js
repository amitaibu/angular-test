'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('angularTestApp')
  .directive('myDirective', function () {
    return {
      scope: {
        someVal: "="
      },
      template: 'Val : {{ someVal }}',
      link: function postLink(scope, element, attrs) {
        setInterval(function () {
          scope.$apply(function() {
            scope.someVal += 1;
          });
      }, 100);

      }
    };
  });
