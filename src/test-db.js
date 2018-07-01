const data = {
  user1: {
    firstName: "Michelle",
    lastName: "Brien",
    location: "London",
    currentRole: "Product Developer",
    careerGoal: "CTO",
    currentWorkplace: "Decoded",
    goals: {
      year: "",
      sixMonths: "",
      threeMonths: "",
      oneMonth: "",
    },
    followers: [],
    following: [],
    tracks: {
      1: {
        name: "Javascript",
        category: "Software development",
        learning: {
          name: "Javascript 30",
          description: "Wes Bos vanilla JS",
          source: "Wes Bos",
          url: "https://javascript30.com/",
          imageUrl: "https://javascript30.com/images/JS3-social-share.png",
          status: "in progress",
          completedDate: "",
          votesNum: 3,
        },
        making: {
          name: "",
          description: "",
          url: "",
          status: "",
          votesNum: 0, 
        }
      },
      2: {
        name: "React",
        category: "Software development",
        learning: {
          name: "React/Redux bootcamp",
          description: "Intro to React",
          source: "Le Wagon",
          url: "https://www.lewagon.com/blog/introduction-to-react-js",
          imageUrl: "",
          status: "in progress",
          completedDate: "",
          votesNum: 0,
        },
        making: {
          name: "Holiday poll",
          description: "Dynamic leaderboard to help plan group holidays",
          url: "https://github.com/mbrien12/holiday-poll",
          status: "in progress",
          votesNum: 0, 
        }
      },
    }, 
  },
}

export default data;