import { getError } from "@/utils/helpers";
import WantToReadService from "@/services/WantToReadService";

export const namespaced = true;

function setWantToReads(commit, response) {
    commit("SET_WANT_TO_READS", response.data.data);
    commit("SET_LOADING", false);
    commit("SET_META", response.data.meta);
    commit("SET_LINKS", response.data.links);
}
function setWantToRead(commit, response) {
    commit("SET_WANT_TO_READ", response.data.data);
    commit("SET_LOADING", false);
}

export const state = {
    user_want_to_reads: [],
    want_to_reads: [],
    want_to_read_loading: false,
    want_to_read_error: null,
    meta: null,
    links: null,
    error: null,
    message: null,
    current_page: 1
};

export const mutations = {
    SET_META(state, meta) {
        state.meta = meta;
    },
    SET_LINKS(state, links) {
        state.links = links;
    },
    SET_PAGE(state, page) {
        state.current_page = page;
    },
    SET_WANT_TO_READS(state, want_to_reads) {
        state.want_to_reads = state.want_to_reads.concat(want_to_reads)
    },
    SET_WANT_TO_READ(state, want_to_reads) {
        state.user_want_to_reads = want_to_reads;
    },
    REMOVE_WANT_TO_READS(state, book_id) {
        state.want_to_reads = state.want_to_reads.filter(b => b.id != book_id);
    },
    SET_LOADING(state, want_to_read_loading) {
        state.want_to_read_loading = want_to_read_loading;
    },
    SET_ERROR(state, want_to_read_error) {
        state.want_to_read_error = want_to_read_error;
    },
    SET_MESSAGE(state, message) {
        state.message = message;
    },
    CLEAR_WANT_TO_READS(state) {
        state.want_to_reads = [];
    }
};

export const actions = {
    getWantToReads({ commit }, payload) {
        commit("SET_LOADING", true);
        WantToReadService.getWantToReads(payload)
            .then((response) => {
                setWantToReads(commit, response);
            })
            .catch((want_to_read_error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(want_to_read_error));
            });

    },
    getWantToRead({ commit }, payload) {
        commit("SET_LOADING", true);
        WantToReadService.getWantToRead(payload)
            .then((response) => {
                setWantToRead(commit, response);
            })
            .catch((want_to_read_error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(want_to_read_error));
            });

    },
    updateWantToRead({ commit }, payload) {
        return WantToReadService.updateWantToRead(payload).then((response) => {
            setWantToReads(commit, response);
        });
    },
    storeWantToRead({ commit }, payload) {
        return WantToReadService.storeWantToRead(payload).then((response) => {
            setWantToReads(commit, response);
        });
    },
    deleteWantToRead({ commit }, payload) {
        return WantToReadService.deleteWantToRead(payload).then((response) => {
            setWantToReads(commit, response);
        });
    },
    removeWantToRead({ commit }, payload) {
        commit("REMOVE_WANT_TO_READS", payload.book_id)
    },
    setError({ commit }, error) {
        commit("SET_ERROR", error)
    },
    setMessage({ commit }, message) {
        commit("SET_MESSAGE", message)
    },
    setLoading({ commit }, isLoading) {
        commit("SET_LOADING", isLoading)
    },
    setCurrentPage({ commit }, page) {
        commit("SET_PAGE", page)
    },
    clearWantToReads({ commit }) {
        commit("CLEAR_WANT_TO_READS");
        commit("SET_META", null);
        commit("SET_LINKS", null);
    }
};

export const getters = {
    want_to_reads: (state) => {
        return state.want_to_reads;
    },
    user_want_to_reads: (state) => {
        return state.user_want_to_reads;
    },
    want_to_read_loading: (state) => {
        return state.want_to_read_loading;
    },
    want_to_read_error: (state) => {
        return state.want_to_read_error;
    },
    meta: (state) => {
        return state.meta;
    },
    links: (state) => {
        return state.links;
    },
    current_page: (state) => {
        return state.current_page;
    },
    error: (state) => {
        return state.error;
    },
    message: (state) => {
        return state.message;
    },
};
