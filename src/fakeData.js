export  const runData = [
    {
      distance: 7,
      pace: "5.35",
      date:
        new Date().getDate() + "-" + (new Date().getMonth() < 10
          ? "0" + new Date().getMonth()
          : new Date().getMonth()) + "-" + new Date().getFullYear(),
    },
    {
      distance: 5,
      pace: "5.15",
      date:
        new Date().getDate() + "-" + (new Date().getMonth() < 10
          ? "0" + new Date().getMonth()
          : new Date().getMonth()) + "-" + new Date().getFullYear(),
    },
    {
      distance: 10,
      pace: "5.55",
      date:
        new Date().getDate() + "-" + (new Date().getMonth() < 10
          ? "0" + new Date().getMonth()
          : new Date().getMonth()) + "-" + new Date().getFullYear(),
    },
  ];

  export const userStats = {
      avDist: "5.52km",
      avPace: "6.03",
      totRuns: "93",
      pb5k: "26:13",
      pb10k: "59:02"
  }

  export const leaderBoard = [{
    name: "Paul Chelimo",
    pace: "4.96",
    distance: "7km"
  },{
    name: "Femi Oguns",
    pace: "4.86",
    distance: "7km"
  },{
    name: "Speed Mann",
    pace: "4.89",
    distance: "7km"
  },{
    name: "Ener Giser-Bunee",
    pace: "4.88",
    distance: "7km"
  },]