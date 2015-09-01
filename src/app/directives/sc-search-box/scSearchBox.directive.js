'use strict';


class ScSearchBox {

    constructor() {
        this.templateUrl = 'app/directives/sc-search-box/scSearchBox.tpl.html'
        this.restrict = 'AE';
        this.require = 'ngModel';
        this.scope = {
            value: '=ngModel'
        };
        this.controller = ScSearchBoxController(this.scope);
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    link(scope, element, attrs) {

    }
}

function ScSearchBoxController(scope) {
    
};

/*ScSearchBox.$inject = ['$http'];*/

export default ScSearchBox;
