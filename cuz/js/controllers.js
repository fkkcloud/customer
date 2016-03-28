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

      if (quest.activated) {
        quest.currentTime += updateDelta;
        if (quest.currentTime >= quest.maxTime) { 
          quest.currentTime = 0;
          $scope.gainMoneyFromQuest(quest);
        } 
      }

    }

    $scope.itemsUpdate();

    $scope.walletUpdate();

    $scope.updateUIPurchaseButtons();
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

  $scope.gainMoneyFromQuest = function(itemData){
    if (itemData.reward.length === 0)
      return; // free?

    for (var i = 0; i < itemData.reward.length; i++){

      var reward = itemData.reward[i];

      if (reward.type == "KRW"){
        GLOBALS.wallet.KRW += reward.amount;
      }
      else if (reward.type == "SPIRIT" && $scope.wallet.SPIRIT < reward.amount){
        GLOBALS.wallet.SPIRIT += reward.amount;
      }
      else if (reward.type == "RUBY" && $scope.wallet.RUBY < reward.amount){
        GLOBALS.wallet.RUBY += reward.amount;
      }
    }
  }

  $scope.canBePurchased = function(itemData){
    if (itemData.price.length === 0)
      return false;

    for (var i = 0; i < itemData.price.length; i++){

      var price = itemData.price[i];

      if (price.type == "KRW" && $scope.wallet.KRW < price.amount){
        return false;
      }
      else if (price.type == "SPIRIT" && $scope.wallet.SPIRIT < price.amount){
        return false;
      }
      else if (price.type == "RUBY" && $scope.wallet.RUBY < price.amount){
        return false;
      }
    }

    return true;
  };

  $scope.doPurchase = function(itemData){

    if (itemData.price.length === 0)
      return; // free?

    for (var i = 0; i < itemData.price.length; i++){

      var price = itemData.price[i];

      if (price.type == "KRW"){
        GLOBALS.wallet.KRW -= price.amount;
      }
      else if (price.type == "SPIRIT" && $scope.wallet.SPIRIT < price.amount){
        GLOBALS.wallet.SPIRIT -= price.amount;
      }
      else if (price.type == "RUBY" && $scope.wallet.RUBY < price.amount){
        GLOBALS.wallet.RUBY -= price.amount;
      }
    }
    
  }

  $scope.getCurrentTabItems = function(){
    var items;
    var currentTabName = $state.current.name.split('.')[1];
    if (currentTabName == "quest")
      items = $scope.questItems;
    else if (currentTabName == "belt")
      items = $scope.beltItems;
    else if (currentTabName == "item")
      items = $scope.itemItems;
    else if (currentTabName == "gf")
      items = $scope.gfItems;
    else if (currentTabName == "store")
      items = $scope.storeItems;
    return items;
  };

  $scope.updateUIPurchaseButtons = function(){
    
    var items = $scope.getCurrentTabItems();

    var btns = jQuery('.btn-upgrade');

    btns.each(function(index){
      var itemData = items[index];

      var elem = jQuery(this);

      if ($scope.canBePurchased(itemData))
        elem.css('background-color', '#0f0');
      else
        elem.css('background-color', '#f00');
    });
  };

  $scope.upgrade = function(){
    // 
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
      var duration_delay = '-' + item.currentTime + 's';
      elem.css('-webkit-animation-delay', duration_delay);
      elem.css('animation-delay', duration_delay);
    }

    if (!item.activated)
      item.activated = true;
  }

  $scope.upgradeQuest = function($event, item){

    if (!$scope.canBePurchased(item))
      return;

    if (item.activated){
      $scope.doPurchase(item);
      return;
    }

    var el_stack_item = angular.element($event.currentTarget).parent().children().children('.bar-progress');

    $scope.animateBar(el_stack_item, item, false); // run animation from the start

    $scope.doPurchase(item);

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
  $timeout(function(){
    $scope.restoreQuestBarAnimation();
  });

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
