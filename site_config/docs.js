export default {
  'en-us': {
    sidemenu: [
      {
        title: 'header title',
        children: [
          {
            title: 'demo1',
            link: '/en-us/docs/demo1.html',
          },
          {
            title: 'demo2',
            link: '/en-us/docs/demo2.html',
          },
          {
            title: 'dir',
            opened: true,
            children: [
              {
                title: 'demo3',
                link: '/en-us/docs/dir/demo3.html',
              },
            ],
          },
        ],
      },
    ],
    barText: 'Documentation',
  },
  'zh-cn': {
    sidemenu: [
      {
        title: '星座',
        children: [
          {
            title: '白羊座',
            link: '/zh-cn/docs/dir/xz_baiyang.html',
          },
          {
            title: '金牛座',
            link: '/zh-cn/docs/dir/xz_jinniu.html',
          },
          {
            title: '双子座',
            link: '/zh-cn/docs/dir/xz_shuangzi.html',
          },
          {
            title: '巨蟹座',
            link: '/zh-cn/docs/dir/xz_juxie.html',
          },
          {
            title: '狮子座',
            link: '/zh-cn/docs/dir/xz_shizi.html',
          },
          {
            title: '处女座',
            link: '/zh-cn/docs/dir/xz_chunv.html',
          },
          {
            title: '天秤座',
            link: '/zh-cn/docs/dir/xz_tianping.html',
          },
          {
            title: '天蝎座',
            link: '/zh-cn/docs/dir/xz_tianxie.html',
          },
          {
            title: '射手座',
            link: '/zh-cn/docs/dir/xz_sheshou.html',
          },
          {
            title: '摩羯座',
            link: '/zh-cn/docs/dir/xz_mojie.html',
          },
          {
            title: '水瓶座',
            link: '/zh-cn/docs/dir/xz_shuiping.html',
          },
          {
            title: '双鱼座',
            link: '/zh-cn/docs/dir/xz_shuangyu.html',
          },
          
        ],
      },{
        title: '关于我们',
        children: [
          {
            title: '关于星座',
            link: '/zh-cn/docs/aboutxz.html',
          },
          {
            title: '关于网站',
            link: '/zh-cn/docs/aboutsite.html',
          },
          {
            title: '关于我们',
            link: '/zh-cn/docs/aboutconpany.html',
          }
        ],
      },
    ],
    barText: '星座介绍',
  },
};
