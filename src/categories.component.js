(function () {
'use strict';

angular.module('MenuApp')
.component('categoriesComponent', {
  templateUrl: 'src/templates/categories.list.template.html',
  bindings: {
    categories: '<'
  }
});

})();