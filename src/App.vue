<template>
  <div id="app">
    <main class="container mx-auto mb-20">
      <router-view />
    </main>
    <Header v-if="isLoggedIn" />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "app",
  components: {
    Header,
  },
  computed: {
    isLoggedIn() {
      return this.$route.name != "login" && this.$route.name != "register";
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,700");

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
</style>
