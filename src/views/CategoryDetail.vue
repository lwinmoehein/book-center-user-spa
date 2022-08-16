<template>
    <div>
        <transition name="fade" mode="out-in" v-if="!loading">
            <div class="p-5">
                <div class="flex mb-5">
                    <font-awesome-icon @click="goBack" icon="fa-solid fa-arrow-left" class="font-bold text-xl mr-3" />
                    <div> {{ selected_category.name }} </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <Book @on-book-clicked="onBookClicked" class="h-full" v-for="book in selected_category.books"
                        :key="book.id" :book="book"></Book>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <FlashMessage :error="error" v-if="error" key="error" />
        </transition>
        <Loading :isLoading="loading" />

    </div>
</template>

<script>

import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import Book from '@/components/Book';
import Loading from "@/components/Loading";


export default {
    name: "CategoryDetail",
    components: { FlashMessage, Book, Loading },
    computed: {
        ...mapGetters(
            "category", [
            "loading", "error",
            "selected_category",
        ])
    },
    created() {
        this.$store.dispatch("category/getCategory", this.$route.params.id);

    },
    watch: {

    },
    methods: {
        goBack() {
            this.$router.replace({ path: '/category' });
        },
        onBookClicked(book) {
            this.$router.push({
                name: "category-book-detail",
                params: { id: book.id }
            });
        }
    }

};
</script>
