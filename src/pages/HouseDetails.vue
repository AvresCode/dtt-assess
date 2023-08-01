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
        <div v-if="!isOwner">
          <button @click="handleDelete" class="button-delete">Delete</button>
          <button class="button-edit">Edit</button>
          <ConfirmDialog
            v-if="showConfirmDialog"
            :message="'Are you sure you want to delete this listing?'"
            @confirmed="handleDeleteConfirmed"
            @canceled="handleDeleteCanceled"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import ConfirmDialog from '../components/ConfirmDialog.vue';
export default {
  name: 'HouseDetails',
  components: {
    ConfirmDialog,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const id = route.params.id;

    const loading = computed(() => store.state.oneHouse.length === 0);
    const house = computed(() => store.state.oneHouse);

    store.dispatch('fetchOneHouse', id);

    const isOwner = computed(() => {
      return house.value && house.value.madeByMe;
    });

    const showConfirmDialog = ref(false);

    const handleDelete = () => {
      showConfirmDialog.value = true;
    };

    const handleDeleteConfirmed = async () => {
      // User confirmed deletion, proceed with actual deletion
      try {
        await store.dispatch('deleteListing', id);
      } catch (error) {
        console.log('Delete Listing error:', error.message);
      }

      // Hide the confirmation dialog
      showConfirmDialog.value = false;
    };

    const handleDeleteCanceled = () => {
      // User canceled deletion, do nothing
      showConfirmDialog.value = false;
    };

    return {
      loading,
      house,
      isOwner,
      handleDelete,
      handleDeleteConfirmed,
      handleDeleteCanceled,
      showConfirmDialog,
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
button {
  padding: 0.5rem 2rem;
  color: white;
}
.button-delete {
  background-color: rgba(218, 52, 52, 0.968);
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.button-edit {
  background-color: rgb(184, 182, 182);
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
</style>
