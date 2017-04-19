<template>
  <span v-bind:title="title" class="btn_toLeft" v-on:click="btnClick">
    <img class="btn_toLeft" src="../assets/img/toLeft.png">
  </span>
</template>

<script>
  export default {
    props: ['btn_title', 'btn_url'],
    data () {
      return {
        title: this.btn_title
      }
    },
    methods: {
      btnClick: function (e) {
        window.location = this.btn_url
      }
    }
  }
</script>

<style scoped>
  .btn_toLeft {
    line-height: 30px;
    vertical-align: middle;
    cursor: pointer;
    display: inline-grid;
  }

  img {
    width: 30px;
  }
</style>
