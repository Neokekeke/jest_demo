<template>
  <div class="button" @click="handleClick">
    按钮
  </div>
</template>

<script>
export default {
  name: 'Button',
  methods: {
    handleClick () {
      this.$emit('button-click', '666')
      this.handleSecondClcik()
    },
    handleSecondClcik () {
      setTimeout(() => {
        this.$emit('button-click', 'abc')
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
