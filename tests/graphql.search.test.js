const  fetch = require("node-fetch");

describe('graphql search api test', () => {
    test('graphql search', async () => {
        const query = `
            query {
                searchPlayer(search: "a") {
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
            expect(data).toHaveProperty('data.searchPlayer', [0], 'entityId', 'entityName');
        })
    })
})