<template>
    <div>
        <Loading :isLoading="loading || want_to_read_loading" />
        <FlashMessage :error="error" :message="message" />
        <transition name="fade" mode="out-in">
            <div v-if="!loading && book != null" class="p-2">
                <div class="flex mb-5 p-3">
                    <font-awesome-icon @click="goBack" icon="fa-solid fa-arrow-left" class="font-bold text-xl mr-3" />
                    <div class="font-semibold"> {{ book.title.substring(0, 30) }} </div>
                </div>
                <div class="flex p-3 flex-row overflow-hidden">
                    <div class="mr-2">
                        <img class="h-48 w-40 rounded-md object-cover flex-none" :src="book.cover_url" alt="">

                    </div>
                    <div class="flex flex-col">
                        <div class="font-semibold">{{ book.title.substring(0, 30) }}</div>
                        <div class="flex flex-wrap gap-1 overflow-hidden">
                            <div class="p-1 text-xs" v-for="author in book.authors" :key="author.id">
                                {{ author.name }}
                            </div>
                        </div>
                        <div class="flex mt-3">
                            <button @click="toggleWantToRead" class="pl-2 pr-2 pt-1 pb-1  text-white"
                                :class="{ 'bg-green-500': isInToRead, 'bg-blue-400': !isInToRead }">
                                <span class="mr-2">Want To Read</span>
                                <font-awesome-icon v-if="isInToRead" icon="fa-solid fa-check" />
                                <font-awesome-icon v-else icon="fa-solid fa-plus" />

                            </button>
                        </div>
                    </div>

                </div>
                <div class="p-3">
                    <p>
                        {{ book.description }}
                    </p>
                    <div class="font-semibold mt-5 mb-2">Categories:</div>
                    <div class="flex flex-nowrap text-center overflow-scroll bg-white  gap-5 scrollbar-hide">
                        <div class="bg-blue-400 pl-1 pr-1 flex-none rounded-md text-white"
                            v-for="category in book.categories" :key="category.id">{{ category.name }}</div>
                    </div>
                </div>
                <div class="p-3">
                    <Reviews :book="book" />
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Reviews from "@/components/Reviews";
import FlashMessage from "@/components/FlashMessage";
import Loading from "@/components/Loading";
import WantToReadService from "../services/WantToReadService";

export default {
    name: "BookDetail",
    components: { Reviews, FlashMessage, Loading },

    computed: {
        ...mapGetters(
            "bookDetail", [
            "loading", "error", "book", "message"
        ]),
        ...mapGetters("wantToRead",
            [
                "want_to_reads",
                "user_want_to_reads",
                "want_to_read_loading",
                "want_to_read_error"
            ]),
        isInToRead() {
            if (this.user_want_to_reads.length <= 0) return false;

            return true;
        }
    },
    created() {
        this.getWantToReads();
        this.$store.dispatch("bookDetail/getBook", this.$route.params.id);
    },
    watch: {

    },
    methods: {
        goBack() {
            this.$router.go(-1);
        },
        toggleWantToRead() {
            if (this.isInToRead) {
                WantToReadService.deleteWantToRead({ book_id: this.book.id }).then(() => {
                    this.getWantToReads();
                    this.$store.dispatch("bookDetail/setMessage","Removed from want to read list.");

                });
            } else {
                WantToReadService.storeWantToRead({ book_id: this.book.id }).then(() => {
                    this.getWantToReads();
                    this.$store.dispatch("bookDetail/setMessage", "Added to want to read list.");
                });
            }

        },
        getWantToReads() {
            this.$store.dispatch("wantToRead/getWantToRead", { book_id: this.$route.params.id });
        }
    },
    unmounted() {
        this.$store.dispatch("bookDetail/setBookValue", null);
    },

};
</script>
