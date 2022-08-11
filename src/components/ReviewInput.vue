<template>
    <div class="flex">
        <input type="text" v-model="currentReviewText">
        <button @click="onPostButtonClicked">Post Review</button>
    </div>
</template>

<script>

export default {
    name: "ReviewInput",
    props: {
        reviewText: {
            type: String,
            default: "",
        },
    },
    data() {
        return {
            currentReviewText: ""
        }
    },
    mounted() {
        this.currentReviewText = this.reviewText
    },
    methods: {
        onPostButtonClicked(){
            this.$emit('on-review-input-clicked',this.currentReviewText);
            this.currentReviewText = "";
        }
    },
};
</script>
