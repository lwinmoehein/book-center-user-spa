<template>
    <div class="flex flex-none  flex-col" @click="$emit('on-book-clicked', book)">
        <img class="h-3/5 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
        <div>Rating  <span class="text-blue-500">{{ Number(book.average_rating).toFixed(1) }}</span></div>
        <div class="font-semibold">{{ book.title.substring(0, 20) }}</div>
    </div>
</template>

<script>

export default {
    name: "Book",
    props: [
        "book"
    ]
};
</script>
