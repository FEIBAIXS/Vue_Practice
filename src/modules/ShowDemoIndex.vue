<template>
  <div>
    <ShowDemoHeader header_btn_title="返回首页" header_demo_name="Vue project 示例展示" header_btn_url="/"/>
    <div class="container">
      <ButtonShowDemo btn_demoName="Demo1" btn_url="/ShowDemo/Demo1" />
      <ButtonShowDemo btn_demoName="Demo2" btn_url="/ShowDemo/Demo2" />
    </div>
  </div>
</template>

<script>
  import ButtonCommon from 'components/Button_Common.vue'
  import ButtonToLeft from 'components/Button_ToLeft.vue'
  import ButtonShowDemo from 'components/Button_ShowDemo.vue'
  import ShowDemoHeader from 'components/ShowDemo_Header.vue'
  export default {
    components: {
      ButtonCommon,
      ButtonToLeft,
      ButtonShowDemo,
      ShowDemoHeader
    }

  }
</script>

<style scoped>

  .container {

  }
</style>
