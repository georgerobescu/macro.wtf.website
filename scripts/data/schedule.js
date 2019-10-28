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
    endTime: "10:45",
    topic: "Macro and Cryptoeconomics",
    duration: 75,
    subTopics: [
      {
        topic: "Grand Unifying Theory of Cryptoeconomics",
        duration: 20,
        speakers: ["shruti_appiah"]
      },
      {
        topic: "Balancing Order and Chaos: Universality in Cryptoeconomics",
        duration: 20,
        speakers: ["tarun_chitra"]
      },
      {
        topic: "WTF is Capital",
        duration: 20,
        speakers: ["joel_monegro"]
      },
      {
        topic: "WTF is Stability?",
        duration: 15,
        speakers: ["haseeb_qureshi"]
      }
    ]
  },
  {
    startTime: "10:45",
    endTime: "12:00",
    topic: "Macro Case for Crypto",
    duration: 75,
    subTopics: [
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
        duration: 45,
        speakers: ["vanessa_grellet", "nic_carter", "james_preswich", "will_wolf"]
      }
    ]
  },
  {
    startTime: "12:00",
    endTime: "12:30",
    topic: "Lunch Break",
    duration: 30,
    icon: "lunch"
  },
  {
    startTime: "12:30",
    endTime: "13:45",
    topic: "A Non-Strawmanned Intro to Fiat",
    duration: 75,
    subTopics: [
      {
        topic: "A Brief History of Monetary Economics and Crypto",
        duration: 20,
        speakers: ["joel_monegro"]
      },
      {
        topic: "Like Uber, But For Slavery — The Power of Fiat Money",
        duration: 20,
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
    startTime: "13:45",
    endTime: "15:30",
    topic: "Experimentations in Monetary Theory",
    duration: 105,
    subTopics: [
      {
        topic: "Algorithmic Monetary Policy",
        duration: 30,
        speakers: ["john_p_conley"]
      },
      {
        topic: "Overview of Monetary Policy across Each Crypto Economies",
        duration: 20,
      },
      {
        topic: "The Case for Negative Interest Rates",
        duration: 20,
        speakers: ["marek_olszewski"]
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
    startTime: "15:30",
    endTime: "15:45",
    topic: "Coffee Break",
    duration: 15,
    icon: "coffee-break",
  },
  {
    startTime: "15:45",
    endTime: "18:00",
    topic: "Reshaping International Political Economy",
    duration: 135,
    subTopics: [
      {
        topic: "Monetary Systems in an International Context",
        duration: 45,
        speakers: ["sunny_aggarwal", "zaki_manian", "steve_waldman", "john_p_conley"]
      },
      {
        topic: "Petro:  A Failed Trojan Horse",
        duration: 15,
        speakers: ["gabriel_jimenez"]
      },
      {
        topic: "Global Cryptocurrency Adoption",
        duration: 30,
        speakers: ["joel_monegro", "charlie", "gabrie_jimenez"]
      },
      {
        topic: "Central Bank Digital Currency",
        duration: 15,
        speakers: ["dovey_wan"]
      },
      {
        topic: "Geopolitical Game Theory (Panel)",
        duration: 30,
        speakers: ["sunny_aggarwal", "dovey_wan", "lasse_clausen"]
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
              description: item.topic,
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
            description: item.topic,
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
