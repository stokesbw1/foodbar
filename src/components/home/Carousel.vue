<script setup lang="ts">
    import IMenuItem from "@/types/iMenuItem"
    import { onMounted, ref, MouseEvent, defineProps } from "vue"

    const props = defineProps({
        carouselItems: Array as () => IMenuItem[]
    });
    
    let currentCarouselItem = ref<IMenuItem>(props.carouselItems[0])
    let carouselDOMItems: Element[]
    const emits = defineEmits(['showSelectedDish']);

    const showSelectedMenu = (event: MouseEvent) => {
        let target: HTMLElement = event.target!;
        while (target && !target.classList.contains("menuItem")) {
            target = target.parentElement;
        }

        if (target) {
            const index = carouselDOMItems.indexOf(target);
            console.log(`index: ${index}`);
            currentCarouselItem.value = props.carouselItems[index];
            emits("showSelectedDish", currentCarouselItem.value);
        }
    };

    onMounted(() => {
         carouselDOMItems = Array.from(document.querySelectorAll(".menuItem"))
    })
</script>

<template>
    <section>
        <ul class="flex justify-between">
                <li v-for="(item, index) in props.carouselItems" :key="index" @click="showSelectedMenu"
                class="menuItem">
                <img :src="item.src" alt="" 
                class="absolute h-24 w-24 rounded-full object-cover
                -left-4 -top-3 shadow-2xl">
                <p class="mt-5 font-semibold">${{ item.price }}</p>
                <div class="mt-3 text-start">
                    <p class="relative"><span class="font-semibold text-lg">{{ item.name }}</span> <br> 
                        <span class="absolute top-5 text-xs text-gray-400">{{ item.tag }}</span></p>
                </div>
                <div class="flex justify-between items-center">
                    <p>{{ item.rating.toFixed(1) }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </div>
            </li>
        </ul>
        <!-- <ul class="flex justify-center space-x-3 pips-container mt-2.5">
            <li v-for="(item, index) in carouselItems" :key="index" @click="updateCarouselItems" 
            class="pip" :class="{ 'hidden': index > 3 }"></li>
        </ul> -->
    </section>
</template>

<style scoped>

</style>