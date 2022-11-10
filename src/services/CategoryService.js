import * as API from "@/services/API";

export default {
  getAllCategories(page) {
    return API.apiClient.get(`/categories?page=${page}`);
  },
  getCategory(id) {
    return API.apiClient.get(`/categories/${id}`);
  },
  getUserCategories() {
    return API.apiClient.get(`/user-categories`);
  },
  updateCategories(payload) {
    return API.apiClient.post("/users/category", payload);
  },
  getCategoryBooks(payload) {
    return API.apiClient.get(`/categorie-detail/${payload.category_id}?page=${payload.page}`);
  },
};
