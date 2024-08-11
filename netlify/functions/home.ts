import express, { Router } from "express";
import serverless from "serverless-http";
import path from "path";

const app = express();
app.use(express.static('public'))
console.log(path.join(__dirname, 'public'));

app.get('/', (req, res) => {
    res.send('Hello Home page!')
})


export const handler = serverless(app);