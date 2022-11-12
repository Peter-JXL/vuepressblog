import { HeadTags } from 'vuepress/config';

export default <HeadTags> [
  
    //图标
    ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }],

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
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }]

]