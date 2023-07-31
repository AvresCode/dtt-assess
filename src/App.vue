<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
  name: 'App',
  components: { Navbar },
};
</script>

<style>
body {
  background-color: rgb(245, 244, 244);
}
</style>
