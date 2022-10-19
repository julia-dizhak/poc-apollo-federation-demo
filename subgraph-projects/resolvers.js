const resolvers = {
  Query: {
    projects: (_, __, { dataSources }) => {
      return dataSources.projectsAPI.getAllProjects();
    },
    project: (_, { id }, { dataSources }) => {
      return dataSources.projectsAPI.getProject(id);
    },
  },
  Project: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.projectsAPI.getProject(id);
    },
  },
};

module.exports = resolvers;
