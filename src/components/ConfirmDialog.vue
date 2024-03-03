<template>
    <div :class="{ 'hidden': isClosed }"
        class="w-full h-full flex flex-col items-center justify-center bg-black top-0 left-0 fixed bg-opacity-50">

                <div class="bg-white rounded-sm shadow dark:bg-gray-700">
                    <button type="button" @click="onCancelButtonClicked"
                        class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-sm text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                    <div class="p-6 text-center">
                      
                        <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            <slot name="body">Are you sure to delete this review?</slot>
                        </h3>
                        <button data-modal-toggle="popup-modal" type="button" @click="onConfirmButtonClicked"
                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-sm text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                            <slot name="confirm">Confirm</slot>
                        </button>
                        <button data-modal-toggle="popup-modal" type="button" @click="onCancelButtonClicked"
                            class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-sm border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                            <slot name="cancel">Cancel</slot>
                        </button>
                    </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "ConfirmDialog",
    props: {
        isClosed: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {};

    },
    mounted() {

    },
    methods: {
        onConfirmButtonClicked() {
            this.$emit('on-dialog-confirm');

        },
        onCancelButtonClicked() {
            this.$emit('on-dialog-close');
        }
    },
};
</script>
