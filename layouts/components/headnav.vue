<template>
  <aside id="aside" class="app-aside hidden-xs bg-white">
    <!--<aside>-->
    <div class="aside-wrap" layout="column">
      <div class="navi-wrap scroll-y scroll-hide" flex style>
        <!-- user -->
        <div class="clearfix hidden-xs text-center hide show" id="aside-user">
          <div class="dropdown wrapper vertical-wrapper">
            <div ui-nav>
              <a href="/cross.html">
                <span class="thumb-lg w-auto-folded avatar m-t-sm vertical-avatar">
                  <img src="http://img.redyu.run/1.jpg" class="img-full img-circle normal-shadow" />
                </span>
              </a>
            </div>
            <a href="#" data-toggle="dropdown" class="dropdown-toggle hidden-folded vertical-flex">
              <span class="clear">
                <span class="block m-t-sm">
                  <strong class="font-bold text-lt">Mr. Xu</strong>
                  <b class="caret"></b>
                </span>
                <span class="text-muted text-xs block">人心本无染，心静自然清。</span>
              </span>
            </a>
            <!-- dropdown -->
            <ul class="dropdown-menu animated fadeInRight w hidden-folded no-padder">
              <li class="wrapper b-b m-b-sm bg-info m-n">
                <span class="arrow top hidden-folded arrow-info"></span>
                <div>
                  <p>早上好，永远年轻，永远热泪盈眶</p>
                </div>
                <div class="progress progress-xs m-b-none dker">
                  <div
                    class="progress-bar bg-white"
                    data-toggle="tooltip"
                    data-original-title="时间已经度过33.33%"
                    style="width: 33.33%"
                  ></div>
                </div>
              </li>
            </ul>
            <!-- / dropdown -->
          </div>
        </div>
        <!-- / user -->

        <!-- nav -->
        <nav ui-nav class="navi clearfix">
          <ul class="nav">
            <!--index-->
            <div class="line dk hidden-folded"></div>
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>导航</span>
            </li>
            <!--主页-->
            <li>
              <nuxt-link to="/" class="auto">
                <span class="nav-icon">
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
                </span>
                <span>首页</span>
              </nuxt-link>
            </li>
            <!-- /主页 -->
            <li>
              <a target="_self" href="/github.html" class="auto">
                <span class="nav-icon">
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
                    class="feather feather-github"
                  >
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    />
                  </svg>
                </span>
                <span>仓库</span>
              </a>
            </li>
            <li>
              <a target="_self" href="/link.html" class="auto">
                <span class="nav-icon">
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
                    class="feather feather-heart"
                  >
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                    />
                  </svg>
                </span>
                <span>朋友</span>
              </a>
            </li>
            <li>
              <a target="_self" href="/message.html" class="auto">
                <span class="nav-icon">
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
                    class="feather feather-at-sign"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
                  </svg>
                </span>
                <span>留言</span>
              </a>
            </li>
            <li>
              <a target="_self" href="/archive.html" class="auto">
                <span class="nav-icon">
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
                    class="feather feather-archive"
                  >
                    <polyline points="21 8 21 21 3 21 3 8" />
                    <rect x="1" y="3" width="22" height="5" />
                    <line x1="10" y1="12" x2="14" y2="12" />
                  </svg>
                </span>
                <span>归档</span>
              </a>
            </li>
            <li class="line dk"></li>
            <!--Components-->
            <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>组成</span>
            </li>
            <!--分类category-->
            <li>
              <a class="auto">
                <span class="pull-right text-muted">
                  <i class="fontello icon-fw fontello-angle-right text"></i>
                  <i class="fontello icon-fw fontello-angle-down text-active"></i>
                </span>
                <!--                  <i class="glyphicon glyphicon-th"></i>-->
                <span class="nav-icon">
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
                    class="feather feather-grid"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                </span>

                <span>分类</span>
              </a>
              <ul class="nav nav-sub dk">
                <li class="nav-sub-header">
                  <a>
                    <span>分类</span>
                  </a>
                </li>
                <!--循环输出分类-->
                <li v-for="(category, index) in categoryList" :key="index">
                  <nuxt-link :to="'/category/'+category.slugName">
                    <b class="badge pull-right">{{category.postCount}}</b>
                    <span>{{category.name}}</span>
                  </nuxt-link>
                </li>
              </ul>
            </li>
            <!--独立页面pages-->
            <li>
              <a class="auto">
                <span class="pull-right text-muted">
                  <i class="fontello icon-fw fontello-angle-right text"></i>
                  <i class="fontello icon-fw fontello-angle-down text-active"></i>
                </span>
                <span class="nav-icon">
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
                    class="feather feather-file"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
                    <polyline points="13 2 13 9 20 9" />
                  </svg>
                </span>
                <span>页面</span>
              </a>
              <ul class="nav nav-sub dk">
                <li class="nav-sub-header">
                  <a data-no-instant>
                    <span>页面</span>
                  </a>
                </li>
                <!--这个字段不会被显示出来-->
                <!--循环输出独立页面-->
                <li>
                  <a href="/">
                    <span>归档</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>仓库</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>友链</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>闲言</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>留言</span>
                  </a>
                </li>
              </ul>
            </li>
            <!--友情链接-->
            <li>
              <a class="auto">
                <span class="pull-right text-muted">
                  <i class="fontello icon-fw fontello-angle-right text"></i>
                  <i class="fontello icon-fw fontello-angle-down text-active"></i>
                </span>
                <span class="nav-icon">
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
                <span>友链</span>
              </a>
              <ul class="nav nav-sub dk">
                <li class="nav-sub-header">
                  <a data-no-instant>
                    <span>友链</span>
                  </a>
                </li>
                <!--使用links插件，输出全站友链-->
                <li data-original-title="一个神秘的人" data-toggle="tooltip" data-placement="top">
                  <a href="/" target="_blank">
                    <span>洛 苏り</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- nav -->
      </div>
      <!--end of .navi-wrap-->
      <!--left_footer-->
      <div id="left_footer" class="footer wrapper-xs text-center nav-xs lt">
        <div class="col-xs-4 no-padder">
          <a
            target="_blank"
            class="tinav"
            href="http://admin.redyu.run"
            title
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="后台管理"
          >
            <span class="left-bottom-icons block">
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
                class="feather feather-settings"
              >
                <circle cx="12" cy="12" r="3" />
                <path
                  d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
                />
              </svg>
            </span>
            <small class="text-muted">管理</small>
          </a>
        </div>
        <div class="col-xs-4 no-padder">
          <a
            target="_blank"
            class="tinav"
            href="/"
            title
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="文章RSS地址"
          >
            <span class="left-bottom-icons block">
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
                class="feather feather-rss"
              >
                <path d="M4 11a9 9 0 0 1 9 9" />
                <path d="M4 4a16 16 0 0 1 16 16" />
                <circle cx="5" cy="19" r="1" />
              </svg>
            </span>
            <small class="text-muted">文章</small>
          </a>
        </div>
        <div class="col-xs-4 no-padder">
          <a
            target="_blank"
            href="/"
            title
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="评论RSS地址"
          >
            <span class="left-bottom-icons block">
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
            <small class="text-muted">评论</small>
          </a>
        </div>
      </div>
    </div>
    <!--.aside-wrap-->
  </aside>
</template>

<script>
export default {
  name: "Headnav",
  data() {
    return {
      categoryList: []
    };
  },
  methods: {
    async handleCategoryList() {
      let { data } = await this.$request.categoryListFn();
      this.categoryList = data.data;
    }
  },
  mounted() {
    this.handleCategoryList();
  }
};
</script>

<style>
</style>