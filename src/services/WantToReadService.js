import * as API from "@/services/API";

export default {
  getAllCategories(page) {
    return API.apiClient.get(`/categories/?page=${page}`);
  },
  getCategory(id) {
    return API.apiClient.get(`/categories/${id}`);
  },
  getWantToReads() {
    return API.apiClient.get(`/want-to-reads`);
  },
  updateWantToRead(payload) {
    return API.apiClient.post("/want-to-reads", payload);
  }
};
