const config = require('../../knex.js');
const knex = require('knex')(config['db']);

const build_Users_Table = knex.build_Users_Table = () => {
  return knex.schema.hasTable('Users')
    .then( (exists) => {
      if(exists) {
        console.log('Users table is already alive and kicking!');
      } else {
        knex.schema.createTable('Users', (table) => {
          table.increments('id').primary();
          table.string('nickname', 15);
          table.string('password', 20);
        })
        .then( (table) => {
          console.log('Users table is now live!', table);
        })
      }
    })
};

const build_Animals_Table = knex.build_Animals_Table = () => {
  return knex.schema.hasTable('Animals')
    .then( (exists) => {
      if(exists) {
        console.log('Animals table is already alive and kicking!');
      } else {
        knex.schema.createTable('Animals', (table) => {
          table.increments('id').primary();
          table.string('name', 50);
          table.string('description', 8000);
        })
        .then( (table) => {
          console.log('Animals table is now live!', table);
        })
      }
    })
};

knex.build_Db = () => {
  const promiseArr = [];
  promiseArr.push(build_Users_Table());
  promiseArr.push(build_Animals_Table());

  return Promise.all(promiseArr);
};

module.exports = knex;

