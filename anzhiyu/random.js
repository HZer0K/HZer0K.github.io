var posts=["2025/07/09/mediacodec/","2025/07/24/精选文章/","2025/07/09/hello-world/","2025/07/13/编译FFmpeg/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };