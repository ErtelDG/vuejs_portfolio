<script setup>
import { defineAsyncComponent } from "vue";
import { useStore } from "vuex";


const store = useStore();

const files = import.meta.glob("./components/*.vue");

const components = Object.entries(files).reduce((components, [path, defineComponent]) => {
  const componentName = path.match(/\.\/components\/(.*)\.vue$/)[1]
  components[componentName] = defineAsyncComponent(defineComponent)
  return components
}, {})
</script>

<template>
   <div id="top"></div>
   <div :class="{ 'bg-tertiary': !store.state.menuOpen}" class="min-w-full gap-4">
      <component :is="components.navbar" :class="{ 'h-screen': store.state.menuOpen}"  class="row-span-full z-10"></component>
      <div :class="{ 'hidden': store.state.menuOpen }" class="grid grid-cols-12 mx-2 gap-6 overflow-x-hidden xl:w-1024 xl:mx-[calc((100vw-1024px)/2)]">
         <div class="col-span-full grid grid-cols-12 xl:grid-rows-4 gap-4">
            <component :is="components.image_person" class="col-span-full col-start-2 xl:col-end-7 xl:row-start-1 xl:row-end-4"></component>
            <component :is="components.greeting" class="col-span-full mt-4 xl:mt-0 xl:col-start-7 xl:col-end-12 xl:row-start-2 xl:row-end-4 xl:z-10"></component>
            <component :is="components.social_links" class="col-span-full xl:col-start-1 xl:col-end-12 xl:row-start-4 xl:row-end-5 xl:z-10 xl:mt-16"></component>
            <img class="hidden xl:block col-start-1 col-end-13 row-start-1 row-span-full w-full h-full" src="./assets/img/background_cut2.png" alt="" />
         </div>
         <div id="aboutMe"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6 xl:z-10 xl:mt0">
            <component :is="components.about_me" class="col-span-full"></component>
         </div>
         <div class="h-12" id="skills"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <component :is="components.my_skills" class="col-span-full"></component>
            <component :is="components.logos_skills" class="col-span-full my-12 sm:my-6"></component>
            <component :is="components.btn_go_to_contact" class="col-span-full my-6 sm:my-0"></component>
         </div>
         <div class="h-12" id="portfolio"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <component :is="components.portfolio_section"  class="col-span-full"></component>
            <component :is="components.projects" class="col-span-full mt-4"></component>
         </div>
         <div class="h-12" id="contact"></div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-12">
            <component :is="components.contact_text" class="col-span-full"></component>
            <component :is="components.contact_form" class="col-span-full"></component>
         </div>
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6">
            <component :is="components.scroll_up_section" class="col-span-full"></component>
         </div>
         <div class="col-span-full relative">
            <div class="h-1 w-screen absolute -left-2 bg-primary"></div>
         </div>
         <!-- (valueEmitter)="onValueImprintOpenOrClose($event)" -->
         <div class="col-span-full grid grid-cols-12 gap-4 mt-6">
            <component :is="components.footer_section"  class="col-span-full"></component>
         </div>
      </div>
   </div>
   <div :class="{ hidden: !store.state.menuOpenOrClose }" class="min-w-full gap-4 text-white">
      <component :is="components.inprint" (valueEmitter)="onValueImprintOpenOrClose($event)"></component>
   </div>
</template>

<style scoped></style>
