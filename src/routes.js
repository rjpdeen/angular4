(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categoriesList', {
    url: '/categories-list',
    templateUrl: 'src/templates/categories.template.html',
    controller: 'CategoriesController as categoriesList',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('itemsList', {
    url: '/items-detail/{categoryId}',
    templateUrl: 'src/templates/items.list.template.html',
    controller: 'ItemsController as itemsList',
    resolve: {
      items: ['$stateParams', 'MenuDataService', 
        function ($stateParams, MenuDataService) {
          return MenuDataService.getAllCategories()
            .then(function(items) {
                return MenuDataService.getItemsForCategory(items.data[$stateParams.categoryId].short_name);
            });
        }
      ],
      categories: ['MenuDataService', 
        function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }
      ]
    },  
    params: {
      categoryId: null
    }
  });

}

})();
