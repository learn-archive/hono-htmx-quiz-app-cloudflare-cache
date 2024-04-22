import { QuestionType, Quiz } from '../models/quiz';

export function getQuizFromCache(): Quiz[] {
  return [
    {
      questions: [
        {
          type: QuestionType.TEXT,
          answers: ['blabla'],
        },
      ],
    },
  ];
}
