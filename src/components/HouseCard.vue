<template>
  <div>
    <img :src="house.image" alt="House Image" />
    <div>
      <p>{{ house.location.street }} {{ house.location.houseNumber }}</p>
      <p>€ {{ house.price }}</p>
      <p>{{ house.location.zip }} {{ house.location.city }}</p>
    </div>
    <div>
      <p>Size: {{ house.size }} m2</p>
      <p>Bedrooms: {{ house.rooms.bedrooms }}</p>
      <p>Bathrooms: {{ house.rooms.bathrooms }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HouseCard',
  props: { house: Object },
};
</script>
