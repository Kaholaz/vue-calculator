<template>
  <div class="button operator" @click="calculator.addDot()">
    <span>.</span>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "@/stores/calculatorStore";

const calculator = useCalculatorStore();
</script>

<style scoped></style>
