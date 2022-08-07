import { getError } from "@/utils/helpers";
import LanguageService from "@/services/LanguageService";

export const namespaced = true;

function setAllLanguages(commit, response) {
    commit("SET_LANGUAGES", response.data.data);
    commit("SET_LOADING", false);
}

export const state = {
    all_languages: ["myanmar","english"],
    loading: false,
    error: null,
};

export const mutations = {

    SET_LANGUAGES(state, languages) {
        state.all_languages = languages;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    getLanguages({ commit }) {
        commit("SET_LOADING", true);
        LanguageService.getAllLanguages()
            .then((response) => {
                setAllLanguages(commit, response);
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
    all_languages: (state) => {
        return state.all_languages;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
};
