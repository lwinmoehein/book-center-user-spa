<template>
    <div :class="{ 'hidden': !isLoading ,'bg-black bg-opacity-40':hasOverlay}"
        class="w-full h-screen flex items-center justify-center">
        <font-awesome-icon icon="fa-solid fa-spinner" class="animate-spin w-12 h-12 text-blue-600"/>
    </div>
</template>

<script>

export default {
    name: "Loading",
    props: {
        isLoading: {
            type: Boolean,
            default: false
        },
        hasOverlay:{
            type:Boolean,
            default:true
        }
    }
};
</script>
