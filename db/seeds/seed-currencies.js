'use strict';

exports.seed = function(knex, Promise) {
    return Promise.all([
        knex('currencies').del(),
        knex('currencies').insert({id: 1, currency: 'BTC'}),
        knex('currencies').insert({id: 2, currency: 'CXP'})
    ]);
};
