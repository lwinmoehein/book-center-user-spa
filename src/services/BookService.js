import * as API from "@/services/API";

export default {
  getBooks(payload) {
    return API.apiClient.get(`/books/?page=${payload.page}&languages=${payload.languages}`);
  },
  getRecommendedBooks(payload) {
    return API.apiClient.get(`/recommended-books/?page=${payload.page}&languages=${payload.languages}`);
  },
  postBook(payload) {
    return API.apiClient.post("/books", payload);
  },
  paginateBooks(link) {
    return API.apiClient.get(link);
  },
  getBook(payload) {
    return API.apiClient.get(`/books/${payload.id}`);
  },
  postReview(payload) {
    return API.apiClient.post("/reviews", payload);
  },
  updateReview(payload) {
    return API.apiClient.patch(`/reviews/${payload.review_id}`, payload);
  },
};
