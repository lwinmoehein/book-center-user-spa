<template>
  <div class="p-0 xl:px-0">
    <div class="max-w-xl m-auto">
      <article class="p-2 bg-white rounded shadow">
        <Books />
      </article>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Books from "@/components/Books";

export default {
  name: "Dashboard",
  components: {
    Books,
  },
  computed: {
    ...mapGetters("auth", ["authUser"]),
  },
};
</script>
