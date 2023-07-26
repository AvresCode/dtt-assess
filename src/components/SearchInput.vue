<template>
  <div>
    <input
      type="text"
      :value="searchTerm"
      @input="onInputChange"
      placeholder="Search a city..."
    /><font-awesome-icon :icon="['fas', 'magnifying-glass']" />
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
