<template style="height: 100%">
  <CalculatorComponent />
</template>

<script setup>
import CalculatorComponent from "@/components/CalculatorComponent.vue";
</script>

<style scoped>
#display {
  grid-column-start: 1;
  grid-column-end: 5;
}

#zero {
  grid-column-start: 1;
  grid-column-end: 3;
}

#app {
  box-sizing: border-box;
}
</style>
