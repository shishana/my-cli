<template>
  <div class="layouts-outside-div">
    <header-bar :fixed="true"></header-bar>
    <div class="admin-content">
      <nav-menu-bar></nav-menu-bar>
      <slot/>
    </div>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import NavMenuBar from '@/components/NavMenuBar'

export default {
  components: {
    NavMenuBar,
    HeaderBar
  }
}
</script>

<style lang="scss" scoped>
.admin-content{
  // min-width: 1080px;
  box-sizing: border-box;
  height: 100%;
  padding-top: 60px;
  position: relative;
}
</style>
<style lang="scss">
@import '@/styles/index.scss';
.admin-content{
  >div{
    &:nth-child(2){
      padding: 20px 24px 24px 75px;
      height: 100%;
      box-sizing: border-box;
      background: $primary-bg-color;
    }
  }
}
</style>
