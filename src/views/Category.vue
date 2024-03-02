<template>
    <div class="h-full">
        <Loading :isLoading="loading"/>

        <div class="p-3 mb-3">
            <p class="font-bold text-blue-800 text-xl mb-2">Available Categories </p>
            <hr/>
            </div>
        <transition name="fade" mode="out-in">
            <div class="grid grid-cols-2 gap-3 auto-rows-fr p-2">

                <div class="p-3 md:h-24 flex justify-center items-center box-decoration-slice bg-gradient-to-r from-blue-400 to-green-500 text-white cursor-pointer"
                    @click="onCategoryClicked(category)" v-for="category in all_categories" :key="category.id">
                    <span class="font-extrabold">{{ category.name }}</span>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <FlashMessage :error="error" v-if="error" key="error" />
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import Loading from "@/components/Loading";


export default {
    name: "Categories",
    components: { FlashMessage, Loading },

    computed: {
        ...mapGetters(
            "category", [
            "loading", "error",
            "all_categories",
        ])
    },
    created() {
        this.$store.dispatch("category/getAllCategories");
    },
    watch: {

    },
    methods: {
        onCategoryClicked(category) {
            this.$router.push({
                name: "category-detail",
                params: { id: category.id }
            });
        }
    }

};
</script>
