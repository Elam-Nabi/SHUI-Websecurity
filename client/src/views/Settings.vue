<template>
  <div v-show="toggleOpen" class="settings-container">
    <h1>streams</h1>
    <div class="tags-container">
      <div class="stockholm-tag">
        <h5>{{ tag }}</h5>
        <img :src="require(`../assets/xlogo.jpg`)" />
      </div>
      <div class="tram-tag">
        <h5>#tram</h5>
        <img class="top-logo" :src="require(`../assets/xlogo.jpg`)" />
      </div>
    </div>
    <input
      type="text"
      class="input-tags"
      v-model="newTag"
      placeholder="add new tag"
    />
    <div class="checkbox-container">
      <button @click="addTags()">add tag</button>
    </div>
    <button>Shit, they're on to me!</button>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import axios from "axios";
export default {
  props: ["toggleOpen"],
  setup() {
    let newTag = ref("");
    let tag = ref("");

    async function addTags() {
      console.log(tag);
      tag = newTag;
      const response = await axios.post("api/FlowItems/", newTag);
      newTag.push(response.data);
      newTag = {};
    }

    return { newTag, addTags, tag };
  },
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
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
      background: #d66969;
      border: 1px solid #d66969;
    }

    .stockholm-tag {
      h5 {
        font-weight: 400;
        font-style: italic;
        background: #d66969;
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
        font-weight: 400;
        font-style: italic;
        background: #d66969;
      }
      img {
        width: 30px;
        display: flex;
        margin-top: -23px;
        margin-left: 95px;
        position: absolute;
      }
    }
  }
  .checkbox-container {
    width: 320px;
    height: 55px;
    display: flex;
    margin-left: 20px;
    margin-top: 160px;
    border-radius: 4px;
    border: 1px solid white;

    h1 {
      font-size: 23px;
      margin-top: 10px;
      font-weight: 300;
      margin-left: 12px;
    }

    input[type="checkbox"] {
      margin-top: 20px;
      margin-left: 111px;
      border-radius: 5px;
      transform: scale(4.1);
      box-shadow: inset 1px 0px 5px 5px #fff;
    }
  }

  button {
    width: 320px;
    height: 50px;
    margin: 50px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    margin-top: 25px;
    margin-left: 20px;
    font-size: 1.3rem;
    border-radius: 4px;
    position: absolute;
    background: #082756;
  }
}
</style>