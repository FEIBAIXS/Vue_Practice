<template>
  <div class="header">
    <span v-bind:title="btn_title" class="btn_toLeft" v-on:click="btnClick">
    <img class="btn_toLeft" src="../assets/img/toLeft.png">
  </span>
    <span class="header_title">{{ demo_name }}</span>
  </div>
</template>

<script>
  import ButtonToLeft from 'components/Button_ToLeft.vue'
  export default {
    props: ['header_btn_title', 'header_demo_name', 'header_btn_url'],
    data () {
      return {
        btn_title: this.header_btn_title,
        demo_name: this.header_demo_name,
        btn_url: this.header_btn_url
      }
    },
    components: {
      ButtonToLeft
    },
    methods: {
      btnClick: function (e) {
        window.location = this.header_btn_url
      }
    }
  }
</script>

<style scoped>
  .header {
    height: 60px;
    line-height: 60px;
    background: #222;
  }

  .header_title {
    color: #fff;
    margin-left: 5px;
    font-size: 20px;
    line-height: 30px;
    vertical-align: middle;
  }

  .btn_toLeft {
    line-height: 30px;
    vertical-align: middle;
    cursor: pointer;
    display: inline-grid;
    margin: 5px;
  }

  img {
    width: 30px;
  }
</style>
