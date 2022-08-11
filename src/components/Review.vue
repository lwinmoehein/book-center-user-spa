<template>
    <div class="flex flex-none  flex-col p-2 mb-2 border-b">
    <div class="flex justify-between">
     <div class="flex">
        <span class="font-bold">{{review.user.name}}</span>
        <div class="ml-2 flex items-center justify-center">
            <font-awesome-icon v-for="s in review.star" :key="'star'+s" icon="fa-solid fa-star" />
            <font-awesome-icon v-for="s in 5-review.star" :key="review.id+'s'+s"  icon="fa-regular fa-star" />
        </div>
    </div>
    <div class="text-sm">
         {{review.created_at}}
    </div>
    </div>
    <div class="mt-2">{{ review.body }}</div>
    </div>
</template>

<script>

export default {
    name: "Review",
    props: [
        "review"
    ]
};
</script>
