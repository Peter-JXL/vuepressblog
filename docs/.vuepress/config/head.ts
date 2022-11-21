import { HeadTags } from 'vuepress/config';

export default <HeadTags> [
  
    //图标
    ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }],
    ['meta', { name: 'keywords', content: '计算机基础 操作系统 计算机网络 Java'}],

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
    ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.7/twikoo.all.min.js' }],

]