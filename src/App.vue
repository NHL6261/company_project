<template>
  <div>
    <router-view></router-view>
    <Page_list v-show="$route.meta.isShowList"></Page_list>
    <fixed v-show="$route.meta.isShowList" :page="'Page_list'"></fixed>
  </div>
</template>

<script type="text/ecmascript-6">
import Page_list from './components/Page_list'
import fixed from './components/Fixed'
  export default {
    components:{
      Page_list,
      fixed
    },
    watch:{
    '$route':function(to,from){
　    document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }

  }
</script>

<style lang="stylus" scoped>

 
</style>
