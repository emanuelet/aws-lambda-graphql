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
    getContactById(id: ID!): Contact
  }
  schema {
    query: Query
  }
`;

export default typeDefs;
