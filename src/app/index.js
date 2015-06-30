'use strict';

import MainCtrl from './main/main.controller';
import NavbarCtrl from '../app/components/navbar/navbar.controller';
import HomeCtrl from '../app/sections/home.controller';
import AboutCtrl from '../app/sections/about.controller';
import RecipesCtrl from '../app/sections/recipes.controller';
import HttpRequest from '../app/services/httpRequest';
import IngredientsFctr from '../app/services/ingredientsFctr';
import RecipesFctr from '../app/services/recipesFctr';


angular.module('squirrelChef', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'])
    .controller('MainCtrl', MainCtrl)
    .controller('NavbarCtrl', NavbarCtrl)
    .controller('HomeCtrl', HomeCtrl)
    .controller('AboutCtrl', AboutCtrl)
    .controller('RecipesCtrl', RecipesCtrl)
    .service('HttpRequest', HttpRequest)
    .service('IngredientsFctr', IngredientsFctr)
    .service('RecipesFctr', RecipesFctr)


.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainCtrl'
        })
        .state('main.home', {
            url: '/home',
            templateUrl: 'app/sections/home.html',
            controller: 'HomeCtrl'
        })
        .state('main.about', {
            url: '/about',
            templateUrl: 'app/sections/about.html',
            controller: 'AboutCtrl'
        })
        .state('main.recipes', {
            url: '/recipes',
            templateUrl: 'app/sections/recipes.html',
            controller: 'RecipesCtrl',
        });

    $urlRouterProvider.otherwise('/');
});
