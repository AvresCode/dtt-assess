<template>
  <div>
    <ul class="navbar">
      <li><router-link to="/" exact class="nav-links">Houses</router-link></li>
      <li><router-link to="/about" class="nav-links">About</router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
};
</script>
<style scoped>
.navbar {
  display: flex;
  list-style-type: none;
  padding: 1rem 5rem;
  border-bottom: 0.2rem solid rgb(244, 242, 242);
  background-color: white;
  margin-top: 0;
}
.nav-links {
  text-decoration: none;
  margin-left: 3rem;
  color: rgb(129, 128, 128);
  padding: 0.8rem;
  border-radius: 1rem;
}
.nav-links:hover {
  background-color: rgb(249, 241, 239);
}

.router-link-active {
  font-weight: bolder;
  color: black;
}
</style>
