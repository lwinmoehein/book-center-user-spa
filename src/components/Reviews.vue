<template>
    <div class="mt-10">
      <hr class="mb-5"/>
      <div class="flex justify-between items-center">
        <div class="px-2 font-semibold">Reviews</div>
        <ReviewInput v-if="!reviewed_user_ids.includes(authUser.id)" @on-review-input-clicked="postReview" />
      </div>
      <div>
        <div class="flex flex-col">
          <Review v-for="review in book.reviews" @on-review-update="updateReview" @on-review-delete="deleteReview" :review="review"
                  :key="'r' + review.id" />
          <div class="w-full h-52 flex justify-center items-center" v-if="book.reviews.length <= 0">
            <div>No reviews yet.</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Review from "@/components/Review";
import ReviewInput from "./ReviewInput";
import { mapGetters } from "vuex";

export default {
    name: "Reviews",
    components: { Review, ReviewInput },
    props: [
        "book"
    ],
    data() {
        return {
            reviewStar: 0
        }
    },
    computed: {
        ...mapGetters("auth", ["authUser"]),
        reviewed_user_ids() {
            return this.book.reviews.map(r => r.user.id);
        }
    },
    methods: {
        postReview(review) {
            review.book_id = this.book.id;

            this.$store.dispatch("bookDetail/postReview", review);
        },
        updateReview(review) {
            this.$store.dispatch("bookDetail/updateReview", review);
        },
        deleteReview(review) {
            this.$store.dispatch("bookDetail/deleteReview", review);
        }
    },
};
</script>
