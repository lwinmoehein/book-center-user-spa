<template>
    <div class="flex flex-none  flex-col" @click="$emit('on-book-clicked', book)">
        <img class="h-3/5 md:h-4/5 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
        <div class="text-xs">Rating  <span class="text-blue-500">{{ Number(book.average_rating).toFixed(1) }}</span></div>
        <div class="font-bold text-sm">{{ book.title }}</div>
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
