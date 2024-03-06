import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import { readFileList, readTotalFileWords, readEachFileWords } from '../webSiteInfo/readFile'


export default <VdoingThemeConfig>{
  logo: 'https://image.peterjxl.com/blog/re0.jpg',


  //配置导航栏
  nav: [
    { text: '首页', link: '/' },
    {
      text: '计算机基础',
      ariaLabel: 'program',
      items: [
        { text: '计算机简史', link: '/ComputerHistory/' },
        { text: '数字电路', link: '/ComputerDigital/' },
        { text: '计算机组成原理', link: '/ComputerOrganization/'},
        // { text: '汇编语言', link: '/AassemblyLanguage/' },
        // { text: 'C语言', link: '/CProgramLanguage/' },
        // { text: '数据结构', link: '/DataStructure/' },
        { text: '操作系统', link: '/ComputerOS/' },
        { text: 'Linux', link: '/Linux/' },
        { text: 'Docker', link: '/Docker/' },
        { text: '计算机网络', link: '/Network/' },
        // { text: '数据库', link: '/DataBase/' },
        { text: '计算机常识', link: '/literacy/' },
        { text: 'MySQL', link: '/MySQL/' },
        { text: 'Git', link: '/Git/' },
        // { text: '编译原理', link: '/CompilationPrinciple/' },
        
      ]
    },
    {
      text: 'Java',
      ariaLabel: 'Java',
      link: '/Java',
      items: [
        { text: 'JavaSE', link: '/JavaSE/' },
        { text: 'Java高级', link: '/JavaSenior/' },

        { text: 'JavaEE', items:[
          { text: '构建、依赖管理', link: '/JavaEE/1-Build/' },
          { text: 'Ant', link: '/JavaEE/Ant/' },
          { text: 'Maven', link: '/JavaEE/Maven/' },
          { text: '日志框架', link: '/JavaEE/Log4j/' },
          { text: 'Junit', link: '/JavaEE/Junit/' },     
          { text: 'JDBC', link: '/JavaEE/JDBC/' },    
          { text: 'XML-JSON', link: '/JavaEE/XML-JSON/' }
        ] },
        

        { text: 'JavaWeb', items:[
          { text: '服务器软件', link: '/JavaWeb/Web-Container/' },
          { text: '环境管理和配置管理-科普篇', link: '/JavaWeb/environment-and-code-version-manage/' },
          { text: 'Servlet', link: '/JavaWeb/Servlet/' },
        ]},
       
        { text: 'Spring', items:[
          { text: 'Spring基础', link: '/Spring-Basic/' },
        ] },

        { text: '主流框架', items: [
          { text: 'Redis', link: '/Java-Framework/Redis/' },
          { text: 'Mybatis', link: '/Java-Framework/Mybatis/' },
          { text: 'Lucene', link: '/Java-Framework/Lucene/' },
          { text: 'Elasticsearch', link: '/Java-Framework/Elasticsearch/' },
          { text: 'RabbitMQ', link: '/Java-Framework/RabbitMQ/' },
          { text: 'MyCat', link: '/Java-Framework/MyCat/' },
          { text: 'Lombok', link: '/Java-Framework/Lombok/' }
        ]},
        

        { text: 'SpringMVC', items:[
          { text: 'SpringMVC基础', link: '/SpringMVC-Basic/' },
        ]},      

        { text: 'SpringBoot', items:[
          { text: 'SpringBoot基础', link: '/SpringBoot-Basic/' },
        ]},      
      ]
    },

    // {
    //   text: '读书与学习',
    //   items: [
    //     { text: '学习网课的心得', link: '/Book/Learn-Method/About/' },
    //   ]
    // },

    {
        text: '效率软件', link: '/Software',
        items: [
          { text: 'Windows使用技巧', link: '/Windows/' },
          { text: '输入法', link: '/TypeWriting/' },
          { text: '浏览器', link: '/Browser/' },
          // { text: '笔记软件', link: '/SoftwareNote/' },
          { text: '终端软件', link: '/Terminal/' },
          { text: '装机', link: '/Computer-Diy/' },
          // { text: 'Quicker', link: '/SoftwareQuicker/' },
          // { text: 'Qttabar', link: '/SoftwareQttabar/' },
          // { text: 'Wgesture', link: '/SoftwareWgesture/' },
          // { text: '视频播放器', link: '/SoftwareVideo/' },
          // { text: '待办清单', link: '/SoftwareTodo/' },
          // { text: 'uTools', link: '/SoftwareuTools/' },
          // { text: '番茄盒子', link: '/SoftwareTomato/' },
        ]
    },

    {
      text: '职场系列',
      link: '/Job/',
      items: [
        { text: '校招', link: '/Job/on-campus-recruitment/' },
        { text: '五险一金等', link: '/Job/Social-welfare/' },
        { text: '职场规划', link: '/Job/career-planning/' },
        { text: '关于离职', link: '/Job/dimission/' },
        //   { text: '社招', link: '/Job/social-requirement' }
        { text: '杂谈', link: '/Job/other/' },
      ]
      
    },

    {
      text: '英语',
      link: '/English/',
      items: [
        { text: '简介', link: '/English/Introduce/' },
        { text: '字母', link: '/English/Alphabet/' },
        { text: '音标', link: '/English/Symbols/' },
        { text: '单词', link: '/English/Word/' },
        { text: '英语的文化', link: '/English/culture/' },
        { text: '英语兔的相关视频', link: '/English/yingyutu/' },
        { text: 'Larry想做技术大佬的相关视频', link: '/English/Larry/' }
      ]
      
    },

    {
      text: '个人学习',
      link: '/world-view/',
      items: [
        { text: '住房相关', link: '/property/' },
      ]
    },

    {
      text: '经济学',
      link: '/Economy/',
      items: [
        { text: '住房相关', link: '/property/' },
      ]
    },

    {
      text: '健身',
      items: [
        { text: '口腔健康', link: '/Oral-health/' },
      ]
      
    },

    {
      text: '游戏',
      items: [
        { text: '三国杀', link: '/sanguosha/' },
      ]
      
    },
  
    {
      text: '其他',
      link: '/About',
      items: [
        { text: '网站介绍', link: '/About/Web/' },
        { text: '网站动态', link: '/About/WebLog/' },
        { text: '友人帐', link: '/About/friend-link/' },
        { text: '如何搭建一个博客', link: '/Blog/' },
        { text: '关于邮件服务器', link: '/About/BuildMail/' },
        { text: '本站的分享资料', link: '/About/share/' },
        { text: '归档', link: '/archives/' },
        { text: '年度总结', items: [
          { text: '2022年度总结', link: '/About/summary-2022/' },
          { text: '2023年度总结', link: '/About/summary-2023/' },
        ]}        
      ]
    },

  ],


  //配置侧边栏
  sidebar: 'structuring', //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义


  //配置页脚
  footer:{
    createYear: 2022,
    copyrightInfo: `<a href='https://beian.miit.gov.cn'>粤ICP备2022067627号-1</a>  
    <img src='https://image.peterjxl.com/blog/beian.png'>
    <a href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302003646'>粤公网安备 44011302003646号</a>
    `
  },
  
  // 为每个文章底部添加 上次更新字段
  lastUpdated: '上次更新',

  //不在文章底部显示最近更新栏
  updateBar:{
    showToArticle: false, 
    moreArticle: '/archives/'
  },

  //为每个文章底部添加“在GitHub上编辑此页”，点击后会跳转到GitHub的对应文件的地址。会自动填充为GitHub.com/Peter-JXL/vuepressblog/文件地址
  repo: 'Peter-JXL/vuepressblog',
  docsDir: 'docs',
  editLinks: true,
  editLinkText: '在GitHub上编辑此页',


  //配置全文搜索algolia
  algolia: {
    appId: 'HFCGE1I7YO',
    apikey: '557697d1f20e77362b502b71ecf41e2a',
    indexName: 'peterjxl'
  },


  //背景大图轮换及其相关配置
  bodyBgImg: [
    'https://image.peterjxl.com/backgruond-city.jpg',  //如果使用本地图片：/img/backgruond-city.jpg
  ],  // 如果是本地图片，图片路径必须位于 .vuepress/public 下
  bodyBgImgOpacity: 1, // body 背景图透明度，选值 0 ~ 1.0, 默认0.5
  indexImg: {
    navColor: 2,    // 导航栏左侧名字、中间搜索框、右侧字体的颜色，1 是黑色，2 是白色。默认是 1
    switchNavColor: true,    // 页面移出大图片的位置后，navColor 是否变换，如由白色变黑色，黑色变白色。默认是 false
    // 因为本主题的默认背景色偏向白色，如果 navColor 是 2，建议需要开启(true)，否则白背景 + 白字体 = 看不见
    bgTimeColor: true,     // 是否开启图片的背景色随一天的不同时间而变化，并且开启时间窗口提示，默认是 false。时间分为四种：白天（原图）、黄昏（偏黄）、晚上（偏黑）、深夜（偏深黑）
    bgTimeColorArray: ['transparent', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .3)', 'rgba(0, 0, 0, .5)'],   // 第一个是白天的颜色（默认原图），第二个是黄昏的颜色，第三个是晚上的颜色，第四个是深夜的颜色。bgTimeColor 为 true 生效。提示：如果不想要这个效果，但是又想要时间窗口提示效果，则改为 ['transparent', 'transparent', 'transparent', 'transparent']
    descFade: true,   // 是否开启图片中间描述的淡入效果，默认为 false
    desc: [
      "那就从零开始。"
    ],  // 多个描述，如果填写则覆盖 config.js 的 description ，不填写默认读取 config.js 的 description，descFadeIn 为 true 生效
    descFontSize: '1.4rem',   // desc 的字体大小，默认 1.4rem。提示：原主题是 1.1rem
    descFadeInTime: 200,  // 描述的淡入效果持续时间，descFade 为 true 生效，默认 200 毫秒
    descFadeOutTime: 100,  // 描述的淡出效果持续时间，descFade 为 true 生效，默认 100 毫秒
    descNextTime: 800,  // 当存在多个 desc 时，一个 desc 展示完后或准备开始时，多少秒后出现下一个 desc，默认 800 毫秒
    bubble: false,    // 是否开启图片的气泡效果，默认为 false
    bubblePosition: 0,  // 气泡效果的位置，范围：0-100，不同数值代表不同的起始位置，0是整个图片，50是半张图（一半的下方）。bubble 为 true 生效。默认是 0
    bubbleNum: 200,   // 气泡的个数，bubble 为 true 生效，默认 200 个
  },

  // 站点配置（首页 & 文章页）
  blogInfo: {
    blogCreate: '2022-04-01', // 博客创建时间
    indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
    pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
    readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
    eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
    mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
    totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
    moutedEvent: '.categories-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
    // 下面两个选项：第一次获取访问量失败后的迭代时间
    indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
    // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
  },

  // 博主信息，显示在首页侧边栏
  blogger:{
    avatar: 'https://image.peterjxl.com/blog/re0.jpg',  //头像
    name: 'peterjxl',
    slogan: '人生如逆旅,我亦是行人' // 个性签名
  },


  // 社交图标，显示于博主信息栏和页脚栏
  social: {
    // iconfontCssFile: '//at.alicdn.com/t/font_1678482_u4nrnp8xp6g.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: "icon-youjian",
        title: "邮件",
        link: "mailto:peterjxl@qq.com",
      },
      {
        iconClass: "icon-github",
        title: "GitHub",
        link: "https://github.com/Peter-JXL",
      },
      {
        iconClass: "icon-gitee",
        title: "Gitee",
        link: "https://gitee.com/peterjxl",
      },
      // {
      //   iconClass: "icon-zhihu",
      //   title: "知乎",
      //   link: "https://www.zhihu.com/people/ao-chuang-2",
      // },
      // {
      //   iconClass: "icon-juejin",
      //   title: "掘金",
      //   link: "https://juejin.cn/user/465848663017144",
      // },
      // {
      //   iconClass: "icon-jianshu",
      //   title: "简书",
      //   link: "https://www.jianshu.com/u/9bca3159ae44",
      // },
      // {
      //   iconClass: "icon-sf",
      //   title: "思否",
      //   link: "https://segmentfault.com/u/peterjxl",
      // },
      // {
      //   iconClass: "icon-bokeyuan",
      //   title: "博客园",
      //   link: "https://www.cnblogs.com/peterJXL/",
      // },
      // {
      //   iconClass: "icon-csdn",
      //   title: "CSDN",
      //   link: "https://blog.csdn.net/weixin_38125348",
      // },
      // {
      //   iconClass: "icon-bilibili",
      //   title: "Bilibili",
      //   link: "https://space.bilibili.com/53069777",
      // },
    ],
  },
}