<template>
  <div class="flow-container">
    <img class="top-logo" :src="require(`../assets/shuiredlogo.jpg`)" />
    <div class="notification" v-for="(item, i) in data" :key="item._id">
      <p>
        <span class="tag is-primary"> {{ i + 1 }} </span>
        {{ item.description }}
      </p>
    </div>
  </div>
</template>

<script>
import { getFlowItems } from "../use/getFlowData";
export default {
  setup() {
    return getFlowItems();
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
    margin-left: 10px;
  }
}
</style>