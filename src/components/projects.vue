<script setup>
const projects = [
   {
      imageName: "Pokedex",
      projectName: "Pokedex",
      tools: "HTML",
      toolsOther: ["Vue.js", "TypeScript", "Tailwind", "Rest-API"],
      description: "Based on the PokéAPI a simple library that provides and catalogues pokemon information.",
      linkLiveTest: "https://dennisgeorgertel.com/projects/pokedex/index.html",
      linkGitHub: "https://github.com/ErtelDG/pokedex",
   },
   {
      imageName: "Sharkie",
      projectName: "Sharkie",
      tools: "HTML",
      toolsOther: ["TypeScript", "Tailwind"],
      description:
         "A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale",
      linkLiveTest: "https://dennisgeorgertel.com/projects/sharkie/index.html",
      linkGitHub: "https://github.com/ErtelDG/sharkie",
   },

   {
      imageName: "Join",
      projectName: "Join",
      tools: "CSS",
      toolsOther: ["TypeScript", "HTML"],
      description: "Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories. ",
      linkLiveTest: "https://dennisgeorgertel.com/projects/join/loginLogout/index.html",
      linkGitHub: "https://github.com/ErtelDG/Join",
   },
   {
      imageName: "EL_Pollo_Loco",
      projectName: "EL Pollo Loco",
      tools: "HTML",
      toolsOther: ["TypeScript", "Tailwind"],
      description: "And another jump and run game based on an object-oriented approach. Help Pepe find coins and bottles to fight the final boss.",
      linkLiveTest: "https://dennisgeorgertel.com/projects/el_pollo_loco/index.html",
      linkGitHub: "https://github.com/ErtelDG/el_pollo-loco",
   },
];
</script>

<template>
   <div class="col-span-full grid grid-cols-12 gap-6">
      <div v-for="project of projects" class="col-start-2 col-end-12 grid grid-cols-12 gap-4 mt-12">
         <div class="col-span-full flex justify-center">
            <img :src="'./assets/imagesProjects/' + project.imageName + '.png'" :alt="project.imageName" />
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
               href="{{project.linkLiveTest}}"
               target="_blank"
               class="text-sm text-center text-white font-normal bg-secondary border-secondary hover:bg-white hover:text-black hover:font-normal hover:border-primary border-2 w-2/5 px-4 py-2 cursor-pointer rounded-lg xl:text-base"
            >
               <div>Live test</div>
            </a>
            <a
               href="{{project.linkGitHub}}"
               target="_blank"
               class="text-sm text-center border-white bg-white text-black border-2 w-2/5 px-4 py-2 cursor-pointer rounded-lg hover:bg-secondary hover:border-secondary hover:text-white xl:text-base"
            >
               <div>Github</div>
            </a>
         </div>
      </div>
   </div>
</template>

<style scoped></style>
