var posts=["2025/07/09/Hexo简单使用/","2026/05/10/IJKPLAYER 集成大模型架构思考/","2026/05/10/IJKPLAYER 通用AI推理框架架构设计/","2025/07/24/喜欢的文章/","2026/05/11/IJKPLAYER 集成大模型实现（一）/","2025/07/13/编译FFmpeg/"];function toRandomPost(){
    window.location.href='/'+posts[Math.floor(Math.random() * posts.length)];
  };