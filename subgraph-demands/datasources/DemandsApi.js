let { demands } = require("./demands_data.json");

class DemandsAPI {
  getDemand(id) {
    return demands.find((demand) => demand.id === id);
  }

  getDemandsForProject(id) {
    return demands.filter((demand) => demand.projectId === id);
  }

  getDemands() {
    return demands;
  }
}

module.exports = DemandsAPI;
