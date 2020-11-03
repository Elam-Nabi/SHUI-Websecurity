<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>