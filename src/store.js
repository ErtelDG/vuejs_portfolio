import { createStore } from "vuex";

export default createStore({
   state: {
      menuOpenOrClose: false,
      imprintOpenOrClose: true,
   },
   mutations: {
      increment(state) {
         state.count++;
      },
   },
});
