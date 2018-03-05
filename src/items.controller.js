(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

// Version with resolving to 1 item based on $stateParams in route config
ItemsController.$inject = ['MenuDataService','$stateParams', 'items', 'categories'];
function ItemsController(MenuDataService, $stateParams, items, categories) {
  var itemsList = this;
  
  // console.log("categories: ", categories.data);
  itemsList.category = categories.data[$stateParams.categoryId].name;
  // console.log("itemsList.category: ", itemsList.category);
  itemsList.items = items.data.menu_items;
}

})();