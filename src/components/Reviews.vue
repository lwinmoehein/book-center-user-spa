<template>
    <div>
        <div class="font-semibold mt-5 mb-2">Reviews:</div>
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
        postReview(reviewText){
             let review  = {
                book_id:this.book.id,
                star:4,
                body:reviewText
             };
             this.$store.dispatch("bookDetail/postReview",review );
        }
    },
};
</script>
