const isReachable = require('is-reachable');
const  fetch = require("node-fetch");

describe('rest api test', () =>{
    test('is rest api alive', async () => {
        const apiv2 = {
            endpoint: 'https://stats.quake.com',
            search: 'https://stats.quake.com/api/v2/Player/Search?term=rapha',
            playerinfo: 'https://stats.quake.com/api/v2/Player/Stats?name=rapha',
            matchInfo: 'https://stats.quake.com/api/v2/Player/Games?id=6f790a15-9563-11e9-af14-0003ffb6d7a2',
            gameDetails: 'https://stats.quake.com/api/v2/Player/GamesSummary?name=rapha',
            leaderboardCurrent: 'https://stats.quake.com/api/v2/Leaderboard?from=0&board=duel&season=current',
        };
        isReachable(apiv2.endpoint);
        expect(isReachable()).toBeTruthy();
    }),

    test('graphql search', async () => {
        const query = `
            query {
                searchPlayer(search: "AMD.COOLLERZ") {
                entityId
                entityName
                }
            }
            `
        const resp = await fetch('http://localhost:1337', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({query})
        })
        .then(response => response.json())
        .then(data => {
            expect(data).toMatchObject({
                "data": {
                    "searchPlayer": [
                    {
                        "entityId": "a5d6aadd-372c-11e7-80c0-0003ffaa4031",
                        "entityName": "AMD.COOLLERZ"
                    }
                    ]
                } 
            })
        })
    })

});