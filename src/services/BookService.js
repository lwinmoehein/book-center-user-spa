import * as API from "@/services/API";

export default {
  getMessages(page) {
    return API.apiClient.get(`/books/?page=${page}`);
  },
  postMessage(payload) {
    return API.apiClient.post("/books", payload);
  },
  paginateMessages(link) {
    return API.apiClient.get(link);
  },
};
