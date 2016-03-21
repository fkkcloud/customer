angular.module('game.main', 
  ['ionic', 
  'game.controllers', 
  'game.services',
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    .state('tab.quest', {
      url: '/quest',
      views: {
        'tab-quest': {
          templateUrl: 'templates/tab-quest.html',
          controller: 'QuestCtrl'
        }
      }
    })

    .state('tab.belt', {
      url: '/belt',
      views: {
        'tab-belt': {
          templateUrl: 'templates/tab-belt.html',
          controller: 'BeltCtrl'
        }
      }
    })

    .state('tab.item', {
      url: '/item',
      views: {
        'tab-item': {
          templateUrl: 'templates/tab-item.html',
          controller: 'ItemCtrl'
        }
      }
    })

    .state('tab.gf', {
      url: '/gf',
      views: {
        'tab-gf': {
          templateUrl: 'templates/tab-gf.html',
          controller: 'GFCtrl'
        }
      }
    })

    .state('tab.store', {
      url: '/store',
      views: {
        'tab-store': {
          templateUrl: 'templates/tab-store.html',
          controller: 'StoreCtrl'
        }
      }
    })

  $urlRouterProvider.otherwise('/tab/quest');

});

