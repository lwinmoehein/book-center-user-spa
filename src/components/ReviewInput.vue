<template>
    <div>
        <div class="flex justify-between items-center">
                <div v-if="authUser.emailVerified" class="font-bold cursor-pointer rounded-sm px-3 bg-blue-500 text-white border-2 flex justify-center items-center gap-2" @click="toggleDialog">
                  <div>Post Review</div>
                  <font-awesome-icon icon="fa-solid fa-pencil" class="font-bold text-sm cursor-pointer" />
                </div>
        </div>
        <ReviewDialog @on-review-confirm="onPostReviewClick" @on-dialog-close="onCloseDialogClicked" :isClosed="isDialogClosed"/>
    </div>
</template>

<script>
import ReviewDialog from "./ReviewDialog";
import { mapGetters } from "vuex";

export default {
    name: "ReviewInput",
    components:{
        ReviewDialog
    },
    computed: {
        ...mapGetters("auth",["authUser"])
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
