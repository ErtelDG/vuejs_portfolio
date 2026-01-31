<script setup>
const iconsSkills = [
   "Angular",
   "CI-CD",
   "Cloud",
   "CSS",
   "Databases",
   "Django",
   "Docker",
   "Firebase",
   "GIT",
   "Go",
   "HTML",
   "JS",
   "Linux",
   "MaterialDesign",
   "Python",
   "RELEX",
   "Rest-API",
   "Scrum",
   "SQL",
   "Tailwind",
   "TS",
   "VueJS",
   "VM",
   "WordPress",
];

const icons = import.meta.glob("@/assets/icons/*.png", { eager: true, import: "default" });
</script>

<template>
   <div class="grid grid-cols-12 gap-6 text-white">
      <div class="col-start-2 col-end-12 grid grid-cols-3 place-content-between place-items-center gap-4">
         <div v-for="icon of iconsSkills" :key="icon" class="gap-4 flex flex-col justify-between items-center my-4">
            <img :src="icons[`/src/assets/icons/${icon}.png`]" class="cursor-pointer xl:h-12 hover:animate-pulse" />

            <div class="text-xs xl:text-base">{{ icon }}</div>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
