<template>
 <PostListByCname :archivePageInfo="archivePageInfo"/>
</template>

<script>
import PostListByCname from '@/components/postListByCname'
export default {
   components: {
    PostListByCname
  },
    data() {
    return {
      archivePageInfo:{}
    }
  },

    async asyncData({ app, route }) {
    let { data } = await app.$request.archivesByCname({
       pageNum: route.params.pageNum,
      cname: route.params.cname
    });
    return { archivePageInfo: data.data };
  }
}
</script>

<style>

</style>