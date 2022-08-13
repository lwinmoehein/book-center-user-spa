<template>
    <div class="flex flex-none  flex-col p-2 mb-2 border-b" @click="onOpenDialogClicked">
        <div class="flex justify-between items-center">
            <span class="flex-1 font-bold ">{{ review.user.name }}</span>
            <div class="flex-1 relative inline-block">
                <font-awesome-icon v-if="isOwnReview" icon="fa-solid fa-ellipsis-v" class="absolute right-2"/>
                <div class="z-10 mt-8 absolute w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Delete</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div class="flex ">
                <font-awesome-icon v-for="s in review.star" :key="'star' + s" icon="fa-solid fa-star"
                    class="text-blue-500" />
                <font-awesome-icon v-for="s in 5 - review.star" :key="review.id + 's' + s" icon="fa-regular fa-star" />
            </div>
        </div>
        <div class="text-sm text-gray-400">
            {{ review.created_at }}
        </div>
        <div class="mt-2">{{ review.body }}</div>
        <ReviewDialog @on-review-confirm="onEditReviewConfirmed" :review="review"
            @on-dialog-close="onCloseDialogClicked" :isClosed="isEditReviewDialogClosed" v-if="isOwnReview" />
    </div>
</template>


<script>
import ReviewDialog from "./ReviewDialog";
import { mapGetters } from "vuex";


export default {
    name: "Review",
    components: {
        ReviewDialog
    },
    props: [
        "review"
    ],
    computed: {
        ...mapGetters("auth", ["authUser"]),
        isOwnReview() {
            return this.review.user.id == this.authUser.id;
        }
    },
    data() {
        return {
            isEditReviewDialogClosed: true,
        };
    },
    methods: {
        onCloseDialogClicked() {
            this.isEditReviewDialogClosed = true;
        },
        onOpenDialogClicked() {
            this.isEditReviewDialogClosed = false;
        },
        onEditReviewConfirmed(review) {
            review.review_id = this.review.id;
            this.$emit('on-review-update', review);
        }
    },
    watch: {
        isEditReviewDialogClosed() {
            console.log(this.isEditReviewDialogClosed);
        }
    }

};
</script>
