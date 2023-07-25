import { createStore } from 'vuex';

const store = createStore({
  state: {
    allHouses: null,
  },
  mutations: {
    setAllHouses: (state, housesData) => {
      state.allHouses = housesData;
    },
  },
});

export default store;
