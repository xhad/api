
var marketEngine = module.exports;
marketEngine.placeOrder = require('./orderDesk');
marketEngine.start = function(){
  console.log('Starting HeartOfGold trade engine.')
  require('./matcher');
};
