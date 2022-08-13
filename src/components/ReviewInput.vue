<template>
    <div>
        <div class="flex justify-between mb-5 items-center">
                <div class="font-semibold">Reviews:</div>
         <div class="text-blue-500 font-semibold cursor-pointer p-1 border-blue-500 border-2 rounded-sm" @click="toggleDialog">Post Review</div>
        </div>
        <ReviewDialog @on-review-confirm="onPostReviewClick" @on-dialog-close="onCloseDialogClicked" :isClosed="isDialogClosed"/>
    </div>
</template>

<script>
import ReviewDialog from "./ReviewDialog";
export default {
    name: "ReviewInput",
    components:{
        ReviewDialog
    },
    methods: {
        onPostReviewClick(review) {
            this.$emit('on-review-input-clicked', review);
            this.currentReviewText = "";
        },
        toggleDialog(){
            this.isDialogClosed = !this.isDialogClosed;
        },
        onCloseDialogClicked(){
            this.isDialogClosed = true;
        }
      
    },
    data() {
        return {
            isDialogClosed:true
        }
    },
};
</script>
