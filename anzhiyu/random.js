var posts=["2025/07/09/hello-world/","2025/07/13/编译FFmpeg/","2025/07/09/mediacodec/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };