import { getError } from "@/utils/helpers";
import BookService from "@/services/BookService";

export const namespaced = true;

function setBook(commit, response) {
    commit("SET_BOOK", response.data.data);
    commit("SET_LOADING", false);
}

export const state = {
    book: null,
    loading: false,
    error: null,
};

export const mutations = {

    SET_BOOK(state, book) {
        state.book = book;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    getBook({ commit }, id) {
        commit("SET_LOADING", true);
        BookService.getBook({ id: id })
            .then((response) => {
                setBook(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    setBookValue({ commit }, book) {
        commit("SET_LOADING", true);
        try {
            setBook(commit, book)
        } catch {
            (error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            }
        }

    },
    postReview({ commit }, payload) {
        commit("SET_LOADING", true);
        BookService.postReview(payload)
            .then((response) => {
                setBook(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    updateReview({ commit }, payload) {
        commit("SET_LOADING", true);
        BookService.updateReview(payload)
            .then((response) => {
                setBook(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    deleteReview({ commit }, payload) {
        commit("SET_LOADING", true);
        BookService.deleteReview(payload)
            .then((response) => {
                setBook(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    setError({ commit }, message) {
        commit("SET_ERROR", message)
    }
};

export const getters = {
    book: (state) => {
        return state.book;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
};
