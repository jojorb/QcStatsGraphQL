import fetch from "node-fetch";

export default {
    Query: {
        unamePlayerFetch: async () => {
          const response = await fetch(`https://stats.quake.com/api/v2/Player/Stats?name=rapha`);
          const data = await response.json();
          console.log("data: ", data)
          return data;
        },
        unamePlayer: (_, { name }, { dataSources }) => {
          return dataSources.qcStatsApi.getUnamePlayer({name});
        },
        gamesDetails: (_, { id }, { dataSources }) => {
          return dataSources.qcStatsApi.getGamesDetails({id});
        },
        searchPlayer: (_, { search }, { dataSources }) => {
          return dataSources.qcStatsApi.getSearchPlayer({search});
        },
        qcLeaderboard: (_, { board, season }, { dataSources }) => {
          return dataSources.qcStatsApi.getQcLeaderboard({board, season});
        },
  

      }
  };