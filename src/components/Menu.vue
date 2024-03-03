<template>
  <header class="p-2 md:p-0 text-gray-100 bg-blue-400 bottom-0 fixed left-0 right-0 md:top-0 md:h-full h-12  items-center" v-if="authUser">
    <div class="justify-center hidden md:flex gap-1 items-center bg-blue-500 py-6">
      <p class="font-bold">Book Center</p>
      <img src="/icon.png" class="w-5 h-5"/>
    </div>

    <nav class="container flex items-center md:p-10 md:items-start mx-auto md:gap-6  md:flex-col">
      <div class="flex-1 flex  justify-center">
        <router-link to="/" class="flex justify-center items-center" :class="{ 'text-white font-bold': isHome }">
          <font-awesome-icon icon="fa-solid fa-house" class="text-lg self-center" />
          <p class="ml-1">Home</p>
        </router-link>
      </div>
      <div class="flex-1 flex  justify-center">

        <router-link to="/category" class="flex justify-center items-center" :class="{ 'text-white font-bold': isCategories }">
          <font-awesome-icon icon="fa-solid fa-list" class="text-lg" />
          <p class="ml-1">Categories</p>
        </router-link>
      </div>
      <div class="flex-1 flex  justify-center">

        <router-link to="/want-to-read" class="flex justify-center items-center" :class="{ 'text-white font-bold': isWantToRead }">
          <font-awesome-icon icon="fa-solid fa-book-bookmark" class="text-lg" />
          <p class="ml-1">Saved</p>

        </router-link>
      </div>
      <div class="flex-1 flex  justify-center">

        <router-link to="/user" class="flex justify-center items-center"
          :class="{ 'text-white font-bold': currentRoute == 'user' }">
          <font-awesome-icon icon="fa-solid fa-gears" class="text-lg" />
          <p class="ml-1">Settings</p>

        </router-link>
      </div>

    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",

  computed: {
    ...mapGetters("auth", ["authUser", "isAdmin"]),
    currentRoute() {
      return this.$route.name;
    },
    isCategories() {
      let route = this.$route.name;
      return /^categor.*/.test(route)
    },
    isHome() {
      let route = this.$route.name;
      return /^book.*|dashboard/.test(route)
    },
    isWantToRead() {
      let route = this.$route.name;
      return /^want.*/.test(route)
    }
  },
};
</script>
