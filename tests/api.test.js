const isReachable = require('is-reachable');

describe('rest api test', () => {
    const name = 'AMD.COOLLERZ'
    const gameId = '6f790a15-9563-11e9-af14-0003ffb6d7a2'
    const gameType = 'duel'
    const season = 'current'
    const apiv2 = {
        endpoint: 'https://stats.quake.com',
        search: `https://stats.quake.com/api/v2/Player/Search?term=${name}`,
        playerInfo: `https://stats.quake.com/api/v2/Player/Stats?name=${name}`,
        matchInfo: `https://stats.quake.com/api/v2/Player/Games?id=${gameId}`,
        gameDetails: `https://stats.quake.com/api/v2/Player/GamesSummary?name=${name}`,
        leaderboardCurrent: `https://stats.quake.com/api/v2/Leaderboard?from=0&board=${gameType}&season=${season}`,
    };

    testApi = (url) => {
        isReachable(url)
        return isReachable;
    };

    test('is front api alive', async () => {
        expect(await isReachable(apiv2.endpoint)).toBeTruthy();
    })

    test('is rest api search', async () => {
        expect(await testApi(apiv2.search)).toBeTruthy();
    })

    test('is rest api player info', async () => {
        expect(await testApi(apiv2.playerInfo)).toBeTruthy();
    })

    test('is rest api match info', async () => {
        expect(await testApi(apiv2.matchInfo)).toBeTruthy();
    })

    test('is rest api game details', async () => {
        expect(await testApi(apiv2.gameDetails)).toBeTruthy();
    })

    test('is rest api leaderbord', async () => {
        expect(await testApi(apiv2.leaderboardCurrent)).toBeTruthy();
    })

});