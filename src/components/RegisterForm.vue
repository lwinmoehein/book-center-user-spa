<template>
  <form @submit.prevent="registerUser">
    <BaseInput
      type="text"
      label="Name"
      name="name"
      v-model="name"
      placeholder="John Doe"
      class="mb-2"
    />
    <BaseInput
      type="email"
      label="Email"
      name="email"
      v-model="email"
      placeholder="john@gmail.com"
      class="mb-2"
    />
    <BaseInput
      type="password"
      label="Password"
      name="password"
      v-model="password"
      class="mb-2"
    />
    <BaseInput
      type="password"
      label="Confirm Password"
      name="password-confirm"
      v-model="passwordConfirm"
      class="mb-4"
    />
    <BaseBtn class="w-full" type="submit" text="Register" />
    <FlashMessage :error="error" />
  </form>
</template>

<script>
import { getError } from "@/utils/helpers";
import BaseBtn from "@/components/BaseBtn";
import BaseInput from "@/components/BaseInput";
import AuthService from "@/services/AuthService";
import FlashMessage from "@/components/FlashMessage";

export default {
  name: "RegisterForm",
  components: {
    BaseBtn,
    BaseInput,
    FlashMessage,
  },
  data() {
    return {
      name: null,
      email: null,
      password: null,
      passwordConfirm: null,
      error: null,
    };
  },
  methods: {
    registerUser() {
      this.error = null;
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirm,
      };
      AuthService.registerUser(payload)
        .then(() => this.$router.push("/verification-notice"))
        .catch((error) => (this.error = getError(error)));
    },
  },
};
</script>
