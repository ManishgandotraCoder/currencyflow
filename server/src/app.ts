import express from "express";
import cors from "cors";
import passprt from "passport";
import path from "path";
import bodyParser from "body-parser";
import bearerToken from 'express-bearer-token';
import { connect } from './config/mongo-db';
import { routes } from "./routes/route";
import * as dotenv from "dotenv";
import { passport } from "./passport"



dotenv.config();
const port = process.env.PORT || 9000;
const app = express();

app.use(function (req: any, res: any, next: any) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.header("Access-Control-Allow-Headers", "Content-Type, authorization");
  next();
});


// io.listen(8000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': false }));
app.use(passprt.initialize());
(passport)(passprt);
app.use(bearerToken());
app.use(cors())
app.use('/api', routes);

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './../../client/build2')));

app.get('*', (req: any, res: any, next: any) => {
  res.sendFile(path.join(__dirname, './../../client/build', 'index.html'));
});

// server.listen(8000, () => {
//   console.log('listening on *:8000');
// });
app.listen(port, async () => {
  await connect();
  console.log(`Listening on port ${port}`);
});
