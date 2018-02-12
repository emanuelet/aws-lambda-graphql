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
    contacts(root) {
      return db.manyOrNone('SELECT * FROM contacts').then((response) => response);
    },
    contactsByRowId(root, {
      id
    }) {
      return db.oneOrNone('SELECT * FROM contacts WHERE id = $1', [id]).then((response) => response);
    },
  },
};

export default resolvers;
