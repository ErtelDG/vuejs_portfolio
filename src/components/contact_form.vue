<script setup>
</script>

<template><div class="col-span-full grid grid-cols-12 gap-y-6 gap-x-1 mt-4 text-secondary">
  <div class="col-start-2 col-end-12">
    <form class="grid grid-cols-12 space-y-8" (submit)="sendMail()" ngNativeValidate>
      <div class="col-span-full row-start-1 row-end-4">
        <div :class="{'hidden':!sendMessage}"
          class=" h-min border-solid border-2 border-secondary rounded-lg bg-tertiary/90 text-center flex items-center py-12">
          Thank you for your message!<br><br>I will process your request as soon as possible and contact you shortly
          using the contact details provided.
        </div>
      </div>
      <input :class="{'hidden': sendMessage}"
        class="bg-tertiary border-solid border-2 border-secondary rounded-lg   text-white placeholder:text-secondary w-full focus:outline-none focus:border-white  text-sm py-2 px-4 focus:placeholder:text-transparent row-start-1 row-end-2 col-span-full h-max xl:text-base"
        type="text" name="name" placeholder="Your name" required>
      <input :class="{'hidden': sendMessage}"
        class="bg-tertiary border-solid border-2 border-secondary rounded-lg  text-white placeholder:text-secondary
    w-full focus:outline-none focus:border-white text-sm py-2 px-4 focus:placeholder:text-transparent row-start-2 row-end-3 col-span-full h-max xl:text-base"
        type="email" name="email" placeholder="Your email" required>
      <textarea :class="{'hidden': sendMessage}"
        class="bg-tertiary h-24 border-solid border-2 border-secondary rounded-lg   text-white placeholder:text-secondary
        w-full focus:outline-none focus:border-white text-sm py-2 px-4 focus:placeholder:text-transparent row-start-3 col-span-full row-end-4 xl:text-base"
        type="text" name="message" placeholder="Your message" required></textarea>
      <button
        class="row-start-4 row-end-5 bg-secondary px-4 py-2 border-solid border-2 border-secondary text-white rounded-lg hover:border-white hover:bg-white cursor-pointer text-xs gap-x-4 col-start-4 col-end-10 lg:col-start-4 Lg:col-end-8 flex justify-center items-center xl:text-base hover:text-primary hover:font-medium"
        type="submit">
        <div :class="{'hidden': !spinOn}" class="flex justify-center items-center">
          <div class="spinner-border animate-spin inline-block w-4 h-4 text-tertiary border-4 rounded-full"
            role="status">
            <span class="visually-hidden">Loading.....</span>
          </div>
        </div>
        <div :class="{'hidden':spinOn}">Send</div>
        <div :class="{'hidden':!spinOn}">Sending..</div>
      </button>
    </form>

  </div>

</div>
</template>

<style scoped></style>