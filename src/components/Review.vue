<template>
    <div class="flex flex-none  flex-col p-2 mb-2 border-b" @click="onOpenDialogClicked">
        <div class="flex justify-between">
            <span class="font-bold">{{ review.user.name }}</span>
            <div class="ml-2 flex items-center justify-center">
                <font-awesome-icon v-for="s in review.star" :key="'star' + s" icon="fa-solid fa-star"
                    class="text-blue-500" />
                <font-awesome-icon v-for="s in 5 - review.star" :key="review.id + 's' + s" icon="fa-regular fa-star" />
            </div>
        </div>
        <div class="text-sm text-gray-400">
            {{ review.created_at }}
        </div>
        <div class="mt-2">{{ review.body }}</div>
        <ReviewDialog @on-review-confirm="onEditReviewClicked" :review="review" @on-dialog-close="isEditReviewDialogClosed=false"
            :isClosed="isEditReviewDialogClosed" />
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
    },
    data() {
        return {
            isEditReviewDialogClosed: true,
        };
    },
    methods: {
        onCloseDialogClicked() {
            console.log("on close");
            this.isEditReviewDialogClosed = true;
        },
        onOpenDialogClicked() {
            this.isEditReviewDialogClosed = false;
        },
        onEditReviewClicked() {

        }
    },

};
</script>
