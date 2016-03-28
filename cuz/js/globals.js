var GLOBALS = {};

// WALLET  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.wallet = {
	KRW:100000,
	SPIRIT:100000,
	//{type:'', amount:100000},
};


// QUEST  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.questItems = [
    { 
      price: [{type:'KRW', amount:10000}],
      name: 'basic form',
      money: 10,
      currentTime: 0,
      maxTime: 2,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 100}],
    },
    { 
      price: [{type:'KRW', amount:20000}],
      name: 'form',
      money: 20,
      currentTime: 0,
      maxTime: 3,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 200}],
    },
    { 
      price: [{type:'KRW', amount:40000}],
      name: 'sparring',
      money: 30,
      currentTime: 0,
      maxTime: 4,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 400}],
    },
    { 
      price: [{type:'KRW', amount:160000}],
      name: 'meditation',
      money: 40,
      currentTime: 0,
      maxTime: 5,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 1600}],
    },
];

// BELT  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.beltItems = [
    { 
      price: [{type:'SPIRIT', amount:10}],
      name: 'white',
      money: 10,
      activated: false,
      lvl: 0,
      reward: [{type: 'Str', amount: 100}, {type: 'Agl', amount: 200}],
    },
    { 
      price: [{type:'SPIRIT', amount:20}],
      name: 'yellow',
      money: 20,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 100}],
    },
    { 
      price: [{type:'SPIRIT', amount:40}],
      name: 'blue',
      money: 30,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 100}],
    },
    { 
      price: [{type:'SPIRIT', amount:160}],
      name: 'red',
      money: 40,
      activated: false,
      lvl: 0,
      reward: [{type: 'KRW', amount: 100}],
    },
];

// ITEM  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.itemItems = [
    { 
      price:[{type:'KRW', amount:1000}],
      name: 'uniform',
      money: 10,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'KRW', amount:2000}],
      name: 'shoe',
      money: 20,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'KRW', amount:4000}],
      name: 'arm',
      money: 30,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'KRW', amount:16000}],
      name: 'panties',
      money: 40,
      activated: false,
      lvl: 0
    },
];

// GF  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.gfItems = [
    { 
      price:[{type:'SPT', amount:10}],
      name: 'white',
      money: 10,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:20}],
      name: 'yellow',
      money: 20,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:40}],
      name: 'blue',
      money: 30,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:160}],
      name: 'red',
      money: 40,
      activated: false,
      lvl: 0
    },
];

// STORE  ------------------------------------------------------------------------------------------------------------------------
GLOBALS.storeItems = [
    { 
      price:[{type:'SPT', amount:10}],
      name: 'white',
      money: 10,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:20}],
      name: 'yellow',
      money: 20,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:40}],
      name: 'blue',
      money: 30,
      activated: false,
      lvl: 0
    },
    { 
      price:[{type:'SPT', amount:160}],
      name: 'red',
      money: 40,
      activated: false,
      lvl: 0
    },
];

