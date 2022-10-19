const resolvers = {
  Query: {
    demands: (_, __, { dataSources }) => {
      return dataSources.demandsAPI.getDemands();
    },
    demand: (_, { id }, { dataSources }) => {
      return dataSources.demandsAPI.getDemand(id);
    },
  },
};

module.exports = resolvers;
