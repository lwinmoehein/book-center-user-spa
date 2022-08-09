<template>
    <div class="flex flex-none  flex-col">
        <img class="h-3/5 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
        <div>{{ book.title.substring(0, 20) }}</div>
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
