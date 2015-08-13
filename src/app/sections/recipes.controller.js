'use strict';

class RecipesCtrl {

  constructor ($scope, RecipesFctr) {

  	  var vm = this;  

      vm.recipes = RecipesFctr.getAllRecipes();
      $scope.searchRecipe;
  }
}

RecipesCtrl.$inject = ['$scope', 'RecipesFctr'];

export default RecipesCtrl;
