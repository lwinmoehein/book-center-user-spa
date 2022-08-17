import { getError } from "@/utils/helpers";
import BookService from "@/services/BookService";

export const namespaced = true;


function setBooks(commit, response) {
  commit("SET_BOOKS", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);
  commit("SET_LOADING", false);
}
function setPaginatedBooks(commit, response) {
  commit("SET_PAGINATED_BOOKS", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);
  commit("SET_LOADING", false);
}

function setRecommendedBooks(commit, response) {
  commit("SET_RECOMMENDED_BOOKS", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);
  commit("SET_LOADING", false);
}

function setPaginatedRecommendedBooks(commit, response) {
  commit("SET_PAGINATED_RECOMMENDED_BOOKS", response.data.data);
  commit("SET_RECOMMENDED_META", response.data.meta);
  commit("SET_RECOMMENDED_LINKS", response.data.links);
  commit("SET_LOADING", false);
}


export const state = {
  books: [],
  meta: null,
  links: null,
  recommended_books: [],
  recommended_meta: null,
  recommended_links: null,
  loading: false,
  error: null,
  current_top_page: 1,
  current_recommended_page: 1,
  current_tab: 1
};

export const mutations = {

  SET_BOOKS(state, books) {
    state.books = books;
  },
  SET_PAGINATED_BOOKS(state, books) {
    state.books = state.books.concat(books)
  },
  SET_RECOMMENDED_BOOKS(state, recommended_books) {
    state.recommended_books = recommended_books;
  },
  SET_PAGINATED_RECOMMENDED_BOOKS(state, recommended_books) {
      state.recommended_books = state.recommended_books.concat(recommended_books);
  },
  SET_RECOMMENDED_META(state, recommended_meta) {
    state.recommended_meta = recommended_meta;
  },
  SET_RECOMMENDED_LINKS(state, recommended_links) {
    state.recommended_links = recommended_links;
  },
  SET_CURRENT_TOP_PAGE(state, page) {
    state.current_top_page = page;
  },
  SET_CURRENT_RECOMMENDED_PAGE(state, page) {
    state.current_recommended_page = page;
  },
  SET_CURRENT_TAB(state, tab) {
    state.current_tab = tab;
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
  getBooks({ commit }, payload) {
    commit("SET_LOADING", true);
    BookService.getBooks(payload)
      .then((response) => {
        if (payload.isPaginated)
          setPaginatedBooks(commit, response);
        else
          setBooks(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  getRecommendedBooks({ commit }, payload) {
    commit("SET_LOADING", true);
    BookService.getRecommendedBooks(payload)
      .then((response) => {
        if (payload.isPaginated)
          setPaginatedRecommendedBooks(commit, response);
        else
          setRecommendedBooks(commit, response);
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
  paginateRecommendedBooks({ commit }, link) {
    commit("SET_LOADING", true);
    BookService.paginateBooks(link)
      .then((response) => {
        setPaginatedRecommendedBooks(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  setCurrentTopPage({ commit }, page) {
    commit("SET_CURRENT_TOP_PAGE", page);
  },
  setCurrentRecommendedPage({ commit }, page) {
    commit("SET_CURRENT_RECOMMENDED_PAGE", page);
  },
  setCurrentTab({ commit }, tab) {
    commit("SET_CURRENT_TAB", tab);
  },

};

export const getters = {
  books: (state) => {
    return state.books;
  },
  meta: (state) => {
    return state.meta;
  },
  current_top_page: (state) => {
    return state.current_top_page;
  },
  current_recommended_page: (state) => {
    return state.current_recommended_page;
  },
  current_tab: (state) => {
    return state.current_tab;
  },
  links: (state) => {
    return state.links;
  },
  recommended_books: (state) => {
    return state.recommended_books;
  },
  recommended_meta: (state) => {
    return state.recommended_meta;
  },
  recommended_links: (state) => {
    return state.recommended_links;
  },
  loading: (state) => {
    return state.loading;
  },
  error: (state) => {
    return state.error;
  },
};
