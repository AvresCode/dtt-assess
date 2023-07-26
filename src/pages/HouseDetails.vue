<template>
  <div>
    <h1>House Details</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <div>
        <img :src="house.image" alt="House Image" />
        <div>
          <p>{{ house.location.street }} {{ house.location.houseNumber }}</p>
          <p>€ {{ house.price }}</p>
          <p>{{ house.location.zip }} {{ house.location.city }}</p>
        </div>
        <div>
          <p>
            <font-awesome-icon :icon="['fas', 'bed']" />
            {{ house.rooms.bedrooms }}
          </p>
          <p>
            <font-awesome-icon :icon="['fas', 'bath']" />
            {{ house.rooms.bathrooms }}
          </p>
          <p>
            <font-awesome-icon :icon="['far', 'square']" /> {{ house.size }} m2
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
