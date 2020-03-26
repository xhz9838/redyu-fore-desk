<template>
  <div id="comments">
    <!--评论列表-->
    <h4 class="comments-title m-t-lg m-b">{{commentPageInfo.total}} 条评论</h4>
    <ol class="comment-list">
      <!--自定义评论代码结构-->

      <li
        :id="'comment-'+comment.id"
        class="comment-body comment-parent comment-odd"
        v-for="(comment, index) in commentPageInfo.list"
        :key="index"
      >
        <div :id="'div-comment-'+comment.id" class="comment-body">
          <a class="pull-left thumb-sm" rel="nofollow">
            <img
              nogallery
              :src="'https://cdn.v2ex.com/gravatar/'+comment.gravatarMd5+'?s=65&amp;r=G&amp;d='"
              class="img-40px photo img-square normal-shadow"
            />
          </a>
          <div class="m-b m-l-xxl">
            <div class="comment-meta">
              <span class="comment-author vcard">
                <b class="fn">{{comment.author}}</b>
              </span>
              <div class="comment-metadata">
                <time
                  class="format_time text-muted text-xs block m-t-xs"
                  pubdate="pubdate"
                  :datetime="comment.createTime"
                >{{timeago(comment.createTime)}}前</time>
              </div>
            </div>
            <!--回复内容-->
            <div class="comment-content m-t-sm">
              <span class="comment-author-at">
                <b></b>
              </span>
              <span class="comment-content-true">
                <p v-html="comment.content"></p>
              </span>
            </div>
            <!--回复按钮-->
            <div class="comment-reply m-t-sm">
              <a href="/" @click.prevent="reply(comment)" rel="nofollow">回复</a>
            </div>
          </div>
        </div>

        <!-- 是否嵌套评论判断开始 -->

        <div
          class="comment-children list-unstyled m-l-xxl"
          v-for="(child, index) in comment.comments"
          :key="index"
        >
          <ol class="comment-list">
            <!--自定义评论代码结构-->

            <li
              :id="'comment-'+child.id"
              class="comment-body comment-child comment-level-odd comment-odd comment-by-author"
            >
              <div id="div-comment-81" class="comment-body">
                <a class="pull-left thumb-sm" rel="nofollow">
                  <img
                    nogallery
                    src="http://img.redyu.run/1.jpg"
                    class="img-40px photo img-square normal-shadow"
                  />
                </a>
                <div class="m-b m-l-xxl">
                  <div class="comment-meta">
                    <span class="comment-author vcard">
                      <b class="fn">
                        <a
                          href="https://github.com/xhz9838"
                          target="_blank"
                          rel="external nofollow"
                        >{{child.author}}</a>
                      </b>
                      <!-- <label class="label bg-dark m-l-xs">博主</label> -->
                    </span>
                    <div class="comment-metadata">
                      <time
                        class="format_time text-muted text-xs block m-t-xs"
                        pubdate="pubdate"
                        :datetime="child.createTime"
                      >{{timeago(child.createTime)}}前</time>
                    </div>
                  </div>
                  <!--回复内容-->

                  <div class="comment-content m-t-sm">
                    <span class="comment-author-at">
                      <b>
                        <a :href="'#comment-'+child.parentId">@{{child.parentAuthor}}</a>
                      </b>
                    </span>
                    <span class="comment-content-true">
                      <p v-html="child.content"></p>
                    </span>
                  </div>
                  <!--回复按钮-->
                  <div class="comment-reply m-t-sm">
                    <a href="/" @click.prevent="reply(child)" rel="nofollow">回复</a>
                  </div>
                </div>
              </div>
            </li>
          </ol>
          <!-- 嵌套评论所有内容-->
        </div>

        <!-- 是否嵌套评论判断结束 -->
      </li>
    </ol>
    <el-pagination
      :pager-count="5"
      background
      class="pagination"
      @current-change="handleCurrentChange"
      :current-page="commentPageInfo.pageNum"
      :page-size="commentPageInfo.pageSize"
      :hide-on-single-page="true"
      layout="prev, pager, next"
      :total="commentPageInfo.total"
    ></el-pagination>
    <nav class="text-center m-t-lg m-b-lg" role="navigation"></nav>

    <!--如果允许评论，会出现评论框和个人信息的填写-->
    <div id="respond-post-1197" class="respond comment-respond no-borders">
      <h4 id="reply-title" class="comment-reply-title m-t-lg m-b">
        发表评论
        <small>
          <i
            class="glyphicon glyphicon-info-sign"
            data-toggle="tooltip"
            title
            data-original-title="评论支持 MarkDown 语法，允许 a、img、blockquote 标签"
          ></i>
        </small>
        <el-button type="primary" plain v-if="isReply" @click="cancelSubmit" size="mini">取消回复</el-button>
      </h4>
      <form id="comment_form" class="comment-form" role="form">
        <div class="comment-form-comment form-group">
          <label v-if="!isReply" class="padder-v-sm" for="comment">
            评论
            <span class="required text-danger">*</span>
          </label>
          <label v-if="isReply" class="padder-v-sm" for="comment">
            正在回复@{{replyPerson.author}}
            <span class="required text-danger">*</span>
          </label>
          <textarea
            id="comment"
            class="textarea form-control OwO-textarea"
            name="text"
            v-model="comment.content"
            rows="5"
            placeholder="居然什么也不说，哼"
            onkeydown="if(event.ctrlKey&amp;&amp;event.keyCode==13){document.getElementById('submit').click();return false};"
          ></textarea>
          <div class="OwO padder-v-sm">
            <div class="OwO-logo padder-v-sm">
              <span class="smile-icons">
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </span>
              <span class="OwOlogotext">表情</span>
            </div>
            <div class="OwO-body" style="width: 100%">
              <div class="OwO-title">
                <span>OwO</span>
              </div>
              <ul
                class="OwO-items OwO-undefined OwO-items-emoticon OwO-items-show"
                style="max-height: 167px;"
              >
                <!-- <li>表情 -->
              </ul>
              <ul class="OwO-items OwO-aru OwO-items-image" style="max-height: 167px;">
                <!-- <li>表情 -->
              </ul>
              <div class="OwO-bar">
                <ul class="OwO-packages">
                  <li class="OwO-package-active">
                    <span>颜文字</span>
                  </li>
                  <li>
                    <span>阿鲁</span>
                  </li>
                  <li>
                    <span>推特</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- <div
            class="secret_comment"
            id="secret_comment"
            data-toggle="tooltip"
            data-original-title="开启该功能，您的评论仅作者和评论双方可见"
            style="display: block;"
          >
            <label class="secret_comment_label control-label">私密评论</label>
            <div class="secret_comment_check">
              <label class="i-switch i-switch-sm bg-dark m-b-ss m-r">
                <input type="checkbox" id="secret_comment_checkbox" placeholder />
                <i></i>
              </label>
            </div>
          </div>-->
        </div>
        <!--判断是否登录-->
        <!-- <p>
          欢迎&nbsp;
          <a
            class="show_hide_div"
            style="color: #333!important;"
            data-toggle="tooltip"
            title
            data-original-title="点击修改信息"
          >xxx</a>&nbsp;归来！
        </p>-->
        <div id="author_info" class>
          <div class="comment-form-author form-group col-sm-6 col-md-4">
            <label for="author">
              名称
              <span class="required text-danger">*</span>
            </label>
            <div>
              <img
                class="author-avatar"
                src="https://cdn.v2ex.com/gravatar/3267898916b84126823f820c2d344199?s=65&amp;r=G&amp;d="
                nogallery
              />
              <input
                id="author"
                class="form-control"
                name="author"
                v-model="comment.author"
                type="text"
                value="xxx"
                maxlength="245"
                placeholder="姓名或昵称"
              />
            </div>
          </div>

          <div class="comment-form-email form-group col-sm-6 col-md-4">
            <label for="email">
              邮箱
              <span class="required text-danger">*</span>
            </label>
            <input
              type="text"
              name="mail"
              v-model="comment.email"
              id="mail"
              class="form-control"
              placeholder="邮箱 (必填,将保密)"
              value="15387066867@163.com"
            />
            <input type="hidden" name="receiveMail" id="receiveMail" value="yes" />
          </div>

          <div class="comment-form-url form-group col-sm-12 col-md-4">
            <label for="url">地址</label>
            <input
              id="url"
              class="form-control"
              name="url"
              type="url"
              v-model="comment.authorUrl"
              value
              maxlength="200"
              placeholder="网站或博客"
            />
          </div>
        </div>
        <!--提交按钮-->
        <div class="form-group">
          <el-button type="primary" @click="commentSubmit" size="medium">发表评论</el-button>
        </div>
        <!-- <div class="form-group">
          <button
            
           
            class="submit btn-rounded box-shadow-wrap-lg btn-gd-primary padder-lg"
          >
            <span>发表评论</span>
            <span class="text-active">提交中...</span>
          </button>
          <i class="animate-spin fontello fontello-spinner hide" id="spin"></i>
          <input type="hidden" name="comment_post_ID" id="comment_post_ID" />
          <input type="hidden" name="comment_parent" id="comment_parent" />
        </div>-->
        <!-- <input type="hidden" name="_" value="5f7fa8a8d4dc5914dfc1e3588789cb10" />
        <input type="hidden" name="checkReferer" value="false" />-->
      </form>
    </div>

  </div>
