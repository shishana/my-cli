<!--
 * @Author: your name
 * @Date: 2019-11-12 17:14:30
 * @LastEditTime: 2019-11-23 16:21:53
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \dpa_web\src\App.vue
 -->
<template>
  <div id="app">
    <component :is="layout">
      <keep-alive include="regulations-contrast,policy-consult">
        <router-view />
      </keep-alive>
    </component>
  </div>
</template>

<script>
const defaultLayout = 'fullPage'

export default {
  name: 'App',
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        // this.statsToCNZZ()
        var breadCrumbList = {
          meta: from.meta,
          path: from.path
        }
        if (Object.keys(from.meta).length) {
          sessionStorage.setItem('setBreadCrumb', JSON.stringify(breadCrumbList))
        }
      },
      deep: true
    }
  },
  created () {
    this.$msgMnger.bindContext(this)
    let _search = window.location.search
    let _tmpTokens = _search.split('?t=')
    if (_tmpTokens.length > 1) {
      let _token = _tmpTokens[1]
      this.$store.dispatch('AUTH_TOKEN', _token)
      window.location.href = '/'
    }
  },
  mounted () {
    // 因为没有获取用户信息接口、只是模拟、所以暂时注释掉
    // this.getUserInfo()
  },
  methods: {
    getUserInfo () {
      if (!this.$store.getters.isAuthenticated) {
        return
      }
      this.$store.dispatch('GET_USER_INFO', this)
    }
  }
}
</script>

<style lang="scss">
@import "@/styles/index.scss";
#app {
  min-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-family: "PingFangSC-light", "Microsoft YaHei", "Avenir", Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*user-select: none;*/
  // text-align: center;
  color: $default-text-color;
  font-size: 14px;
  .el-tooltip {
    outline: none !important;
  }
}
.el-select-dropdown {
  .el-scrollbar {
    .el-scrollbar__wrap {
      margin-bottom: 0 !important;
    }
  }
}
// el-table的整体样式调整
.el-table {
  thead {
    > tr {
      > th {
        padding: 10px 0 !important;
        background: rgb(250, 250, 250);
        .cell {
          color: $default-text-color;
        }
      }
    }
  }
  .cell {
    padding: 0 32px !important;
  }
}
.el-picker-panel {
  left: 100px !important;
}
.el-pagination {
  .el-pagination__total,
  input,
  .number {
    font-size: 12px !important;
  }
  input {
    border-radius: 6px !important;
  }
  .btn-prev,
  .btn-next,
  .number,
  .el-icon-more {
    background: transparent !important;
    border-radius: 6px !important;
    border: 1px solid rgba(217, 217, 217, 1) !important;
  }
  > button {
    margin-top: 2px !important;
    height: 26px !important;
  }
  .el-pager {
    padding-top: 2px;
    .number {
      font-weight: normal !important;
    }
    .active {
      background: $primary-color !important;
    }
    > li {
      height: 26px !important;
      line-height: 24px !important;
    }
  }
  .el-pagination__editor {
    width: 60px !important;
    height: 28px !important;
  }
}
</style>
