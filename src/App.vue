<template>
  <div id="app">
    <main v-if="isLoggedIn" class="container md:ml-52  md:w-auto md:h-full">
      <router-view />
    </main>
    <main v-else class="container  md:w-auto md:h-full">
      <router-view />
    </main>
    <Menu class="md:w-52" v-if="isLoggedIn" :authUser="authUser"/>
  </div>
</template>

<script>
import Menu from "@/components/Menu";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Menu,
  },
  computed: {
    isLoggedIn() {
      return this.$route.name != "login" && this.$route.name != "register";
    },
    ...mapGetters(
      'auth',['authUser']
    )
  },
  methods:{
    async getAuthInfoAndReroute() {
      const authUser = await this.$store.dispatch("auth/getAuthUser");
      if (authUser) {
        if (authUser.categories_count == 0) {
          console.log("updating");
          this.$router.push("/update-category");
        }
      } else {
        const error = Error(
          "Unable to fetch user after login, check your API settings."
        );
        error.name = "Fetch User";
        throw error;
      }
    },
  },
  mounted(){
    this.getAuthInfoAndReroute()
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
