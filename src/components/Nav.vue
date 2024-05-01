<script setup lang="ts">
import portrait from "@/assets/img/portrait.jpg"
import {  ref } from "vue";

const activeLink = ref("");
</script>

<template>
<nav>
    <ul class="flex grow justify-between">
        <li>
            <a href="#" :class="{ 'navLinkActive': activeLink === 'shop' }" class="navLinkHover" @click="activeLink = 'shop'">
                Shop
            </a>
        </li>
        <li>
            <a href="#" :class="{ 'navLinkActive': activeLink === 'features' }" class="navLinkHover" @click="activeLink = 'features'">
                Features
            </a>
        </li>
        <li>
            <a href="#" :class="{ 'navLinkActive': activeLink === 'recipes' }" class="navLinkHover bgbr" @click="activeLink = 'recipes'">
                Recipes
            </a>
        </li>
        <li>
            <a href="#" :class="{ 'navLinkActive': activeLink === 'hotline' }" class="navLinkHover" @click="activeLink = 'hotline'">
                Hotline
            </a>
        </li>
    </ul>
    <div class="flex justify-end basis-48 gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-brand-secondary">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
        <img class="h-8 w-8 rounded-full object-cover" :src=portrait alt="yummy salad">
    </div>
</nav>
</template>

<style scoped>
</style>
