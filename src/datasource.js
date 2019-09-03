import { RESTDataSource } from "apollo-datasource-rest";


export class QcPlayerDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://stats.quake.com/api/v2/";
  }

  // playerReducer(unamePlayer) {
  //   return {
  //     name: unamePlayer.name,
  //     playerLevelState: {
  //       level: unamePlayer.playerLevelState.level, 
  //       exp: unamePlayer.playerLevelState.exp, 
  //     },
  //   };
  // }

  

  async getUnamePlayer({ name }) {
    console.log("search for player: ", name)
    const unamePlayerResponse = await this.get(`Player/Stats?name=${name}`);
    // return this.playerReducer(unamePlayerResponse);
    console.log(unamePlayerResponse);
    return unamePlayerResponse;
  }

  async getGamesDetails({ id }) {
    console.log("search for game: ", id)
    const gamesDetailsResponse = await this.get(`Player/Games?id=${id}`);
    // return this.playerReducer(unamePlayerResponse);
    console.log(gamesDetailsResponse);
    return gamesDetailsResponse;
  }

  async getSearchPlayer({ search }) {
    console.log("search player: ", search)
    const searchPlayerResponse = await this.get(`Player/Search?term=${search}`);
    // return this.playerReducer(unamePlayerResponse);
    console.log(searchPlayerResponse);
    return searchPlayerResponse;
  }

  async getQcLeaderboard({ board, season }) {
    console.log("search for ", board, " leaderboard of season ", season)
    const qcLeaderboardResponse = await this.get(`Leaderboard?from=0?to=6&board=${board}&season=${season}`);
    // return this.playerReducer(unamePlayerResponse);
    console.log(qcLeaderboardResponse);
    return qcLeaderboardResponse;
  }
}
