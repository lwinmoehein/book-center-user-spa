<template>
  <div>
        <Books />
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
