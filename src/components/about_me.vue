<script setup>
const language = "en";

const aboutMeText = {
   en: "I am comfortable working in self-organized and agile teams, adept at iteratively developing complex systems. My expertise spans the entire spectrum of software engineering, from initial conception to ongoing maintenance in production environments. With a focus on user-friendly and responsive web applications, I excel as a full-stack developer, leveraging modern technologies such as HTML, CSS, JavaScript, TypeScript, Python, and Go. Utilizing frameworks like Vue.js, Angular, and Django, alongside tools like Tailwind CSS, I enhance development efficiency and code quality. My proficiency extends to backend development, particularly with Go and Django, and implementing containerized software solutions. Passionate about continuous improvement, I champion practices like Continuous Integration and Delivery. My experience in cloud environments and distributed systems drives innovative solutions. Within teams, I thrive on exploring new technologies and refining our workflows.",
   de: "Ich fühle mich in selbstorganisierten und agilen Teams wohl und bin versiert in der iterativen Entwicklung komplexer Systeme. Mein Fachwissen umfasst das gesamte Spektrum der Softwareentwicklung, von der ersten Konzeption bis zur laufenden Wartung in Produktionsumgebungen. Mit einem Schwerpunkt auf benutzerfreundlichen und reaktionsschnellen Webanwendungen bin ich ein hervorragender Full-Stack-Entwickler, der moderne Technologien wie HTML, CSS, JavaScript, TypeScript, Python und Go einsetzt. Durch den Einsatz von Frameworks wie Vue.js, Angular und Django sowie Tools wie Tailwind CSS verbessere ich die Entwicklungseffizienz und Codequalität. Meine Kenntnisse erstrecken sich auch auf die Backend-Entwicklung, insbesondere mit Go und Django, und die Implementierung von containerisierten Softwarelösungen. Als leidenschaftlicher Verfechter der kontinuierlichen Verbesserung setze ich mich für Praktiken wie Continuous Integration and Delivery ein. Meine Erfahrung mit Cloud-Umgebungen und verteilten Systemen treibt innovative Lösungen voran. Innerhalb von Teams erforsche ich gerne neue Technologien und verfeinere unsere Arbeitsabläufe.",
};

const personalThingEn = [
   "Full-stack development: Extensive experience in the development of web applications both in the frontend and in the backend.",

   "Expertise in modern technologies: Proficiency in HTML, CSS, JavaScript, TypeScript, Python and Go to develop high-quality applications.",

   "Use of proven frameworks and libraries: Use of tools such as Vue.js, Angular, Django and TailwindCSS to increase development efficiency and quality.",

   "Continuous improvement and maintenance: Responsibility for the continuous optimization and maintenance of applications in the production environment.",

   "CI/CD: Experience in implementing and utilizing Continuous Integration and Continuous Delivery to improve workflows.",

   "Cloud expertise and distributed systems: Ability to work in cloud environments and with distributed systems to drive innovative solutions and improve scalability.",
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
