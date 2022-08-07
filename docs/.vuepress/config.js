module.exports = {
  title: '程序员的网络日志',
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
    lastUpdated: '上次更新',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '计算机基础', 
        ariaLabel: 'program',
        link: '/ComputerBasic/',
        items: [
          { text: '计算机科学导论', link: '/ComputerSience/' },
          { text: '数字电路', link: '/ComputerDigital/' },
          { text: '计算机组成原理', link: '/ComputerOrganization/' },
          { text: 'C语言', link: '/CProgramLanguage/' },
          { text: '数据结构', link: '/DataStructure/' },
          { text: '汇编语言', link: '/AassemblyLanguage/' },
          { text: '操作系统', link: '/ComputerOS/' },
          { text: 'Linux', link: '/Linux/' },
          { text: '编译原理', link: '/CompilationPrinciple/' },
          { text: '计算机网络', link: '/Network/' },
          { text: '数据库', link: '/数据库/' },          
        ]
      },

      {
        text: '效率软件推荐', ariaLabel: 'softWare',
        items: [
          { text: '笔记软件', link: '/SoftwareNote/' },
          { text: 'Quicker', link: '/SoftwareQuicker/' },
          { text: 'Qttabar', link: '/SoftwareQttabar/' },
          { text: 'Wgesture', link: '/SoftwareWgesture/' },
          { text: '浏览器与插件', link: '/SoftwareBrowser/' },
          { text: '视频播放器', link: '/SoftwareVideo/' },
          { text: '待办清单', link: '/SoftwareTodo/' },
          { text: '终端软件', link: '/SoftwareCMD/' },
          { text: 'uTools', link: '/SoftwareuTools/' },
          { text: '番茄盒子', link: '/SoftwareTomato/' },
        ]
      },
      
      {
        text: '其他', ariaLabel: 'Other',
        items: [
          { text: '网站日记', link: '/other/blogupdatelog.md' },
          { text: '赞赏支持', link: '/other/reward.md' },
          { text: '关于本站', link: '/other/about.md' },
          { text: '如何搭建一个博客', link: '/other/BuildAWebSite' },
          { text: '如何搭建一个邮箱', link: '/other/BuildMail' }
        ]
      },
      { text: 'GitHub', link: 'https://github.com/Peter-JXL' }
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
  plugins: [
    '@vuepress/last-updated',

    ['vuepress-plugin-code-copy', true],

    [
      'copyright',
      {
        noCopy: true, // 选中的文字将无法被复制
        authorName: '程序狗', // 选中的文字将无法被复制
        minLength: 30, // 如果长度超过  30 个字符
      },
    ],


    [
      'cursor-effects', {
        size: 2, // size of the particle, default: 2
        shape: 'star', // ['star' | 'circle'], // shape of the particle, default: 'star'
        zIndex: 999999999, // z-index property of the canvas, default: 999999999
      }
    ],

    ['dynamic-title', {
      // showIcon: '',
      showText: '欢迎回来  O(∩_∩)O~~',
      // hideIcon: '',
      hideText: '等等，你别走啊 ::>_<::',
      recoverTime: 2000,
    }],

    ['@vuepress/active-header-links']
  ]
}