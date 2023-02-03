import { ref } from "vue";
import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("calculator", () => {
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
    clearOnDigit.value = true;
    isResult.value = true;

    if (!current.value) return;
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

  return {
    current,
    result,
    operator,
    clearOnDigit,
    isResult,
    swapSign,
    clearCurrent,
    clear,
    addDigit,
    setOperator,
    execute,
    addDot,
  };
});
