import * as API from "@/services/API";

export default {
  getAllLanguages() {
    return API.apiClient.get(`/languages`);
  }
};
