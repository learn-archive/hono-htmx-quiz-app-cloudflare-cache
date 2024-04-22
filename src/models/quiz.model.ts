export enum QuestionType {
  TEXT = 'text',
}

export type Quiz = {
  questions: Question[];
};

export type Question = {
  type: QuestionType;
  answers: string[]
};
