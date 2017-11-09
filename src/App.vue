<template>
  <div class="root">
    <router-view class="simple-demo"/>
    <iframe
      class="mock-server"
      id="mock-server"
      name="mock-server"
      src="http://api.wangfeia.com/mock-server/"
      frameborder="0"
    />
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html,
  body,
  .root {
    height: 100%;
    background: #f4f4f4;
  }

  .root {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
  }

  .simple-demo {
    /*flex: 1;*/
    padding: 5px;
  }

  .mock-server {
    flex: 1;
    margin-top: 20px;
  }
</style>
