<template>
  <div class="flex justify-center px-10 w-full md:w-1/2">
    <button type="button" @click="logout"
            class="
            flex items-center justify-center gap-3
    w-1/2
    text-white
     bg-red-500
        rounded-sm  font-bold text-sm px-5 py-1 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
      <span>Log Out</span>
      <font-awesome-icon icon="fa-solid fa-sign-out" />
    </button>
  </div>
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
