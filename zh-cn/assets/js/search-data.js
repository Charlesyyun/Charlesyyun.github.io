
const currentUrl = window.location.href;
const siteUrl = "https://charlesyyun.github.io";
let updatedUrl = currentUrl.replace("https://charlesyyun.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-个人简介",
    title: "个人简介",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-论文",
          title: "论文",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-学术会议",
          title: "学术会议",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/conferences/";
          },
        },{id: "nav-教学",
          title: "教学",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/teaching/";
          },
        },{id: "nav-专利",
          title: "专利",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/patents/";
          },
        },{id: "nav-动态",
          title: "动态",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/news/";
          },
        },{id: "nav-个人履历",
          title: "个人履历",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/zh-cn/cv/";
          },
        },{id: "dropdown-实验室简介",
              title: "实验室简介",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/";
              },
            },{id: "dropdown-研究方向",
              title: "研究方向",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/research/";
              },
            },{id: "dropdown-团队成员",
              title: "团队成员",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/team/";
              },
            },{id: "dropdown-研究成果",
              title: "研究成果",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/publications/";
              },
            },{id: "dropdown-团队相册",
              title: "团队相册",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/gallery/";
              },
            },{id: "dropdown-加入我们",
              title: "加入我们",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/zh-cn/tsilab/join/";
              },
            },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%65%79%75%6E%31@%6E%62%75.%65%64%75.%63%6E", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Charlesyyun", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-3346-4640", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Yun-Ye-5/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=WHLBq3UAAAAJ", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("/tsilab/", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: 'Languages',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
