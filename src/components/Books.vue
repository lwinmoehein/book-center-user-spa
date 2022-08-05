<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage message="loading..." v-if="loading && !books.length" key="loading" />
      <div>
        <div class="flex flex-nowrap text-center sticky top-0">
          <div class="flex-1 border-b-2 border-blue-400 pt-3 pb-3">
            <span class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-green-500 text-white px-2 ...">
              Myanmar
              Books
            </span>
          </div>
          <div class="flex-1 pt-3 pb-3"><span
              class="box-decoration-slice bg-gradient-to-r from-indigo-600 to-red-500 text-white px-2 ...">
              English
              Books
            </span></div>
        </div>
        <div class="p-3">
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">Popular Books</div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
          <div class="flex flex-row overflow-scroll h-52 gap-3 bg-scroll">
            <div class="flex flex-none  flex-col h-full w-24 overflow-hidden" v-for="book in books" :key="book.id">
              <img class="h-2/3 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
              <div>{{ book.title.substring(0, 30) }}</div>
              <div>{{ book.price }}</div>
            </div>
          </div>
        </div>
        <div class="p-3">
          <transition name="fade">
            <BasePagination :meta="meta" :links="links" action="book/paginateBooks" v-if="meta && meta.last_page > 1" />
          </transition>
          <div class="flex justify-between mt-5 mb-2">
            <div class="font-bold">For You</div>
            <font-awesome-icon icon="fa-solid fa-arrow-right" />
          </div>
          <div class="flex flex-row overflow-scroll h-52 gap-3">
            <div class="flex flex-none  flex-col h-full w-24" v-for="book in recommended_books" :key="book.id">
              <img class="h-2/3 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
              <div>{{ book.title.substring(0, 30) }}</div>
              <div>{{ book.price }}</div>
            </div>
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
import AvatarIcon from "@/components/icons/AvatarIcon";
import BasePagination from "@/components/BasePagination";

export default {
  name: "Books",
  components: { FlashMessage, BasePagination, AvatarIcon },
  computed: {
    ...mapGetters("book", [
      "loading", "error",
      "books", "meta", "links",
      "recommended_books", "recommended_meta", "recommended_links"
    ]),
  },
  created() {
    const currentPage = 1;
    const currentRecommendedPage = 1
    this.$store.dispatch("book/getBooks", currentPage);
    this.$store.dispatch("book/getRecommendedBooks", currentRecommendedPage);
  },
};
</script>
