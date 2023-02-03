<template>
  <div id="calculator">
    <ResultsComponent
      id="display"
      :result="result"
      :current="current"
      :isResult="isResult"
      :clearOnDigit="clearOnDigit"
      :operator="operator"
    />
    <div
      v-for="button in buttons"
      :class="button.class"
      :id="button.id"
      :key="button.label"
      @click="button.onAction"
    >
      {{ button.label }}
    </div>
  </div>
</template>

<script setup>
import ResultsComponent from "@/components/ResultsComponent.vue";

class Button {
  constructor(label, onAciton, cls, id) {
    this.label = label;
    this.onAction = onAciton;
    this.class = "button " + cls;
    this.id = id ? id : "";
  }
}

class OperationButton extends Button {
  constructor(label, id) {
    super(label, () => setOperator(label), "operation", id);
  }
}

class DigitButton extends Button {
  constructor(label, id) {
    super(label, () => addDigit(label), "number", id);
  }
}

const buttons = [
  new Button("A/C", clear, "action"),
  new Button("C", clearCurrent, "action"),
  new Button("+/-", swapSign, "action"),
  new OperationButton("/"),
  new DigitButton("7"),
  new DigitButton("8"),
  new DigitButton("9"),
  new OperationButton("*"),
  new DigitButton("4"),
  new DigitButton("5"),
  new DigitButton("6"),
  new OperationButton("-"),
  new DigitButton("1"),
  new DigitButton("2"),
  new DigitButton("3"),
  new OperationButton("+"),
  new DigitButton("0", "zero"),
  new Button(".", addDot, "number"),
  new Button("=", execute, "operation"),
];

import { ref } from "vue";

const current = ref("");
const result = ref("");

const operator = ref("");
const doExecute = ref(false); // Can change operator multiple times without calculating a result
const hasDot = ref(false); // Only add dot once
const clearOnDigit = ref(true); // Can spam equals to get a result many times.
const isResult = ref(false); // Used to determine what variable to display.

function swapSign() {
  if (!current.value || current.value === "0") {
    return;
  }

  current.value = current.value.startsWith("-")
    ? current.value.substring(1)
    : `-${current.value}`;
}

function addDigit(digit) {
  if (isResult.value) clear();
  if (clearOnDigit.value) clearCurrent();

  current.value += digit;
  doExecute.value = true;
  clearOnDigit.value = false;
  isResult.value = false;
}

function addDot() {
  if (!current.value || hasDot.value || clearOnDigit.value) {
    return;
  }

  addDigit(".");
  hasDot.value = true;
}

function setOperator(op) {
  if (doExecute.value && !isResult.value) {
    execute();
  }
  operator.value = op;
  doExecute.value = false;
  isResult.value = false;
}

function execute() {
  if (!current.value || clearOnDigit.value) return;
  clearOnDigit.value = true;
  isResult.value = true;

  if (operator.value === "") {
    result.value = current.value;
    return;
  }

  result.value = eval(
    `${result.value}${operator.value}${current.value}`
  ).toString();
}

function clear() {
  current.value = "";
  result.value = "";

  operator.value = "";
  doExecute.value = false;
  hasDot.value = false;
  clearOnDigit.value = true;
  isResult.value = false;
}

function clearCurrent() {
  if (isResult.value) {
    clear();
  }

  current.value = "";
  hasDot.value = false;
}
</script>

<style scoped>
.button {
  font-size: xx-large;
  border: 1px solid beige;
  display: flex;
  justify-content: center;
  align-items: center;
}

#calculator {
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(6, calc(100% / 6));
  height: 100%;
}

#display {
  grid-column-start: 1;
  grid-column-end: 5;
  border: 1px solid beige;
}

#zero {
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
