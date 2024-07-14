import { HeadTags } from 'vuepress/config';

export default <HeadTags>[

  //图标
  ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }],
  ['meta', { name: 'keywords', content: '博客,编程,个人网站,读书,学习成长,计算机基础,操作系统,计算机网络,Java,JavaWEB,Spring,SpringBoot,微服务,SpringCloud,Docker,Git,Gitee,GitHub' }],

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
  ['script', { src: 'https://cdn.staticfile.org/twikoo/1.6.38/twikoo.all.min.js' }],

  // 代码复制模块的小箭头图标，参考https://notes.youngkbt.cn/about/website/code-block-hidden
  ['link', { rel: 'stylesheet', href: '//at.alicdn.com/t/font_3114978_qe0b39no76.css' }],


  // 浏览器控制台输出
  [
    'script', {}, `
        console.log('                                         ,s555SB@@&                      ')
        console.log('                                      :9H####@@@@@Xi                    ')
        console.log('                                     1@@@@@@@@@@@@@@8                   ')
        console.log('                                   ,8@@@@@@@@@B@@@@@@8                  ')
        console.log('                                  :B@@@@X3hi8Bs;B@@@@@Ah,               ')
        console.log('             ,8i                  r@@@B:     1S ,M@@@@@@#8;             ')
        console.log('            1AB35.i:               X@@8 .   SGhr ,A@@@@@@@@S            ')
        console.log('            1@h31MX8                18Hhh3i .i3r ,A@@@@@@@@@5           ')
        console.log('            ;@&i,58r5                 rGSS:     :B@@@@@@@@@@A           ')
        console.log('             1#i  . 9i                 hX.  .: .5@@@@@@@@@@@1           ')
        console.log('              sG1,  ,G53s.              9#Xi;hS5 3B@@@@@@@B1            ')
        console.log('               .h8h.,A@@@MXSs,           #@H1:    3ssSSX@1              ')
        console.log('               s ,@@@@@@@@@@@@Xhi,       r#@@X1s9M8    .GA981           ')
        console.log('               ,. rS8H#@@@@@@@@@@#HG51;.  .h31i;9@r    .8@@@@BS;i;      ')
        console.log('                .19AXXXAB@@@@@@@@@@@@@@#MHXG893hrX#XGGXM@@@@@@@@@@MS    ')
        console.log('                s@@MM@@@hsX#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&,  ')
        console.log('              :GB@#3G@@Brs ,1GM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@B,   ')
        console.log('            .hM@@@#@@#MX 51  r;iSGAM@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@8   ')
        console.log('          :3B@@@@@@@@@@@&9@h :Gs   .;sSXH@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@:  ')
        console.log('      s&HA#@@@@@@@@@@@@@@M89A;.8S.       ,r3@@@@@@@@@@@@@@@@@@@@@@@@@@@r  ')
        console.log('   ,13B@@@@@@@@@@@@@@@@@@@5 5B3 ;.         ;@@@@@@@@@@@@@@@@@@@@@@@@@@@i  ')
        console.log('  5#@@#&@@@@@@@@@@@@@@@@@@9  .39:          ;@@@@@@@@@@@@@@@@@@@@@@@@@@@;  ')
        console.log('  9@@@X:MM@@@@@@@@@@@@@@@#;    ;31.         H@@@@@@@@@@@@@@@@@@@@@@@@@@:  ')
        console.log('   SH#@B9.rM@@@@@@@@@@@@@B       :.         3@@@@@@@@@@@@@@@@@@@@@@@@@@5  ')
        console.log('     ,:.   9@@@@@@@@@@@#HB5                 .M@@@@@@@@@@@@@@@@@@@@@@@@@B  ')
        console.log('           ,ssirhSM@&1;i19911i,.             s@@@@@@@@@@@@@@@@@@@@@@@@@@S   ')
        console.log('              ,,,rHAri1h1rh&@#353Sh:          8@@@@@@@@@@@@@@@@@@@@@@@@@#:  ')
        console.log('            .A3hH@#5S553&@@#h   i:i9S          #@@@@@@@@@@@@@@@@@@@@@@@@@A. ')
        console.log('别看了，没有报错的网站不是好网站！😡😡😡')
      </script>
      `
  ],
]