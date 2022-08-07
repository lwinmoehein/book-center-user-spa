<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage message="loading..." v-if="loading && !books.length" key="loading" />
      <div>
        <div class="flex flex-nowrap text-center sticky top-0 bg-white">
          <div v-for="language in all_languages" :key="language.id" class="flex-1 border-b-2 border-blue-400 pt-3 pb-3">
            <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 text-white px-2 ...">
              {{language.name}}
            </span>
          </div>
       
        </div>
        <div class="p-3">
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">Popular Books</div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>

          <div class="flex flex-row overflow-scroll h-52 gap-3 bg-scroll">
            <Book v-for="book in books" :key="book.id" :book="book"></Book>
          </div>
        </div>
        <div class="p-3">
          <transition name="fade">
            <BasePagination :meta="meta" :links="links" action="book/paginateBooks" v-if="meta && meta.last_page > 1" />
          </transition>
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">
              Recommended Books
            </div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
          <div class="flex flex-row overflow-scroll h-52 gap-3">
            <Book v-for="book in recommended_books" :key="book.id" :book="book"></Book>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>

    <transition name="fade">
      <BasePagination :meta="recommended_meta" :links="recommended_links" action="book/paginateRecommendedBooks"
        v-if="recommended_meta && recommended_meta.last_page > 1" />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import BasePagination from "@/components/BasePagination";

import Book from '@/components/Book';

export default {
  name: "Books",
  components: { FlashMessage, BasePagination, Book },
  computed: {
    ...mapGetters(
      "book", [
      "loading", "error",
      "books", "meta", "links",
      "recommended_books", "recommended_meta", "recommended_links"
    ]),
    ...mapGetters("language",["all_languages"])
  },
  created() {
    const currentPage = 1;
    const currentRecommendedPage = 1
    this.$store.dispatch("language/getLanguages");
    this.$store.dispatch("book/getBooks", currentPage);
    this.$store.dispatch("book/getRecommendedBooks", currentRecommendedPage);
  },
  watch: {
    recommended_books() {
      if (this.recommended_books.length <= 0) {
        this.$router.push("/update-category");

      }
    }
  }

};
</script>
