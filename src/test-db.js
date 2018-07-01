const data = {
  users: {
    user1: {
      firstName: "Michelle",
      lastName: "Brien",
      location: "London",
      currentRole: "Product Developer",
      careerGoal: "CTO",
      currentWorkplace: "Decoded",
      profileUrl: "https://avatars1.githubusercontent.com/u/22551831?s=460&v=4",
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
            1: {
              name: "Javascript 30",
              description: "Wes Bos vanilla JS",
              source: "Wes Bos",
              url: "https://javascript30.com/",
              imageUrl: "https://javascript30.com/images/JS3-social-share.png",
              status: "in progress",
              completedDate: "",
              votesNum: 3,
            },
            2: {
              name: "Beginners guide to ES6",
              description: "Basics of syntax",
              source: "Udacity",
              url: "https://eu.udacity.com/course/es6-javascript-improved--ud356",
              imageUrl: "",
              status: "completed",
              completedDate: "20/06/18",
              votesNum: 10,
            }
          },
          making: {
            1: {
              name: "",
              description: "",
              url: "",
              status: "",
              votesNum: 0, 
            }
          }
        },
        2: {
          name: "React",
          category: "Software development",
          learning: {
            1: {
              name: "React/Redux bootcamp",
              description: "Intro to React",
              source: "Le Wagon",
              url: "https://www.lewagon.com/blog/introduction-to-react-js",
              imageUrl: "",
              status: "in progress",
              completedDate: "",
              votesNum: 0,
            }
          },
          making: {
            1: {
              name: "Holiday poll",
              description: "Dynamic leaderboard to help plan group holidays",
              url: "https://github.com/mbrien12/holiday-poll",
              status: "in progress",
              votesNum: 0, 
            }
          }
        },
      }, 
    },
  }
}

export default data;