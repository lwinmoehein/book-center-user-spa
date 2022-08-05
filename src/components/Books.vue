<template>
  <div>
    <transition name="fade" mode="out-in">
      <FlashMessage message="loading..." v-if="loading && !books.length" key="loading" />
      <div class="flex flex-col" v-else>
        <div v-for="book in books" :key="book.id" class="flex py-2 space-x-2 border-b">
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div
              class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
               :style="{backgroundimage: book.cover_url}" title="Woman holding a mug">
            </div>
            <div
              class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                 <span class="bg-blue-500  m-2 p-2" v-for="category in book.categories">{{category.name}}</span>
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">{{book.title}}</div>
                <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              </div>
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="/img/jonathan.jpg" alt="Avatar of Jonathan Reinink">
                <div class="text-sm">
                  <p v-for="author in book.authors" class="text-gray-900 leading-none">{{author.name}},</p>
                  <p class="text-gray-600">{{book.published_at}}</p>
                </div>
              </div>
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
