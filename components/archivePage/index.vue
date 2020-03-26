<template>
  <div>
    <div id="content" class="app-content">
      <!--loading animate-->
      <div id="loading" class="butterbar active hide">
        <span class="bar"></span>
      </div>
      <!-- / aside -->

      <!-- <div id="content" class="app-content"> -->
      <a class="off-screen-toggle hide"></a>
      <main class="app-content-body animated fadeIn">
        <div class="hbox hbox-auto-xs hbox-auto-sm">
          <div class="col center-part">
            <header class="bg-light lter wrapper-md">
              <h1 class="m-n font-thin text-black l-h">知了</h1>
              <small class="text-muted letterspacing indexWords">优秀的判断力来自经验，但经验来自于错误的判断。</small>
            </header>
            <div class="wrapper-md" id="post-panel">
              <!--首页输出文章-->

              <div v-for="(archive, index) in archiveInfo.list" :key="index" class="blog-post">
                <div class="single-post panel">
                  <div class="index-post-img">
                    <a target="_blank" :href="'/archives/'+archive.url">
                      <img :src="archive.thumbnail" width="800" height="300" class="img-full lazy" />
                    </a>
                  </div>
                  <div class="post-meta wrapper-lg">
                    <h2 class="m-t-none text-ellipsis index-post-title text-title">
                      <a target="_blank" :href="'/archives/'+archive.url">{{archive.title}}</a>
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
                            <path
                              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                            />
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

              <el-pagination
                :pager-count="5"
                background
                class="pagination"
                @current-change="handleCurrentChange"
                :current-page="archiveInfo.pageNum"
                :page-size="archiveInfo.pageSize"
                :hide-on-single-page="true"
                layout="prev, pager, next"
                :total="archiveInfo.total"
              ></el-pagination>
            </div>
          </div>
          <Sidebar />
        </div>
      </main>
      <!-- footer -->
    </div>

    <!-- {{archiveList}} -->
  </div>
</template>

<script>
import Sidebar from "@/components/sidebar";
export default {
  name: "archivePage",
  components: {
    Sidebar
  },
  data() {
    return {
  
    };
  },
  props: {
    archiveInfo: {
      type: Object,
      default: { list: {} }
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.$router.push("/page/" + val);
    }
  },

};
</script>

<style>
.pagination {
  margin-left: 25%;
}
</style>
