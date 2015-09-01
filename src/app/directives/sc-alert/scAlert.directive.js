'use strict';


class ScAlert { 

    constructor() {
        this.templateUrl = 'app/directives/sc-alert/scAlert.tpl.html'
        this.restrict = 'AE';
        this.require = 'ngModel';
        this.scope = {
            value: '=ngModel'
        };
        this.controller = ScAlertController(this.scope);
        this.controllerAs = 'vm';
        this.bindToController = true;
    }

    link(scope, element, attrs) {

    }
}

function ScAlertController(scope) {
    /*var vm = this;
    console.log('scope', scope);*/
};


/*ScAlert.$inject = ['$http'];*/

export default ScAlert;