</template>

<script>
import { getFinalActivity } from "~/assets/js/utils.js";
export default {
  name: "Comment",
  data() {
    return {
      baseUrl: process.env.baseUrl + "/content/comment/createComment",
      comment: {
        author: "",
        email: "",
        authorUrl: "",
        content: "",
        postId: this.post.id,
        parentId: 0
      },
      pageNum: 1,
      commentPageInfo: {
        list:[]
      },
      isReply: false,
      replyPerson: {}
    };
  },
  props: {
    post: {
      type: Object,
      default: {}
    }
  },
  methods: {

    cancelSubmit() {
      this.isReply = false;
      this.replyPerson = {};
      this.comment = {
        author: "",
        email: "",
        authorUrl: "",
        content: "",
        postId: this.post.id,
        parentId: 0
      };
    },
    handleCurrentChange(val) {
      this.pageNum = val;
      this.commentFn();
    },
    async commentSubmit() {
      if (!this.comment.author) {
        this.$notify({
          title: "评论提示",
          message: "必须填写昵称或姓名",
          type: "error"
        });
        return;
      }
      if (!this.comment.email) {
        this.$notify({
          title: "评论提示",
          message: "必须填写电子邮箱地址",
          type: "error"
        });
        return;
      }
      if (!/^[^@\s<&>]+@([a-z0-9]+\.)+[a-z]{2,4}$/i.test(this.comment.email)) {
        this.$notify({
          title: "评论提示",
          message: "邮箱地址不合法",
          type: "error"
        });
        return;
      }

      if (!this.comment.content) {
        this.$notify({
          title: "错误",
          message: "您必须输入评论内容",
          type: "error"
        });
        return;
      }
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)"
      });
      let { data } = await this.$request.commentSubmit(this.comment);
      if (data.status == 200) {
        this.$notify({
          title: "成功",
          message: "评论成功",
          type: "success"
        });
      }

      this.commentFn();
      this.isReply = false;
      this.comment = {
        author: "",
        email: "",
        authorUrl: "",
        content: "",
        postId: this.post.id,
        parentId: 0
      };
      loading.close();
      document.getElementById("comments").scrollIntoView();
    },
    reply(parent) {
      //回复@
      document.getElementById("comment").scrollIntoView();
      this.isReply = true;
      this.replyPerson = parent;
      this.comment.content = "@" + parent.author + "：";
      this.comment.parentId = parent.id;
    },
    timeago(time) {
      return getFinalActivity(time);
    },
    async commentFn() {
      let { data } = await this.$request.commentTopView(
        this.post.id,
        this.pageNum
      );
      this.commentPageInfo = data.data;
    }
  },
  mounted() {
    this.commentFn();
  }
};
</script>

<style>
</style>