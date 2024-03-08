<template>
  <div class="max-w-lg p-5 m-auto">
    <article class="p-5">
      <h1
        class="mb-2 text-3xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500"
      >
        Sorry
      </h1>
      <p class="font-bold">
        The page you're looking for is not here. Click to
      </p>
      <router-link to="/" class="base-link">Click here to go back home</router-link>
    </article>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>
