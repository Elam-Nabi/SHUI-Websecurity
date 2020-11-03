<template>
  <div class="header-container">
    <img class="top-logo" :src="require(`../assets/shuiredlogo.jpg`)" />
    <router-link :to="{ name: 'login' }"
      ><img class="header-logo" :src="require(`../assets/shuilogo.jpg`)"
    /></router-link>
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
    margin-top: 110%;
    transition: all 0.5s;

    &:hover {
      opacity: 0.4;
    }
  }
  .bottom-logo {
    position: fixed;
    margin-top: 141%;
  }
}
</style>