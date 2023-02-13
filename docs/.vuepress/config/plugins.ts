import { UserPlugins } from 'vuepress/config'

export default <UserPlugins>[

  '@vuepress/last-updated',  //引入更新时间插件

  ['vuepress-plugin-code-copy', true],  //复制代码块的插件

  'reading-progress', //阅读进度条插件

  //版权相关的复制
  // [
  //   'copyright',
  //   {
  //     noCopy: true, // 选中的文字将无法被复制
  //     authorName: '程序狗', // 选中的文字将无法被复制
  //     minLength: 200, // 如果长度超过  30 个字符
  //   },
  // ],

  //光标效果的插件
  [
    'cursor-effects', {
      size: 2, // size of the particle, default: 2
      shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    }
  ],


  //网站动态标题
  ['dynamic-title', {
    // showIcon: '',
    showText: '欢迎回来  O(∩_∩)O~~',
    // hideIcon: '',
    hideText: '等等，你别走啊 ::>_<::',
    recoverTime: 2000,
  }],

  //菜单高亮。页面滚动时自动激活侧边栏链接的插件，效果就是右边内容滚动的时候，看到哪里了，左侧菜单会自动高亮显示当前看的目录
  ['@vuepress/active-header-links'],

  //站点信息配置
  [
    {
      name: 'custom-plugins',
      clientAppRootComponentFiles: ["PageInfo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
    }
  ],

  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],


  //站点地图文件，用于推送给百度
  [
    'sitemap',
    {
      hostname: 'https://www.peterjxl.com'
    }
  ],


  //谷歌统计插件
  [
    '@vuepress/google-analytics',
    {
      'ga': 'G-8PPPBTJ1HM' // UA-00000000-0
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

  //全局搜索插件
  //['fulltext-search'],

  //Twikoo
  {
    name: 'custom-plugins',
    globalUIComponents: ["Twikoo"] // 2.x 版本 globalUIComponents 改名为 clientAppRootComponentFiles
  },

  //回到顶部按钮--猫爪形状，和自带的冲突了，暂时略过
  //['go-top']

  //在背景里添加一条彩虹背景带
  //['ribbon'],

  //Live2D~ 由于图片可能要翻墙才能显示（在GitHub上），暂时不用
  // [
  //   "vuepress-plugin-live2d",
  //   {
  //     "modelName": "shizuku",  //可选值8个类型（z16，Epsilon2.1，izumi，koharu，shizuku，miku, hijiki小黑猫, tororo
  //     "mobileShow": false, //是否在移动端显示，默认false
  //     position: 'left' //位置
  //   }
  // ]

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
          hostUrl: 'https://ms-5305a0b50310-2021.sgp.meilisearch.io',        // meilisearch 服务端域名
          apiKey: "6c612bdb206c82118a0d5775625462158058d03a8c21a1c4a43d4bb0c2180956", // 只有搜索权限的 key
          indexUid: 'VuePressBlog',
          // placeholder: 'Search as you type...',   // 在搜索栏中显示的占位符
          maxSuggestions: 9,                      // 最多显示几个搜索结果
          cropLength: 30,                         // 每个搜索结果最多显示多少个字符
      },
  ],

]
