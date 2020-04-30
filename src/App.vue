<template>
  <div id="app">
    <button @click="opentoast()">我是个按钮</button>
  </div>
</template>


<script>

export default {
  methods:{
    opentoast(){
       this.$toast("hello world",1000)
    }
  }
}
</script>


<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
#app {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
