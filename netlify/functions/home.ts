import express, { Router } from "express";
import serverless from "serverless-http";
import path from "path";

const app = express();
app.use(express.static('public'))

export const handler = serverless(app);