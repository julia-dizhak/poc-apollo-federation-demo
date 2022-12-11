let { demands } = require("./demands_data.json");

class DemandsAPI {
  getDemands() {
    return demands;
  }

  getDemand(id) {
    return demands.find((demand) => demand.id === id);
  }

  getDemandsForProject(id) {
    return demands.filter((demand) => demand.projectId === id);
  }


}

module.exports = DemandsAPI;
