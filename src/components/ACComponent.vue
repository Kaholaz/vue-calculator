<template>
  <div class="button operator" @click="calculator.clear()">
    <span>A/C</span>
  </div>
</template>

<script setup>
import { useCalculatorStore } from "@/stores/calculatorStore";

const calculator = useCalculatorStore();
</script>

<style scoped></style>
