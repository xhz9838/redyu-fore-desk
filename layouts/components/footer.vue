<template>
  <footer id="footer" class="app-footer" role="footer">
    <div class="wrapper bg-light">
      <span class="pull-right hidden-xs text-ellipsis">
        Powered by
        <a target="_blank" href="/">Redyu</a>&nbsp;|&nbsp;Theme by
        <a target="_blank" :href="adminUrl">Admin</a>
      </span>
      <span class="text-ellipsis">
        ©&nbsp;2020 Copyright&nbsp;Xu Hongzu⋅
        <a href="http://www.beian.miit.gov.cn" target="_blank">鄂ICP备19008725号-2</a>
      </span>
    </div>
     
    <!--可以去除主题版权信息，最好保留版权信息或者添加主题信息到友链，谢谢你的理解-->
    <script v-pre type="text/template" id="tmpl-customizer">
          <div class="settings panel panel-default setting_body_panel" aria-hidden="true">
              <button class=" btn btn-default no-shadow pos-abt border-radius-half-left"
                      data-toggle="tooltip" data-placement="left" data-original-title="设置" data-toggle-class=".settings=active, .settings-icon=animate-spin">
                  <i class="fontello fontello-gear settings-icon"></i>
              </button>
              <div class="panel-heading">
                  <button class="pull-right btn btn-xs btn-rounded btn-danger " name="reset" data-toggle="tooltip" data-placement="top" data-original-title="恢复默认值" >重置</button>
                  设置		</div>
              <div class="setting_body">
              <div class="panel-body">
                  <# for ( var keys = _.keys( data.sections.settings ), i = 0, name; keys.length > i; ++i ) { #>
                      <div<# if ( i !== ( keys.length - 1 ) ) print( ' class="m-b-sm"' ); #>>
                          <label class="i-switch bg-info pull-right">
                              <input type="checkbox" name="{{ keys[i] }}" value="1"<# if ( data.defaults[keys[i]] ) print( ' checked="checked"' ); #> />
                                  <i></i>
                          </label>
                          {{ data.sections.settings[keys[i]] }}
              </div>
              <# } #>
          </div>
          <div class="wrapper b-t b-light bg-light lter r-b">
              <div class="row row-sm">
                  <div class="col-xs-6">
                      <#
                              _.each( data.sections.colors, function( color, i ) {
                              var newColumnBefore = ( i % 7 ) === 6;
                              #>
                          <label class="i-checks block<# if ( !newColumnBefore ) print( ' m-b-sm' ); #>">
                              <input type="radio" name="color" value="{{ i }}"<# if ( data.defaults['color'] === i ) print( ' checked="checked"' ); #> />
                                  <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="{{ color.navbarHeader }} header"></b>
								<b class="{{ color.navbarCollapse }} header"></b>
								<b class="{{ color.aside.replace( ' b-r', '' ) }}"></b>
							</span>
                          </label>
                          <#
                                  if ( newColumnBefore && ( i + 1 ) < data.sections.colors.length )
                          print( '</div><div class="col-xs-6">' );
                              } );
                              #>
                          </div>
                  </div>
              </div>
          </div>
          </div>
      </script>
     <!-- <script type="text/template" id="tmpl-customizer">
            <div class="settings panel panel-default setting_body_panel" aria-hidden="true">
                <button class=" btn btn-default no-shadow pos-abt border-radius-half-left"
                        data-toggle="tooltip" data-placement="left" data-original-title="设置"
                        data-toggle-class=".settings=active, .settings-icon=animate-spin">
                    <i class="fontello fontello-gear settings-icon"></i>
                </button>
                <div class="panel-heading">
                    <button class="pull-right btn btn-xs btn-rounded btn-danger " name="reset" data-toggle="tooltip"
                            data-placement="top" data-original-title="恢复默认值">重置
                    </button>
                    设置
                </div>
                <div class="setting_body">
                    <div class="panel-body">
                       
                        <div>
                      
                        <label class="i-switch bg-info pull-right">
                            <input type="checkbox" name="" value="1">
                            <i></i>
                        </label>
                       
                    </div>
                  
                </div>
                <div class="wrapper b-t b-light bg-light lter r-b">
                    <div class="row row-sm">
                        <div class="col-xs-6">
                         
                            <label class="i-checks block">
                                <input type="radio" name="color" value="">
                            
                                <span class="block bg-light clearfix pos-rlt">
								<span class="active pos-abt w-full h-full bg-black-opacity text-center">
									<i class="fontello fontello-check text-md text-white m-t-xs"></i>
								</span>
								<b class="header"></b>
								<b class=" header"></b>
								<b class=""></b>
							</span>
                            </label>
                           
                        </div>
                        <div class="col-xs-6">
                          
                         
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </script> -->

    <!-- <div class="topButton panel panel-default">
      <button
        id="goToTop"
        class="btn btn-default no-shadow pos-abt border-radius-half-left hide"
        data-toggle="tooltip"
        data-placement="left"
        data-original-title="返回顶部"
      >
        <i class="fontello fontello-chevron-circle-up" aria-hidden="true"></i>
      </button>
    </div> -->

  </footer>
  
</template>

<script>

export default {
  name:"Footer",
   data() {
       return {
           adminUrl:process.env.adminUrl
       }
   },
};
</script>



<style>
</style>