<template>
    <div class="wrapper" @submit="login">
        <form>
            <label for="username">Username</label>
            <input type="text" id="username" v-model="username" />
            <label for="password">Password</label>
            <input type="password" id="password" v-model="password" />
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from "vue";

const username = ref("");
const password = ref("");

function login() {
    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value,
        }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
}
</script>

<style scoped>
form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;

    justify-items: center;
    align-items: center;
    width: fit-content;
    margin: auto;
}

button {
    grid-column-start: 1;
    grid-column-end: 3;
}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>

