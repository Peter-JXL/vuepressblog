module.exports = {
  title: '程序员的网络日志',
  head: [
    ['link', { rel: 'icon', href: '/re0.jpg' }]
  ],
  themeConfig: {
    logo: '/re0.jpg',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '编程', ariaLabel: 'program',
        items: [
          { text: '计算机科学导论', link: '/ComputerScience/' },
          { text: '数字电路', link: '/ComputerDigitalCircuit/' },
          { text: '计算机组成原理', link: '/ComputerOrganization/' },
          { text: '操作系统', link: '/ComputerOS/' },
          { text: 'Linux', link: '/ComputerLinux/' },
          { text: '数据结构', link: '/ComputerDataStructer/' },
          { text: '编译原理', link: '/ComputerCompilation/' },
          { text: '计算机网络', link: '/ComputerNetwork/' },
          { text: '数据库', link: '/ComputerDataBase/' },
          { text: '前端', link: '/Computerfontend/' },
          { text: 'Java', link: '/ComputerJava/' },
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
          { text: '关于作者', link: '/other/about.md' }
        ]
      },
      { text: 'Gitee', link: 'https://gitee.com/peterjxl/vuepressblog' },
      { text: 'GitHub', link: 'https://github.com/Peter-JXL/vuepressblog' }
    ],
    sidebar: [
      {
        title: 'DigitalCircuit',
        path: '/ComputerDigitalCircuit/',
        collapsable: false,
        sidebarDepth: 2,
        children: [
          '/ComputerDigitalCircuit/1Introduce'
        ]
      }
    ]
  }
}