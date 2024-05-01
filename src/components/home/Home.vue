<script setup lang="ts">
    import Nav from '../Nav.vue'
    import Carousel from './Carousel.vue'
    import IMenuItem from "@/types/iMenuItem.ts"
    import { ref } from 'vue'
    import salad01 from "@/assets/img/salad01.png"
    import salad02 from "@/assets/img/salad02.png"
    import salad03 from "@/assets/img/salad03.png"
    import salad04 from "@/assets/img/salad04.png"
    
    let carouselItems = ref<IMenuItem[]>([
        { src: salad01, price: 23, name: "Asparagus Wild", tag: "Valvet Plate", rating: 4.5 },
        { src: salad02, price: 28, name: "Lime Asparagus", tag: "Valvet Plate", rating: 5.0 },
        { src: salad03, price: 40, name: "Zucchini Salad", tag: "Valvet Plate", rating: 3.0 },
        { src: salad04, price: 14, name: "Green Beans", tag: "Valvet Plate", rating: 5.0 },
    ]);

  const isMenuSelected = ref<boolean>(true);
  let currentCarouselItem = ref<IMenuItem>(carouselItems.value[0])

  const handleSelectedDish = (dish: IMenuItem) => {
    isMenuSelected.value = false;
    currentCarouselItem.value = dish
  }

  const  onAfterLeave = () => {
    isMenuSelected.value = true;
  }
</script>

<template>
  <header class="grid grid-cols-9 max-w-screen-lg mx-auto min-h-[430px]">
    <section class="col-span-4 relative">
      <div class="relative bg-gray-950 h-[100%] w-[350px] mx-auto pt-4 
      text-white text-center text-5xl font-semibold shadow-xl">foodbar
      </div>
      <transition name="heroImage" @after-leave="onAfterLeave" 
      class="absolute top-[70px] origin-center translate-x-1/2 right-1/2 w-[370px] h-[370px]">
        <div v-if="isMenuSelected" class="flex justify-center">
          <img :src=currentCarouselItem.src alt="" class="
          rounded-full w-[370px] h-[370px] object-cover shadow-md">
        </div>
      </transition>
    </section>
    <section class="col-span-5 flex flex-col justify-between mt-8 relative">
      <Nav class="flex"></Nav>
        <div  class="max-w-96 grow flex justify-center flex-col relative">
          
      <transition name="heroDesc" class="-z-20">
        <h1 v-if="isMenuSelected" class="text-6xl font-medium mb-3">{{ currentCarouselItem.name }}</h1>
      </transition>
          <transition name="heroDescTitle"  class="-z-20">
            <p v-if="isMenuSelected" class="text-xm font-semibold text-gray-800 mb-3 leading-5">Salad is nutritionally complete food that contains all <br>
            27 essential vitamins and minerals, protein, essential <br>
            fatty acids, carbs, fibre and phytonutrients
          </p>
          </transition>
            <transition name="heroDescOrder" class="-z-20">
                <div v-if="isMenuSelected"  class="flex">
                  <dl class="flex flex-col-reverse basis-30 text-center">
                    <dt class="text-slate-600 text-[.5rem] font-semibold">total payable</dt>
                    <dd class="text-brand-default text-3xl font-bold">${{ currentCarouselItem.price }}</dd>
                  </dl>
                  <div class="flex grow justify-center align-middle">
                    <button class="bg-gray-800 text-white px-6 h-9 py-0 text-lg my-auto shadow-md">Order now</button>
                  </div>
              </div>
            </transition>
        </div>
    </section>
  </header>
  <Carousel @showSelectedDish="handleSelectedDish" :carouselItems="carouselItems"
  class="max-w-[920px] mx-auto mt-6" />
</template>

<style scoped>
    .heroImage-enter-active {
        @apply transition-opacity duration-100 ease-out transition-transform duration-700 ease-out;
    }

    .heroImage-enter-from {
        @apply -rotate-90;
    }

    .heroDescTitle-leave-to,
    .heroDescOrder-leave-to,
    .heroDesc-leave-to {
      @apply opacity-0
    }

    .heroDescTitle-enter-from,
    .heroDescOrder-enter-from,
    .heroDesc-enter-from {
          @apply opacity-0 -translate-x-[430px];
      }
    
      .heroDesc-leave-active
  .heroDescTitle-leave-active 
    .heroDesc-leave-active {
        @apply transition duration-100 ease-out
    }

    .heroDesc-enter-active {
      @apply transition duration-1000 ease-out
    }

  .heroDescTitle-enter-active {
    @apply transition delay-100 duration-1000 ease-out
  }

  .heroDescOrder-enter-active{
    @apply transition  delay-150 duration-1000 ease-out
  }
/*     
    .heroDescTitle-enter-active {
        @apply transition delay-700 duration-1000 ease-out
    }
    
    .heroDescOrder-enter-active {
        @apply transition delay-700 duration-1000 ease-out
    } */

    

  /* Update the transition classes
  .heroImage-enter-active,
  .heroImage-leave-active {
    transition: opacity 3.3s ease, transform 3.3s ease; /* Adjust timing and easing as needed
  }

  .heroImage-enter-from,
  .heroImage-leave-to {
    opacity: 0;
    transform: scale(0);
  } */
</style>
