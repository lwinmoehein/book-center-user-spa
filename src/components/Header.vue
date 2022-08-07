<template>
  <header class="p-5 text-white bg-blue-400 bottom-0 fixed left-0 right-0">
    <nav class="container flex items-center mx-auto">
      <div class="flex-1 flex  justify-center">
        <router-link to="/dashboard" class="flex justify-center items-center" :class="{'text-green-700':currentRoute=='dashboard'}">
          <font-awesome-icon icon="fa-solid fa-house" class="text-lg self-center" />
          <p class="ml-1">Home</p>
        </router-link>
      </div>
      <div class="flex-1 flex  justify-center">

        <router-link to="/category" class="flex justify-center items-center" :class="{'text-green-700':isCategories}">
          <font-awesome-icon icon="fa-solid fa-book" class="text-lg" />
          <p class="ml-1">Categories</p>

        </router-link>
      </div>
      <div class="flex-1 flex  justify-center">

        <router-link to="/user" class="flex justify-center items-center" :class="{'text-green-700':currentRoute=='user'}">
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
    currentRoute(){
      return this.$route.name;
    },
    isCategories(){
      let route = this.$route.name;
      return /^categor.*/.test(route)
    }
  },
};
</script>
