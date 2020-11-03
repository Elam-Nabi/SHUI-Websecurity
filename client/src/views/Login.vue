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
    position: absolute;
    margin-left: 20px;
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
      padding: 10px;
      text-align: center;
      margin-left: 50px;
      letter-spacing: 0.3rem;
      border: 2px solid #fff;
      font-size: 20px;
      border-radius: 3px;
      width: 250px;
    }
    ::placeholder {
      color: #fff;
      font-family: "Cantarell", sans-serif;
    }
  }

  button {
    margin: 50px;
    margin-top: 30px;
    width: 250px;
    font-weight: bold;
    height: 50px;
    border-radius: 4px;
    background: #fff;
    outline: none;
    font-size: 1rem;
  }

  .bottom-logo {
    position: fixed;
    margin-top: 141%;
  }
}
</style>