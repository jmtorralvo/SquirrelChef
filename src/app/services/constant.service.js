'use strict';

class ConstantSrv {

    constructor() {
        this.urls = [{
            id: 'baseUrl',
            str: 'http loquesea'
        }];
         this.msg = [{
            id: 'noRecipes',
            str: 'No se ha encontrado ninguna receta.'
        }]
    };

    getConst(dir, id) {
        let temp =  _.result(_.find(this[dir], function(item) {
            return item.id === id;
        }), 'str');

        return temp;
    }
};

ConstantSrv.$inject = [];

export default ConstantSrv;
