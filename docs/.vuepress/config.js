module.exports = {
  title: '程序员的学习笔记',
  description: '记录，成为更好的自己。',
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }]
  ],
  themeConfig: {
    logo: 'https://image.peterjxl.com/blog/re0.jpg',

    // 为每个文章底部添加 上次更新字段
    lastUpdated: '上次更新',

    //为每个文章底部添加“在GitHub上编辑此页”，点击后会跳转到GitHub的对应文件的地址。会自动填充为GitHub.com/Peter-JXL/vuepressblog/文件地址
    repo:'Peter-JXL/vuepressblog',
    docsDir:'docs',
    editLinks: true,
    editLinkText: '在GitHub上编辑此页',

    //配置全文搜索algolia
    algolia: {
      appId: 'HFCGE1I7YO',
      apikey: '557697d1f20e77362b502b71ecf41e2a',
      indexName: 'peterjxl'
    },

    bodyBgImg: 'https://image.peterjxl.com/blog/Emilia.jpg',  // 你的图片路径(必须位于 public 下)，可以是 URL
    bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5

    indexImg: {
      navColor: 1,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
      switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
      // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
      bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
      bgTimeColorArray: ['transparent', 'rgba(255, 148, 48, .2)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
      descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
      desc: ["纸上觉来终觉浅，绝知此事要躬行 —— 来自 Peter JXL"],  // 多个描述，如果填写则覆盖 config.js 的 description，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
      descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
      descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
      descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
      descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
      bubble: true,    // 是否开启图片的气泡效果，默认为 false
      bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
      bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
    },
    

    //配置导航栏
    nav: [
      { text: '首页', link: '/' },
      {
        text: '计算机基础',
        ariaLabel: 'program',
        link: '/ComputerBasic',
        items: [
          { text: '计算机科学导论', link: '/ComputerSience/' },
          // { text: '数字电路', link: '/ComputerDigital/' },
          // { text: '计算机组成原理', link: '/ComputerOrganization/' },
          // { text: 'C语言', link: '/CProgramLanguage/' },
          // { text: '数据结构', link: '/DataStructure/' },
          // { text: '汇编语言', link: '/AassemblyLanguage/' },
          { text: '操作系统', link: '/ComputerOS/' },
          // { text: 'Linux', link: '/Linux/' },
          // { text: '编译原理', link: '/CompilationPrinciple/' },
          { text: '计算机网络', link: '/Network/' },
          // { text: '数据库', link: '/DataBase/' },
        ]
      },

      // {
      //   text: 'Java',
      //   items: [
      //     { text: 'Java基础', link: '/JavaBasic/' },
      //     { text: 'JavaWeb', link: '/JavaWeb/' }
      //   ]
      // },
      // {
      //   text: '效率软件推荐',
      //   link: '/Software',
      //   items: [
      //     { text: '笔记软件', link: '/SoftwareNote/' },
      //     { text: 'Quicker', link: '/SoftwareQuicker/' },
      //     { text: 'Qttabar', link: '/SoftwareQttabar/' },
      //     { text: 'Wgesture', link: '/SoftwareWgesture/' },
      //     { text: '浏览器与插件', link: '/SoftwareBrowser/' },
      //     { text: '视频播放器', link: '/SoftwareVideo/' },
      //     { text: '待办清单', link: '/SoftwareTodo/' },
      //     { text: '终端软件', link: '/SoftwareCMD/' },
      //     { text: 'uTools', link: '/SoftwareuTools/' },
      //     { text: '番茄盒子', link: '/SoftwareTomato/' },
      //   ]
      // },
      {
        text: '其他',
        link: '/About',
        items: [
          { text: '关于本站', link: '/About/Web/' },
          { text: '网站日记', link: '/About/WebLog/' },
          { text: '赞赏支持', link: '/About/reward/' },
          { text: '如何搭建一个博客', link: '/About/BuildBlog/' },
          { text: '如何搭建一个邮箱', link: '/About/BuildMail/' }
        ]
      },
    ],

    sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义


    footer: {
      createYea: "程序狗 2022",
      copyrightInfo: `<a href='https://beian.miit.gov.cn'>粤ICP备2022067627号-1</a>  
      <img src='https://image.peterjxl.com/blog/beian.png'>
      <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646'>粤公网安备 44011302003646号</a>
      `
    }

  },

  //以下是引用插件
  plugins: [

    '@vuepress/last-updated',  //引入更新时间插件
    'fulltext-search',  //全文搜索用的插件
    ['vuepress-plugin-code-copy', true],  //复制代码块的插件


    //版权相关的复制
    [
      'copyright',
      {
        noCopy: true, // 选中的文字将无法被复制
        authorName: '程序狗', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],

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

    ['@vuepress/active-header-links'],

    //评论区插件
    [
      '@vssue/vuepress-plugin-vssue', {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',   //v3的platform是github，v4的是github-v4
        locale: 'zh', // 语言设置
        // 其他的 Vssue 配置
        owner: 'Peter-JXL',
        repo: 'vuepressblog',
        clientId: '9915e3e9f49e30e69ba5',
        clientSecret: 'a3017f99e465808a70ba3000515bed368d76e796',
        autoCreateIssue: true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
      }
    ],
  ]
}