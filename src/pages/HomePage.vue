<template>
  <div>
    <h1>Homepage</h1>
    <div v-if="allHouses.length === 0">Loading...</div>
    <div v-else>
      <ul>
        <li v-for="house in allHouses" :key="house.id">
          <div>
            <img :src="house.image" alt="House Image" />
            <div>
              <p>
                {{ house.location.street }} {{ house.location.houseNumber }}
              </p>
              <p>€ {{ house.price }}</p>
              <p>{{ house.location.zip }} {{ house.location.city }}</p>
            </div>
            <div>
              <p>Size: {{ house.size }} m2</p>
              <p>Bedrooms: {{ house.rooms.bedrooms }}</p>
              <p>Bathrooms: {{ house.rooms.bathrooms }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HomePage',
  computed: {
    ...mapState(['allHouses']),
  },
  methods: {
    ...mapActions(['fetchAllHouses']),
  },
  created() {
    this.fetchAllHouses();
  },
};
</script>
