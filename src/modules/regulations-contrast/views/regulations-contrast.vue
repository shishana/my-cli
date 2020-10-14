<template>
  <div id="regulations-contrast">
    <keep-alive include="regulations-contrast-index">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'regulations-contrast',
  components: {
  },
  data () {
    return {
    }
  },
  watch: {
  },
  computed: {
  },
  mounted () {

  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/index.scss';
#regulations-contrast{
  background: $primary-bg-color;
}
</style>
