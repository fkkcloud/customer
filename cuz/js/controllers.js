angular.module('game.controllers', [])

.controller('DashCtrl', function($scope, $state, $timeout, GameServerSvc) {
  $scope.items = [
    { item: 'haha' },
    { item: 'haha2' },
    { item: 'haha3' },
    { item: 'haha4' },
    { item: 'haha5' },
    { item: 'haha6' },
    { item: 'haha7' },
    { item: 'haha8' },
    { item: 'haha9' },
    { item: 'haha10' },
  ]
})

.controller('AboutCtrl', function($scope) {
  
})

.controller('ConfigCtrl', function($scope, $state, $timeout, GameServerSvc) {

  //$state.go('tab.dash');

});
