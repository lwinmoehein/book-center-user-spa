<template>
  <div class="max-w-sm p-5 m-auto">
    <h2 class="mb-4 text-xl font-bold text-center">Login</h2>
    <LoginForm class="p-5 bg-white border rounded shadow" />
    <div class="mt-5 flex flex-col items-center">
      <p class="text-xs mb-5">Don't have an account?</p>
      <div class="flex justify-center w-full border-blue-500 border rounded-sm">
        <router-link to="/register" class="base-link text-sm py-1">Click Here To Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";

export default {
  name: "LoginView",
  components: {
    LoginForm,
  },
};
</script>
