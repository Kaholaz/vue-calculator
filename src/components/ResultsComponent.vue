<template>
  <div id="display">
    <div id="top">{{ props.isResult ? "" : result }}</div>
    <div id="operator">
      {{ props.isResult ? "" : props.operator }}
    </div>
    <div id="bottom">{{ props.isResult ? result : current }}</div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps([
  "result",
  "current",
  "operator",
  "isResult",
  "clearOnDigit",
]);

const result = computed(() => {
  if (props.result === "") {
    return "";
  }

  if (!isFinite(props.result)) {
    return "ERROR";
  }

  return props.result;
});

const current = computed(() => {
  if (props.clearOnDigit) {
    return "";
  }
  return props.current;
});
</script>

<style scoped>
#display {
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: repeat(2, 50%);
  overflow-x: hidden;
}

#display > div {
  display: flex;
  justify-content: center;
  align-items: center;
}

#top,
#operator {
  font-size: x-large;
}

#bottom {
  font-size: xxx-large;
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
