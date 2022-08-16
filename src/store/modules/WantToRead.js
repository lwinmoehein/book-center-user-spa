import { getError } from "@/utils/helpers";
import WantToReadService from "@/services/WantToReadService";

export const namespaced = true;

function setWantToReads(commit, response) {
    commit("SET_WANT_TO_READS", response.data.data);
    commit("SET_LOADING", false);
}

export const state = {
    want_to_reads: [],
    want_to_read_loading: false,
    want_to_read_error: null,
};

export const mutations = {

    SET_WANT_TO_READS(state, want_to_reads) {
        state.want_to_reads = want_to_reads;
    },
    SET_LOADING(state, want_to_read_loading) {
        state.want_to_read_loading = want_to_read_loading;
    },
    SET_ERROR(state, want_to_read_error) {
        state.want_to_read_error = want_to_read_error;
    },
};

export const actions = {
    getWantToReads({ commit }) {
        commit("SET_LOADING", true);
        WantToReadService.getWantToReads()
            .then((response) => {
                setWantToReads(commit, response);
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
    setError({ commit }, message) {
        commit("SET_ERROR", message)
    }
};

export const getters = {
    want_to_reads: (state) => {
        return state.want_to_reads;
    },
    want_to_read_loading: (state) => {
        return state.want_to_read_loading;
    },
    want_to_read_error: (state) => {
        return state.want_to_read_error;
    },
};
