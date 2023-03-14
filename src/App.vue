<template style="height: 100%">
  <HeaderComponent />
  <RouterView style="height: 100%;"/>
</template>

<script setup>
import { RouterView } from "vue-router";
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
