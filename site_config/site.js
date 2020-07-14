// 全局的一些配置
export default {
  rootPath: '/xingzuo', // 发布到服务器的根目录，需以/开头但不能有尾/，如果只有/，请填写空字符串
  port: 8080, // 本地开发服务器的启动端口
  domain: 'qianmeng.github.io', // 站点部署域名，无需协议和path等
  defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  defaultLanguage: 'zh-cn',
  'en-us': {
    pageMenu: [
      {
        key: 'home', // 用作顶部菜单的选中
        text: 'HOME',
        link: '/en-us/index.html',
      },
      {
        key: 'docs',
        text: 'DOCS',
        link: '/en-us/docs/demo1.html',
      },
      {
        key: 'blog',
        text: 'BLOG',
        link: '/en-us/blog/index.html',
      },
      {
        key: 'community',
        text: 'COMMUNITY',
        link: '/en-us/community/index.html',
      },
    ],
    disclaimer: {
      title: 'Disclaimer',
      content: 'the disclaimer content',
    },
    documentation: {
      title: 'Documentation',
      list: [
        {
          text: 'Overview',
          link: '/en-us/docs/demo1.html',
        },
        {
          text: 'Quick start',
          link: '/en-us/docs/demo2.html',
        },
        {
          text: 'Developer guide',
          link: '/en-us/docs/dir/demo3.html',
        },
      ],
    },
    resources: {
      title: 'Resources',
      list: [
        {
          text: 'Blog',
          link: '/en-us/blog/index.html',
        },
        {
          text: 'Community',
          link: '/en-us/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  },
  'zh-cn': {
    pageMenu: [
      {
        key: 'home',
        text: '首页',
        link: '/zh-cn/index.html',
      },
      {
        key: 'docs',
        text: '星座介绍',
        link: '/zh-cn/docs/aboutxz.html',
      },
      {
        key: 'blog',
        text: '星座美文',
        link: '/zh-cn/blog/index.html',
      },
      {
        key: 'community',
        text: '星座社区',
        link: '/zh-cn/community/index.html',
      },
    ],
    disclaimer: {
      title: '免责声明',
      content: '未经允许，禁止拷贝网站任何资源用于其他商业用途',
    },
    documentation: {
      title: '关于我们',
      list: [
        {
          text: '概览',
          link: '/zh-cn/docs/aboutxz.html',
        },
        {
          text: '关于网站',
          link: '/zh-cn/docs/aboutsite.html',
        },
        {
          text: '关于我们',
          link: '/zh-cn/docs/aboutconpany.html',
        },
      ],
    },
    resources: {
      title: '资源',
      list: [
        {
          text: '精彩美文',
          link: '/zh-cn/blog/index.html',
        },
        {
          text: '星座社区',
          link: '/zh-cn/community/index.html',
        },
      ],
    },
    copyright: 'Copyright © 2018 星座奇缘',
  },
};
