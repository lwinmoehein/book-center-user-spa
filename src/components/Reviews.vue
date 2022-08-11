<template>
    <div>
        <ReviewInput :reviewText="reviewText" @on-review-input-clicked="postReview"/>
        <div class="flex flex-col">
            <Review v-for="review in book.reviews" :review="review" :key="'r'+review.id"/>
        </div>
    </div>
</template>

<script>
import Review from "@/components/Review";
import ReviewInput from "./ReviewInput";

export default {
    name: "Reviews",
    components:{ Review, ReviewInput },
    props: [
        "book"
    ],
    data() {
        return {
            reviewText:""
        }
    },
    methods: {
        postReview(review){
             review.book_id = this.book.id;

             this.$store.dispatch("bookDetail/postReview",review );
        }
    },
};
</script>
