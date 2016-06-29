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
        some: "="
      },
      template: 'Val : {{ some}}',
      link: function postLink(scope, element, attrs) {
        setInterval(function () {
          scope.$apply(function() {
            scope.some += 1;
          });
      }, 100);

      }
    };
  });
