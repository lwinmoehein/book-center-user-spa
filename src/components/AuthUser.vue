<template>
  <div v-if="authUser">
    <ul>
      <li class="mb-1"><span class="font-bold">{{ authUser.name }}</span></li>
      <li><span class="font-bold">{{ authUser.email }}</span></li>
      <hr class="mt-2"/>
      <li v-if="authUser.emailVerified">
       <span >Account Status : </span> <span class="text-green-500 font-bold">Verified</span>
      </li>
      <li v-else class="text-gray-500 mt-5">
         <p class="mb-3">Account Status : <span class="text-black font-bold text-red-500">Unverified</span></p>
         <p>
          We've sent you an verification link via email.Please click and verify account.
         </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AuthUser",
  components: {
    
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
