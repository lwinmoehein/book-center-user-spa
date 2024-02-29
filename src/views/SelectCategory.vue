<template>
  <div>
    <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-2 mx-2 py-3 shadow-md" role="alert">
      <div class="flex">
        <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path
              d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg></div>
        <div>
          <p class="font-bold">Please select at least three book categories.</p>
          <p class="text-sm">It will be used to recommend you books based on your selected book categories.</p>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-2 p-3 auto-rows-fr">
      <div :class="{ 'bg-blue-200 text-blue-500': selected_categories.includes(category) }"
        class="p-2 rounded-sm cursor-pointer flex relative items-center max-w-sm bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        v-for="category in all_categories" :key="category.id" @click="toggleClickedCategory(category)">
        <font-awesome-icon v-if="selected_categories.includes(category)" icon="fa-solid fa-check-circle"
          class="text-blue-500 top-1 right-1 absolute" />
        <div class="self-center">{{ category.name }}</div>
      </div>
    </div>
    <div class="p-3">
      <FlashMessage :error="error" />
    </div>
    <div class="flex p-3 justify-end" v-if="!loading">
      <button @click="updateUserCategories" class="bg-blue-500 rounded-sm text-white p-1 pr-5 pl-5">Confirm</button>
    </div>

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
      selected_categories: [],
    }
  },
  watch: {
    all_and_user_categories() {
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

      if (this.selected_categories.length <= 2) {
        this.$store.dispatch("category/setError", "Please selecte at least one category.");
        return;
      }
      const payload = {
        category_ids: this.selected_categories.map(c => c.id)
      };
      this.error = null;
      try {
        CategoryService.updateCategories(payload)
          .then(() => this.$router.push("/"))
          .catch((error) => (this.error = getError(error)));
      } catch (error) {
        this.error = getError(error);
      }
    }
  }
};
</script>
