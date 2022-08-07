<template>
  <div>
    <FlashMessage :error="error" />
    <div class="grid grid-cols-2 gap-2 p-3 auto-rows-fr">
      <div :class="{ 'bg-blue-200': selected_categories.includes(category) }"
        class="p-2 rounded-sm cursor-pointer flex relative items-center max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        v-for="category in all_categories" :key="category.id" @click="toggleClickedCategory(category)">
        <font-awesome-icon v-if="selected_categories.includes(category)" icon="fa-solid fa-check-circle"
          class="text-blue-500 top-1 right-1 absolute" />
        <div class="self-center">{{ category.name }}</div>
      </div>
    </div>

    <button @click="updateUserCategories">Update</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getError } from "@/utils/helpers";
import FlashMessage from "@/components/FlashMessage";
import CategoryService from "@/services/CategoryService";


export default {
  name: "SelectCategoryView",
  components: { FlashMessage },
  computed: {
    ...mapGetters("category", ["loading", "error", "user_categories", "all_categories"]),
    all_and_user_categories() {
      return this.all_categories && this.user_categories;
    }
  },
  data() {
    return {
      selected_categories: []
    }
  },
  watch: {
    all_and_user_categories() {
      console.log("u:", this.user_categories.map(f => f.id));
      console.log("all:", this.all_categories.map(f => f.id));
      this.selected_categories = this.all_categories.filter(category => this.user_categories.map(u => u.id).includes(category.id));
    }
  },
  created() {
    this.$store.dispatch("category/getUserCategories");
    this.$store.dispatch("category/getAllCategories");
  },
  methods: {
    toggleClickedCategory(category) {
      if (this.selected_categories.includes(category)) {
        this.selected_categories = this.selected_categories.filter(c => c !== category)
      } else {
        this.selected_categories.push(category)
      }
    },
    async updateUserCategories() {
      const payload = {
        category_ids: this.selected_categories.map(c => c.id)
      };
      this.error = null;
      try {
        CategoryService.updateCategories(payload)
          .then(() => this.$router.push("/dashboard"))
          .catch((error) => (this.error = getError(error)));
      } catch (error) {
        this.error = getError(error);
      }
    },
  }
};
</script>
