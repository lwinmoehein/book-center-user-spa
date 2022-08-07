import { getError } from "@/utils/helpers";
import CategoryService from "@/services/CategoryService";

export const namespaced = true;

function setUserCategories(commit, response) {
    commit("SET_USER_CATEGORIES", response.data.data);
    commit("SET_LOADING", false);
}
function setAllCategories(commit, response) {
    commit("SET_ALL_CATEGORIES", response.data.data);
    commit("SET_LOADING", false);
}
function setSelectedCategory(commit,response){
    commit("SET_SELECTED_CATEGORY", response.data.data);
    commit("SET_LOADING", false);
}
export const state = {
    user_categories: [],
    initial_selected_categories: [],
    all_categories: [],
    selected_category:null,
    loading: false,
    error: null,
};

export const mutations = {

    SET_USER_CATEGORIES(state, categories) {
        state.user_categories = categories;
    },
    SET_ALL_CATEGORIES(state, categories) {
        state.all_categories = categories;
    },
    SET_SELECTED_CATEGORY(state, category) {
        state.selected_category = category;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    getUserCategories({ commit }) {
        commit("SET_LOADING", true);
        CategoryService.getUserCategories()
            .then((response) => {
                setUserCategories(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    }
    , getAllCategories({ commit }) {
        commit("SET_LOADING", true);
        CategoryService.getAllCategories()
            .then((response) => {
                setAllCategories(commit, response);
            })
            .catch((error) => {
                commit("SET_LOADING", false);
                commit("SET_ERROR", getError(error));
            });

    },
    getCategory({ commit },categoryId) {
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
    setError({ commit },message) {
        commit("SET_ERROR",message)
    }
};

export const getters = {
    user_categories: (state) => {
        return state.user_categories;
    },
    all_categories: (state) => {
        return state.all_categories;
    },
    selected_category: (state) => {
        return state.selected_category;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
};
