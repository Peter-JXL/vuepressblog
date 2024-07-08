import { HeadTags } from 'vuepress/config';

export default <HeadTags> [
  
    //图标
    ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }],
    ['meta', { name: 'keywords', content: '博客,编程,个人网站,读书,学习成长,计算机基础,操作系统,计算机网络,Java,JavaWEB,Spring,SpringBoot,微服务,SpringCloud,Docker,Git,Gitee,GitHub'}],

    //此标记可告知浏览器如何在移动设备上呈现网页。该标记的存在可向 Google 表明该网页适合移动设备。
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],

    //百度统计脚本
    [
      'script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?935c298d3de674300e25695d1ece4c34";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      </script>
      `
    ],

    //站点信息卡片
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    
    
    //站点信息的在线图标
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }],

    //Twikoo评论区前端文件
    ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.36/twikoo.all.min.js' }],

    // 代码复制模块的小箭头图标，参考https://notes.youngkbt.cn/about/website/code-block-hidden
    ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],

    
]