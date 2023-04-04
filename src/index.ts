import {Express} from "express";
import express from "express";
const app:Express = express();

import path from "path";
import { createYoga} from "graphql-yoga";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { loadFilesSync } from "@graphql-tools/load-files";

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolver.ts'))

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray
})

app.use('/graphql', createYoga({
    schema: schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port 4000 ...');
})