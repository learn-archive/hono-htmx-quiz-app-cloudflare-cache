import { Hono } from 'hono';
import { getQuizFromCache } from '../../services/cache.service';
import { Quiz } from './quiz.component';

const quiz = new Hono();

quiz.get('/', (c) => {
  const quiz = getQuizFromCache();
  const props = {
    quiz,
  };
  return c.render(
    <>
      <Quiz {...props} />
    </>,
  );
});

export default quiz;
