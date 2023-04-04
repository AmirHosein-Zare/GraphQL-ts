import {Express} from "express";
import express from "express";
const app:Express = express();


app.listen(4000, () => {
    console.log('Listening on port 4000 ...');
})