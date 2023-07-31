<template>
  <div class="search-container">
    <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    <input
      type="text"
      :value="searchTerm"
      @input="onInputChange"
      placeholder="Search a city..."
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchInput',
  props: {
    searchTerm: String,
  },

  setup(props, { emit }) {
    function onInputChange(event) {
      emit('inputChange', event.target.value);
    }

    return {
      onInputChange,
    };
  },
});
</script>
<style scoped>
input {
  padding: 0.5rem;
  border: none;
  background-color: rgb(225, 225, 225);
  outline: none;
}

.search-container {
  padding: 0.5rem;
  background-color: rgb(225, 225, 225);
  border-radius: 0.5rem;
}
</style>
