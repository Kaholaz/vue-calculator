<template>
  <div class="wrapper">
    <p v-for="(item, index) in props.log" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  log: Array,
});
</script>

<style scoped>
.wrapper {
  padding: 10px;
  width: 100%;

  flex-direction: column;
  text-align: right;
  background-color: gray;
  overflow-x: scroll;

  grid-column-start: 1;
  grid-column-end: 5;
}
</style>
