<template>
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
        <!--文章-->
        <div class="col center-part">
          <!--生成分享图片必须的HTML结构-->
          <style>
  .mdx-si-head .cover {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
          </style>
          <div class="mdx-share-img" id="mdx-share-img">
            <div class="mdx-si-head" style="background-image:url(http://img.redyu.run/1.jpg)">
              <p>Mr. Xu</p>
              <span>{{archive.title}}</span>
            </div>
            <div class="mdx-si-sum">{{archive.summary}}</div>
            <div class="mdx-si-box">
              <span>扫描右侧二维码阅读全文</span>
              <div class="mdx-si-qr" id="mdx-si-qr">
                <img :src="QCCodeUrl" />
              </div>
            </div>
            <div class="mdx-si-time">
              {{archive.createTime.substring(8,10)}}
              <br />
              <span class="mdx-si-time-2">{{archive.createTime.substring(0,7)}}</span>
            </div>
          </div>
          <!--标题下的一排功能信息图标：作者/时间/浏览次数/评论数/分类-->

          <header id="small_widgets" class="bg-light lter wrapper-md">
            <h1 class="entry-title m-n font-thin text-black l-h">
              {{archive.title}}
              <a
                class="plus-font-size"
                data-toggle="tooltip"
                data-original-title="点击改变文章字体大小"
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
                  class="feather feather-type"
                >
                  <polyline points="4 7 4 4 20 4 20 7" />
                  <line x1="9" y1="20" x2="15" y2="20" />
                  <line x1="12" y1="4" x2="12" y2="20" />
                </svg>
              </a>
              <span class="morphing-btn-wrap">
                <a
                  data-morphing
                  id="morphing"
                  data-src="#morphing-content"
                  href="javascript:;"
                  class="read_mode superscript m-l-sm morphing-btn"
                  data-toggle="tooltip"
                  data-placement="right"
                  data-original-title="阅读模式"
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
                    class="feather feather-book-open"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </a>
              </span>
              <div class="morphing-btn-clone" style="display: none;"></div>
            </h1>
            <!--文章标题下面的小部件-->
            <ul class="entry-meta text-muted list-inline m-b-none small post-head-icon">
              <!--作者-->
              <li class="meta-author">
                <span class="post-icons">
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
                <span class="sr-only">博主：</span>
                <a class="meta-value" href="/" rel="author">Mr. Xu</a>
              </li>
              <!--发布时间-->
              <li class="meta-date">
                <span class="post-icons">
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
                <span class="sr-only">发布时间：</span>
                <time class="meta-value">{{archive.createTime}}</time>
              </li>
              <!--浏览数-->
              <li class="meta-views">
                <span class="post-icons">
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
                    class="feather feather-eye"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </span>
                <span class="meta-value">{{archive.visits}}</span>
              </li>
              <!--评论数-->
              <li class="meta-comments">
                <span class="post-icons">
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
                <a
                  class="meta-value"
                  href="#comments"
                >{{archive.commentCount==0?"暂无评论":archive.commentCount}}</a>
              </li>

              <!--文字数目-->
              <li class="meta-word">
                <span class="post-icons">
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
                    class="feather feather-pen-tool"
                  >
                    <path d="M12 19l7-7 3 3-7 7-3-3z" />
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                    <path d="M2 2l7.586 7.586" />
                    <circle cx="11" cy="11" r="2" />
                  </svg>
                </span>
                <span class="meta-value">{{archive.originalContent.length}}</span>
              </li>
              <!--分类-->
              <li class="meta-categories">
                <span class="post-icons">
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
                    class="feather feather-hash"
                  >
                    <line x1="4" y1="9" x2="20" y2="9" />
                    <line x1="4" y1="15" x2="20" y2="15" />
                    <line x1="10" y1="3" x2="8" y2="21" />
                    <line x1="16" y1="3" x2="14" y2="21" />
                  </svg>
                </span>
                <span class="sr-only">分类：</span>
                <span class="meta-value">
                  <a
                    href="https://www.ydyno.com/category/miscellaneous/"
                  >{{archive.categories.length==0?'':archive.categories[0].name}}</a>
                </span>
              </li>
            </ul>
          </header>
          <div class="wrapper-md" id="post-panel">
            <ol class="breadcrumb bg-white-pure" itemscope>
              <li>
                <nuxt-link to="/"
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
              <li class="active">正文&nbsp;&nbsp;</li>
              <div style="float:right;">
                分享到：
                <style>
  .breadcrumb i.iconfont.icon-qzone:after {
    padding: 0 0 0 5px;
    color: #ccc;
    content: "/\00a0";
  }
  .breadcrumb i.fontello.fontello-weibo:after {
    padding: 0 5px 0 5px;
    color: #ccc;
    content: "/\00a0";
  }
                </style>
                <a
                  href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://www.ydyno.com/archives/1219.html&amp;title=解决 npm 安装 node-sass 速度慢的问题&amp;site=https://www.ydyno.com/"
                  itemprop="breadcrumb"
                  target="_blank"
                  title
                  data-toggle="tooltip"
                  data-original-title="分享到QQ空间"
                  onclick="window.open(this.href, 'qzone-share', 'width=550,height=335');return false;"
                >
                  <i style="font-size:15px;" class="iconfont icon-qzone" aria-hidden="true"></i>
                </a>
                <a
                  href="http://service.weibo.com/share/share.php?url=https://www.ydyno.com/archives/1219.html&amp;title=解决 npm 安装 node-sass 速度慢的问题"
                  target="_blank"
                  itemprop="breadcrumb"
                  title
                  data-toggle="tooltip"
                  data-original-title="分享到微博"
                  onclick="window.open(this.href, 'weibo-share', 'width=550,height=335');return false;"
                >
                  <i style="font-size:15px;" class="fontello fontello-weibo" aria-hidden="true"></i>
                </a>
                <a
                  id="generateShareImg"
                  itemprop="breadcrumb"
                  title
                  data-toggle="tooltip"
                  data-original-title="生成分享图"
                >
                  <i style="font-size:13px;" class="fontello fontello-camera" aria-hidden="true"></i>
                </a>
              </div>
            </ol>
            <!--博客文章样式 begin with .blog-post-->
            <div id="postpage" class="blog-post">
              <article class="single-post panel">
                <!--文章页面的头图-->
                <!--文章内容-->
                <div id="post-content" class="wrapper-lg">
                  <div v-html="archive.formatContent"></div>
                  <!--文章的页脚部件：打赏和其他信息的输出-->

                  <div class="show-foot">
                    <div class="notebook">
                      <i class="fontello fontello-clock-o"></i>
                      <span>最后修改：2020 年 02 月 20 日 10 : 03 AM</span>
                    </div>
                    <div
                      class="copyright"
                      data-toggle="tooltip"
                      data-html="true"
                      data-original-title="转载请保留本文转载地址，著作权归作者所有"
                    >
                      <span>© 允许规范转载</span>
                    </div>
                  </div>
                  <!--/文章的页脚部件：打赏和其他信息的输出-->
                </div>
              </article>
            </div>
            <!--上一篇&下一篇-->
            <nav class="m-t-lg m-b-lg">
              <ul class="pager">
                <li class="next">
                  <a
                    class="box-shadow-wrap-normal"
                    href="https://www.ydyno.com/archives/1218.html"
                    title
                    data-toggle="tooltip"
                    data-original-title="记一次 Centos 中因为 DNS npm 安装包失败的问题"
                  >下一篇</a>
                </li>
              </ul>
            </nav>
            <!--评论-->
            <Comment :post="archive"/>
         
          </div>
        </div>
        <!--文章右侧边栏开始-->
        <Sidebar/>
        <!--文章右侧边栏结束-->
      </div>
    </main>

    <!-- <div id="morphing-content" class="hidden read_mode_article">
      <div class="page">
        <h1 class="title">解决 npm 安装 node-sass 速度慢的问题</h1>
        <div class="metadata singleline">
          <a href="#" rel="author" class="byline">Mr. Zheng</a>&nbsp;•&nbsp;
          <span class="delimiter"></span>
          <time class="date">2020 年 02 月 20 日</time>
        </div>
        <p>可通过配置淘宝的镜像源解决，首先配置淘宝的镜像源</p>
        <pre><code class="hljs cpp">npm config <span class="hljs-built_in">set</span> registry https:<span class="hljs-comment">//registry.npm.taobao.org</span></code></pre>
        <p>然后在 ~/.npmrc 加入下面内容</p>
        <pre><code class="hljs ruby">sass_binary_site=<span class="hljs-symbol">https:</span>/<span class="hljs-regexp">/npm.taobao.org/mirrors</span><span class="hljs-regexp">/node-sass/</span></code></pre>
        <p>.npmrc 文件位于</p>
        <pre><code class="hljs">win：C:\Users\[你的账户名称]\.npmrc
linux：直接使用 vi ~/.npmrc</code></pre>
        <p>完整配置如图</p>
        <p>
          <img src="https://files.ydyno.com/typecho/uploads/2020/02/3321110690.png" alt title />
        </p>
      </div>
    </div> -->
    <script>
  var div = document.getElementById('generateShareImg');


  $('#generateShareImg').click(function() {
  
    $.message({
      title: LocalConst.OPERATION_NOTICE,
      message: LocalConst.SCREENSHOT_BEGIN,
      type: 'info',
      autoClose: !1
    });
 
      html2canvas(document.getElementById('mdx-share-img'),{
        allowTaint: false,
        useCORS: true,
        scale: 3,
        onrendered: function(b) {
           
          try {
        
            var c = new Image();
            c.setAttribute('crossOrigin', 'Anonymous');
            var d = b.toDataURL('image/png');
            (c.src = d),
              $.message({
                title: LocalConst.OPERATION_NOTICE,
                message: LocalConst.SCREENSHORT_SUCCESS,
                type: 'success'
              }),
            
              $.fancybox.open(
                [
                  {
                    src: d,
                    opts: { caption: LocalConst.SCREENSHOT_NOTICE, thumb: d }
                  }
                ],
                { loop: !1 }
              );
          } catch (b) {
            $.message({
              title: LocalConst.OPERATION_NOTICE,
              message: LocalConst.SCREENSHORT_ERROR,
              type: 'error'
            });
          }
        }
      });
  });
    </script>
    <!-- <script v-pre>
  try {
    $('[data-morphing]').fancyMorph({
      hash: 'morphing'
    });
  } catch (e) {}
    </script> -->
    <!-- footer -->
 
    <!-- <script v-pre type="text/javascript">
  var registCommentEvent = function() {
    var event = document.addEventListener
      ? {
          add: "addEventListener",
          focus: "focus",
          load: "DOMContentLoaded"
        }
      : {
          add: "attachEvent",
          focus: "onfocus",
          load: "onload"
        };
    var r = document.getElementById("respond-post-1219");

    if (null != r) {
      var forms = r.getElementsByTagName("form");
      if (forms.length > 0) {
        var f = forms[0],
          textarea = f.getElementsByTagName("textarea")[0],
          added = false;

        if (null != textarea && "text" == textarea.name) {
          textarea[event.add](event.focus, function() {
            if (!added) {
              var input = document.createElement("input");
              input.type = "hidden";
              input.name = "_";
              input.value = (function() {
                var _myNXhRm =
                    "dbd" + //'7Q'
                    "b3a" + //'otI'
                    /* 'D'//'D' */ "" +
                    "l" + //'l' //'E5X'
                    "49d" +
                    /* 'NfY'//'NfY' */ "" +
                    "966" + //'G' //'N'
                    "8aa" + //'9u'
                    "1d" + //'1'
                    "c5" +
                    "a6e" + //'I'
                    "" + ///*'LI'*/'LI' //'9'
                    "8" + //'Ao'
                    "Ao" +
                    "13" + //'T' //'Lu'
                    "e" + //'gH8'
                    "52" + //'46q'
                    "e4c" + //'W0'
                    "c",
                  _hZX0 = [
                    [6, 7],
                    [23, 25]
                  ];

                for (var i = 0; i < _hZX0.length; i++) {
                  _myNXhRm =
                    _myNXhRm.substring(0, _hZX0[i][0]) +
                    _myNXhRm.substring(_hZX0[i][1]);
                }

                return _myNXhRm;
              })();

              f.appendChild(input);

              input = document.createElement("input");
              input.type = "hidden";
              input.name = "checkReferer";
              input.value = "false";

              f.appendChild(input);

              added = true;
            }
          });
        }
      }
    }
  };
    </script> -->
    
  </div>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Comment from '@/components/comment'
export default {
  components:{
    Sidebar,
    Comment
  },

  data() {
    return {};
  },
  computed: {
    QCCodeUrl() {
      return (
        process.env.baseUrl +
        "/content/archive/getQCCode?text=" +
        process.env.foreUrl +
        this.$route.path
      );
    }
  },
  async asyncData({app,route}) {
    let { data } = await app.$request.archiveByUrl(route.params.url)
    return { archive: data.data };
  }
};
</script>

<style>
</style>