<script setup>
const language = "en";

const aboutMeText = {
   en: "As a Full Stack Developer, I have experience in developing user-friendly and responsive websites and applications. My specialization is in modern technologies such as HTML, CSS, JavaScript, TypeScript, Vue.js, and Angular, as well as a solid understanding of Responsive Design and design implementation. My knowledge of these technologies allows me to develop complete web applications that meet my users needs and provide a great user experience. I also leverage proven frameworks and libraries to increase development efficiency and achieve higher code quality. In addition to my expertise in front-end development, I have also gained experience in the backend using Python and Django as frameworks. I also have knowledge in architecting and scaling business applications to ensure they have high availability and performance. By continuously learning and keeping my knowledge up to date, I am constantly improving my skills. As part of a team, I enjoy working and contributing my ideas and proposed solutions to achieve the best possible result.",
   de: "Als Full Stack Developer verfüge ich über Erfahrung in der Entwicklung von benutzerfreundlichen und ansprechenden Webseiten und Anwendungen. Meine Spezialisierung liegt auf modernen Technologien wie HTML, CSS, JavaScript, TypeScript, Vue.js und Angular, sowie einem soliden Verständnis von Responsive Design und Designumsetzung. Durch meine Kenntnisse in diesen Technologien kann ich vollständige Webanwendungen entwickeln, die den Anforderungen meiner Anwender entsprechen und eine großartige Benutzererfahrung bieten. Dabei setze ich auch auf bewährte Frameworks und Bibliotheken, um die Entwicklungseffizienz zu steigern und eine höhere Codequalität zu erreichen. Neben meiner Expertise in Frontend-Entwicklung habe ich auch Erfahrung im Backend mit Python und Django als Framework gesammelt. Zudem verfüge ich über Kenntnisse in der Architektur und Skalierung von Business-Anwendungen, um sicherzustellen, dass sie eine hohe Verfügbarkeit und Leistung aufweisen. Durch kontinuierliches Lernen und Aufrechterhaltung meiner Kenntnisse auf dem neuesten Stand der Technik, verbessere ich stetig meine Fähigkeiten. Im Team arbeite ich gerne und trage meine Ideen und Lösungsvorschläge bei, um ein bestmögliches Ergebnis zu erzielen.",
};

const personalThingEn = [
   "Experience in developing web and software applications using technologies such as HTML, CSS, TypeScript, and Firebase.",

   "Knowledge of using frameworks and libraries such as Angular, VueJS, Material Design, Tailwind CSS and Bootstrap.",

   "Good knowledge of using version control systems such as Git (GitHub).",

   "Experience using testing and debugging tools to ensure code quality and integrity.",

   "Ability to analyze and improve processes and procedures to increase efficiency and performance",

   "Good communication and negotiation skills to successfully work with different stakeholders and solve problems",
];
</script>

<template>
   <div class="grid grid-cols-12 gap-4 text-white xl:gap-y-8">
      <div class="col-start-2 col-end-12 h-8 text-4xl font-bold"></div>
      <div class="hidden col-start-1 col-end-4 xl:flex items-center xl:mb-12 xl:col-start-2">
         <div class="bg-secondary h-1 w-full"></div>
      </div>
      <div class="col-start-2 col-end-12 text-4xl font-bold xl:text-6xl xl:text-center xl:col-start-4 xl:col-end-10 xl:mb-12">About me</div>
      <div class="hidden col-start-10 col-end-13 xl:flex items-center xl:mb-12 xl:col-end-12">
         <div class="bg-secondary h-1 w-full"></div>
      </div>
      <div class="col-start-2 col-end-12 text-sm xl:text-base text-justify">{{ aboutMeText.en }}</div>

      <div v-for="(thing, key) in personalThingEn" class="col-start-2 col-end-12 text-sm grid grid-cols-12 gap-4 xl:text-base">
         <div v-if="key % 2 == 0" class="row-start-1 row-span-full col-start-1 col-end-3 flex justify-center items-center">
            <img src="../assets/img/lightbulb2.png" />
         </div>
         <div v-if="key % 2 != 0" class="row-start-1 row-span-full col-start-1 col-end-3 flex justify-center items-center">
            <img src="../assets/img/puzzle2.png" />
         </div>
         <div class="row-start-1 row-span-full col-start-4 col-end-13 flex items-center">{{ thing }}</div>
      </div>
   </div>
</template>

<style scoped></style>
