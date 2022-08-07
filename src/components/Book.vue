<template>
    <div class="flex flex-none  flex-col h-full w-24">
        <img class="h-2/3 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
        <div>{{ book.title.substring(0, 30) }}</div>
        <div>{{ book.price }}</div>
    </div>
</template>

<script>

export default {
    name: "Book",
    props:[
        "book"
    ]
};
</script>
