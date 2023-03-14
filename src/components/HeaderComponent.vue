<template>
    <header>
        <RouterLink to="/">Calculator</RouterLink>
        <RouterLink to="/login">Log in</RouterLink>
    </header>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

a {
    font-size: large;

    padding: 5px;
    margin: 10px;
    border-radius: 5px;

    color: gainsboro;
    background-color: darkred;
    text-decoration: none;
}
</style>
