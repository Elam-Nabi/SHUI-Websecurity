<template>
  <div v-show="toggleOpen" class="settings-container">
    <h1>streams</h1>
    <div class="tags-container">
      <h5 v-for="tag in tags" :key="tag._id">
        {{ tag.tag }} <span @click="removeTags(tag)">x</span>
      </h5>
    </div>
    <h2>click below to subscribe</h2>
    <div class="subscribe-container">
      <h5
        v-for="tag in subscribeTags"
        :key="tag.tags._id"
        @click="subscribe(tag)"
      >
        #{{ tag.tags }}
      </h5>
    </div>
    <div class="checkbox-container">
      <input
        type="text"
        class="input-tags"
        v-model="newTag"
        placeholder="add new tag"
      />
    </div>
    <div class="button-container">
      <button class="addTags-btn" @click="addTags()"><span>✓</span></button>
      <button class="bottom-btn" @click="removeUser()">
        Shit, they're on to me!
      </button>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/composition-api";
import axios from "axios";
export default {
  props: ["toggleOpen"],
  setup(props, { root }) {
    let newTag = ref("");
    let tag = ref("");
    let tags = ref([]);
    const subscribeTags = ref([]);

    async function addTags() {
      tag = newTag;
      const response = await axios.post("api/tags/", tag);
      tags.value.push(response.data);
      newTag.value = "";
      location.reload();
    }

    async function subscribe(tag) {
      await axios.post("api/FlowItems/", tag);
      location.reload();
    }

    async function removeTags(tag) {
      await axios.delete(`/api/tags/${tag._id}`);
      location.reload();
    }

    onMounted(async () => {
      const response = await axios.get("/api/tags");
      const data = await axios.get("/api/subscriptions");
      subscribeTags.value = data.data;
      tags.value = response.data;
    });

    const removeUser = () => {
      return axios.delete("/api/Users").then(() => {
        root.$router.push({ name: "Home" });
        sessionStorage.removeItem("member");
      });
    };

    return {
      newTag,
      addTags,
      tag,
      tags,
      removeTags,
      subscribeTags,
      subscribe,
      removeUser,
    };
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
  height: 75%;
  width: 100%;
  position: fixed;

  h1 {
    color: #fff;
    font-size: 28px;
    margin-top: 50px;
    margin-left: 24px;
  }

  .tags-container {
    display: grid;
    margin-left: 15px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 6fr));

    h5 {
      margin: 10px;
      width: 118px;
      opacity: 0.8;
      height: 32px;
      padding: 5px;
      color: #fff;
      display: flex;
      font-size: 16px;
      font-weight: 400;
      border-radius: 4px;
      font-style: italic;
      background: #d66969;

      span {
        width: 30px;
        opacity: 0.8;
        font-size: 24px;
        margin-top: -5px;
        margin-left: 86px;
        position: absolute;
        font-style: normal;
        text-align: center;
        display: inline-block;
        background: lightgrey;
        border-radius: 0 4px 4px 0;
      }
    }
  }

  .checkbox-container {
    width: 320px;
    height: 55px;
    margin: 50px;
    display: flex;
    margin-top: -1px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid white;

    input {
      border: none;
      outline: none;
      color: #fff;
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
  }

  h2 {
    @extend h1;
  }

  .subscribe-container {
    display: grid;
    margin-left: 10px;
    grid-template-columns: repeat(auto-fit, minmax(130px, 6fr));

    h5 {
      margin: 10px;
      width: 118px;
      opacity: 0.8;
      height: 32px;
      padding: 5px;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      border-radius: 4px;
      font-style: italic;
      background: #d66969;
    }
  }

  .button-container {
    position: absolute;

    .addTags-btn {
      width: 55px;
      height: 53px;
      margin-top: -104px;
      background: #fff;
      margin-left: 284px;
      position: absolute;
      border: 1px solid #fff;
      border-radius: 0px 4px 4px 0;
      box-shadow: inset 1px 0px 5px 5px #fff;

      span {
        font-size: 30px;
        background: #fff;
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
      margin-top: -35px;
      margin-left: 20px;
      font-size: 1.3rem;
      border-radius: 4px;
      position: absolute;
      background: #082756;
    }
  }
}
</style>