<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";

import { useStore } from 'vuex'
const store = useStore()

</script>

<template>
  <div> {{ store.state.menuOpenOrClose }} {{   store.state.imprintOpenOrClose }}</div>
   <div id="top"></div>
   <div :class="{'bg-tertiary': !store.state.menuOpenOrClose, 'hidden':store.state.imprintOpenOrClose}" class="min-w-full gap-4">
      <app-navbar (valueEmitter)="onValueMenuOpenOrClose($event)" class="row-span-full z-10 h-screen"></app-navbar>
      <div :class="{'hidden': store.state.menuOpenOrClose}" class="grid grid-cols-12 mx-2 gap-6 overflow-x-hidden xl:w-1024 xl:mx-[calc((100vw-1024px)/2)]">
         <div class="col-span-full grid grid-cols-12 xl:grid-rows-4 gap-4">
            <app-image-person class="col-span-full col-start-2 xl:col-end-7 xl:row-start-1 xl:row-end-4"></app-image-person>
            <app-greeting class="col-span-full mt-4 xl:mt-0 xl:col-start-7 xl:col-end-12 xl:row-start-2 xl:row-end-4 xl:z-10"></app-greeting>
            <app-social-links class="col-span-full xl:col-start-1 xl:col-end-12 xl:row-start-4 xl:row-end-5 xl:z-10 xl:mt-16"></app-social-links>
            <img class="hidden xl:block col-start-1 col-end-13 row-start-1 row-span-full w-full h-full" src="./assets/img/background_cut2.png" alt="" />
         </div>
         <div id="aboutMe"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6 xl:z-10 xl:mt0">
            <app-about-me class="col-span-full"></app-about-me>
         </div>
         <div class="h-12" id="skills"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <app-my-skills class="col-span-full"></app-my-skills>
            <app-logos-skills class="col-span-full my-12 sm:my-6"></app-logos-skills>
            <app-btn-go-to-contact class="col-span-full my-6 sm:my-0"></app-btn-go-to-contact>
         </div>
         <div class="h-12" id="portfolio"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <app-portfolio-section class="col-span-full"></app-portfolio-section>
            <app-projects class="col-span-full mt-4"></app-projects>
         </div>
         <div class="h-12" id="contact"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <app-contact-text class="col-span-full"></app-contact-text>
            <app-contact-form class="col-span-full"></app-contact-form>
         </div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6">
            <app-scroll-up-section class="col-span-full"></app-scroll-up-section>
         </div>
         <div class="col-span-full relative">
            <div class="h-1 w-screen absolute -left-2 bg-primary"></div>
         </div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6">
            <app-footer-section (valueEmitter)="onValueImprintOpenOrClose($event)" class="col-span-full"></app-footer-section>
         </div>
      </div>
   </div>
   <div :class="{'hidden': !store.state.menuOpenOrClose}" class="min-w-full gap-4 text-white">
      <app-inprint (valueEmitter)="onValueImprintOpenOrClose($event)"></app-inprint>
   </div>
</template>

<style scoped></style>
