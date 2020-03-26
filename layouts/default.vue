<template>
  <div class="fix-padding">
    <div id="alllayout" class="app app-aside-fix container app-header-fixed">
      <!-- headnav -->
      <Header />
      <Headnav />
      <nuxt />
      <Footer />
    </div>
    
    
    <!-- <script>
  SearchConfig = {
    url: 'https://www.ydyno.com/usr/plugins/Handsome/cache/search.json'
  };
    </script>
    <script type="text/javascript">
   window.jQuery || document.write(unescape('%3Cscript%20type%3D%22text/javascript%22%20src%3D%22https://www.ydyno.com/usr/plugins/EditorMD/lib/jquery.min.js%22%3E%3C/script%3E'));
    </script> -->
    <!-- <script type="text/javascript">
  $(function() {
    emojify.setConfig({
      img_dir: '//cdn.staticfile.org/emoji-cheat-sheet/1.0.0',
      blacklist: {
        ids: [],
        classes: ['no-emojify'],
        elements: ['^script$', '^textarea$', '^pre$', '^code$']
      }
    });
    emojify.run();
  });
    </script> -->
   <!--定义全局变量-->

    <!-- <script type="text/javascript">
        window['LocalConst'] = {
            COMMENT_NAME_INFO: '必须填写昵称或姓名',
            COMMENT_EMAIL_INFO: '必须填写电子邮箱地址',
            COMMENT_EMAIL_LEGAL_INFO: '邮箱地址不合法',
            COMMENT_CONTENT_INFO: '必须填写评论内容',
            COMMENT_SUBMIT_ERROR: '提交失败，请重试！',
            COMMENT_CONTENT_LEGAL_INFO: '提交失败,评论被拦截，可能发言太快或内容不符合规则',

            LOGIN_USERNAME_INFO: '必须填写用户名',
            LOGIN_PASSWORD_INFO: '请填写密码',
            LOGIN_SUBMIT_ERROR: '登录失败，请重新登录',
            LOGIN_SUBMIT_INFO: '用户名或者密码错误，请重试',
            LOGIN_SUBMIT_SUCCESS: '登录成功',
            CLICK_TO_REFRESH: '点击以刷新页面',
            LOGOUT_SUCCESS_REFRESH: '退出成功，正在刷新当前页面',

            LOGOUT_ERROR: '退出失败，请重试',
            LOGOUT_SUCCESS: '退出成功',

            SUBMIT_PASSWORD_INFO: '密码错误，请重试',
            COMMENT_TITLE: '评论通知',
            LOGIN_TITLE: '登录通知',
            ChANGYAN_APP_KEY: '',
            CHANGYAN_CONF: '',

            COMMENT_SYSTEM: '0',
            COMMENT_SYSTEM_ROOT: '0',
            COMMENT_SYSTEM_CHANGYAN: '1',
            COMMENT_SYSTEM_OTHERS: '2',
            EMOJI: '表情',
            IS_PJAX: '1',
            IS_PAJX_COMMENT: '1',
            BASE_SCRIPT_URL: 'http://114.55.104.60:81/tinkle',
            BLOG_URL: 'http://www.redyu.run/',
            BLOG_URL_PHP: 'http://www.redyu.run/',
            THEME_COLOR: '14',
            THEME_COLOR_EDIT: 'white-white-white',
            THEME_HEADER_FIX: '1',
            THEME_ASIDE_FIX: '1',
            THEME_ASIDE_FOLDED: '',
            THEME_ASIDE_DOCK: '',
            THEME_CONTAINER_BOX: '1',
            THEME_HIGHLIGHT_CODE: '1',
            THEME_TOC: '1',
            TOC_TITLE: '文章目录',
            HEADER_FIX: '固定头部',
            ASIDE_FIX: '固定导航',
            ASIDE_FOLDED: '折叠导航',
            ASIDE_DOCK: '置顶导航',
            CONTAINER_BOX: '盒子模型',
            OFF_SCROLL_HEIGHT: '50',
            COMMENT_REJECT_PLACEHOLDER: '居然什么也不说，哼',
            COMMENT_PLACEHOLDER: '说点什么吧……',
            SHOW_SETTING_BUTTON: '1',
            THEME_VERSION: '6.0.020191205',

            OPERATION_NOTICE: '操作通知',
            SCREENSHOT_BEGIN: '正在生成当前页面截图……',
            SCREENSHOT_NOTICE: '点击顶部下载按钮保存当前卡片',
            SCREENSHORT_ERROR: '由于图片跨域原因导致截图失败',
            SCREENSHORT_SUCCESS: '截图成功',
            MUSIC_NOTICE: '播放通知',
            MUSIC_FAILE: '当前音乐地址无效，自动为您播放下一首',
            MUSIC_FAILE_END: '当前音乐地址无效',
            MUSIC_LIST_SUCCESS: '歌单歌曲加载成功',
            CDN_NAME: '',
            LAZY_LOAD: ''
        };

    </script> -->
