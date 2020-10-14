<template>
  <div id="nav-bar">
    <el-menu :default-active="activeIndex"
             text-color="#909399"
             @select="handleSelect">
      <el-menu-item v-for="(item, index) in allNavList"
                    :key="index"
                    :index="item.path">
        <svg class="iconfont-symbol"
             aria-hidden="true">
          <use :xlink:href="'#' + item.class + (activeIndex === item.path ? 'xuanzhong' : 'weixuanzhong')"></use>
        </svg>
        <span class="title"
              slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      navList: [],
      allNavList: [
        {
          class: 'law-iconfaguiduibi-',
          name: '法规对比',
          path: '/regulations-contrast',
          enableIdentity: [0, -1]
        }
      ],
      activeIndex: '/regulations-contrast'
    }
  },
  computed: {
    ...mapGetters({
      userInfo: 'userInfo'
    })
  },
  watch: {
    '$route': {
      handler (val) {
        this.setActiveIndex()
      },
      deep: true
    },
    userInfo: {
      handler (val) {
        this.navList = this.getNavList()
      },
      deep: true
    }
  },
  created () {
    this.activeIndex = window.location.pathname
    this.navList = this.getNavList()
  },
  mounted () {
    this.setActiveIndex()
  },
  methods: {
    getNavList () {
      // identity 表示登录用户身份：0-平台，1-商家/店铺
      // enableIdentity 表示模块允许被哪些用户访问
      return this.allNavList.filter(el => {
        return el.enableIdentity.indexOf(this.userInfo.identity) > -1
      })
    },
    setActiveIndex () {
      let { path } = this.$route
      this.activeIndex = '/' + path.split('/')[1]
    },
    handleSelect (val) {
      this.$router.push(val)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#nav-bar {
  background: $primary-bg-color-nav;
  user-select: none;
  z-index: 1000;
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 50px;
  overflow: hidden;
  .iconfont {
    font-size: 20px !important;
    margin: 0 5px 0 0;
  }
  .title {
    font-weight: bold;
    padding-left: 15px;
  }
}
</style>
<style lang="scss">
@import "@/styles/index.scss";
#nav-bar {
  background: $primary-bg-color-nav;
  transition: 0.3s;
  border-right: 1px solid $box-border-color;
  &:hover {
    width: 140px;
    .el-menu {
      .el-menu-item {
        color: $default-text-inverse-color;
      }
    }
  }
  .el-menu {
    border: none !important;
    outline: none !important;
    .el-menu-item {
      padding: 0 12px !important;
      background: $primary-bg-color-nav;
      &:hover {
        background: $primary-bg-color-nav-act !important;
      }
      i {
        margin-right: 15px !important;
      }
      i,
      .title {
        color: $default-text-color-nav;
      }
    }
    .el-menu-item.is-active {
      background: $primary-bg-color-nav-act;
      i,
      .title {
        color: $default-text-inverse-color;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 4px;
        background: $default-text-inverse-color;
      }
    }
  }
}
</style>
