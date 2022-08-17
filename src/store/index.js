import Vue from "vue";
import Vuex from "vuex";

import * as auth from "@/store/modules/Auth";
import * as user from "@/store/modules/User";
import * as message from "@/store/modules/Message";
import * as book from "@/store/modules/Book";
import * as category from "@/store/modules/Category";
import * as language from "@/store/modules/Language";
import * as bookDetail from "@/store/modules/BookDetail";
import * as wantToRead from "@/store/modules/WantToRead";
import * as categoryDetail from "@/store/modules/CategoryDetail";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,

  modules: {
    auth,
    user,
    message,
    book,
    category,
    language,
    bookDetail,
    wantToRead,
    categoryDetail
  },
});
