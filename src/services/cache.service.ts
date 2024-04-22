import { QuestionType, Quiz } from '../models/quiz.model';

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
