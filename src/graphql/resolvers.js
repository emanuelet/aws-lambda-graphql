const pgp = require('pg-promise')({});

const config = {
  host: 'localhost',
  port: 5432,
  database: '<database_name>',
  user: 'postgres',
  password: 'postgres'
};

const db = pgp(config);

const resolvers = {
  Query: {
    chefByRowId(root, {
      rowId
    }) {
      return db.one('SELECT * FROM contacts WHERE id = $1', [rowId]).then((response) => response);
    },
  },
};

export default resolvers;
