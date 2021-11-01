<template>
  <div class="header">
    <span class="title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: '这是一个标题'
    }
  }
}
</script>

<style lang="scss" scoped></style>
