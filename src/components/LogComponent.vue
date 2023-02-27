<template>
  <div class="wrapper" v-if="props.visible">
    <p v-for="(item, index) in props.log" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  log: Array,
  visible: Boolean,
});
</script>

<style scoped>
.wrapper {
  padding: 10px;
  height: 200px;
  width: 100%;

  position: absolute;
  z-index: 1;

  flex-direction: column;
  text-align: right;
  background-color: gray;
  overflow-x: scroll;
}
</style>
