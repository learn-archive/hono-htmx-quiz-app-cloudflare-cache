import { Hono } from 'hono';
import { renderer } from '.';

const app = new Hono();

app.get('*', renderer);

app.get('/', (c) => {
  return c.render('Hello Hono!');
});

export default app;
