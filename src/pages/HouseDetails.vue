<template>
  <div class="house-container">
    <h1>House Details</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <img :src="house.image" alt="House Image" />
        <div class="text-section">
          <div>
            <h2>
              {{ house.location.street }} {{ house.location.houseNumber }}
            </h2>
            <p>
              <font-awesome-icon :icon="['fas', 'location-dot']" />
              {{ house.location.zip }} {{ house.location.city }}
            </p>
            <div class="house-properties">
              <p>€ {{ house.price }}</p>
              <p>
                <font-awesome-icon :icon="['far', 'square']" />
                {{ house.size }} m2
              </p>
              <p>Built in {{ house.constructionYear }}</p>
            </div>
          </div>
          <div class="house-properties">
            <p>
              <font-awesome-icon :icon="['fas', 'bed']" />
              {{ house.rooms.bedrooms }}
            </p>
            <p>
              <font-awesome-icon :icon="['fas', 'bath']" />
              {{ house.rooms.bathrooms }}
            </p>
          </div>
          <p>
            {{ house.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
  name: 'HouseDetails',

  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;

    const loading = computed(() => store.state.oneHouse.length === 0);
    const house = computed(() => store.state.oneHouse);

    store.dispatch('fetchOneHouse', id);

    return {
      loading,
      house,
    };
  },
};
</script>
<style scoped>
.house-container {
  margin: 5rem;
}
img {
  width: 100%;
  border-radius: 1rem;
}
.text-section {
  padding: 0.8rem;
}
.house-properties {
  display: flex;
  gap: 1rem;
}
</style>
