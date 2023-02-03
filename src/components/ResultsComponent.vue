<template>
  <div id="display">
    <div id="top">{{ calculator.isResult ? "" : result }}</div>
    <div id="operator">
      {{ calculator.isResult ? "" : calculator.operator }}
    </div>
    <div id="bottom">{{ calculator.isResult ? result : current }}</div>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "@/stores/calculatorStore";
import { computed } from "vue";

const result = computed(() => {
  if (calculator.result === "") {
    return "";
  }

  if (!isFinite(calculator.result)) {
    return "ERROR";
  }

  return calculator.result;
});

const current = computed(() => {
  if (calculator.clearOnDigit) {
    return "";
  }
  return calculator.current;
});

const calculator = useCalculatorStore();
</script>

<style scoped>
#display {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: repeat(2, 50%);
}

#top {
  font-size: large;
}

#top,
#bottom {
  text-align: center;
  grid-column-start: 3;
}

#operator {
  text-align: center;
  grid-column-start: 1;
}
</style>
