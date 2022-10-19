const { ApolloServer, gql } = require("apollo-server");
const { readFileSync } = require("fs");

const typeDefs = gql(readFileSync("./demands.graphql", { encoding: "utf-8" }));
const resolvers = require("./resolvers");
const DemandsAPI = require("./datasources/DemandsApi");
const { buildSubgraphSchema } = require("@apollo/subgraph");

const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  dataSources: () => {
    return {
      demandsAPI: new DemandsAPI(),
    };
  },
});

const port = 4002;
const subgraphName = "demands";

server
  .listen({ port })
  .then(({ url }) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
