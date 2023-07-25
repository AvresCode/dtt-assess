import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    allHouses: [],
  },
  mutations: {
    setAllHouses: (state, housesData) => {
      state.allHouses = housesData;
    },
  },

  actions: {
    async fetchAllHouses({ commit }) {
      const URL = 'https://api.intern.d-tt.nl/api/houses';

      try {
        const response = await axios.get(URL, {
          headers: { 'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr' },
        });
        const housesData = response.data;
        console.log('Fetched houses', housesData);
        commit('setAllHouses', housesData);
      } catch (e) {
        console.log('Houses fetch error:', e);
      }
    },
  },
});

export default store;
