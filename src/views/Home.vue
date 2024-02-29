<template>
  <div class="max-w-lg p-2 m-auto">
    <article class="p-3">
      <h1
        class="mb-2 text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
        Welcome from Tech Books Center...
        <pre>{{authUser}}</pre>
      </h1>
      <div class="mb-5"></div>
      <p class="font-bold">
        Login from
        <router-link to="/login" class="base-link">here</router-link>.
      </p>
    </article>

  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  computed:{
    ...mapGetters("auth", ["authUser", "isAdmin"])
  },
  created(){
    if(this.authUser){
      this.$router.push('')
    }
  }
};
</script>
