import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    allHouses: [],
    // searchTerm: '',
    oneHouse: {},
    favorites: [],
  },
  mutations: {
    setAllHouses: (state, housesData) => {
      state.allHouses = housesData;
    },
    // setSearchTerm: (state, searchTerm) => {
    //   state.searchTerm = searchTerm;
    // },
    setOneHouse: (state, oneHouseData) => {
      state.oneHouse = oneHouseData;
    },
    addToFavorites: (state, houseId) => {
      if (!state.favorites.includes(houseId)) {
        state.favorites.push(houseId);
      }
    },
    removeFromFavorites: (state, houseId) => {
      state.favorites = state.favorites.filter((id) => id !== houseId);
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
        // console.log('Fetched houses', housesData);
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
        // console.log('Fetched details', oneHousesData);
        commit('setOneHouse', oneHousesData);
      } catch (e) {
        console.log('House detail fetch error:', e.message);
      }
    },
    async createListing({ commit }, { formData, houseId }) {
      const URL = 'https://api.intern.d-tt.nl/api/houses';
      const imageURL = `https://api.intern.d-tt.nl/api/houses/${houseId}/upload`;
      try {
        const imageUploadResponse = await axios.post(imageURL, formData.image, {
          headers: {
            'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr',
            'Content-Type': 'image/jpeg',
          },
        });
        console.log('imageUploadResponse', imageUploadResponse);
        //create listing
        const listingData = { ...formData };
        console.log('listingData', listingData);
        listingData.image = imageUploadResponse.data.url;

        const response = await axios.post(URL, listingData, {
          headers: {
            'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr',
            'Content-Type': 'multipart/form-data',
          },
        });
        const newListing = response.data;
        console.log('New listing:', newListing);
        commit('setOneHouse', newListing);
      } catch (e) {
        console.log('Create Listing error:', e.message);
      }
    },
    async deleteListing({ commit }, houseId) {
      const URL = `https://api.intern.d-tt.nl/api/houses/${houseId}`;
      try {
        const response = await axios.delete(URL, {
          headers: { 'X-Api-Key': 'zL6vg_sRSaZfwACpB3MGOUeclmF1kiXr' },
        });
        console.log('Deleted listing:', response.data);
        commit('deleteHouse', houseId);
      } catch (e) {
        console.log('Delete Listing error:', e.message);
      }
    },
  },
});

export default store;
