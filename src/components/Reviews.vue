<template>
    <div>
        <ReviewInput @on-review-input-clicked="postReview"/>
        <div class="flex flex-col">
            <Review v-for="review in book.reviews" :review="review" :key="'r'+review.id"/>
            <div class="w-full h-20 flex justify-center items-center" v-if="book.reviews.length<=0">
                <div>No reviews yet.</div>
            </div>
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
            reviewStar:0
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
