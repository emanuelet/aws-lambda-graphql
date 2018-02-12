const typeDefs = `
  type Contact {
    id: ID!
    first_name: String!
    last_name: String!
    phone: String!
    email: String!
    bio: String
  }
  type Query {
    contacts: [Contact]
    contactsByRowId(id: ID!): Contact
  }
  schema {
    query: Query
  }
`;

export default typeDefs;
