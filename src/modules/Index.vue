<template>
  <div class="container">
    <img src="../assets/img/logo.png">
    <HelloWorld proptitle="A Vue Project" propcontent="This is a simple vue.js demo,thanks for watching!"></HelloWorld>
    <div><ButtonCommon btnContent="查看示例" url="/ShowDemo"/></div>
  </div>
</template>

<script>
  import HelloWorld from 'components/HelloWorld.vue'
  import ButtonCommon from 'components/Button_Common.vue'
  export default {
    components: {
      HelloWorld,
      ButtonCommon
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 60px;
    text-align: center;
  }
</style>