<!-- 
    <script>
  $(document)
    .pjax(
      'a[href^="https://www.ydyno.com/"]:not(a[target="_blank"], a[no-pjax])',
      {
        container: '#content',
        fragment: '#content',
        timeout: 8000
      }
    )
    .on('pjax:send', function() {
      $('#loading').removeClass('hide');
    })
    .on('pjax:click', function() {
      window['Page'].doPJAXClickAction();

      $('body,html').animate({ scrollTop: 0 });
    })
    .on('pjax:complete', function() {
      window['Page'].doPJAXCompleteAction();
      if ($('.post-position').length > 0) {
        window['Page'].doPJAXCompletePostAction();
      }
      $('#loading').addClass('hide');
    });
    </script> -->

    <!--主题组件js加载-->

    <!--平滑滚动组件-->

    <!--pjax动画组件-->

    <!--lightgallery必备组件-->

    <!--component/comments.php 页面必需js（只有选择了原生评论的时候才会加载）-->
    <!--component/comments.php 必需js结束-->

    <!--截图插件-->
    <!--主题组件js加载结束-->

    <!--主题核心js-->
  <script src="/themes/js/setting.min.js"></script>
 
    <!-- 评论表情 -->
  <script src="/themes/js/OwO.min.js"></script>
 
    <!--全局播放器组件-->
    <script src="/themes/js/music.min.js"></script>
  
    <!-- <script> -->
  <!-- var player = new skPlayer({
    autoplay: false,
    listshow: false,
    mode: 'listloop',
    music: { type: 'cloud', source: '99683852', media: 'netease' }
  });
    </script> -->
<!-- <script src="https://www.ydyno.com/usr/themes/handsome/assets/js/features/setting.min.js?v=6.0.020191205"></script> -->
    <!-- <script>
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement('script');
    hm.src = '/themes/js/hm.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(hm, s);
  })();
    </script> -->

  


<div class="settings panel panel-default setting_body_panel" aria-hidden="true">
              <button class=" btn btn-default no-shadow pos-abt border-radius-half-left" data-toggle="tooltip" data-placement="left" data-original-title="设置" data-toggle-class=".settings=active, .settings-icon=animate-spin">
                  <i class="fontello fontello-gear settings-icon"></i>
              </button>
              <div class="panel-heading">
                  <button class="pull-right btn btn-xs btn-rounded btn-danger " name="reset" data-toggle="tooltip" data-placement="top" data-original-title="恢复默认值">重置</button>
                  设置		</div>
              <div class="setting_body">
              <div class="panel-body">
                  
                      <div class="m-b-sm">
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="header-fixed" value="1" checked="checked">
                                  <i></i>
                          </label>
                          固定头部
              </div>
              
                      <div class="m-b-sm">
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="aside-fix" value="1" checked="checked">
                                  <i></i>
                          </label>
                          固定导航
              </div>
              
                      <div class="m-b-sm">
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="aside-folded" value="1">
                                  <i></i>
                          </label>
                          折叠导航
              </div>
              
                      <div class="m-b-sm">
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="aside-dock" value="1">
                                  <i></i>
                          </label>
                          置顶导航
              </div>
              
                      <div>
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="layout-boxed" value="1" checked="checked">
                                  <i></i>
                          </label>
                          盒子模型
              </div>
              
          </div>
          <div class="wrapper b-t b-light bg-light lter r-b">
              <div class="row row-sm">
                  <div class="col-xs-6">
                      
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="0">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-black header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-black"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="1">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-dark header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="2">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-white-only header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-black"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="3">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-primary header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="4">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-info header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-black"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="5">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-success header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block">
                              <input type="radio" name="color" value="6">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-danger header"></b>
								<b class="bg-white-only header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          </div><div class="col-xs-6">
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="7">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-black header"></b>
								<b class="bg-black header"></b>
								<b class="bg-white"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="8">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-dark header"></b>
								<b class="bg-dark header"></b>
								<b class="bg-light"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="9">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-info dker header"></b>
								<b class="bg-info dker header"></b>
								<b class="bg-light dker"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="10">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-primary header"></b>
								<b class="bg-primary header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="11">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-info dker header"></b>
								<b class="bg-info dk header"></b>
								<b class="bg-black"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="12">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-success header"></b>
								<b class="bg-success header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          
                          <label class="i-checks block">
                              <input type="radio" name="color" value="13">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-danger header"></b>
								<b class="bg-danger header"></b>
								<b class="bg-dark"></b>
							</span>
                          </label>
                          </div><div class="col-xs-6">
                          <label class="i-checks block m-b-sm">
                              <input type="radio" name="color" value="14">
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="bg-white header"></b>
								<b class="bg-white header"></b>
								<b class="bg-white"></b>
							</span>
                          </label>
                          
                          </div>
                  </div>
              </div>
          </div>
          </div>
            <div class="topButton panel panel-default">
          <button id="goToTop" class="btn btn-default no-shadow pos-abt hide  border-radius-half-left" data-toggle="tooltip" data-placement="left" data-original-title="返回顶部">
              <i class="fontello fontello-chevron-circle-up" aria-hidden="true"></i>
          </button>
      
      </div>

  </div>
</template>
<script>
import  Header  from "./components/header";
import  Headnav  from "./components/headnav";
import  Footer  from "./components/footer";

export default {
  components: {
    Header,
    Headnav,
    Footer
  },

};
</script>
<style>

</style>
