import { ApolloServer } from "apollo-server";
import { importSchema } from 'graphql-import'
import Query from './src/resolvers/Query';
import { QcPlayerDataSource } from './src/datasource';

const typeDefs = importSchema('./src/schema.graphql')

const server = new ApolloServer({
  typeDefs,
  resolvers : Query,
  // If you don't want the playground on production turn to false
  introspection: true,
  playground: true,
  dataSources: () => ({
    qcStatsApi: new QcPlayerDataSource()
  })
});


const PORT =  process.env.PORT || 1337;
server.listen(PORT, () => console.log(
    `🚀 Server spawned at http://localhost:${PORT}`,
  ));
