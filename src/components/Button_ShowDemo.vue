<template>
  <div class="btn_container" @click="btnClick">
    <div class="btn_title">{{ demoName }}</div>
    <img class="btn_img" src="../assets/img/项目.png"></img>
  </div>
</template>

<script>
  export default {
    props: ['btn_demoName', 'btn_url'],
    data () {
      return {
        demoName: this.btn_demoName
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
  .btn_container {
    background: #fee;
    width: 200px;
    height: 230px;
    float: left;
    margin: 10px;
    border-radius: 5px;
    box-shadow: 1px 2px 1px rgba(0,0,0,.15);
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }

  .btn_container:hover {
    background: #eee;
  }

  .btn_title {
    font-size: 20px;
    margin: 5px;
    font-weight: bold;
    text-align: left;
  }

  .btn_img {
    width: 100px;
    text-align: center;
    vertical-align: middle;
    margin-top: 35px;
  }
</style>
