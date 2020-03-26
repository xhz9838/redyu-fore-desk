//自定义函数
const request = {
  archiveForPage: params => {
    return axios.get("/content/archive/archiveForPage", {
      params
    });
  },
  archiveByUrl: url => {
    return axios.get("/content/archive/archiveByUrl/" + url);
  },
  hotArchive: () => {
    return axios.get("/content/archive/hotArchive");
  },
  randomArchive: () => {
    return axios.get("/content/archive/randomArchive");
  },
  blogInformation: () => {
    return axios.get("/content/blog/blogInformation");
  },
  tagListFn: () => {
    return axios.get("/content/blog/tagList");
  },
  historyFn: () => {
    return axios.get("/content/blog/history");
  },
  categoryListFn: () => {
    return axios.get("/content/blog/categoryList");
  },
  archivesByCname: params => {
    return axios.get("/content/archive/archivesByCname", {
      params
    });
  },
  archivesBytagName: params => {
    return axios.get("/content/archive/archivesByTagName", {
      params
    });
  },
  commentSubmit: params => {
    return axios.post("/content/comment/createComment", params);
  },
  commentTopView: (postId,pageNum) => {
    return axios.get("/content/comment/"+postId+"/comments/treeView?pageNum="+pageNum);
  },
  hotComment: () => {
    return axios.get("/content/comment/hotComment");
  },


};

var axios = null;
export default ({ $axios }, inject) => {
  //3） 保存内置的axios
  axios = $axios;

  //4) 将自定义函数交于nuxt
  // 使用方式1：在vue中，this.$request.xxx()
  // 使用方式2：在nuxt的asyncData中，content.app.$request.xxx()

  inject("request", request);
};
