'use strict';

class MainCtrl {
    constructor($scope, HttpRequest, $state, IngredientsFctr, RecipesFctr, $q, $firebaseObject, tmhDynamicLocale) {

        $scope.ref = new Firebase('https://scorching-torch-7081.firebaseio.com/squirrelChef');
        var syncObject = $firebaseObject($scope.ref);
        
        syncObject.$bindTo($scope, "data")
        .then(function(){
            for (var i = 0; i < $scope.data.ingredientes.ingredients.length; i++) {
                $scope.data.ingredientes.ingredients[i].selected = false;
            };
            IngredientsFctr.fillIngredients($scope.data.ingredientes.ingredients);
            RecipesFctr.fillRecipes($scope.data.recetas.recipes);
            $state.go('main.home');
        }, function(error){
            // Show error
        });

        $scope.locale = 'es-es';
        tmhDynamicLocale.set($scope.locale);
    }
}

MainCtrl.$inject = ['$scope', 'HttpRequest', '$state', 'IngredientsFctr', 'RecipesFctr', '$q', '$firebaseObject', 'tmhDynamicLocale'];

export default MainCtrl;
