<template>
  <header id="header" class="fix-padding app-header navbar box-shadow-bottom-lg" role="menu">
    <!-- navbar header（交集处） -->
    <div class="text-ellipsis navbar-header bg-white">
      <button
        class="pull-right visible-xs"
        ui-toggle-class="show animated animated-lento fadeIn"
        target=".navbar-collapse"
      >
        <span class="menu-icons">
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
            class="feather feather-search"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </span>
      </button>
      <button
        class="pull-left visible-xs"
        ui-toggle-class="off-screen animated"
        target=".app-aside"
        ui-scroll="app"
      >
        <span class="menu-icons">
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
            class="feather feather-menu"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </span>
      </button>
      <!-- brand -->
      <nuxt-link to="/" class="navbar-brand text-lt">
        <i class="el-icon-s-home"></i>

        <span class="hidden-folded m-l-xs">redyu.run</span>
      </nuxt-link>
      <!-- <a href="https://www.redyu.run/" class="navbar-brand text-lt">
          <i class="fontello fontello-home"></i>
          <span class="hidden-folded m-l-xs">redyu.run</span>
      </a>-->
      <!-- / brand -->
    </div>
    <!-- / navbar header -->

    <!-- navbar collapse（顶部导航栏） -->
    <div class="collapse pos-rlt navbar-collapse bg-white">
      <!-- search form -->
      <form
        id="searchform1"
        class="searchform navbar-form navbar-form-sm navbar-left shift"
        method="post"
        role="search"
      >
        <div class="form-group">
          <div class="input-group rounded bg-white-pure box-shadow-wrap-normal">
            <input
              autocomplete="off"
              id="search_input"
              type="search"
              name="s"
              class="transparent rounded form-control input-sm no-borders padder"
              required
              placeholder="输入关键词搜索…"
            />
            <!--搜索提示-->
            <ul
              id="search_tips_drop"
              class="small-scroll-bar dropdown-menu hide"
              style="display: block;top: 
                30px; left: 0px;"
            ></ul>
            <span id="search_submit" class="transparent input-group-btn">
              <button type="button" class="transparent btn btn-sm">
                <span class="feathericons" id="icon-search">
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
                    class="feather feather-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>
                <span class="feathericons animate-spin hide" id="spin-search">
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
                    class="feather feather-loader"
                  >
                    <line x1="12" y1="2" x2="12" y2="6" />
                    <line x1="12" y1="18" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                    <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                    <line x1="2" y1="12" x2="6" y2="12" />
                    <line x1="18" y1="12" x2="22" y2="12" />
                    <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                    <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                  </svg>
                </span>
                <!--                      <i class="fontello fontello-search" id="icon-search"></i>-->
                <!--                      <i class="animate-spin  fontello fontello-spinner hide" id="spin-search"></i>-->
              </button>
            </span>
          </div>
        </div>
      </form>
      <!-- <a href="https://www.ydyno.com/" style="display: none" id="searchUrl"></a> -->
      <!-- / search form -->
      <ul class="nav navbar-nav navbar-right">
        <li class="music-box hidden-xs hidden-sm">
          <div id="skPlayer">
            <audio
              class="skPlayer-source"
              src="https://m8.music.126.net/20200305101252/10822f03cde132a8a1ba3ef86a099375/ymusic/040b/5652/035a/3ae0cbb3baa89410fbdb40eb50d856af.mp3"
              preload="auto"
            ></audio>
            <div class="skPlayer-picture">
              <img class="skPlayer-cover" src="http://img.redyu.run/1.jpg" alt />
            </div>
            <div class="skPlayer-control">
              <p class="skPlayer-name">这一生关于你的风景</p>
              <div class="playController">
                <div onclick="player.prev();" class="lastMusic music-off">
                  <span class="feathericons">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon points="11 19 2 12 11 5 11 19" />
                      <polygon points="22 19 13 12 22 5 22 19" />
                    </svg>
                  </span>
                </div>&nbsp;&nbsp;
                <div class="runMusic music-off skPlayer-play-btn">
                  <span class="runMusicIcon feathericons">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </span>
                </div>&nbsp;&nbsp;
                <div onclick="player.next();" class="nextMusic music-off">
                  <span class="feathericons">
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      stroke="currentColor"
                      stroke-width="2"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="css-i6dzq1"
                    >
                      <polygon points="13 19 22 12 13 5 13 19" />
                      <polygon points="2 19 11 12 2 5 2 19" />
                    </svg>
                  </span>
                </div>
              </div>
              <p class="skPlayer-author">枯木逢春</p>
              <div class="skPlayer-percent">
                <div class="skPlayer-line-loading" style="width: 77.02%;"></div>
                <div class="skPlayer-line lter"></div>
              </div>
              <p class="skPlayer-time">
                <span class="skPlayer-cur">00:00</span>/
                <span class="skPlayer-total">04:23</span>
              </p>
              <div class="skPlayer-volume" style>
                <span class="feathericons skPlayer-volume-icon">
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="css-i6dzq1"
                  >
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </span>
                <div class="skPlayer-percent">
                  <div class="skPlayer-line"></div>
                </div>
              </div>
              <i class="skPlayer-mode"></i>
            </div>
            <ul id="skPlayer-list" class="skPlayer-list animated flipInX">
            
            </ul>
          </div>
        </li>
        <li class="dropdown">
          <a class="skPlayer-list-switch dropdown-toggle feathericons">
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
              class="feather feather-disc"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span class="visible-xs-inline"></span>
          </a>
        </li>
        <!--闲言碎语-->
        <li class="dropdown">
          <a
            href="https://www.ydyno.com/#"
            data-toggle="dropdown"
            class="feathericons dropdown-toggle"
          >
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
              class="feather feather-twitch"
            >
              <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
            </svg>
            <span class="visible-xs-inline">闲言碎语</span>
            <span class="badge badge-sm up bg-danger pull-right-xs"></span>
          </a>
          <!-- dropdown -->
          <div class="dropdown-menu w-xl animated fadeInUp">
            <div class="panel bg-white">
              <div class="panel-heading b-light bg-light">
                <strong>闲言碎语</strong>
              </div>
              <div class="list-group" id="smallRecording">
                <a href="https://www.ydyno.com/cross.html" class="list-group-item">
                  <span class="clear block m-b-none words_contents">
                    本周末eladmin开发计划
                    <br />
                    <small class="text-muted">2020-2-20 11:08:26</small>
                  </span>
                </a>
                <a href="https://www.ydyno.com/cross.html" class="list-group-item">
                  <span class="clear block m-b-none words_contents">
                    在家办公首日，腾讯会议、企业微信居然都崩溃了
                    <br />
                    <small class="text-muted">2020-2-3 17:08:30</small>
                  </span>
                </a>
                <a href="https://www.ydyno.com/cross.html" class="list-group-item">
                  <span class="clear block m-b-none words_contents">
                    根据端口查进程netstat -tnlp|grep 8080 |awk '{print$7}'| awk -F"/" '{print$1}'
                    <br />
                    <small class="text-muted">2020-1-15 10:06:15</small>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </li>
        <!--/闲言碎语-->
        <!--登录管理-->
        <li class="dropdown" id="easyLogin">
          <a onclick="return false" data-toggle="dropdown" class="dropdown-toggle clear">
            <span class="feathericons">
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
                class="feather feather-key"
              >
                <path
                  d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"
                />
              </svg>
            </span>
            <b class="caret"></b>
            <!--下三角符号-->
          </a>
          <!-- dropdown(已经登录) -->
          <div
            class="dropdown-menu w-lg wrapper bg-white animated fadeIn"
            aria-labelledby="navbar-login-dropdown"
          >
            <form
              id="Login_form"
              action="https://www.ydyno.com/index.php/action/login?_=0cd95bc5baf9cb85ef79f0a125e081ce"
              method="post"
            >
              <div class="form-group">
                <label for="navbar-login-user">用户名</label>
                <input
                  type="text"
                  name="name"
                  id="navbar-login-user"
                  class="form-control"
                  placeholder="用户名或电子邮箱"
                />
              </div>
              <div class="form-group">
                <label for="navbar-login-password">密码</label>
                <input
                  type="password"
                  name="password"
                  id="navbar-login-password"
                  class="form-control"
                  placeholder="密码"
                />
              </div>
              <button
                style="width: 100%"
                type="submit"
                id="login-submit"
                name="submitLogin"
                class="btn-rounded box-shadow-wrap-lg btn-gd-primary padder-lg"
              >
                <span>登录</span>
                <span class="text-active">登录中...</span>
                <span class="banLogin_text">刷新页面后登录</span>
                <i class="animate-spin fontello fontello-spinner hide" id="spin-login"></i>
                <i class="animate-spin fontello fontello-refresh hide" id="ban-login"></i>
              </button>

              <input
                type="hidden"
                name="referer"
                value="https://www.ydyno.com"
                data-current-url="value"
              />
            </form>
          </div>
        </li>
        <!--/登录管理-->
      </ul>
    </div>
    <!-- / navbar collapse -->
  </header>
</template>

<script>

export default {
  name: "Header"
};
</script>

<style>
</style>