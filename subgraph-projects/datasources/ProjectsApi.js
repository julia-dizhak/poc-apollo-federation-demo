const { projects } = require("./projects_data.json");

class ProjectsAPI {
  getAllProjects() {
    return projects;
  }

  getProject(id) {
    return projects.find((project) => project.id === id);
  }

  getLatestProjects() {
    return projects.slice(Math.max(projects.length - 3, 0));
  }
}

module.exports = ProjectsAPI;
