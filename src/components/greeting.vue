<script setup></script>

<template>
   <div class="grid grid-cols-12 text-white text-center gap-y-6 mb-8">
      <div class="col-start-1 col-end-13 flex justify-center">
         <div>
            <div class="text-3xl font-bold flex justify-between">
               <div class="">Dennis&nbsp;</div>
               <div class="">Georg&nbsp;</div>
               <div class="">Ertel</div>
            </div>
            <div class="text-2xsl xl:text-3xl flex justify-between text-secondary">
               <div>FULL&nbsp;</div>
               <div>STACK&nbsp;</div>
               <div>DEVELOPER</div>
            </div>
         </div>
      </div>
      <div class="row-start-3 row-span-2 col-start-3 col-end-11 flex justify-center items-center">
         <a href="#contact" class="bg-white text-black px-4 py-1 cursor-pointer rounded-lg hover:bg-secondary">Contact me!</a>
      </div>
   </div>
</template>

<style scoped>
.writingMode-b-rl {
   writing-mode: tb-rl;
}

.text-xsl {
   font-size: 1.3rem;
}

.fulljustify {
   text-align: justify;
}
.fulljustify:after {
   content: "";
   display: inline-block;
   width: 100%;
}
</style>
