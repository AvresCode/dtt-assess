<template>
  <div class="one-house-container">
    <div class="image-container">
      <img :src="house.image" alt="House Image" />
    </div>
    <div class="text-section">
      <div>
        <h3>{{ house.location.street }} {{ house.location.houseNumber }}</h3>
        <p>€ {{ house.price }}</p>
        <p>
          <font-awesome-icon
            :icon="['fas', 'location-dot']"
            class="location-icon"
          />
          {{ house.location.zip }}
          {{ house.location.city }}
        </p>
      </div>

      <div class="facility-section">
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
      <div class="reaction-buttons">
        <font-awesome-icon
          :icon="isFavorite ? ['fas', 'star'] : ['far', 'star']"
          @click="toggleFavorite"
          class="favorite-btn"
        />
        <router-link :to="`/houses/${house.id}`" class="btn-detail">
          <font-awesome-icon :icon="['fas', 'circle-info']"
        /></router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'HouseCard',
  props: { house: Object },
  setup(props) {
    const store = useStore();
    const isFavorite = computed(() =>
      store.state.favorites.includes(props.house.id)
    );

    const toggleFavorite = () => {
      if (isFavorite.value) {
        store.commit('removeFromFavorites', props.house.id);
      } else {
        store.commit('addToFavorites', props.house.id);
      }
    };
    return {
      isFavorite,
      toggleFavorite,
    };
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
}

.image-container {
  width: 250px;
  height: 200px;
  overflow: hidden;
  margin-right: 1rem;
}
.one-house-container {
  display: flex;
  border: 0.1rem solid rgb(244, 242, 242);
  border-radius: 1rem;
}
.text-section {
  padding: 1rem;
}
.facility-section {
  display: flex;
  gap: 1rem;
}
@media (max-width: 600px) {
  .image-container {
    width: 200px;
    min-width: 150px;
    height: 200px;
  }
}
.btn-detail {
  font-size: 1.2rem;
  color: black;
}
.btn-detail:active {
  color: black;
}
.favorite-btn {
  cursor: pointer;
  font-size: 1.2rem;
}
.reaction-buttons {
  display: flex;
  gap: 1rem;
}
.location-icon {
  margin-right: 0.3rem;
  font-size: 1.2rem;
}
</style>
