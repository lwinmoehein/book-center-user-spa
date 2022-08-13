<template>
    <div>
        <div :class="{ 'hidden': isClosed }"
            class="fixed z-50 w-full h-full top-0 left-0 bg-white rounded-md px-8 py-6 space-y-5 drop-shadow-lg">
            <h1 class="text-2xl font-semibold">{{ review ? "Edit review" : "Write a review" }}</h1>
            <div class="py-5 border-t border-b border-gray-300 mb-8">
                <div class="mb-5 mt-3">
                    <div class="text-blue-400 text-sm mb-3 font-semibold">On a scale of 1 to 5 , how much did you liked
                        the book?</div>
                    <div class="flex p-3 gap-5 pl-0">
                        <div v-for="s in 5" :key="s">
                            <font-awesome-icon v-if="s > currentStar" @click="updateStar(s)" icon="fa-regular fa-star"
                                class="flex-1" />
                            <font-awesome-icon v-else @click="updateStar(s)" icon="fa-solid fa-star" class="flex-1" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="mb-3 text-sm text-blue-400 font-semibold">How you liked the book?</div>
                    <textarea class="w-full border-blue-500" v-model="currentReviewText" />
                </div>
            </div>
            <div class="flex justify-end gap-4">
                <!-- This button is used to close the dialog -->
                <button @click.stop="onCancelButtonClicked"
                    class="px-5 py-2 bg-gray-500 hover:bg-gray-700 text-white cursor-pointer rounded-md">
                    Cancel</button>
                <button @click.stop="onConfirmButtonClicked"
                    class="px-7 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md">
                    {{ review ? "Edit Review" : "Post Review" }} Review</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ReviewDialog",
    props: {
        review: {
            type: Object,
            default: null,
        },
        isClosed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            currentReviewText: "",
            currentStar: 0,
        }
    },
    mounted() {
        if (this.review) {
            this.currentReviewText = this.review.body;
            this.currentStar = this.review.star;
        }
    },
    methods: {
        onConfirmButtonClicked() {
            let review = {
                star: this.currentStar > 0 ? this.currentStar : null,
                body: this.currentReviewText
            }
            this.$emit('on-review-confirm', review);
            this.currentReviewText = "";
            this.currentStar = 0;
        },
        onCancelButtonClicked() {
            this.$emit('on-dialog-close');
        },
        updateStar(s) {
            this.currentStar = s;
        }
    },
};
</script>
