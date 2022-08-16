<template>
    <div>

        <transition name="fade" mode="out-in">
            <div v-if="want_to_reads.length>0">
                <div class="flex flex-col overflow-scroll gap-3">
                    <Book class="w-full h-60" v-for="book in want_to_reads" :book="book" :key="book.id"/>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <FlashMessage :error="want_to_read_error" v-if="want_to_read_error" key="want_to_read_error" />
        </transition>
        <Loading :isLoading="want_to_read_loading"/>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import FlashMessage from "@/components/FlashMessage";
import Loading from "@/components/Loading";
import Book from "@/components/Book";


export default {
    name: "WantToReadView",
    components: { FlashMessage, Loading ,Book},

    computed: {
        ...mapGetters(
            "wantToRead", [
            "want_to_reads", "want_to_read_error",
            "want_to_read_loading",
        ])
    },
    created() {
        this.$store.dispatch("wantToRead/getWantToReads");
    },
    watch: {

    },
    methods: {
       
    }

};
</script>
