import { getError } from "@/utils/helpers";
import WantToReadService from "@/services/WantToReadService";

export const namespaced = true;

function setWantToReads(commit, response) {
    commit("SET_WANT_TO_READS", response.data.data);
    commit("SET_LOADING", false);
}

export const state = {
    want_to_reads: [],
    loading: false,
    error: null,
};

export const mutations = {

    SET_WANT_TO_READS(state, want_to_reads) {
        state.want_to_reads = want_to_reads;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    getWantToReads({ commit }) {
        commit("SET_LOADING", true);
        WantToReadService.getWantToReads()
            .then((response) => {
                setWantToReads(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    updateWantToRead({ commit }, payload) {
        return WantToReadService.updateWantToRead(payload).then((response) => {
            setWantToReads(commit, response);
        });
    },
    setError({ commit }, message) {
        commit("SET_ERROR", message)
    }
};

export const getters = {
    want_to_reads: (state) => {
        return state.want_to_reads;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
};
