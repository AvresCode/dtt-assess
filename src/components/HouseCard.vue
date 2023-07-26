<template>
  <div class="one-house-container">
    <div class="image-container">
      <img :src="house.image" alt="House Image" />
    </div>
    <div class="text-section">
      <div>
        <h3>{{ house.location.street }} {{ house.location.houseNumber }}</h3>
        <p>€ {{ house.price }}</p>
        <p>{{ house.location.zip }} {{ house.location.city }}</p>
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
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseCard',
  props: { house: Object },
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
  margin: 1rem;
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
</style>
