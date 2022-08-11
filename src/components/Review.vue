<template>
    <div class="flex flex-none  flex-col">
        <div>{{ review.star }}</div>
        <div>{{ review.body }}</div>
        <hr>
    </div>
</template>

<script>

export default {
    name: "Review",
    props:[
        "review"
    ]
};
</script>
