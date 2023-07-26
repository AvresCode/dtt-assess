<template>
  <div>
    <h1>Homepage</h1>
    <div>
      <SearchInput :searchTerm="searchTerm" @inputChange="onSearchTermUpdate" />
      <div v-if="showResultNumber">
        <p>{{ resultNumberMessage }}</p>
      </div>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul v-if="filteredHouses.length > 0">
        <li v-for="house in filteredHouses" :key="house.id">
          <HouseCard :house="house" />
        </li>
      </ul>
      <p v-else>No houses found.</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../components/SearchInput.vue';
import HouseCard from '../components/HouseCard.vue';

export default {
  name: 'HomePage',
  components: { SearchInput, HouseCard },
  setup() {
    const store = useStore();

    const searchTerm = computed(() => store.state.searchTerm);
    const filteredHouses = computed(() =>
      store.state.allHouses.filter((house) =>
        house.location.city
          .toLowerCase()
          .includes(searchTerm.value.trim().toLowerCase())
      )
    );

    const loading = computed(() => store.state.allHouses.length === 0);

    const showResultNumber = computed(() => filteredHouses.value.length > 0);
    const resultNumberMessage = computed(
      () =>
        `${filteredHouses.value.length} houses available!` || 'No house found.'
    );

    store.dispatch('fetchAllHouses');

    // Computed properties
    return {
      searchTerm,
      filteredHouses,
      showResultNumber,
      resultNumberMessage,
      loading,
    };
  },
  methods: {
    onSearchTermUpdate(newSearchTerm) {
      this.$store.commit('setSearchTerm', newSearchTerm);
    },
  },
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
</style>
