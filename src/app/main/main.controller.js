'use strict';

class MainCtrl {
    constructor($scope, HttpRequest, $state, IngredientsFctr, RecipesFctr, $q, $firebaseObject) {
/*
        var ingConfigHttp = {
            method: 'GET',
            url: './app/mocks/ingredientes.json'
        };
        var recConfigHttp = {
            method: 'GET',
            url: './app/mocks/recetas.json'
        };

        var promIng = HttpRequest.get(ingConfigHttp);
        var promRec = HttpRequest.get(recConfigHttp);

        $q.all([promIng, promRec])
            .then(function(resp) {
                IngredientsFctr.fillIngredients(IngredientsFctr.setIds(resp[0].data.ingredients));
                RecipesFctr.fillRecipes(RecipesFctr.setIds(resp[1].data.recipes));
                $state.go('main.home');
            });
        */

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
        })
    }
}

MainCtrl.$inject = ['$scope', 'HttpRequest', '$state', 'IngredientsFctr', 'RecipesFctr', '$q', '$firebaseObject'];

export default MainCtrl;
