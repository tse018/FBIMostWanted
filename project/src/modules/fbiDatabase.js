export default {
   state() {
      return {
         wantedList: {},
      };
   },

   mutations: {
      setWantedList(state, wantedList) {
         state.wantedList = wantedList;
      },
   },

   actions: {
      async fetchFbiApi(state) {
         const url = 'https://api.fbi.gov/@wanted';
         const response = await fetch(url);
         const { items } = await response.json();
         state.commit('setWantedList', items);
      },
   },

   getters: {
      getWantedList(state) {
         return state.wantedList;
      },
   },
};