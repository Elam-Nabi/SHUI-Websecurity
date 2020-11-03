<template>
  <div class="header-container">
    <img class="top-logo" :src="require(`../assets/shuiredlogo.jpg`)" />
    ><img class="header-logo" :src="require(`../assets/shuilogo.jpg`)" />
    <form>
      <input type="text" name="" id="name" placeholder="Användarnamn" />
      <input type="text" name="" id="password" placeholder="Lösenord" />
      <button>Logga in</button>
    </form>
    <img class="bottom-logo" :src="require(`../assets/bottomlogo.jpg`)" />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
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
    outline: none;
    font-size: 1rem;
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