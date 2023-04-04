"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const path_1 = __importDefault(require("path"));
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("@graphql-tools/schema");
const load_files_1 = require("@graphql-tools/load-files");
const typesArray = (0, load_files_1.loadFilesSync)(path_1.default.join(__dirname, '**/*.graphql'));
const schema = (0, schema_1.makeExecutableSchema)({
    typeDefs: typesArray
});
app.use('/graphql', (0, graphql_yoga_1.createYoga)({
    schema: schema,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('Listening on port 4000 ...');
});
