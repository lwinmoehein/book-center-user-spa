import { getError } from "@/utils/helpers";
import CategoryService from "@/services/CategoryService";

export const namespaced = true;

function paginateBooks(commit, response) {
    commit("PAGINATE_BOOKS", response.data.data);
    commit("SET_LOADING", false);
    commit("SET_META", response.data.meta);
    commit("SET_LINKS", response.data.links);
}

function setSelectedCategory(commit, response) {
    commit("SET_CATEGORY", response.data.data);
    commit("SET_LOADING", false);
}
export const state = {
    category: null,
    books: [],
    books_meta: null,
    books_links: null,
    loading: false,
    error: null,
    message: null,
    current_page:1
};

export const mutations = {
    SET_CATEGORY(state, category) {
        state.category = category;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
    PAGINATE_BOOKS(state, books) {
        state.books = state.books.concat(books);
    },
    SET_META(state, meta) {
        state.books_meta = meta;
    },
    SET_LINKS(state, links) {
        state.books_links = links;
    },
    SET_PAGE(state, page) {
        state.current_page = page;
    },
};

export const actions = {
    getCategory({ commit }, categoryId) {
        commit("SET_LOADING", true);
        CategoryService.getCategory(categoryId)
            .then((response) => {
                setSelectedCategory(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    getCategoryBooks({ commit }, payload) {
        commit("SET_LOADING", true);
        CategoryService.getCategoryBooks(payload)
            .then((response) => {
                paginateBooks(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    setError({ commit }, message) {
        commit("SET_ERROR", message)
    },
    setLoading({ commit }, isLoading) {
        commit("SET_LOADING", isLoading)
    },
    setCurrentPage({ commit }, page) {
        commit("SET_PAGE", page)
    },
};

export const getters = {
    category: (state) => {
        return state.category;
    },
    books: (state) => {
        return state.books;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
    message: (state) => {
        return state.message;
    },
    books_links: (state) => {
        return state.links;
    },
    books_meta: (state) => {
        return state.books_meta;
    },
    current_page: (state) => {
        return state.current_page;
    },
};
