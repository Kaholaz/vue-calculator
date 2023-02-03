<template style="height: 100%">
  <div class="calculator">
    <ResultsComponent />
    <ACComponent />
    <CComponent />
    <SignComponent />
    <OperatorComponent value="/" />
    <NumberComponent value="7" />
    <NumberComponent value="8" />
    <NumberComponent value="9" />
    <OperatorComponent value="*" />
    <NumberComponent value="4" />
    <NumberComponent value="5" />
    <NumberComponent value="6" />
    <OperatorComponent value="-" />
    <NumberComponent value="1" />
    <NumberComponent value="2" />
    <NumberComponent value="3" />
    <OperatorComponent value="+" />
    <NumberComponent id="zero" value="0" />
    <AddDotComponent />
    <EqualsComponent />
  </div>
</template>

<script setup>
import SignComponent from "@/components/SignComponent.vue";
import OperatorComponent from "@/components/OperatorComponent.vue";
import NumberComponent from "@/components/NumberComponent.vue";
import EqualsComponent from "@/components/EqualsComponent.vue";
import AddDotComponent from "@/components/AddDotComponent.vue";
import ACComponent from "@/components/ACComponent.vue";
import CComponent from "@/components/CComponent.vue";
import ResultsComponent from "@/components/ResultsComponent.vue";
</script>

<style scoped>
.calculator {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(6, calc(100% / 6));
  height: 100%;
}

.calculator > div {
  font-size: x-large;
  border: 1px solid beige;
  display: flex;
  justify-content: center;
  align-items: center;
}

#display {
  grid-column-start: 1;
  grid-column-end: 5;
}

#zero {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
