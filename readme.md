![logo.png](https://stats.quake.com/logo.png)

# Quake Champions Stats GraphQl ![GitHub][li-badge] ![CircleC][ci-badge]


> [Quake Champions Stats](https://stats.quake.com/) REST API V2 encapsulate with GraphQl

The Rest api of stats.quake.com isn't very much public. I did scrape a little bit to get some endpoints.
Probably not a good idea to use for big production. Ask Bethesda Softworks LLC 💜


## Highlights

- Lederbord duel & tdm with seasons
- Search for player
- Player stats duel & tdm
- Game id stats


## Install

```sh
$ cd QcStatsGraphQL
$ yarn install
```


## Usage

> To install on your local machine

```sh
$ yarn dev
$ nodemon -r esm server.js
[nodemon] 1.19.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node -r esm server.js`
🚀 Server spawned at http://localhost:1337
```

> To launch in production

```sh
$ yarn build && node ./dist/index.js
$ build-esm
Copying lisense => dist/lisense
Copying src/schema.graphql => dist/src/schema.graphql
Compiling src/datasource.js => dist/src/datasource.js
Compiling index.js => dist/index.js
Compiling src/resolvers/Query.js => dist/src/resolvers/Query.js
Copying package.json => dist/package.json
Copying readme.md => dist/readme.md
🚀 Server spawned at http://localhost:1337
```

> To add or mod a query

- check the json endpoint
- write the schema in `./src/schema.graphql`
- add the async function in `./src/datasource.js` to bind rest api with schema/Query
- add the type of resolvers in `./src/resolvers/Query.js`

## API

![quake champions graphql](https://i.ibb.co/f2yLmbd/Screenshot-from-2019-09-03-19-33-16.png)

### Example of gql Query

> Get the quake Champions Leaderbord

```gql
{
  qcLeaderboard(board: "duel" season:"preseason1") {
    boardType
    entries{
      userName
      eloRating
    }
  }
}
```

![quake champions graphql](https://i.ibb.co/9b6pSKc/Screenshot-from-2019-09-03-19-27-53.png)

> Search for a player

```gql
{
  searchPlayer(search: "AMD") {
    entityId
    entityName
  }
}
```

![quake champions graphql](https://i.ibb.co/XbQdGC9/Screenshot-from-2019-09-03-19-28-59.png)

> Get Stats from a player name

```gql
{
  unamePlayer(name: "AMD.COOLLERZ") {
    name
    playerRatings{
      duel{
        rating
        history{
          eloRating
        }
      }
    }
}
```

![quake champions graphql](https://i.ibb.co/LkwMJgc/Screenshot-from-2019-09-03-19-30-26.png)

> Get all player stats from a game id

```gql
{
  gamesDetails(id: "bc40eff5-9235-11e9-af14-0003ffb6d7a2") {
    id
    mapName
    battleReportPersonalStatistics {
      nickname
      kills
      deaths
      squadChampionIndexArray
      lastSelectedChampion
      averageLifetime
      totalDamage
      megaHealthPickups
      heavyArmorPickups
      powerPickups
      bestWeapon
      bestWeaponAccuracyPercent
    }
  }
}
```

![quake champions graphql](https://i.ibb.co/JBqt6kk/Screenshot-from-2019-09-03-19-31-21.png)

## Maintainers

- [Roby Remzy][me]


[me]: https://github.com/RobyRemzy
[li-badge]: https://img.shields.io/github/license/RobyRemzy/QcStatsGraphQL
[ci-badge]: https://img.shields.io/circleci/build/github/RobyRemzy/QcStatsGraphQL?label=CircleCI
