<template>
  <div class="button number" @click="calculator.addDigit(props.value)">
    <span>{{ props.value }}</span>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "@/stores/calculatorStore";

const props = defineProps(["value"]);

const calculator = useCalculatorStore();
</script>

<style scoped></style>
