import * as API from "@/services/API";

export default {
  getBooks(page,language) {
    return API.apiClient.get(`/books/?page=${page}&language=${language}`);
  },
  getRecommendedBooks(page) {
    return API.apiClient.get(`/books/category/?page=${page}`);
  },
  postBook(payload) {
    return API.apiClient.post("/books", payload);
  },
  paginateBooks(link) {
    return API.apiClient.get(link);
  },
};
