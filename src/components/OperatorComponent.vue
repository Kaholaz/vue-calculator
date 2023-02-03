<template>
  <div class="button operator" @click="calculator.setOperator(props.value)">
    <span>{{ props.value }}</span>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "@/stores/calculatorStore";

const props = defineProps(["value"]);

const calculator = useCalculatorStore();
</script>

<style scoped></style>
