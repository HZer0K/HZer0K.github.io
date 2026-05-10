var posts=["2025/07/13/编译FFmpeg/","2025/07/09/Hexo简单使用/","2025/07/24/喜欢的文章/","2026/05/10/IJKPLAYER集成大模型架构思考/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };