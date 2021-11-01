<template>
  <div>
    <Header :title="title"/>
    <Button @button-click="handleClick"/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Button from '../components/Button'
export default {
  name: 'mainPage',
  components: {
    Header,
    Button
  },
  data () {
    return {
      title: '这是一个标题'
    }
  },
  methods: {
    handleClick (val) {
      this.title = val
    }
  }
}
</script>

<style lang="scss" scoped></style>
