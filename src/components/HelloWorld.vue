<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
  export default {
    props: ['proptitle', 'propcontent'],
    data () {
      return {
        title: this.proptitle,
        content: this.propcontent
      }
    }
  }
</script>
