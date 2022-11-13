<template>
    <div>
        <Loading :isLoading="want_to_read_loading" />

        <div class="p-3 mb-3 sticky top-0 left-0 bg-white">
            <p class="font-bold text-blue-800 text-xl mb-2">Want to Reads</p>
            <hr />
        </div>
        <div class="flex w-full h-full p-2">

            <FlashMessage :error="want_to_read_error" :message="message" />

            <transition name="fade" mode="out-in">
                <div v-if="want_to_reads.length > 0"
                    class="flex flex-col gap-3 w-full h-full lg:w-2/4 md:flex-row md:flex-wrap lg:justify-items-center" @scroll="onScroll"
                    ref="wantToReadPagination">
                    <HorizontalBook @on-book-remove-clicked="removeWantToRead" @on-book-clicked="onBookClicked"
                        class="w-full h-40" v-for="book in want_to_reads" :book="book" :key="book.id" />
                </div>
            </transition>
            <transition name="fade">
                <FlashMessage :error="want_to_read_error" v-if="want_to_read_error" key="want_to_read_error" />
            </transition>
            <div v-if="!want_to_read_loading && want_to_reads.length <= 0"
                class="w-full h-full flex flex-col items-center justify-center mt-60 font-semibold">
                <div>Please add some of your favorite books</div>
                <div>To enjoy them later :)</div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import Loading from "@/components/Loading";
import HorizontalBook from "@/components/HorizontalBook";
import WantToReadService from "../services/WantToReadService";

export default {
    name: "WantToReadView",
    components: { FlashMessage, Loading, HorizontalBook },
    data() {
        return {
            isWantToReadsFetching: false,
            message: null
        }
    },
    computed: {
        ...mapGetters(
            "wantToRead", [
            "want_to_reads", "want_to_read_error",
            "want_to_read_loading",
            "meta", "links", "current_page"
        ])
    },
    created() {
        if (this.want_to_reads.length > 0) return;

        this.$store.dispatch("wantToRead/setCurrentPage", 1);
        this.$store.dispatch("wantToRead/clearWantToReads");

        this.getWantToReads();
        window.addEventListener("scroll", () => {
            this.onScroll();
        })
    },
    watch: {
        want_to_read_loading() {
            if (!this.want_to_read_loading)
                this.isWantToReadsFetching = false;
        }
    },
    methods: {
        removeWantToRead(book) {
            this.$store.dispatch("wantToRead/setLoading", true);
            WantToReadService.deleteWantToRead({ book_id: book.id }).then(() => {
                this.message = "Removed book from the list";
                this.$store.dispatch("wantToRead/removeWantToRead", { book_id: book.id });
                this.$store.dispatch("wantToRead/setLoading", false);
                this.$store.dispatch("wantToRead/setMessage", "Removed from want to read list.");

            }).catch(() => {
                this.$store.dispatch("wantToRead/setLoading", false);
            });
        },
        getWantToReads() {
            this.$store.dispatch("wantToRead/getWantToReads", { page: this.current_page });
        },
        onScroll() {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;

            if ((windowRelativeBottom > document.documentElement.clientHeight + 100) || this.isWantToReadsFetching) return;

            if (this.current_page >= this.meta.last_page) {
                return;
            }

            this.$store.dispatch("wantToRead/setCurrentPage", this.current_page + 1);

            this.isWantToReadsFetching = true;

            this.getWantToReads();
        },

        onBookClicked(book) {
            this.$router.push({
                name: "want-to-read-book-detail",
                params: { id: book.id }
            });
        }
    }

};
</script>
