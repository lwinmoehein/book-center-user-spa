<template>
    <div>
        <transition name="fade" mode="out-in">
            <FlashMessage message="loading..." v-if="loading && book == null" key="loading" />
            <div v-else class="p-2">
                <div class="flex mb-5">
                    <font-awesome-icon @click="goBack" icon="fa-solid fa-arrow-left" class="font-bold text-xl mr-3" />
                    <div> {{ book.title.substring(0, 30) }} </div>
                </div>
                <div>{{ book.title }}</div>
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


export default {
    name: "BookDetail",
    components: { FlashMessage },

    computed: {
        ...mapGetters(
            "bookDetail", [
            "loading", "error", "book"
        ])
    },
    created() {
        this.$store.dispatch("bookDetail/getBook", this.$route.params.id);
    },
    watch: {

    },
    methods: {
        goBack() {
            this.$router.replace({ path: '/dashboard' });
        }
    },
    unmounted() {
        this.$store.dispatch("bookDetail/setBookValue", null);
    },

};
</script>
