<template>
  <div>
    <transition name="fade">
      <div v-show="show" class="toast">{{message}}</div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "leilei-toast",
  components: {},
  data() {
    return {
      message: "hello world",
      show: false
    };
  },

  computed: {},

  watch: {},

  methods: {
    changeShow() {
      this.show = !this.show;
    }
  },

  created() {},

  mounted() {}
};
</script>
<style lang='scss'>
@import url("index.css");
</style>