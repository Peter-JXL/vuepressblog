module.exports = {
  title: '程序员的网络日志',
  head: [
    ['link', { rel: 'icon', href: 'https://image.peterjxl.com/blog/re0.jpg' }]
  ],
  themeConfig: {
    logo: 'https://image.peterjxl.com/blog/re0.jpg',
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
          { text: 'Java', link: '/JavaBasic/' },
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
      { text: 'Gitee', link: 'https://gitee.com/peterjxl/vuepressblog' },
      { text: 'GitHub', link: 'https://github.com/Peter-JXL/vuepressblog' }
    ],
    sidebar: {
      '/ComputerScience/':[
        '',  // 测边栏第一个页面是：/ComputerScience/README.md，、链接文字自动获取（页面的第一个header），即h1（前端技术）
        '1BeforeComputer', //侧边栏第二个页面是：/ComputerScience/Collegecourses,md，链接文字自动获取（页面的第一个header），即h2（htnl三级标题）
        '2Mechanics',
        '3Electromechanical',
        '4Electronics',
        'Collegecourses',
      ],

      '/ComputerDigitalCircuit/':[
        '',
        '1Introduce',
        '2Digital',
        '3EncodeAndDecode',
        '4Logic',
        '5Gate',
        '6CombineGate',
        '7shixuGate'
      ],
      
      '/ComputerOrganization/':[
        '',
        '1Introduce',
        '2Compute',
        '3Memory',
        '4Zhiling',
        '5CPU',
        '6Bus',
        '7IO',
        '9Bingfa',
      ],

      '/ComputerOS/':[
        '',
        '1whatisos',
        '2jincheng',
        '3cunchu',
        '4file',
        '5iop',
        '6deadlock',
        '7mulitos',
        '8duoheos',
        '8secure',
        '10instanceLinux',
      ],

      '/ComputerLinux/':[
        '',
        'in',
        'kill',
        'seq',
        'tee',
        'time',
        'wget',
        'who',
        'date',
        'exec',
        'hostname',
      ],

      '/ComputerDataStructer/':[
        '',
        '1LinerList',
        '2StackAndQueu',
        '3StringKMP',
        '4Tree',
        '5Search',
        '6Sort',
        '7Map',
      ],

      '/ComputerNetwork/': [
        '',
        '1Introduce',
        '2wuliceng',
        '3lianluceng',
        '4wangluoceng',
        '5TCP',
        '6yingyong',
        '7Lab',
      ],

      '/ComputerDataBase/': [
        '',
        '1Basic',
        '2gaoji',
        '3exist',
        '5join',
        '6fanshi',
        '6with',
        '7groupby',
      ],
      
      '/Computerfontend/':[
        '',
        '1HTML',
        '2CSS',
        '3JS',
        '4NODE',
        '4webpack',
        '5vue',
        '6mock',
      ],

      '/JavaBasic/':[
        '',
        '0Install',
        '1HelloWorld',
        '2DataType',
        '3Array',
        '4String',
        '5Object',
        '6Exception',
        '7IO',
        '8DataStruct',
        '9GC',
      ]

     
      
    }

  }
}