import * as API from "@/services/API";

export default {
  getBooks(payload) {
    return API.apiClient.get(`/books/?page=${payload.page}&languages=${payload.languages}`);
  },
  getRecommendedBooks(payload) {
    return API.apiClient.get(`/books/category/?page=${payload.page}&languages=${payload.languages}`);
  },
  postBook(payload) {
    return API.apiClient.post("/books", payload);
  },
  paginateBooks(link) {
    return API.apiClient.get(link);
  },
};
