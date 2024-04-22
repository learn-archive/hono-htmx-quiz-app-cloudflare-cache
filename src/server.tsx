import { Hono } from 'hono';
import { renderer } from '.';
import { getQuizFromCache } from './services/cache.service';

const app = new Hono();

app.get('*', renderer);

app.get('/', (c) => {
  console.log(getQuizFromCache());
  return c.render('Hello Hono!');
});

export default app;
