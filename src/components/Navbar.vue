<template>
  <div class="nav">
    <div class="title">Vue cursus</div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss">
.nav {
  background-color: cadetblue;
  height: 3rem;
  .title {
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    display: inline-block;
  }
}
</style>
