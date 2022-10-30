import cors from 'cors';
import express from 'express';

import app from './app';

import router from './route';

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(router);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`🚀 Server listening at port ${port}`);
});

export default server;
