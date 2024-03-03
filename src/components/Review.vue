<template>
    <div class="flex flex-none  flex-col p-2 mb-2 border-b">
        <div class="flex justify-between items-center">
            <span class="flex-1 font-semibold ">{{ review.user.name }}</span>
            <div class="flex-1 relative inline-block">
                <font-awesome-icon v-if="isOwnReview" icon="fa-solid fa-ellipsis-v" class="absolute right-2"
                    @click="toggleMenu" />
                <div v-if="isMenuOpened"
                    class="z-10 mt-8 absolute w-44  rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                    <div class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                        <div>
                            <div @click="onReviewEdit" href="#"
                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Edit</div>
                        </div>
                        <div>
                            <div @click="onReviewDelete" href="#"
                                class="block text-red-500 py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 ">Delete
                            </div>
                        </div>
                    </div>
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
        <ConfirmDialog :isClosed="isDeleteReviewDialogClosed" @on-dialog-close="onToggleDeleteDialog"
            @on-dialog-confirm="onDeleteReviewConfirmed" />
        <ReviewDialog @on-review-confirm="onEditReviewConfirmed" :review="review" @on-dialog-close="onToggleEditDialog"
            :isClosed="isEditReviewDialogClosed" v-if="isOwnReview" />
    </div>
</template>


<script>
import ReviewDialog from "./ReviewDialog";
import ConfirmDialog from "./ConfirmDialog";

import { mapGetters } from "vuex";


export default {
    name: "Review",
    components: {
        ReviewDialog,
        ConfirmDialog,
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
            isDeleteReviewDialogClosed: true,
            isMenuOpened: false
        };
    },
    methods: {
        onToggleEditDialog() {
            this.isEditReviewDialogClosed = !this.isEditReviewDialogClosed;
        },
        onToggleDeleteDialog() {
            this.isDeleteReviewDialogClosed = !this.isDeleteReviewDialogClosed;
        },
        onEditReviewConfirmed(review) {
            review.review_id = this.review.id;
            this.$emit('on-review-update', review);
        },
        onDeleteReviewConfirmed() {
            this.$emit('on-review-delete', this.review);
        },
        toggleMenu() {
            this.isMenuOpened = !this.isMenuOpened;
        },
        onReviewEdit() {
            this.toggleMenu();
            this.onToggleEditDialog();
        },
        onReviewDelete() {
            this.toggleMenu();
            this.onToggleDeleteDialog();
        }
    },
    watch: {
        isEditReviewDialogClosed() {
            console.log(this.isEditReviewDialogClosed);
        }
    }

};
</script>
