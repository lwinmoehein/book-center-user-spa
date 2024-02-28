<template>
  <div class="p-5 xl:px-0">

    <div class="p-3 mb-3  top-0 left-0">
            <p class="font-bold text-blue-800 text-xl mb-2">Settings</p>
            <hr />
        </div>
    <div class="grid grid-cols-1 gap-10 lg:justify-items-center">
      <AuthUser class="p-5 border rounded " />
      <AuthUserForm class="p-5  border rounded " />
      <UpdatePassword class="p-5  border rounded " />
      <Logout/>
    </div>
  </div>
</template>

<script>
import AuthUser from "@/components/AuthUser";
import AuthUserForm from "@/components/AuthUserForm";
import UpdatePassword from "@/components/UpdatePassword";
import Logout from "@/components/Logout";

export default {
  name: "UserView",
  components: {
    AuthUser,
    AuthUserForm,
    UpdatePassword,
    Logout
  },
  methods: {
    updateUser() {
      this.$store.dispatch("auth/getAuthUser");
    },
  },
};
</script>
