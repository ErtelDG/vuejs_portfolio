import { createStore } from "vuex";

export default createStore({
   state: {
      title: "portfolio",
      language: "en",
      imprintOpenOrClose: false,
      menuOpen: false,
      inprintOpen: false,
   },
   mutations: {
      increment(state) {
         state.count++;
      },
   },
});
