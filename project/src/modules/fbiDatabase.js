export default {
   state() {
      return {
         wantedList: [],
      };
   },

   mutations: {
      setWantedList(state, wantedList) {
         state.wantedList = wantedList;
      },
   },

   actions: {
      async fetchFbiApi() {
         const url = 'https://api.fbi.gov/@wanted';
         const response = await fetch(url);
         const results = await response.json();

         this.wantedList = results;
      }
   },

   getters: {
      wantedList(state) {
         return state.wantedList;
      },
   },
};
