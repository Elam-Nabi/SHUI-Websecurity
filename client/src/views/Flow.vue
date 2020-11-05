<template>
  <div class="flow-container">
    <img class="top-logo" :src="require(`../assets/shuiredlogo.jpg`)" />
    <div></div>
    <div v-for="item in items" :key="item._id">
      <div class="description-container">
        <div class="item-container">
          <h6>{{ item.date | moment("dddd MMMM D, h:mm") }}</h6>
          <p>
            {{ item.description }}
          </p>
          <div></div>
          <hr class="line" />
          <h4>Chupacabra</h4>
        </div>
        <div class="tags-container">
          <h5>#stockholm</h5>
          <h5>#tram</h5>
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
        v-model="description"
        type="text"
        placeholder="What's on your stream?"
      />
    </form>
    <button @click="addItem" :disabled="!description">Add streams</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Flow",
  data() {
    return {
      items: [],
      description: "",
    };
  },
  async mounted() {
    const response = await axios.get("api/FlowItems/");
    this.items = response.data;
  },
  methods: {
    async addItem() {
      const response = await axios.post("api/FlowItems/", {
        description: this.description,
      });

      this.items.push(response.data);
      this.description = "";
    },
    async removeItem(item, i) {
      await axios.delete("api/FlowItems/" + item._id);
      this.items.splice(i, 1);
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
    position: fixed;
    margin-left: 20px;
  }

  .description-container {
    margin: 10px;
    display: grid;
    margin-top: 10px;
    align-items: center;
    justify-content: center;

    .item-container {
      width: 335px;
      height: 130px;
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
        width: 23px;
        margin-top: 50px;
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
        font-weight: 400;
        color: #00b2ff;
        display: inline-block;
      }
    }
    .border-bottom {
      width: 30px;
      height: 30px;
      margin-top: 130px;
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
    position: absolute;
    text-align: center;
    border-radius: 3px;
    letter-spacing: 0.1rem;
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
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 350px;
  font-weight: bold;
  border-radius: 4px;
  background: #fff;
}
</style>