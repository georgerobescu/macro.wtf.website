const data = [
  {
    startTime: "09:00",
    endTime: "09:30",
    topic: "Sign-in & Opening Remarks",
    duration: 30,
    icon: "registration"
  },
  {
    startTime: "09:30",
    endTime: "11:30",
    topic: "Macro and Cryptoeconomics",
    duration: 120,
    subTopics: [
      {
        topic: "Grand Unifying Theory of Cryptoeconomics",
        duration: 15,
        speakers: ["shruti_appiah"]
      },
      {
        topic: "Balancing Order and Chaos: Universality in Cryptoeconomics",
        duration: 15,
        speakers: ["tarun_chitra"]
      },
      {
        topic: "WTF is Stability?",
        duration: 15,
        speakers: ["haseeb_qureshi"]
      },
      {
        topic: "WTF is Capital: How to Fix Capitalism",
        duration: 15,
        speakers: ["joel_monegro"]
      },
      {
        topic: "Does an Economy Actually Work with Rational Actors?",
        duration: 30,
        speakers: ["nic_carter", "charlie_noyes", "zaki_manian", "james_preswich"]
      },
      {
        topic: "How Has Crypto Changed Economics?",
        duration: 30,
        speakers: ["don_tapscott"]
      },
    ]
  },
  {
    startTime: "11:30",
    endTime: "13:00",
    topic: "Macro Case for Crypto",
    duration: 90,
    subTopics: [
      {
        topic: "Bitcoin as the Flag of Technology",
        duration: 30,
        speakers: ["balaji_s_srinivasan"]
      },
      {
        topic: "What Kinds of Assets are Cryptocurrencies: An Empirical Evaluation",
        duration: 20,
        speakers: ["nic_carter"]
      },
      {
        topic: "Analyzing Macro Trends and the Impact on Bitcoin",
        duration: 10,
        speakers: ["matt_dsouza"]
      },
      {
        topic: "Macro Case for Bitcoin",
        descriptions: [
          "- Risk On or Risk Off asset?",
          "- Gold vs. Bitcoin",
          "- Is Digital Gold counter to Digital Money?",
          "- Performance of Asset in Economic Downturn"
        ],
        duration: 30,
        speakers: ["vanessa_grellet", "nic_carter", "matt_dsouza", "tom_kineshanko", "will_wolf"]
      }
    ]
  },
  {
    startTime: "13:00",
    endTime: "13:30",
    topic: "Lunch Break",
    duration: 30,
    icon: "lunch"
  },
  {
    startTime: "13:30",
    endTime: "14:30",
    topic: "A Non-Strawmanned Intro to Fiat",
    duration: 60,
    subTopics: [
      {
        topic: "Like Uber, But For Slavery — The Power of Fiat Money",
        duration: 25,
        speakers: ["steve_waldman"]
      },
      {
        topic: "Lessons from History: Fiat Money Inflation in France post French Revolution",
        duration: 15,
        speakers: ["claire_belmont"]
      },
      {
        topic: "Unplugging from the Fiat Matrix (Game Theory of Fiat Currency)",
        duration: 20,
        speakers: ["varun_vruddhula"]
      }
    ]
  },
  {
    startTime: "14:30",
    endTime: "16:30",
    topic: "Experimentations in Monetary Theory",
    duration: 120,
    subTopics: [
      {
        topic: "Overview of Monetary Policy across Each Crypto Economies",
        duration: 15,
        speakers: ["arjun_balaji"]
      },
      {
        topic: "Algorithmic Monetary Policy",
        duration: 30,
        speakers: ["john_p_conley"]
      },
      {
        topic: "The Case for Negative Interest Rates",
        duration: 20,
        speakers: ["marek_olszewski"]
      },
      {
        topic: "Fiscal & Monetary Policy Interaction in a Stablecoin Economy",
        duration: 20,
        speakers: ["nicolas_andreoulis"]
      },
      {
        topic: "Staking in Perpetuity: Explorations in Monetary Policy",
        duration: 20,
        speakers: ["jeremiah_andrews"]
      },
      {
        topic: "Evolution of Debt in the Crypto Ecosystem",
        duration: 15,
        speakers: ["brent_xu"]
      }
    ]
  },
  {
    startTime: "16:30",
    endTime: "19:00",
    topic: "Reshaping International Political Economy",
    duration: 150,
    subTopics: [
      {
        topic: "Monetary Systems in an International Context",
        descriptions: [
          "- Rodrik's Trilemma",
          "- Rethinking the Euro",
          "- On Libra",
          "- Hayekian Denationalization of Money",
          "- Inflection Points in Monetary Dominance"
        ],
        duration: 30,
        speakers: ["sunny_aggarwal", "john_p_conley", "baek_kim", "zaki_manian", "steve_waldman"]
      },
      {
        topic: "Petro: A Failed Trojan Horse",
        duration: 15,
        speakers: ["gabriel_jimenez"]
      },
      {
        topic: "Cryptocurrency Adoption in Latin America",
        descriptions: [
          "- Bitcoin in Developing Countries",
          "- Do people want USD or Bitcoin?",
          "- Government takeover of Petro"
        ],
        duration: 30,
        speakers: ["qiao_wang", "jill_carlson", "navin_freeman", "gabriel_jimenez", "joel_monegro"]
      },
      {
        topic: "Central Bank Digital Currency",
        duration: 15,
        speakers: ["dovey_wan"]
      },
      {
        topic: "The Third Party Candidate",
        duration: 15,
        speakers: ["lily_liu"]
      },
      {
        topic: "Geopolitical Game Theory (Panel)",
        descriptions: [
          "- United States vs. China in battle for global hegemony",
          "- Petrodollar",
          "- How do capital controls affect crypto?",
          "- Are we actually nation-state resistant?",
          "- Crypto vs Nation States vs Corporations"
        ],
        duration: 30,
        speakers: ["lily_liu", "lasse_clausen", "jae_kwon", "charlie_noyes", "dovey_wan"]
      },
      {
        topic: "WTF Initiative: Call for Research and Experimentations",
        duration: 15,
      }
    ]
  }
]

const scheduleData = [{
  date: "2019-10-30",
  dateReadable: "October 30",
  tags: ["Macro.WTF"],
  tracks: [
    {
      title: "Hall"
    }
  ],
  timeslots: data.map((item, index) => ({
    startTime: item.startTime,
    endTime: item.endTime,
    sessions: (() => {
      const sessions = [
        {
          gridArea: `${index + 1} / 1 / ${index + 1} / ${item.subTopics ? 1 : 4}`,
          items:  [
            {
              title: item.topic,
              dateReadable: "October 30",
              day: "2019-10-30",
              startTime: item.startTime,
              endTime: item.endTime,
              duration: {
                hh: Math.floor(item.duration / 60),
                mm: item.duration % 60
              },
              icon: item.icon
            }
          ]
        }
      ];

      if (item.subTopics) {
        sessions.push({
          gridArea: `${index + 1} / 2 / ${index + 1} / 4`,
          items: item.subTopics.map((item) => ({
            title: item.topic,
            descriptions: item.descriptions,
            dateReadable: "October 30",
            day: "2019-10-30",
            startTime: item.startTime,
            endTime: item.endTime,
            duration: {
              hh: Math.floor(item.duration / 60),
              mm: item.duration % 60
            },
            speakers: (item.speakers || []).map(id => speakersData.find(x => x.id === id))
          }))
        });
      }

      return sessions;
    })()
  }))
}]
