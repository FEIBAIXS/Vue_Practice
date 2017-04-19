<template>
  <span class="btn-common" v-on:click="btnClick">{{ btnContent }}</span>
</template>

<script>
  export default {
    props: ['btnContent', 'url'],
    data () {
      return {
        content: this.btnContent
      }
    },
    methods: {
      btnClick: function (e) {
        window.location = this.url
      }
    }
  }
</script>

<style scoped>
  .btn-common {
    background-color: #286090;
    display: inline-grid;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
  }

  .btn-common:hover {
    background-color: #007acc;
  }</style>
