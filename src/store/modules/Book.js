import { getError } from "@/utils/helpers";
import BookService from "@/services/BookService";

export const namespaced = true;

function setPaginatedBooks(commit, response) {
  commit("SET_BOOKS", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);
  commit("SET_LOADING", false);
}

export const state = {
  books: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
};

export const mutations = {
  SET_BOOKS(state, books) {
    state.books = books;
  },
  SET_META(state, meta) {
    state.meta = meta;
  },
  SET_LINKS(state, links) {
    state.links = links;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

export const actions = {
  getBooks({ commit }, page) {
    commit("SET_LOADING", true);
    BookService.getBooks(page)
      .then((response) => {
        setPaginatedBooks(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  postBook({ commit }, payload) {
    return BookService.postBook(payload).then((response) => {
      setPaginatedBooks(commit, response);
    });
  },
  paginateBooks({ commit }, link) {
    commit("SET_LOADING", true);
    BookService.paginateBooks(link)
      .then((response) => {
        setPaginatedBooks(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
};

export const getters = {
  books: (state) => {
    return state.books;
  },
  meta: (state) => {
    return state.meta;
  },
  links: (state) => {
    return state.links;
  },
  loading: (state) => {
    return state.loading;
  },
  error: (state) => {
    return state.error;
  },
};
