<template>
  <div id="regulations-contrast-index"
       v-loading="loading"
       element-loading-text="加载中..."
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(255, 255, 255, 0.7)">
    <b-layout :border="false"
              placement="top"
              space="138px">
      <div slot="one">
        <div class="title">法规对比</div>
      </div>
      <div slot="first"
           class="header">
        <regulations-contrast-filter @search="handleSearch"></regulations-contrast-filter>
      </div>
      <div slot="last"
           class="list">
        <b-layout slot="last"
                  mode="vertical"
                  placement="bottom"
                  space="50px"
                  :border="false">
          <customPaginator slot="last"
                           ref="paginator"
                           class="inventory-paginator"
                           background="background"
                           @pageChange="handlePageChange"></customPaginator>
        </b-layout>
      </div>
    </b-layout>
  </div>
</template>

<script>
import BLayout from '@/layouts/BinaryLayout'
import CustomPaginator from '@/components/public/CustomPaginator'
export default {
  name: 'regulations-contrast-index',
  components: {
    BLayout,
    CustomPaginator
  },
  filters: {},
  props: {},
  data () {
    return {
      loading: false,
      filterData: null,
      page: 1,
      page_size: 10,
      regulationsContrastList: [],
      highlightKeywords: ''
    }
  },
  computed: {},
  watch: {},
  created () { },
  beforeDestroy () { },
  methods: {
    handlePageChange (page) {
      this.page = page.page
      this.page_size = page.pagesize
      this.getLawsList()
    },
    clickComparisonBtn () { },
    handleSearch (val) {
      this.filterData = val
      if (this.filterData.sort) {
        this.page = 1
        this.getLawsList()
        this.$refs.paginator.updatePage(this.page_size, 1, [10, 20, 30, 40])
      }
    },
    getLawsList () {
      var params = {
        search_type: this.filterData.radio,
        sort_type: this.filterData.sort,
        page: this.page,
        page_size: this.page_size
      }
      if (this.filterData.input) {
        params.keywords = this.filterData.input
      }
      this.loading = true
      this.$api.getLawsList(params).then(res => {
        this.highlightKeywords = this.filterData.input
        sessionStorage.setItem('filterData', JSON.stringify(params))
        this.regulationsContrastList = res.data.data
        this.$refs.paginator.updateTotal(res.data.total)
        this.loading = false
      }).catch(err => {
        this.loading = false
        this.$msgMnger.httpError(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
#regulations-contrast-index {
  height: 100%;
  box-sizing: border-box;
  background: white;
  .title {
    font-size: 14px;
    font-weight: 400;
    color: $sedondary-text-color;
    line-height: 20px;
    margin-bottom: 15px;
  }
  .regulations-contrast-list {
    height: 100%;
  }
  .header {
    background: $box-bg-color;
  }
  .list {
    height: calc(100% - 24px);
    background: $box-bg-color;
    margin-top: 24px;
    .inventory-paginator {
      text-align: left;
    }
  }
}
</style>
