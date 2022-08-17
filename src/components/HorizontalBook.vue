
<template>
    <transition class="w-full h-40" :duration="{ enter: 500, leave: 800 }">

        <div class="shadow-md p-2 flex flex-none  flex-row" @click="$emit('on-book-clicked', book)">
            <img class="h-full w-1/3 rounded-md object-cover flex-none" :src="book.cover_url" alt="">
            <div class="p-2">
                <div class="font-semibold">{{ book.title.substring(0, 20) }}</div>
                <div class="text-blue-500">{{ book.price }}</div>
                <div>
                    <div class="flex gap-1 overflow-hidden">
                        <div class="p-1 text-xs" v-for="(author, index) in book.authors" :key="author.id">
                            {{ author.name }} {{ index != book.authors.length - 1 ? "," : "" }}
                        </div>
                    </div>
                </div>
                <div>
                    <button @click.stop="$emit('on-book-remove-clicked', book)" class="pl-1 rounded-sm pr-1 border-red-400 border-2 ">
                        <span class="mr-2">Remove</span>
                        <font-awesome-icon icon="fa-solid fa-trash-can" class="text-black" />
                    </button>
                </div>
            </div>
        </div>
    </transition>

</template>

<script>

export default {
    name: "HorizontalBook",
    props: [
        "book"
    ]
};
</script>
