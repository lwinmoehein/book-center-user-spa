<template>
    <div>
        <transition name="fade" mode="out-in">
            <div v-if="!loading && book != null" class="p-2">
                <div class="flex mb-5">
                    <font-awesome-icon @click="goBack" icon="fa-solid fa-arrow-left" class="font-bold text-xl mr-3" />
                    <div> {{ book.title.substring(0, 30) }} </div>
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
                    </div>
                </div>
                <div class="p-3">
                    <p>
                        {{ book.description }}
                    </p>
                    <div class="font-semibold mt-5 mb-2">Categories:</div>
                    <div class="flex flex-nowrap text-center overflow-scroll bg-white  gap-5 scrollbar-hide">
                        <div class="bg-blue-400 pl-1 pr-1 flex-none rounded-md text-white" v-for="category in book.categories" :key="category.id">{{ category.name }}</div>
                    </div>
                </div>
                <div class="p-3">
                    <Reviews :book="book"/>
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
import Reviews from "@/components/Reviews";


export default {
    name: "BookDetail",
    components: { FlashMessage, Reviews },

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
