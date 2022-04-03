module.exports = {
  title: 'peterjxl',
  head: [
    ['link', { rel: 'icon', href: 're0.jpg' }]
  ],
  themeConfig: {
    logo: 're0.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编程', ariaLabel: 'program',
        items: [
          { text: '数字电路', link: '/' },
          { text: '计算机组成原理', link: '/' },
          { text: '操作系统', link: '/' },
          { text: 'Linux', link: '/' },
          { text: '数据结构', link: '/' },
          { text: '编译原理', link: '/' },
          { text: '计算机网络', link: '/' },
          { text: '数据库', link: '/' },
          { text: '前端', link: '/' },
        ]
      },
      {
        text: '健身', ariaLabel: 'program',
        items: [
          { text: '健身理论', link: '/' },
          { text: '深蹲', link: '/' },
          { text: '俯卧撑', link: '/' },
          { text: '引体向上', link: '/' },
          { text: '举腿', link: '/' },
          { text: '桥', link: '/' },
          { text: '倒立撑', link: '/' },
          { text: '抓握', link: '/' },
          { text: '侧链', link: '/' },
          { text: '街健神技', link: '/' },
        ]
      },
      {
        text: '效率软件推荐', ariaLabel: 'program',
        items: [
          { text: '笔记软件', link: '/' },
          { text: 'Quicker', link: '/' },
          { text: 'Qttabar', link: '/' },
          { text: 'Wgesture', link: '/' },          
          { text: '浏览器与插件', link: '/' },
          { text: '视频播放器', link: '/' },
          { text: '待办清单', link: '/' },
          { text: '终端软件', link: '/' },
          { text: 'uTools', link: '/' },
          { text: '番茄盒子', link: '/' },
        ]
      },
      {
        text: '其他', ariaLabel: 'Language Menu',
        items: [
          { text: '网站日记', link: '/other/blogupdatelog.md' },
          { text: '赞赏支持', link: '/other/reward.md' }
        ]
      },
      { text: '其他', link: 'https://github.com/Peter-JXL/vuepressblog' },
      { text: 'Gitee', link: 'https://gitee.com/peterjxl/vuepressblog' },
      { text: 'GitHub', link: 'https://github.com/Peter-JXL/vuepressblog' }
    ],
    sidebar: 'auto'
  }
}