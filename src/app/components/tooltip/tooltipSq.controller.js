/*angular.module('ui.bootstrap.demo').controller('TooltipDemoCtrl', function ($scope, $sce) {
  $scope.dynamicTooltip = 'Hello, World!';
  $scope.dynamicTooltipText = 'dynamic';
  $scope.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
});*/


'use strict';

class TooltipSqCtrl {

  constructor ($scope, src) {

      var vm = this;  

      console.log('src', src);
      /*vm.recipes = RecipesFctr.getAllRecipes();
      $scope.searchRecipe;*/
  }
}

TooltipSqCtrl.$inject = ['$scope'];

export default TooltipSqCtrl;
