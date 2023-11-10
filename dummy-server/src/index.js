import express from 'express';
import { courses } from './data.js';

const app = express();

app.get('/api/courses', (_, res) => {
  res.json(courses);
});

app.listen(3000, () => {
  console.log('listening');
});
