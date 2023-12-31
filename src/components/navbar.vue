<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();
let menuOpen = ref(true);

const openCloseMenu = () => {
   menuOpen.value = menuOpen.value ? false : true;
   store.state.menuOpen = menuOpen.value ? false : true;
};
</script>

<template>
   <div class="min-w-full h-full z-50 sticky top-0">
      <div class="flex text-white justify-center items-center w-full h-16 px-4 bg-primary lg:h-24" id="myTopnav">
         <div class="w-full flex justify-between xl:w-1280">
            <div>
               <a href="#top" class="text-xl font-bold hover:text-secondary md:text-2xl lg:text-3xl">Dennis Georg Ertel</a>
            </div>
            <!-- for desktop -->
            <div class="hidden xl:block md:text-xl lg:text-2xl">
               <a class="cursor-pointer hover:text-secondary mx-2" href="#aboutMe">About me</a>
               <a class="cursor-pointer hover:text-secondary mx-2" href="#skills">Skills</a>
               <a class="cursor-pointer hover:text-secondary mx-2" href="#portfolio">Portfolio</a>
               <a class="cursor-pointer hover:text-secondary mx-2" href="#contact">Contact</a>
            </div>
            <div class="cursor-pointer flex justify-between items-center xl:hidden" @click="openCloseMenu()">
               <div
                  :class="{ hidden: store.state.menuOpen || store.state.inprintOpen }"
                  class="cursor-pointer object-scale-down fill-white hover:fill-secondary"
               >
                  <svg
                     enable-background="new 0 0 91 91"
                     height="1rem"
                     id="Layer_1"
                     version="1.1"
                     viewBox="0 0 91 91"
                     width="1.5rem"
                     xml:space="preserve"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                     <g>
                        <rect height="6" width="75" x="25" y="10" />
                        <rect height="6" width="75" x="25" y="40" />
                        <rect height="6" width="75" x="25" y="70" />
                        <circle cx="0" cy="13" r="6" />
                        <circle cx="0" cy="43" r="6" />
                        <circle cx="0" cy="73" r="6" />
                     </g>
                  </svg>
               </div>

               <div
                  :class="{ hidden: !store.state.menuOpen }"
                  class="cursor-pointer object-scale-down fill-white hover:fill-secondary"
               >
                  <svg
                     enable-background="new 0 0 24 24"
                     version="1.1"
                     viewBox="0 0 24 24"
                     xml:space="preserve"
                     width="1.5rem"
                     height="1.5rem"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                     <g id="grid_system" />
                     <g id="_icons">
                        <path
                           d="M5.3,18.7C5.5,18.9,5.7,19,6,19s0.5-0.1,0.7-0.3l5.3-5.3l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3   c0.4-0.4,0.4-1,0-1.4L13.4,12l5.3-5.3c0.4-0.4,0.4-1,0-1.4s-1-0.4-1.4,0L12,10.6L6.7,5.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4   l5.3,5.3l-5.3,5.3C4.9,17.7,4.9,18.3,5.3,18.7z"
                        />
                     </g>
                  </svg>
               </div>
            </div>
         </div>
      </div>
      <div
         :class="{ hidden: !store.state.menuOpen }"
         class="h-[calc(100vh-4rem)] text-white flex justify-center items-center cursor-pointer bg-tertiary/80 lg:h-[calc(100vh-6rem)] min-w-full"
      >
         <div class="flex flex-col justify-center items-center gap-2 cursor-pointer w-full h-full">
            <a href="#aboutMe" class="cursor-pointer hover:text-secondary" @click="openCloseMenu()">About me</a>
            <a href="#skills" class="cursor-pointer hover:text-secondary" @click="openCloseMenu()">Skills</a>
            <a href="#portfolio" class="cursor-pointer hover:text-secondary" @click="openCloseMenu()">Portfolio</a>
            <a href="#contact" class="cursor-pointer hover:text-secondary" @click="openCloseMenu()">Contact</a>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
