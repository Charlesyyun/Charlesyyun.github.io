
const currentUrl = window.location.href;
const siteUrl = "https://charlesyyun.github.io";
let updatedUrl = currentUrl.replace("https://charlesyyun.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-conferences",
          title: "Conferences",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-patents",
          title: "Patents",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/patents/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-curriculum-vitae",
          title: "Curriculum Vitae",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-overview",
              title: "Overview",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/";
              },
            },{id: "dropdown-research",
              title: "Research",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/research/";
              },
            },{id: "dropdown-team",
              title: "Team",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/team/";
              },
            },{id: "dropdown-publications",
              title: "Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/publications/";
              },
            },{id: "dropdown-gallery",
              title: "Gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/gallery/";
              },
            },{id: "dropdown-join-us",
              title: "Join us",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tsilab/join/";
              },
            },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%65%79%75%6E@%63%6F%6E%6E%65%63%74.%68%6B%75.%68%6B", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Charlesyyun", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/charlesyyun", "_blank");
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
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: 'Languages',
          handler: () => {
            window.location.href = "/zh-cn" + updatedUrl;
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
