<template>
  <div class="homepage-container">
    <div class="top-section">
      <h1>Houses</h1>
      <div>
        <router-link to="/addListing" class="create-listing-link"
          >+ CREATE NEW</router-link
        >
      </div>
    </div>
    <div class="top-section">
      <div>
        <SearchInput
          :searchTerm="searchTerm"
          @inputChange="onSearchTermUpdate"
        />
        <div v-if="showResultNumber">
          <p>{{ resultNumberMessage }}</p>
        </div>
      </div>
      <div>
        <button @click="toggleSortingOrderPrice" class="button-price">
          Price</button
        ><button @click="toggleSortingOrderSize" class="button-size">
          Size
        </button>
      </div>
    </div>

    <div v-if="loading">Loading...</div>
    <div v-else>
      <ul v-if="sortedFilteredHouses.length > 0">
        <li v-for="house in sortedFilteredHouses" :key="house.id">
          <HouseCard :house="house" />
        </li>
      </ul>
      <p v-else class="search-no-result">
        No house found! please try another term.
      </p>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import SearchInput from '../components/SearchInput.vue';
import HouseCard from '../components/HouseCard.vue';

export default {
  name: 'HomePage',
  components: { SearchInput, HouseCard },
  setup() {
    const store = useStore();

    const searchTerm = computed(() => store.state.searchTerm);
    const allHouses = computed(() => store.state.allHouses);

    const sortingOrderPrice = ref(0);
    const sortingOrderSize = ref(0);

    // Toggle sorting order
    const toggleSortingOrderPrice = () => {
      sortingOrderPrice.value = sortingOrderPrice.value === 1 ? -1 : 1;
      sortingOrderSize.value = 0;
    };
    const toggleSortingOrderSize = () => {
      sortingOrderSize.value = sortingOrderSize.value === 1 ? -1 : 1;
      sortingOrderPrice.value = 0;
    };
    const sortHousesByPrice = (houses) => {
      if (sortingOrderPrice.value === 0) {
        // If unsorted, return the houses as is
        return houses;
      }
      return houses.sort((a, b) => {
        return (a.price - b.price) * sortingOrderPrice.value;
      });
    };
    const sortHousesBySize = (houses) => {
      if (sortingOrderSize.value === 0) {
        return houses;
      }
      return houses.sort((a, b) => {
        return (a.size - b.size) * sortingOrderSize.value;
      });
    };
    const sortedFilteredHouses = computed(() => {
      const filteredHouses = allHouses.value.filter((house) =>
        house.location.city
          .toLowerCase()
          .includes(searchTerm.value.trim().toLowerCase())
      );

      // Sort by Price if Price button is clicked
      if (sortingOrderPrice.value !== 0) {
        return sortHousesByPrice(filteredHouses);
      }

      // Sort by Size if Size button is clicked
      if (sortingOrderSize.value !== 0) {
        return sortHousesBySize(filteredHouses);
      }
      // Return unsorted if neither button is clicked
      return filteredHouses;
    });

    const loading = computed(() => store.state.allHouses.length === 0);

    const showResultNumber = computed(
      () => sortedFilteredHouses.value.length > 0
    );
    const resultNumberMessage = computed(
      () =>
        `${sortedFilteredHouses.value.length} houses available!` ||
        'No house found.'
    );

    store.dispatch('fetchAllHouses');

    // Computed properties
    return {
      sortedFilteredHouses,
      toggleSortingOrderPrice,
      toggleSortingOrderSize,
      searchTerm,
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
.create-listing-link {
  text-decoration: none;
  color: white;
  padding: 0.6rem 1rem;
  border: 1px solid red;
  background-color: rgba(218, 52, 52, 0.968);
  border-radius: 0.5rem;
}
.top-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
}
.search-no-result {
  margin: 2rem;
  font-size: 1.5rem;
  font-weight: 600;

  text-align: center;
}
button {
  padding: 0.5rem 2rem;
  color: white;
}
.button-price {
  background-color: rgba(218, 52, 52, 0.968);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}

.button-size {
  background-color: rgb(184, 182, 182);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}

@media (max-width: 600px) {
  .top-section {
    flex-direction: column;
  }
}
</style>
