<template>
    <div class="flex w-full">
        <transition name="fade" mode="out-in">
            <div v-if="want_to_reads.length > 0">
                <div class="flex flex-col overflow-scroll gap-3 w-full">
                        <HorizontalBook class="w-full h-40" v-for="book in want_to_reads" :book="book" :key="book.id">
                            <template v-slot:buttons>
                                <button @click="removeWantToRead(book)"
                                    class="pl-2 pr-2 pt-1 pb-1  text-white bg-blue-400">
                                    <span class="mr-2">Remove</span>
                                    <font-awesome-icon icon="fa-solid fa-trash-can" class="text-red-500" />
                                </button>
                            </template>
                        </HorizontalBook>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <FlashMessage :error="want_to_read_error" v-if="want_to_read_error" key="want_to_read_error" />
        </transition>
        <Loading :isLoading="want_to_read_loading" />
        <div v-if="!want_to_read_loading && want_to_reads.length <= 0"
            class="w-full h-full flex flex-col items-center justify-center mt-60 font-semibold">
            <div>Please add some of your favorite books</div>
            <div>To enjoy them later :)</div>
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

    computed: {
        ...mapGetters(
            "wantToRead", [
            "want_to_reads", "want_to_read_error",
            "want_to_read_loading",
            "meta","links","currentPage"
        ])
    },
    created() {
        this.getWantToReads();
    },
    watch: {

    },
    methods: {
        removeWantToRead(book) {
            WantToReadService.deleteWantToRead({ book_id: book.id }).then(this.getWantToReads())
        },
        getWantToReads() {
            this.$store.dispatch("wantToRead/getWantToReads");
        }
    }

};
</script>
