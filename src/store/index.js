import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    allHouses: [],
    searchTerm: '',
    filteredHouses: [],
    oneHouse: {},
  },
  mutations: {
    setAllHouses: (state, housesData) => {
      state.allHouses = housesData;
    },
    setSearchTerm: (state, searchTerm) => {
      state.searchTerm = searchTerm;
    },
    setFilteredHouses: (state, filteredHouses) => {
      state.filteredHouses = filteredHouses;
    },
    setOneHouse: (state, oneHouseData) => {
      state.oneHouse = oneHouseData;
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
        console.log('Houses fetch error:', e.message);
      }
    },
    async fetchOneHouse({ commit }, houseId) {
      const URL = `https://api.intern.d-tt.nl/api/houses/${houseId}`;

      try {
        const response = await axios.get(URL, {
          headers: { 'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr' },
        });
        const oneHousesData = response.data[0];
        console.log('Fetched details', oneHousesData);
        commit('setOneHouse', oneHousesData);
      } catch (e) {
        console.log('House detail fetch error:', e.message);
      }
    },
    async createListing({ commit }, formData) {
      const URL = 'https://api.intern.d-tt.nl/api/houses';
      try {
        const response = await axios.post(URL, formData, {
          headers: { 'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr' },
        });
        const newListing = response.data;
        console.log('New listing:', newListing);
        commit('setAllHouses', [...commit.state.allHouses, newListing]);
      } catch (e) {
        console.log('Create Listing error:', e.message);
      }
    },
  },
});

export default store;
