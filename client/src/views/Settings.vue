<template>
  <div v-show="toggleOpen" class="settings-container">
    <h1>streams</h1>
    <div class="tags-container">
      <div class="tag-items">
        <h5 v-for="tag in tags" :key="tag._id">{{ tag.tag }}</h5>
        <button class="x-button"><span>x</span></button>
      </div>
    </div>
    <div class="checkbox-container">
      <input
        type="text"
        class="input-tags"
        v-model="newTag"
        placeholder="add new tag"
      />
      <button class="addTags-btn" @click="addTags()"><span>✓</span></button>
    </div>
    <button class="bottom-btn">Shit, they're on to me!</button>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/composition-api";
import axios from "axios";
export default {
  props: ["toggleOpen"],
  setup() {
    let newTag = ref("");
    let tag = ref("");
    let tags = ref([]);

    async function addTags() {
      tag = newTag;
      const response = await axios.post("api/tags/", tag);
      tags.value.push(response.data);
      newTag.value = "";
    }

    onMounted(async () => {
      const response = await axios.get("/api/tags");
      tags.value = response.data;
    });

    return { newTag, addTags, tag, tags };
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

    .tag-items {
      margin: 10px;
      width: 130px;
      opacity: 0.8;
      height: 32px;
      padding: 5px;
      color: #fff;
      font-size: 16px;
      border-radius: 4px;
      background: #d66969;

      h5 {
        font-weight: 400;
        font-style: italic;
        background: #d66969;
      }
      .x-button {
        outline: none;
        display: flex;
        margin-top: -5px;
        margin-left: 93px;
        position: absolute;
        border: 1px solid #fff;
        border-radius: 0 5px 5px 0;

        span {
          width: 100%;
          opacity: 0.3;
          font-size: 30px;
          margin-top: -10px;
          background: lightgrey;
        }
      }
    }
  }

  .checkbox-container {
    width: 320px;
    height: 55px;
    margin: 40px;
    display: flex;
    margin-left: 20px;
    margin-top: 145px;
    border-radius: 4px;
    border: 1px solid white;

    input {
      color: #fff;
      border: none;
      outline: none;
      font-size: 20px;
      margin-left: 15px;
      margin-bottom: 5px;
    }

    h1 {
      font-size: 23px;
      margin-top: 10px;
      font-weight: 300;
      margin-left: 12px;
    }

    .addTags-btn {
      width: 55px;
      height: 53px;
      background: #fff;
      margin-left: 263px;
      position: absolute;
      border: 1px solid #fff;
      border-radius: 0px 4px 4px 0;
      box-shadow: inset 1px 0px 5px 5px #fff;

      span {
        font-size: 30px;
        background: #fff;
      }
    }
  }

  .bottom-btn {
    width: 320px;
    height: 50px;
    margin: 50px;
    border: none;
    outline: none;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    margin-top: -12px;
    margin-left: 20px;
    font-size: 1.3rem;
    border-radius: 4px;
    position: absolute;
    background: #082756;
  }
}
</style>