<template>
  <div class="header-container">
    <img class="top-logo" :src="require(`../assets/shuiredlogo.jpg`)" />
    <img class="header-logo" :src="require(`../assets/shuilogo.jpg`)" />
    <form @submit.prevent="loginUser">
      <input
        type="text"
        name=""
        v-model="username"
        id="name"
        placeholder="Användarnamn"
      />
      <input
        type="password"
        name=""
        v-model="password"
        id="password"
        placeholder="Lösenord"
      />
      <button>Logga in</button>
    </form>
    <img class="bottom-logo" :src="require(`../assets/bottomlogo.jpg`)" />
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/composition-api";
import axios from "axios";
export default {
  setup(props, { root }) {
    const input = reactive({
      username: null,
      password: null,
    });

    const loginUser = async () => {
      const response = await axios.post("/api/Users", input);
      const data = response.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      sessionStorage.setItem("member", JSON.stringify(data));
      root.$router.push({ name: "flow" });
    };
    return { ...toRefs(input), loginUser };
  },
};
</script>

<style lang="scss" scoped>
.header-container {
  display: grid;
  align-items: center;
  justify-content: center;

  .top-logo {
    margin-left: 20px;
    position: absolute;
  }

  .header-logo {
    cursor: pointer;
    margin-top: 20%;
    margin-left: 25%;
    transition: all 0.5s;

    &:hover {
      opacity: 0.4;
    }
  }

  form {
    display: grid;
    margin-top: 40px;

    #name {
      margin-bottom: 30px;
    }

    input {
      width: 250px;
      padding: 10px;
      outline: none;
      color: #fff;
      font-size: 20px;
      margin-left: 50px;
      border-radius: 3px;
      text-align: center;
      letter-spacing: 0.3rem;
      border: 2px solid #fff;
    }
    ::placeholder {
      color: #fff;
      font-family: "Cantarell", sans-serif;
    }
  }

  button {
    width: 250px;
    height: 50px;
    margin: 50px;
    border: none;
    outline: none;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 30px;
    font-weight: bold;
    border-radius: 4px;
    background: #fff;
  }

  .bottom-logo {
    position: fixed;
    margin-top: 141%;
  }
}
</style>