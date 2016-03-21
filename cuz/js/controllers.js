angular.module('game.controllers', [])

//------------------------------------------------------------------------------------------------------------------------
.controller('MainCtrl', function($scope, $state, $timeout, GameServerSvc) {

  $scope.restoreData = function(){};

  // GLOBAL ------------------------------------------------------------------------------------------------------------------------
  /*
    *How the data is flowing
    LocalStorage --> GLOBALS --> to $scope (of Angular UI side) and to PhaserIO (for game side)
  */
  var updateDelta = 0.02;
  $scope.gameUITick = function(){
    for (var i = 0; i < GLOBALS.questItems.length; i++){ 

      var quest = GLOBALS.questItems[i];

      if (quest.activated)
      {
        quest.currentTime += updateDelta;
        //if (i === 0) console.log('adding', quest.currentTime);
        // if time maxes out, reset it! + call complete function

        if (quest.currentTime >= quest.maxTime)
        { 
          quest.currentTime = 0;

          //if (i === 0) console.log('done!', quest.currentTime);
          // potential call for complete callback function
        } 
      }

    }
    $scope.itemsUpdate();
  };

  // update to angular
  $scope.itemsUpdate = function(){
    $scope.questItems = GLOBALS.questItems; 
    $scope.beltItems  = GLOBALS.beltItems;
    $scope.itemItems  = GLOBALS.itemItems;
    $scope.gfItems    = GLOBALS.gfItems;
    $scope.storeItems = GLOBALS.storeItems;
  };

  $scope.walletUpdate = function(){
    $scope.wallet = GLOBALS.wallet;
  };

  $scope.canBePurchased = function(){
    if ()
  };

  $scope.upgrade = function(){

  };

  // global time
  var ms = 1000;
  setInterval($scope.gameUITick, updateDelta * ms);

})

// QUEST ------------------------------------------------------------------------------------------------------------------------
.controller('QuestCtrl', function($scope, $state, $timeout, GameServerSvc) {

  $scope.animateBar = function(elem, item, resumeAnimation){
    
    if (elem.hasClass("fill-activate"))
      elem.removeClass("fill-activate");
    elem.addClass("fill-activate");

    var duration = item.maxTime + "s";
    elem.css('-webkit-animation-duration', duration);
    elem.css('animation-duration', duration);

    if (resumeAnimation == true){
      var duration_delay = "-" + item.currentTime + "s";
      elem.css('-webkit-animation-delay', duration_delay);
      elem.css('animation-delay', duration_delay);
    }

    if (!item.activated)
      item.activated = true;
  }

  $scope.upgradeQuest = function($event, item){

    if (item.activated){
      // do level up
      return;
    }

    var el_stack_item = angular.element($event.currentTarget).parent().children().children('.bar-progress');

    $scope.animateBar(el_stack_item, item, false); // run animation from the start

  }

  // resume belt upgrade animations (progress bar)
  $scope.restoreQuestBarAnimation = function(){

    var el_stack_item = jQuery('.fill');

    el_stack_item.each(function(index){
      var itemData = $scope.questItems[index];

      var elem_bar = jQuery(this);

      if (itemData.activated)
        $scope.animateBar(elem_bar, itemData, true); //  run animation from where it left
    });
  };

  // do restore
  $timeout(function(){$scope.restoreQuestBarAnimation();}, 140);

})


// BELT ------------------------------------------------------------------------------------------------------------------------
.controller('BeltCtrl', function($scope, $state, $timeout, GameServerSvc) {


})


// ITEM ------------------------------------------------------------------------------------------------------------------------
.controller('ItemCtrl', function($scope, $state, $timeout, GameServerSvc) {

  //$state.go('tab.dash');

})

// GF ------------------------------------------------------------------------------------------------------------------------
.controller('GFCtrl', function($scope, $state, $timeout, GameServerSvc) {
    
  //$state.go('tab.dash');

})

// Store ------------------------------------------------------------------------------------------------------------------------
.controller('StoreCtrl', function($scope, $state, $timeout, GameServerSvc) {
    
  //$state.go('tab.dash');

})
