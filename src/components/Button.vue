<template>
  <router-link :to="to" class="vc-btn" v-if="type === 'back'">Ga terug</router-link>
  <router-link :to="to" class="vc-btn" v-else>{{text}}</router-link>
</template>

<script>
export default {
  name: "VcButton",
  props: {
    to: String,
    text: String || null,
    type: String || null
  }
};
</script>

<style lang="scss">
.vc-btn {
  background-color: cadetblue;
  padding: 15px;
  border-radius: 5px;
}
</style>
