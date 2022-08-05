<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage message="loading..." v-if="loading && !books.length" key="loading" />
      <div class="flex flex-col" v-else>
        <div v-for="book in books" :key="book.id" class="h-48 pr-2 mb-2 flex  bg-white rounded-xl shadow-lg">
          <img class="block w-32 min-h-full object-cover rounded-l-xl" src="https://source.unsplash.com/random"
            alt="Woman's Face">
          <div class="pt-2 pb-2 pl-2 text-center sm:text-left">
            <div class="space-y-0.5">
              <p class="text-sm text-black font-semibold">
                {{ book.title.substring(0, 50) + ".." }}
              </p>
              <span class="text-sm font-light">Categories : 
              <span v-for="(category,index) in book.categories" :key="category.id" class="text-sm text-purple-600 font-extra-light">
                {{category.name}} {{index==book.categories.length-1? "":","}}
              </span>
              </span>
    
            </div>

          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <FlashMessage :error="error" v-if="error" key="error" />
    </transition>
    <transition name="fade">
      <BasePagination :meta="meta" :links="links" action="book/paginateBooks" v-if="meta && meta.last_page > 1" />
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
    ...mapGetters("book", ["loading", "error", "books", "meta", "links"]),
  },
  created() {
    const currentPage = 1;
    this.$store.dispatch("book/getBooks", currentPage);
  },
};
</script>
