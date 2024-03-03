<template>

  <div class="h-full">
    <Loading v-if="loading && !(books.length > 0 || recommended_books.length > 0)" :isLoading="true" />
    <transition v-else name="fade" mode="out-in">
      <div class="p-2">
        <div class="p-3 mb-3 top-0 left-0">
          <p class="font-bold text-blue-800 text-xl mb-2">Home</p>
          <hr />
        </div>
        <div class="">
          <div
            class="flex flex-nowrap text-center overflow-scroll top-0 md:relative gap-5 border-gray-300 scrollbar-hide"
          >
            <div @click="onLanguageTabClicked(language)" v-for="language in all_languages" :key="language.id"
              class="focus-within:pt-3 flex-grow w-20 flex-none cursor-pointer flex justify-center">
              <div class="border-b-2 pl-2 pr-2 font-bold"
                :class="{ 'border-blue-400 text-blue-600': current_tab == language.id }">
                {{ language.name }}
              </div>
            </div>

          </div>

          <div class="p-3 md:flex-col md:items-center w-full">
            <div class="flex justify-between mt-5 mb-2">
              <div class="font-bold">Popular Books</div>
            </div>

            <div v-if="books.length > 0"
              class="flex flex-row overflow-scroll h-60 md:h-96 gap-3 md:gap-16 bg-scroll scrollbar-hide"
              :class="{ 'animate-pulse': isTopBooksFetching }" ref="topBookScroller" @scroll="onPopularBooksScroll">
              <Book class="w-24 md:w-48" v-for="book in books" :key="book.id" :book="book"
                @on-book-clicked="onBookClicked(book)">
              </Book>
            </div>
            <div v-if="!loading && books.length <= 0" class="h-52 flex justify-center items-center">
              <div class="text-blue-500">
                No Books Found!
              </div>
            </div>


          </div>
          <div class="p-3">
            <div class="flex justify-between mt-5 mb-2">
              <div class="font-bold">
                Recommended Books
              </div>
            </div>
            <div v-if="recommended_books.length > 0"
              class="flex flex-row overflow-scroll h-60  md:h-96 gap-3  md:gap-16 bg-scroll scrollbar-hide"
              :class="{ 'animate-pulse': isRecommendedBooksFetching }" ref="recommendedBookScroller"
              @scroll="onRecommendedBooksScroll">
              <Book class="w-24 md:w-48 " v-for="book in recommended_books" :key="'rec' + book.id" :book="book"
                @on-book-clicked="onBookClicked(book)"></Book>
            </div>
            <div v-if="!loading && recommended_books.length <= 0" class="h-52 flex justify-center items-center">
              <div class="text-blue-500">
                No Books Found!
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

import Book from '@/components/Book';
import Loading from '@/components/Loading';


export default {
  name: "Books",
  components: { Book, Loading },
  data() {
    return {
      isTopBooksFetching: false,
      isRecommendedBooksFetching: false,
    }
  },
  computed: {
    ...mapGetters(
      "book", [
      "loading", "error",
      "books", "meta", "links",
      "current_top_page", "current_recommended_page", "current_tab",
      "recommended_books", "recommended_meta", "recommended_links"
    ]),
    ...mapGetters("language", ["all_languages"]),
    ...mapGetters("auth", ["authUser"])

  },
  created() {
    if (this.books.length > 0) return;
    this.$store.dispatch("language/getLanguages");
    this.updateTopBooks();
    this.updateRecommendedBooks();
  },
  watch: {
    loading() {
      if (!this.loading)
        this.isTopBooksFetching = this.isRecommendedBooksFetching = false;
    }
  },
  methods: {
    onLanguageTabClicked(language) {
      this.$store.dispatch("book/setCurrentTab", language.id);
      this.$store.dispatch("book/setCurrentTopPage", 1);
      this.$store.dispatch("book/setCurrentRecommendedPage", 1);


      this.updateTopBooks(false);
      this.updateRecommendedBooks(false);
    },
    updateTopBooks(isPaginated = true) {
      this.$store.dispatch("book/getBooks", { page: this.current_top_page, languages: [this.current_tab], isPaginated: isPaginated });
    },
    updateRecommendedBooks(isPaginated = true) {
      this.$store.dispatch("book/getRecommendedBooks", { page: this.current_recommended_page, languages: [this.current_tab], isPaginated: isPaginated });

    },
    onPopularBooksScroll() {
      if (this.isTopBooksFetching) {
        return;
      };
      let topBooksScroller = this.$refs.topBookScroller;
      if (topBooksScroller.scrollWidth - 30 <= (topBooksScroller.scrollLeft + topBooksScroller.offsetWidth)) {

        if (this.current_top_page >= this.meta.last_page) {
          return;
        }
        this.$store.dispatch("book/setCurrentTopPage", this.current_top_page + 1)

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

        if (this.current_recommended_page >= this.recommended_meta.last_page) {
          return;
        }
        this.$store.dispatch("book/setCurrentRecommendedPage", this.current_recommended_page + 1)

        this.isRecommendedBooksFetching = true;
        this.updateRecommendedBooks();
      }

    },
    onBookClicked(book) {
      this.$router.push({
        name: "book-detail",
        params: { id: book.id }
      });
    }
  }
};
</script>
