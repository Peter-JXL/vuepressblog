import { UserPlugins } from 'vuepress/config'


export default <UserPlugins>[

  'reading-progress', // 阅读进度条插件

  // 光标效果插件
  [
    'cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }
  ],


  // 网站动态标题
  ['dynamic-title', {
    // showIcon: '',
    showText: '欢迎回来  O(∩_∩)O~~',
    // hideIcon: '',
    hideText: '等等，你别走啊 ::>_<::',
    recoverTime: 2000,
  }],

  // 菜单高亮。页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，对应的左侧菜单会自动高亮
  ['@vuepress/active-header-links'],

  // 图片放大插件
  [
    'vuepress-plugin-zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],


  // 站点地图文件，用于推送给 Google 或百度等搜索引擎
  ['sitemap',{ hostname: 'https://www.peterjxl.com'}],

  //谷歌统计插件
  [
    '@vuepress/google-analytics',
    {
      'ga': ' G-Z4BJQ4VJG4' // UA-00000000-0
    }
  ],

  [
    'autometa', {
      site: {
        name: 'peterjxl'
      },
      canonical_base: 'https://www.peterjxl.com',
    },
  ],

  // 自定义 Twikoo，代码块插件，站点信息等插件
  {
    name: 'custom-plugins',
    globalUIComponents: ["Twikoo", "BlockToggle", "PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
  },


  // 看板娘
  [
    'vuepress-plugin-helper-live2d', {
      live2d: {
        // 是否启用(关闭请设置为false)(default: true)
        enable: true,
        // 模型名称(default: hibiki)>>>取值请参考：
        // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
        model: 'hijiki',
        display: {
          position: "left", // 显示位置：left/right(default: 'right')
          width: 135, // 模型的长度(default: 135)
          height: 300, // 模型的高度(default: 300)
          hOffset: 65, //  水平偏移(default: 65)
          vOffset: 0, //  垂直偏移(default: 0)
        },
        mobile: {
          show: false // 是否在移动设备上显示(default: false)
        },
        react: {
          opacity: 0.8 // 模型透明度(default: 0.8)
        }
      }
    }
  ],

  // 全文搜索插件 meilisearch
  [
    'vuepress-plugin-meilisearch',
      {
          hostUrl: 'https://search.peterjxl.com',        // meilisearch 服务端域名
          apiKey: "6c9ce274ed9e7d8b8134d2c9584965a02318ee1774f23326529a61ca614de94f", // 只有搜索权限的 key
          indexUid: 'VuePressBlog',
          placeholder: '按下 S 进行全文搜索',   // 在搜索栏中显示的占位符
          maxSuggestions: 9,                      // 最多显示几个搜索结果
          cropLength: 30,                         // 每个搜索结果最多显示多少个字符
      },
  ],

  // 代码块复制按钮
  [
    'one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],

  // RSS 订阅
  [ 
    'feed', 
    {
      canonical_base: 'https://www.peterjxl.com',
      count: 5000,
    } 
  ],

  
]
