'use strict';

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('currency_pairs').del(),
        knex('currency_pairs').insert({
          id: 1,
          currency_pair: 'CXP_BTC',
          base_currency_id: 2,  //CXP
          quote_currency_id: 1, //BTC
          base_min_size: 0.01,
          base_max_size: 10000,
          quote_increment: 0.01
        }),
    ]);
};
