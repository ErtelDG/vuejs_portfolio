<script setup>
import { ref } from "vue";

let name = ref("");
let email = ref("");
let message = ref("");
let spinOn = ref(false);
let sendMessage = ref(false);

const sendMail2 = () => {
   let mailtoLink = `mailto:contact@denniscodeworld.de?subject=Contact ${name.value} Email: ${email.value}&body=Dear ${name.value}, \n\nThank you for your interest in my services. Before we proceed, please check your email address and message carefully. This will ensure that I can reach you effectively and that our future communication runs smoothly. \n\nPlease take a moment to review your message and details. \n\nIf everything is in order, please click 'Send'. \nI look forward to getting in touch with you. \n\nYours sincerely, \nDennis \n\n${message.value}\n${name.value} \n${email.value}`;
   window.location.href = mailtoLink;
};
</script>

<template>
   <div class="col-span-full grid grid-cols-12 gap-y-6 gap-x-1 mt-4 text-secondary">
      <div class="col-start-2 col-end-12">
         <form class="grid grid-cols-12 space-y-8" @submit.prevent="sendMail2">
            <div class="col-span-full row-start-1 row-end-4">
               <div
                  :class="{ hidden: !sendMessage.value }"
                  class="h-min border-solid border-2 border-secondary rounded-lg bg-tertiary/90 text-center flex items-center py-12"
               >
                  Thank you for your message!<br /><br />I will process your request as soon as possible and contact you shortly using the contact details
                  provided.
               </div>
            </div>
            <input
               :class="{ hidden: sendMessage.value }"
               class="bg-tertiary border-solid border-2 border-secondary rounded-lg text-white placeholder:text-secondary w-full focus:outline-none focus:border-white text-sm py-2 px-4 focus:placeholder:text-transparent row-start-1 row-end-2 col-span-full h-max xl:text-base"
               type="text"
               v-model="name"
               placeholder="Your name"
               required
            />
            <input
               :class="{ hidden: sendMessage.value }"
               class="bg-tertiary border-solid border-2 border-secondary rounded-lg text-white placeholder:text-secondary w-full focus:outline-none focus:border-white text-sm py-2 px-4 focus:placeholder:text-transparent row-start-2 row-end-3 col-span-full h-max xl:text-base"
               type="email"
               v-model="email"
               placeholder="Your email"
               required
            />
            <textarea
               :class="{ hidden: sendMessage.value }"
               class="bg-tertiary h-24 border-solid border-2 border-secondary rounded-lg text-white placeholder:text-secondary w-full focus:outline-none focus:border-white text-sm py-2 px-4 focus:placeholder:text-transparent row-start-3 col-span-full row-end-4 xl:text-base"
               v-model="message"
               placeholder="Your message"
               required
            ></textarea>
            <button
               class="row-start-4 row-end-5 bg-secondary px-4 py-2 border-solid border-2 border-secondary text-white rounded-lg hover:border-white hover:bg-white cursor-pointer text-xs gap-x-4 col-start-4 col-end-10 lg:col-start-4 Lg:col-end-8 flex justify-center items-center xl:text-base hover:text-primary hover:font-medium"
               type="submit"
            >
               <div :class="{ hidden: !spinOn.value }" class="flex justify-center items-center">
                  <div class="spinner-border animate-spin inline-block w-4 h-4 text-tertiary border-4 rounded-full" role="status">
                     <span class="visually-hidden">Loading.....</span>
                  </div>
               </div>
               <div :class="{ hidden: spinOn.value }">Send</div>
               <div :class="{ hidden: !spinOn.value }">Sending..</div>
            </button>
         </form>
      </div>
   </div>
</template>

<style scoped></style>
