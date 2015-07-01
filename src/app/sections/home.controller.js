'use strict';

class HomeCtrl {
    constructor($scope, IngredientsFctr, RecipesFctr) {

        $scope.searchText;

        $scope.ingredients = IngredientsFctr.getAllIngredients();
        $scope.recipes = RecipesFctr.getAllRecipes();
        $scope.posiblesRecipes = [];
        $scope.selectedIngredients = IngredientsFctr.getIngredientsSelected();


        $scope.toggleAddingIngredient = function(item) {
            item.selected = (item.selected === true) ? false : true;
            if (item.selected === true) {
                $scope.selectedIngredients.push(item);
            } else {
                var deltedItems = _.remove($scope.selectedIngredients, function(el) {
                    return el.name === item.name;
                });
            }
        };

        $scope.generateRecipe = function() {
            $scope.posiblesRecipes = RecipesFctr.lookForRecipe($scope.selectedIngredients);
        };

        $scope.reset = function() {
            $scope.posiblesRecipes = [];
            $scope.selectedIngredients = [];

            for (var i = 0; i < $scope.ingredients.length; i++) {
                $scope.ingredients[i].selected = false;
            };
        };

        $scope.$on('$destroy', function() {
            console.log('destroy');
            IngredientsFctr.updateSelectedIngredientsArray($scope.selectedIngredients);
        });
    }
}

HomeCtrl.$inject = ['$scope', 'IngredientsFctr', 'RecipesFctr'];

export default HomeCtrl;
