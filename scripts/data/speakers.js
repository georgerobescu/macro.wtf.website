const rawSpeakersData = [
  {
    id: "nic_carter",
    name: "Nic Carter",
    company: "Castle Island",
    photoUrl: "https://pbs.twimg.com/profile_images/1049802409881481221/f_OwJ06x_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/nic__carter"
      }
    ]
  },
  {
    id: "tarun_chitra",
    name: "Tarun Chitra",
    company: "Gauntlet Network",
    photoUrl: "https://pbs.twimg.com/profile_images/997541920749453313/R5PvkwMc_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/tarunchitra"
      }
    ]
  },
  {
    id: "joel_monegro",
    name: "Joel Monegro",
    company: "Placeholder",
    bio: "Partner @placeholdervc. Your doubt is my alpha.",
    photoUrl: "https://pbs.twimg.com/profile_images/1168619368537886729/FXfuKx7X_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/jmonegro"
      }
    ]
  },
  {
    id: "shruti_appiah",
    name: "Shruti Appiah",
    photoUrl: "https://pbs.twimg.com/profile_images/1179421897643188225/3rHAp_-B_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/ShrutiAppiah/"
      },
      {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/shruti.appiah"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/shrutiappiah/"
      }
    ]
  },
  {
    id: "tina_zhen",
    name: "Tina Zhen",
    photoUrl: "https://pbs.twimg.com/profile_images/1177965467572428800/mWBN6yqP_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/tzhen"
      },
      {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/tina.zhen"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/%E5%A4%A9%E8%99%B9-%E7%94%84-3b49a8152/"
      }
    ]
  },
  {
    id: "dovey_wan",
    name: "Dovey Wan",
    company: "Primitive",
    photoUrl: "https://pbs.twimg.com/profile_images/3159516013/08d09f43bd78a9207621af0747e34872_400x400.jpeg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/DoveyWan"
      },
      {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/dovey.wan"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/doveywan"
      }
    ]
  },
  {
    id: "sunny_aggarwal",
    name: "Sunny Aggarwal",
    company: "Cosmos",
    photoUrl: "https://pbs.twimg.com/profile_images/1171047763955634176/XHT24jY__400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/sunnya97"
      },
      {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/sunnya97"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/sunnya97/"
      }
    ]
  },
  {
    id: "haseeb_qureshi",
    name: "Haseeb Qureshi",
    company: "Dragonfly Capital",
    photoUrl: "https://pbs.twimg.com/profile_images/416483818720096256/qsbpuy6P_400x400.jpeg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/hosseeb"
      }
    ]
  },
  {
    id: "michael_feng",
    name: "Michael Feng",
    company: "Hummingbot",
    photoUrl: "https://pbs.twimg.com/profile_images/1172406542441701376/z0bpQH8N_400x400.png",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/fengtality",
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/mifeng"
      }
    ]
  },
  {
    id: "marek_olszewski",
    name: "Marek Olszewski",
    company: "Celo",
    photoUrl: "https://pbs.twimg.com/profile_images/3304005600/127d11d248f4104bb075fd156dd2e911_400x400.jpeg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/marekolszewski"
      },
      {
        name: "Facebook",
        icon: "facebook",
        link: "https://www.facebook.com/sunnya97"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/marekolszewski/"
      }
    ]
  },
  {
    id: "varun_vruddhula",
    name: "Varun Vruddhula",
    company: "Hashflow",
    photoUrl: "https://pbs.twimg.com/profile_images/1102767609445924864/sOkZLK4D_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/GandalfTheBr0wn"
      }
    ]
  },
  {
    id: "brent_xu",
    name: "Brent Xu",
    company: "Cosmos",
    photoUrl: "https://pbs.twimg.com/profile_images/997667356234133504/Y9Iwd5hg_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/xubrent888"
      }
    ]
  },
  {
    id: "gabriel_jimenez",
    name: "Gabriel Jimenez",
    company: "Petro",
    socials: []
  },
  {
    id: "jeremiah_andrews",
    name: "Jeremiah Andrews",
    company: "Blockchain at Berkeley",
    photoUrl: "https://pbs.twimg.com/profile_images/916359074890919936/7UkqNNCF_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/jlandrews0"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/jeremiah-andrews-779989122"
      }
    ]
  },
  {
    id: "matt_dsouza",
    name: "Matt D'Souza",
    company: "Blockchain Opportunity Fund",
    photoUrl: "https://pbs.twimg.com/profile_images/863637847785340929/-PbYdYga_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/mjdsouza2"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/jeremiah-andrews-779989122"
      }
    ]
  },
  {
    id: "steve_waldman",
    name: "Steve Waldman",
    company: "Interfluidity",
    photoUrl: "https://pbs.twimg.com/profile_images/658296178719633408/CgmJFg3a_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/interfluidity"
      }
    ]
  },
  {
    id: "claire_belmont",
    name: "Claire Belmont",
    company: "Celo",
    photoUrl: "https://pbs.twimg.com/profile_images/1135261302996197377/bJGmaSEj_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/clairebelmont"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://uk.linkedin.com/in/clairebelmont"
      }
    ]
  },
  {
    id: "vanessa_grellet",
    name: "Vanessa Grellet",
    company: "Consensys",
    photoUrl: "https://pbs.twimg.com/profile_images/1128709071316688897/328Zxq4N_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/vanessagrellet_"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/vanessa-grellet-10852314"
      }
    ]
  },
  {
    id: "james_preswich",
    name: "James Preswich",
    company: "Summa, tBTC",
    photoUrl: "https://pbs.twimg.com/profile_images/968714871893385216/gxB-WOJW_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/_prestwich"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/prestwich"
      }
    ]
  },
  {
    id: "will_wolf",
    name: "Will Wolf",
    company: "Polychain",
    photoUrl: "https://pbs.twimg.com/profile_images/664936286512218112/vVSznk-9_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/willwolf_"
      },
      {
        name: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/throughnothing"
      }
    ]
  },
  {
    id: "john_p_conley",
    name: "John P. Conley",
    company: "Vanderbilt University",
    photoUrl: "https://pbs.twimg.com/profile_images/992084930464231424/AwDxK4lI_400x400.jpg",
    socials: [
      {
        name: "Twitter",
        icon: "twitter",
        link: "https://twitter.com/john_p_conley"
      }
    ]
  }
];

const speakersData = rawSpeakersData.sort((x, y) => (x.id > y.id) - (x.id < y.id));
