<template>
  <!--首页右侧栏-->
  <aside class="asideBar col w-md bg-white-only bg-auto no-border-xs" role="complementary">
    <div id="sidebar">
      <section id="tabs-4" class="widget widget_tabs clear">
        <div class="nav-tabs-alt no-js-hide">
          <ul class="nav nav-tabs nav-justified box-shadow-bottom-normal tablist" role="tablist">
            <li data-index="0" class="active" role="presentation">
              <a
                href="#widget-tabs-4-hots"
                role="tab"
                aria-controls="widget-tabs-4-hots"
                aria-expanded="true"
                data-toggle="tab"
              >
                <div class="sidebar-icon wrapper-sm">
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
                    class="feather feather-thumbs-up"
                  >
                    <path
                      d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                    />
                  </svg>
                </div>
                <span class="sr-only">热门文章</span>
              </a>
            </li>
            <li role="presentation" data-index="1">
              <a
                href="#widget-tabs-4-comments"
                role="tab"
                aria-controls="widget-tabs-4-comments"
                aria-expanded="false"
                data-toggle="tab"
              >
                <div class="sidebar-icon wrapper-sm">
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
                </div>
                <span class="sr-only">最新评论</span>
              </a>
            </li>
            <li data-index="2" role="presentation">
              <a
                href="#widget-tabs-4-random"
                role="tab"
                aria-controls="widget-tabs-4-random"
                aria-expanded="false"
                data-toggle="tab"
              >
                <div class="sidebar-icon wrapper-sm">
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
                    class="feather feather-gift"
                  >
                    <polyline points="20 12 20 22 4 22 4 12" />
                    <rect x="2" y="7" width="20" height="5" />
                    <line x1="12" y1="22" x2="12" y2="7" />
                    <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                    <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                  </svg>
                </div>
                <span class="sr-only">随机文章</span>
              </a>
            </li>
            <span class="navs-slider-bar"></span>
          </ul>
        </div>
        <div class="tab-content">
          <!--热门文章-->
          <div id="widget-tabs-4-hots" class="tab-pane fade in wrapper-md active" role="tabpanel">
            <h5 class="widget-title m-t-none text-md">热门文章</h5>
            <ul class="list-group no-bg no-borders pull-in m-b-none">
              <li v-for="(archive,index) in archiveList" :key="index" class="list-group-item">
                <nuxt-link :to="archive.url" class="pull-left thumb-sm m-r">
                  <img :src="randomImg()" class="img-40px normal-shadow img-square" />
                </nuxt-link>

                <div class="clear">
                  <h4 class="h5 l-h text-second">
                    <nuxt-link
                      :to="'/archives/'+archive.url"
                      :title="archive.title"
                    >{{archive.title}}</nuxt-link>
                  </h4>
                  <small class="text-muted post-head-icon">
                    <span class="meta-date">
                      <i class="fontello fontello-eye" aria-hidden="true"></i>
                      <span class="sr-only">浏览次数:</span>
                      <span class="meta-value">{{archive.visits}}</span>
                    </span>
                  </small>
                </div>
              </li>
            </ul>
          </div>
          <!--最新评论-->
          <div
            id="widget-tabs-4-comments"
            class="tab-pane fade wrapper-md no-js-show"
            role="tabpanel"
          >
            <h5 class="widget-title m-t-none text-md">最新评论</h5>
            <ul class="list-group no-borders pull-in auto m-b-none no-bg">
              <li v-for="(comment, index) in hotComment" :key="index" class="list-group-item">
                <a
                  :href="baseUrl+'/'+comment.postUrl+'#comment-'+comment.id"
                  class="pull-left thumb-sm avatar m-r"
                >
                  <img
                    nogallery
                    :src="randomImg()"
                    class="img-40px photo img-square normal-shadow"
                  />
                </a>
                <a :href="baseUrl+'/'+comment.postUrl+'#comment-'+comment.id" class="text-muted">
                  <!--<i class="iconfont icon-comments-o text-muted pull-right m-t-sm text-sm" title="" aria-hidden="true" data-toggle="tooltip" data-placement="auto left"></i>
                  <span class="sr-only"></span>-->
                </a>
                <div class="clear">
                  <div class="text-ellipsis">
                    <a :href="baseUrl+'/'+comment.postUrl+'#comment-'+comment.id" :title="comment.author">{{comment.author}}</a>
                  </div>
                  <small class="text-muted">
                    <span>{{comment.content.length>20?comment.content.substring(0,20):comment.content}}</span>
                  </small>
                </div>
              </li>
            </ul>
          </div>
          <!--随机文章-->

          <div
            id="widget-tabs-4-random"
            class="tab-pane fade wrapper-md no-js-show"
            role="tabpanel"
          >
            <h5 class="widget-title m-t-none text-md">随机文章</h5>
            <ul class="list-group no-bg no-borders pull-in">
              <li v-for="(archive,index) in randomArchiveList" :key="index" class="list-group-item">
                <nuxt-link :to="archive.url" class="pull-left thumb-sm m-r">
                  <img :src="randomImg()" class="img-40px normal-shadow img-square" />
                </nuxt-link>

                <div class="clear">
                  <h4 class="h5 l-h text-second">
                    <nuxt-link
                      :to="'/archives/'+archive.url"
                      :title="archive.title"
                    >{{archive.title}}</nuxt-link>
                  </h4>
                  <small class="text-muted post-head-icon">
                    <span class="meta-date">
                      <i class="fontello fontello-eye" aria-hidden="true"></i>
                      <span class="sr-only">浏览次数:</span>
                      <span class="meta-value">{{archive.visits}}</span>
                    </span>
                  </small>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <!--博客信息-->
      <section id="blog_info" class="widget widget_categories wrapper-md clear">
        <h5 class="widget-title m-t-none text-md">博客信息</h5>
        <ul class="list-group box-shadow-wrap-normal">
          <li class="list-group-item text-second">
            <span class="blog-info-icons">
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
                class="feather feather-award"
              >
                <circle cx="12" cy="8" r="7" />
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
              </svg>
            </span>
            <span class="badge pull-right">{{blogInformation.postCount}}</span>文章数目
          </li>
          <li class="list-group-item text-second">
            <span class="blog-info-icons">
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
                class="feather feather-message-circle"
              >
                <path
                  d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                />
              </svg>
            </span>
            <span class="badge pull-right">{{blogInformation.commentCount}}</span>评论数目
          </li>
          <li class="list-group-item text-second">
            <span class="blog-info-icons">
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
                class="feather feather-calendar"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </span>
            <span class="badge pull-right">{{getOperatingDay}}天</span>运行天数
          </li>
          <li class="list-group-item text-second">
            <span class="blog-info-icons">
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
                class="feather feather-activity"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </span>
            <span class="badge pull-right">{{timeage()}}前</span>最后活动
          </li>
        </ul>
      </section>
      <!--非文章页面-->
      <section id="tag_cloud-2" class="widget widget_tag_cloud wrapper-md clear">
        <h5 class="widget-title m-t-none text-md">标签云</h5>
        <div class="tags l-h-2x">
          <nuxt-link
            v-for="(tag, index) in tagList"
            :key="index"
            :to="'/tag/'+tag.slugName"
            class="label badge"
            title
            data-toggle="tooltip"
            data-original-title="eladmin"
          >{{tag.name}}</nuxt-link>
        </div>
      </section>
      <!--成长历史信息-->
      <section id="tag_cloud-2" class="widget widget_tag_cloud wrapper-md clear">
        <h3 class="widget-title m-t-none text-md">成长历史</h3>
        <div class="tags l-h-2x">
          <nuxt-link
            v-for="(item, index) in history"
            :key="index"
            :to="'/'+item"
            class="label badge"
            title
            data-toggle="tooltip"
            :data-original-title="item+'年的博文'"
          >{{item}}年</nuxt-link>
        </div>
      </section>
    </div>
  </aside>
