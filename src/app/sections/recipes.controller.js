'use strict';

class RecipesCtrl {
  constructor ($scope, RecipesFctr) {
      $scope.recipes = RecipesFctr.getAllRecipes();
      $scope.searchRecipe;
  }
}

RecipesCtrl.$inject = ['$scope', 'RecipesFctr'];

export default RecipesCtrl;
