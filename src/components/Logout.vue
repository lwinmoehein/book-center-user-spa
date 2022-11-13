<template>
  <button type="button" @click="logout"
    class="
    lg:w-1/2
    text-white
     bg-red-700
      hover:bg-red-800
       focus:outline-none focus:ring-4
        focus:ring-red-300 font-medium 
        rounded-md  font-bold text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
    LogOut
  </button>
</template>

<script>
export default {
  name: "Logout",
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
    },
  },
};
</script>
