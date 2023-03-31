<template>
  <div class="wrapper" @submit.prevent>
    <form>
      <label for="username">Username</label>
      <input id="username" v-model="user.username" type="text" />
      <label for="password">Password</label>
      <input id="password" v-model="user.password" type="password" />
      <button type="submit" @click="login">Log in</button>
      <button type="submit" @click="register">Register</button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import api from "@/api";
import { router } from "@/router";

const user = reactive({
  username: "",
  password: "",
});

function login() {
  api
    .post("user/login", user)
    .then((response) => {
      console.log(response);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
}
function register() {
  api
    .post("user/register", user)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
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
