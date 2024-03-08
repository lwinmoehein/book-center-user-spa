<template>
     <div class="max-w-lg p-5 m-auto">
    <article class="p-5">
      <h1
        class="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
      Please verify email.
      </h1>
      <p class="font-bold">
        We've sent a verification link to {{email}}.
        Please click it to activate your account.
          </p>
          <div class="mt-5 flex flex-col md:flex-row gap-5">
            <p>Already clicked the link?</p>
            <router-link to="/login" class="base-link font-bold">Click here to Login</router-link>
          </div>
    </article>
  </div>
</template>

<script>

export default {
    name: "Verification Notice",
    props: [
        "email"
    ]
};
</script>
