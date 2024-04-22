import { Hono } from 'hono';
import { InputGlobal } from '../../global/input.global';
import { getQuizFromCache } from '../../services/cache.service';

const quiz = new Hono();

quiz.get('/', (c) => {
  console.log(getQuizFromCache());
  return c.render(
    <>
      <InputGlobal />
    </>,
  );
});

export default quiz;
