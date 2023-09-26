import { create } from "zustand";

type QuestionData = {
  question: string;
  answer: string;
};

interface AnswerState {
  answers: QuestionData[];
  addAnswer: (answer: QuestionData) => void;
}

export const useAnswerStore = create<AnswerState>()((set) => ({
  answers: [],
  addAnswer: (answer: QuestionData) =>
    set((state) => ({ answers: [...state.answers, answer] })),
}));
