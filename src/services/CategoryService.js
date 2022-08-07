import * as API from "@/services/API";

export default {
  getAllCategories(page) {
    return API.apiClient.get(`/categories/?page=${page}`);
  },
  getUserCategories() {
    return API.apiClient.get(`/user-categories`);
  },
  updateCategories(payload) {
    return API.apiClient.post("/users/category", payload);
  }
};
