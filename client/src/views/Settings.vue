<template>
  <div v-show="toggleOpen" class="settings-container">
    <h1>streams</h1>
    <div class="tags-container">
      <div class="stockholm-tag">
        <h5>#stockholm</h5>
        <img :src="require(`../assets/xlogo.jpg`)" />
      </div>
      <div class="tram-tag">
        <h5>#tram</h5>
        <img class="top-logo" :src="require(`../assets/xlogo.jpg`)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["toggleOpen"],
};
</script>

<style lang="scss" scoped>
* {
  background: #ef4343;
}
.settings-container {
  top: 0;
  right: 0;
  z-index: 2;
  height: 70%;
  width: 100%;
  position: fixed;

  h1 {
    color: #fff;
    font-size: 28px;
    margin-top: 50px;
    margin-left: 24px;
  }

  .tags-container {
    display: flex;
    margin-left: 10px;

    .stockholm-tag,
    .tram-tag {
      margin: 10px;
      width: 130px;
      opacity: 0.8;
      height: 32px;
      padding: 5px;
      background: #d66969;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid lightgrey;
    }

    .stockholm-tag {
      h5 {
        background: #d66969;
        font-weight: 400;
        font-style: italic;
      }
      img {
        width: 30px;
        display: flex;
        margin-top: -23px;
        margin-left: 95px;
        position: absolute;
        background: #fff;
      }
    }

    .tram-tag {
      h5 {
        background: #d66969;
        font-weight: 400;
        font-style: italic;
      }
      img {
        width: 30px;
        display: flex;
        margin-top: -23px;
        margin-left: 95px;
        position: absolute;
        background: #fff;
      }
    }
  }
}
</style>