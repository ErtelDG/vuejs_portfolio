<script setup>
import { VueElement } from "vue";

const projects = [
   {
      imageName: "Economy_Dashboard_Germany",
      projectName: "Economy Dashboard Germany",
      tools: "Backend - Python, Frontend - Vue.js",
      toolsOther: ["Vue.js","Python","Tailwind CSS","API"],
      description:
         "The project is a dashboard that clearly displays over 130 German economic indicators and provides a quick overview of leading, coincident, and lagging indicators for assessing the economy.",
      linkLiveTest: "https://economy-dashboard-germany.denniscodeworld.de/",
      linkGitHub: "https://github.com/ErtelDG/dashboard-economy-incidence-germany",
      linkGitHub2: "https://github.com/ErtelDG/ms_db_economy_incidence_germany_py",
   },
   {
      imageName: "Join",
      projectName: "Join",
      tools: "Backend - Go, Frontend - Vue.js",
      toolsOther: ["Tailwind CSS", "API"],
      description:
         "Task manager inspired by the Kanban system. Create, modify, delete and organize tasks, assign users and categories. Create and remove users. Frontend and backend are isolated systems. Vue.js is used for the frontend and Golang (Go) is used on the server side. Communication between the two is via an API interface.",
      linkLiveTest: "https://join.denniscodeworld.de/",
      linkGitHub: "https://github.com/ErtelDG/vite_kanban",
      linkGitHub2: "https://github.com/ErtelDG/minibackendgo",
   },
   {
      imageName: "Pokedex",
      projectName: "Pokedex",
      tools: "HTML",
      toolsOther: ["Vue.js", "TypeScript", "Tailwind", "Rest-API"],
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      linkLiveTest: "https://pokedex.denniscodeworld.de/",
      linkGitHub: "https://github.com/ErtelDG/pokedex",
   },
];

const projectImages = import.meta.glob("@/assets/imagesProjects/*.png", { eager: true, import: "default" });
</script>

<template>
   <div class="col-span-full grid grid-cols-12 gap-6">
      <div v-for="project of projects" class="col-start-2 col-end-12 grid grid-cols-12 gap-4 mt-12">
         <div class="col-span-full flex justify-center">
            <img :src="projectImages[`/src/assets/imagesProjects/${project.imageName}.png`]" :alt="project.imageName" />
         </div>

         <div class="col-span-full text-secondary text-center text-3xl font-bold mt-4 xl:text-4xl">{{ project.projectName }}</div>
         <div class="col-span-full flex flex-wrap justify-center">
            <div v-for="tool of project.toolsOther" class="text-white px-2 border-white border-r-2 xl:text-xl">
               {{ tool }}
            </div>
            <div class="text-white px-2 xl:text-xl">{{ project.tools }}</div>
         </div>
         <div class="col-span-full text-white text-center text-xs xl:text-base">{{ project.description }}</div>

         <div class="col-span-full flex justify-around items-center py-4">
            <a
               :href="project.linkLiveTest"
               target="_blank"
               class="text-sm text-center text-white font-normal bg-secondary border-secondary hover:bg-white hover:text-black hover:font-normal hover:border-primary border-2 w-[30%] px-4 py-2 cursor-pointer rounded-lg xl:text-base"
            >
               <div v-if="!project.linkGitHub2">Live test</div>
               <div v-if="project.linkGitHub2">Live</div>
               <div v-if="project.linkGitHub2">test</div>
            </a>
            <a
               :href="project.linkGitHub"
               target="_blank"
               class="text-sm text-center border-white bg-white text-black border-2 w-[30%] px-4 py-2 cursor-pointer rounded-lg hover:bg-secondary hover:border-secondary hover:text-white xl:text-base"
            >
               <div v-if="!project.linkGitHub2">Github</div>
               <div v-if="project.linkGitHub2">Github</div>
               <div v-if="project.linkGitHub2">Frontend</div></a
            ><a
               v-if="project.linkGitHub2"
               :href="project.linkGitHub2"
               target="_blank"
               class="text-sm text-center border-white bg-white text-black border-2 w-[30%] px-4 py-2 cursor-pointer rounded-lg hover:bg-secondary hover:border-secondary hover:text-white xl:text-base"
            >
               <div>Github</div>
               <div>Backend</div>
            </a>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
