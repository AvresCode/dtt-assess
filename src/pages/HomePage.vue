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
              <p>{{ house.address }}</p>
              <p>{{ house.postal_code }} {{ house.city }}</p>
            </div>
            <div>
              <p>Size: {{ house.size }}</p>
              <p>Bedrooms: {{ house.bedrooms }}</p>
              <p>Bathrooms: {{ house.bathrooms }}</p>
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
  //   async mounted() {
  //     if (this.allHouses.length === 0) {
  //       await this.fetchAllHouses();
  //     }
  //   },
};
</script>
