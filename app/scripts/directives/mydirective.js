'use strict';

/**
 * @ngdoc directive
 * @name angularTestApp.directive:myDirective
 * @description
 * # myDirective
 */
angular.module('angularTestApp')
  .directive('myDirective', function () {
    scope: {
      some: "="
    }
    return {
      template: 'Val: Is: {{ some}}',
      link: function postLink(scope, element, attrs) {
        setInterval(function () {
          scope.some += 1;
      }, 100);

      }
    };
  });
