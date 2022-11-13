<template>
    <div class="w-full h-full">
        <Loading :isLoading="loading" />

        <transition name="fade" mode="out-in" v-if="!loading">
            <div class="p-5">
                <div class="flex mb-5">
                    <font-awesome-icon @click="goBack" icon="fa-solid fa-arrow-left" class="font-bold text-xl mr-3" />
                    <div> {{ category.name }} </div>
                </div>
                <div class="grid gap-2 grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
                    <Book @on-book-clicked="onBookClicked" class="h-64 md:h-96" v-for="book in books" :key="book.id"
                        :book="book"></Book>
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
import Book from '@/components/Book';
import Loading from "@/components/Loading";


export default {
    name: "CategoryDetail",
    components: { FlashMessage, Book, Loading },
    computed: {
        ...mapGetters(
            "categoryDetail", [
            "loading", "error",
            "category", "books",
            "books_meta", "books_links",
            "message", "current_page"
        ])
    },
    data() {
        return {
            isBooksFetching: false
        }
    },
    created() {
        if(this.books.length>0) return;
        this.$store.dispatch("categoryDetail/getCategory", this.$route.params.id);

        this.getBooks();
        window.addEventListener("scroll", () => {
            this.onScroll();
        })
    },
    watch: {
        loading() {
            if (!this.loading)
                this.isBooksFetching = false;
        }
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
        },
        getBooks() {
            this.$store.dispatch("categoryDetail/getCategoryBooks", { page: this.current_page, category_id: this.$route.params.id });
        },
        onScroll() {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

            if ((windowRelativeBottom > document.documentElement.clientHeight + 100) || this.isBooksFetching) return;

            if (this.current_page >= this.books_meta.last_page) {
                return;
            }

            this.$store.dispatch("categoryDetail/setCurrentPage", this.current_page + 1);

            this.isBooksFetching = true;

            this.getBooks();
        },
    }

};
</script>
