<template>
  <div id="header-bar"
       :class="{fixed: fixed}">
    <div class="top-left">
      <div class="logo"
           @click="toHome()">
        <h2 class="title-text-cn">test-cli</h2>
        <!-- <h2 class="title-text-en">Robotic Data Process Automation</h2> -->
      </div>
    </div>
    <div class="profile">
      <el-dropdown class="personal-center"
                   trigger="click"
                   @command="handleCommand">
        <span :class="roleClass">
          <span class="name">{{ accountTitle }}</span>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!-- <el-dropdown-item command="/change-pwd">修改密码</el-dropdown-item> -->
          <el-dropdown-item v-if="isAuthenticated"
                            command="logout">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['fixed'],
  components: {
  },
  data () {
    return {
      roleClass: 'user'
    }
  },
  computed: {
    ...mapGetters({
      isAuthenticated: 'isAuthenticated',
      userInfo: 'userInfo'
    }),
    accountTitle () {
      // return this.isAuthenticated ? '注销' : '未登录'
      return this.isAuthenticated ? this.userInfo.nickname : '未登录'
    }
  },
  mounted () {
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    clickEvent () {
    },
    handleCommand (command) {
      if (command === 'logout') {
        this.$confirm('注销后将跳转到授权登录页面？', '提示', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确 认',
          cancelButtonText: '取 消',
          type: 'warning'
        }).then(() => {
          if (this.isAuthenticated) {
            this.$store.dispatch('AUTH_LOGOUT').then(() => {
              this.$store.commit('DELETE_USER_INFO')
              window.location.href = '/login'
            })
          }
        }).catch(action => {
        })
      } else {
        this.$router.push(command)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#header-bar {
  height: 60px;
  background: $header-bg-color;
  box-sizing: border-box;
  padding: 0 35px 0 25px;
  color: $header-text-color;
  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
  }
  @include flex-horizontal-between-center;
  .top-left {
    width: 300px;
    .logo {
      float: left;
      cursor: pointer;
      padding: 10px 0 10px 50px;
      background: url("../assets/img/logo1.png") 0px center no-repeat;
      background-size: 43px 36px;
      h2 {
        padding: 0;
        margin: 0;
        font-weight: normal;
      }
      .title-text-cn {
        font-size: 16px;
        letter-spacing: 5px;
      }
      .title-text-en {
        font-size: 12px;
        font-family: "Hiragino Sans GB", Arial, sans-serif, "PingFang SC",
          "Helvetica Neue", Helvetica, "Microsoft YaHei", "微软雅黑";
        color: rgba(217, 218, 220, 0.45);
        letter-spacing: 1px;
        line-height: 17px;
      }
    }
  }
  .profile {
    @include flex-horizontal-around-center;
    .notice {
      margin-right: 20px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
    }
    .personal-center {
      @mixin role-style {
        display: inline-block;
        height: 30px;
        line-height: 30px;
        float: left;
        cursor: pointer;
        background-size: 22px 22px;
        color: #efefef;
        .name {
          padding-left: 28px;
        }
      }
      .user {
        background: url("../assets/img/portrait.png") 0px center no-repeat;
        @include role-style;
      }
      .admin {
        background: url("../assets/img/portrait.png") 0px center no-repeat;
        @include role-style;
      }
    }
  }
}
</style>
