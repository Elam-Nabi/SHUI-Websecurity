<template>
  <div class="flow-container">
    <Settings :toggleOpen="toggleOpen" />
    <img
      class="top-logo"
      @click="toggleSettings"
      :src="require(`../assets/shuiredlogo.jpg`)"
    />
    <div class="stream-container" v-for="item in items" :key="item._id">
      <div class="description-container">
        <div class="item-container">
          <h6>{{ item.date | moment("dddd MMMM D, h:mm") }}</h6>
          <p>
            {{ item.description }}
          </p>
          <hr class="line" />
          <h4>Chupacabra</h4>
        </div>
        <div class="tags-container">
          <h5>#{{ item.tags }}</h5>
        </div>
        <img
          class="border-bottom"
          :src="require(`../assets/borderbottom.jpg`)"
        />
      </div>
    </div>
    <form @submit.prevent>
      <input
        class="input-description"
        v-model="input.description"
        type="text"
        placeholder="What's on your stream?"
      />
      <input
        type="text"
        v-model="input.tags"
        class="input-tags"
        placeholder="Do you want to add a tag?"
      />
    </form>
    <button @click="addItem()" :disabled="!input">Add streams</button>
  </div>
</template>

<script>
import Settings from "./Settings";
import axios from "axios";
export default {
  name: "Flow",
  components: {
    Settings,
  },
  data() {
    return {
      items: [],
      description: "",
      tags: "",
      toggleOpen: false,
      input: {
        description: null,
        tags: null,
      },
    };
  },
  async mounted() {
    const response = await axios.get("/api/FlowItems");
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const postReq = await axios.post("api/FlowItems/", this.input);
      this.items.push(postReq.data);
      this.input = {};
    },
    async removeItem(item, i) {
      await axios.delete("api/FlowItems/" + item._id);
      this.items.splice(i, 1);
    },
    toggleSettings() {
      this.toggleOpen = !this.toggleOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.flow-container {
  display: grid;
  align-items: center;
  justify-content: center;

  .top-logo {
    z-index: 2;
    position: fixed;
    margin-left: 20px;
    border-radius: 0 0 3px 3px;
  }

  .description-container {
    margin: 10px;
    display: grid;
    margin-top: 10px;
    align-items: center;
    justify-content: center;

    .item-container {
      width: 335px;
      height: 170px;
      background: white;

      h6 {
        font-size: 12px;
        margin-top: 10px;
        margin-left: 10px;
        color: lightgray;
      }

      p {
        font-size: 16px;
        margin-top: 10px;
        margin-left: 10px;
      }
      hr {
        height: 3px;
        width: 23px;
        margin-top: 48px;
        margin-left: 15px;
        position: absolute;
      }

      h4 {
        font-size: 14px;
        margin-top: 40px;
        margin-left: 45px;
        font-style: italic;
        font-weight: bolder;
      }

      h6,
      p,
      h4 {
        background: white;
        font-family: "PT Sans", sans-serif;
      }
    }
    .tags-container {
      margin-top: 4px;
      margin-left: 176px;

      h5 {
        margin: 2px;
        font-size: 14px;
        margin-left: 43px;
        font-weight: 400;
        color: #00b2ff;
        display: inline-block;
      }
    }
    .border-bottom {
      width: 30px;
      height: 30px;
      margin-top: 170px;
      margin-left: 305px;
      position: absolute;
    }
  }

  .input-description {
    width: 250px;
    color: #fff;
    outline: none;
    padding: 10px;
    font-size: 15px;
    margin-left: 50px;
    margin-top: 290px;
    text-align: center;
    border-radius: 3px;
    position: absolute;
    letter-spacing: 0.1rem;
    border: 2px solid #fff;
  }
  ::placeholder {
    color: #fff;
    font-family: "Cantarell", sans-serif;
  }
}

.input-tags {
  width: 250px;
  color: #fff;
  outline: none;
  padding: 10px;
  font-size: 15px;
  margin-left: 50px;
  margin-top: 240px;
  text-align: center;
  border-radius: 3px;
  position: absolute;
  letter-spacing: 0.1rem;
  border: 2px solid #fff;
}
::placeholder {
  color: #fff;
  font-family: "Cantarell", sans-serif;
}

button {
  width: 250px;
  height: 50px;
  margin: 50px;
  border: none;
  outline: none;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 350px;
  border-radius: 4px;
  background: #fff;
  font-weight: bolder;
}
</style>