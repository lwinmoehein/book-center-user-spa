<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage message="loading..." v-if="loading && !isTopBooksFetching && !books.length" key="loading" />
      <div>
        <div class="flex flex-nowrap text-center overflow-scroll sticky top-0 bg-white">
          <div @click="onLanguageTabClicked(language)" v-for="language in all_languages" :key="language.id"
            class="border-b-2 border-blue-400 pt-3 pb-3 w-32 flex-none cursor-pointer">
            <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 text-white px-2 ...">
              {{ language.name }}
            </span>
          </div>

        </div>

        <div class="p-3">
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">Popular Books</div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>

          <div class="flex flex-row overflow-scroll h-48 gap-3 bg-scroll scrollbar-hide"
            :class="{ 'animate-pulse': isTopBooksFetching }" ref="topBookScroller" @scroll="onPopularBooksScroll">
            <Book class="w-24" v-for="book in books" :key="book.id" :book="book"></Book>
            <div class="pr-6 pl-6 flex items-center justify-center">
              <div class="mb-10 text-blue-500" v-if="this.currentPage == meta.last_page">
                No More Books
              </div>
            </div>
          </div>


        </div>
        <div class="p-3">
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">
              Recommended Books
            </div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
          <div class="flex flex-row overflow-scroll h-48 gap-3 bg-scroll scrollbar-hide"
            :class="{ 'animate-pulse': isRecommendedBooksFetching }" ref="recommendedBookScroller"
            @scroll="onRecommendedBooksScroll">
            <Book class="w-24" v-for="book in recommended_books" :key="book.id" :book="book"></Book>
              <div class="pr-6 pl-6 flex items-center justify-center">
              <div class="mb-10 text-blue-500" v-if="this.currentRecommendedPage == recommended_meta.last_page">
                No More Books
              </div>
            </div>
          </div>
        </div>

      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";

import Book from '@/components/Book';


export default {
  name: "Books",
  components: { FlashMessage, Book },
  data() {
    return {
      selectedLanguages: new Set([1]),
      currentPage: 1,
      currentRecommendedPage: 1,
      isTopBooksFetching: false,
      isRecommendedBooksFetching: false

    }
  },
  computed: {
    ...mapGetters(
      "book", [
      "loading", "error",
      "books", "meta", "links",
      "recommended_books", "recommended_meta", "recommended_links"
    ]),
    ...mapGetters("language", ["all_languages"])
  },
  created() {
    this.$store.dispatch("language/getLanguages");
    this.updateTopBooks();
    this.updateRecommendedBooks();
  },
  watch: {
    recommended_books() {
      if (this.recommended_books.length <= 0) {
        this.$router.push("/update-category");

      }
    },
    loading() {
      this.isTopBooksFetching = this.isRecommendedBooksFetching = this.loading;
    }
  },
  methods: {
    onLanguageTabClicked(language) {
      this.selectedLanguages.clear();
      this.selectedLanguages.add(language.id);
      this.updateTopBooks();
      this.updateRecommendedBooks();
    },
    updateTopBooks() {
      this.$store.dispatch("book/getBooks", { page: this.currentPage, languages: Array.from(this.selectedLanguages) });

    },
    updateRecommendedBooks() {
      this.$store.dispatch("book/getRecommendedBooks", { page: this.currentRecommendedPage, languages: Array.from(this.selectedLanguages) });

    },
    onPopularBooksScroll() {
      if (this.isTopBooksFetching) {
        return;
      };
      let topBooksScroller = this.$refs.topBookScroller;
      if (topBooksScroller.scrollWidth - 30 <= (topBooksScroller.scrollLeft + topBooksScroller.offsetWidth)) {

        if (this.currentPage >= this.meta.last_page) {
          return;
        }
        this.currentPage = this.currentPage + 1;

        this.isTopBooksFetching = true;
        this.updateTopBooks();
      }

    },
    onRecommendedBooksScroll() {
      if (this.isRecommendedBooksFetching) {
        return;
      };
      let recommendedBooksScroller = this.$refs.recommendedBookScroller;
      if (recommendedBooksScroller.scrollWidth - 30 <= (recommendedBooksScroller.scrollLeft + recommendedBooksScroller.offsetWidth)) {

        if (this.currentRecommendedPage >= this.recommended_meta.last_page) {
          return;
        }
        this.currentRecommendedPage = this.currentRecommendedPage + 1;

        this.isRecommendedBooksFetching = true;
        this.updateRecommendedBooks();
      }

    }
  }

};
</script>
