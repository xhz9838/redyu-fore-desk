<template>
  <archivePage :archiveInfo="archiveInfo"/>
</template>

<script>
import archivePage from "@/components/archivePage";
export default {
  components: {
    archivePage
  },
  data() {
    return {
      archiveInfo:{}
    }
  },
  async asyncData({ app, route }) {
    let { data } = await app.$request.archiveForPage({
      pageNum:  1,
      pageSize: 5
    });
    return {archiveInfo:data.data}
  }
};
</script>

<style>
</style>