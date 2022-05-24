export default {
   state() {
      return {
         wantedList: {},
         errors: ''
      };
   },

   mutations: {
      setWantedList(state, wantedList) {
         state.wantedList = wantedList;
      },
      setError(state, errors) {
         state.errors = errors;
      },
   },

   actions: {
      async fetchFbiApi(state) {
         const url = 'https://api.fbi.gov/@wanted'
         const response = await fetch(url);
         try {
            if(response.status >= 200 && response.status < 300){
               const { items } = await response.json();
               state.commit('setWantedList', items);
            } else {
               if (response.status === 404) {
                  throw new Error('url ikke eksistere')
               }
               throw new Error('noe gikk galt!')
            }
         } catch (error) {
            state.commit('setError', error);
         }
      },
   },

   getters: {
      getWantedList(state) {
         return state.wantedList;
      },

      getError(state) {
         return state.errors;
      },
   },
};