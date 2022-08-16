<template>
    <div :class="{ 'hidden': !isLoading }"
        class="w-full h-full flex flex-col items-center justify-center bg-black top-0 left-0 fixed bg-opacity-40">
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
        }
    }
};
</script>