</template>

<script>
import {getFinalActivity} from "~/assets/js/utils.js";
export default {
  name: "sidebar",
  data() {
    return {
       baseUrl: process.env.deskUrl+"/archives",
      allImages: 9,
      archiveList: [],
      randomArchiveList: [],
      blogInformation: {},
      tagList: [],
      history: [],
      hotComment:[]
    };
  },

  methods: {
    randomImg() {
      var randIndex = Math.floor(Math.random() * this.allImages + 1);
      return require("~/static/img/" + randIndex + ".jpg");
    },
      timeage() {
      return getFinalActivity(this.blogInformation.finalActivity);
    }
  },

  // async asyncData({app}){
  //   let{data : hotArchive} = await app.$request.hotArchive();
  //   let{data : randomArchive} = await app.$request.randomArchive();
  //   let{data : blogInformation} = await app.$request.blogInformation();
  //   let{data : tagListFn} = await app.$request.tagListFn();
  //   let{data : historyFn} = await app.$request.historyFn();
  //   let{data : hotComment} = await app.$request.hotComment();
  //   return {
  //     archiveList:hotArchive.data,
  //     randomArchive:randomArchive.data,
  //     blogInformation:blogInformation.data,
  //     tagListFn:tagListFn.data,
  //     historyFn:historyFn.data,
  //     hotComment:hotComment.data
  //   }
  // },

  async mounted() {
    let { data } = await this.$request.hotArchive();
    this.archiveList = data.data;

    let { data: randomArchive } = await this.$request.randomArchive();
    this.randomArchiveList = randomArchive.data;

    let { data: blogInformationData } = await this.$request.blogInformation();
    this.blogInformation = blogInformationData.data;

    let { data: tablistData } = await this.$request.tagListFn();
    this.tagList = tablistData.data;

    let { data: historyData } = await this.$request.historyFn();
    this.history = historyData.data;

    let{data:hotComment} = await this.$request.hotComment()
    this.hotComment=hotComment.data
  },
  computed: {
    getOperatingDay() {
      if (this.blogInformation.operatingTime > 365) {
        return (
          Math.floor(this.blogInformation.operatingTime / 365) +
          "年" +
          (this.blogInformation.operatingTime % 365)
        );
      }
      return this.blogInformation.operatingTime;
    },
  
  }
};
</script>

<style>
</style>