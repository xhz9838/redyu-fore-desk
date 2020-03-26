<template>
  <div id="content" class="app-content">
    <!--loading animate-->
    <div id="loading" class="butterbar active hide">
      <span class="bar"></span>
    </div>
    <!-- / aside -->

    <a class="off-screen-toggle hide"></a>
    <main class="app-content-body animated fadeIn">
      <div class="hbox hbox-auto-xs hbox-auto-sm">
        <div class="col center-part">
          <header class="bg-light lter wrapper-md">
            <h1 class="m-n font-thin h3 text-black l-h">标签 {{$route.params.tagName}} 下的文章</h1>
          </header>
          <div class="wrapper-md" id="post-panel">
            <ol class="breadcrumb bg-white-pure" itemscope>
              <li>
                <nuxt-link
                  to="/"
                  itemprop="breadcrumb"
                  title
                  data-toggle="tooltip"
                  data-original-title="返回首页"
                >
                  <span class="home-icons">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-home"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </span>首页
                </nuxt-link>
              </li>
              <li class="active">{{$route.params.tagName}}</li>
            </ol>
            <!-- 输出文章 TODO:整合该部分代码-->

            <div v-for="(archive, index) in archivePageInfo.list" :key="index" class="blog-post">
              <div class="single-post panel">
                <div class="index-post-img">
                  <router-link :to="'/archives/'+archive.url">
                    <img :src="archive.thumbnail" width="800" height="300" class="img-full lazy" />
                  </router-link>
                </div>
                <div class="post-meta wrapper-lg">
                  <h2 class="m-t-none text-ellipsis index-post-title text-title">
                    <router-link :to="'/archives/'+archive.url">{{archive.title}}</router-link>
                  </h2>
                  <p class="summary l-h-2x text-muted">{{archive.summary}}...</p>
                  <div class="line line-lg b-b b-light"></div>
                  <div class="text-muted post-item-foot-icon text-ellipsis list-inline">
                    <li>
                      <span class="m-r-sm right-small-icons">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                      </span>
                      <a href="#">Mr. Xu</a>
                    </li>

                    <li>
                      <span class="right-small-icons m-r-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-clock"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                      </span>
                      {{archive.createTime}}
                    </li>
                    <li>
                      <span class="right-small-icons m-r-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16px"
                          height="16px"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-message-square"
                        >
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                      </span>
                      <a
                        href="/comment"
                      >{{archive.commentCount==0?'暂无评论':archive.commentCount+'条评论'}}</a>
                    </li>
                  </div>
                  <!--text-muted-->
                </div>
                <!--post-meta wrapper-lg-->
              </div>

              <!--panel/panel-small-->
            </div>
            <!--分页 按钮-->
            <el-pagination
              :pager-count="5"
              background
              class="pagination"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="archivePageInfo.pageSize"
              :hide-on-single-page="true"
              layout="prev, pager, next"
              :total="archivePageInfo.total"
            ></el-pagination>

            <style>
  .page-navigator > li > a,
  .page-navigator > li > span {
    line-height: 1.42857143;
    padding: 6px 12px;
  }
            </style>
          </div>
        </div>
        <!-- 右侧栏-->
        <Sidebar />
      </div>
    </main>

    <!-- footer -->
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
export default {
  components: {
    Sidebar
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push("/tag/" + this.$route.params.tagName + "/" + val);
    }
  },
  async asyncData({ app, route }) {
    let { data } = await app.$request.archivesBytagName({
      pageNum: 1,
      tagName: route.params.tagName
    });
    return { archivePageInfo: data.data };
  }
};
</script>

<style>
</style>