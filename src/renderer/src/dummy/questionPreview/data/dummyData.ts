import type { BaseQuestion } from "~/types/api";
import type { QuestionStepperItem } from "~/types/components";

export const dummyQuestionPreview: BaseQuestion = {
  id: 1,
  code: "Q001-2024",
  question:
    "What is the capital of France? This is a sample question to demonstrate the preview functionality with some additional text to show how longer questions are displayed.",
  image: "https://picsum.photos/400/300?random=1",
  difficulty: 2,
  for: 1,
  answers: [
    {
      id: 1,
      answer: "Paris",
      has_explanation: 1,
      question_id: 1,
    },
    {
      id: 2,
      answer: "London",
      has_explanation: 0,
      question_id: 1,
    },
    {
      id: 3,
      answer: "Berlin",
      has_explanation: 0,
      question_id: 1,
    },
    {
      id: 4,
      answer: "Madrid",
      has_explanation: 0,
      question_id: 1,
    },
  ],
  explanations: [],
};

export const dummyQuestionStepperItems: QuestionStepperItem[] = [
  {
    id: 1,
    status: 2,
    questionNum: 1,
    status_label: "answered",
    question_difficulty: 2,
    explanation: 0,
  },
  {
    id: 2,
    status: 1,
    questionNum: 2,
    status_label: "current",
    question_difficulty: 1,
    explanation: 0,
  },
  {
    id: 3,
    status: 0,
    questionNum: 3,
    status_label: "not_answered",
    question_difficulty: 3,
    explanation: 0,
  },
  {
    id: 4,
    status: 0,
    questionNum: 4,
    status_label: "not_answered",
    question_difficulty: 2,
    explanation: 0,
  },
  {
    id: 5,
    status: 0,
    questionNum: 5,
    status_label: "not_answered",
    question_difficulty: 1,
    explanation: 0,
  },
  {
    id: 6,
    status: 0,
    questionNum: 6,
    status_label: "not_answered",
    question_difficulty: 2,
    explanation: 0,
  },
  {
    id: 7,
    status: 0,
    questionNum: 7,
    status_label: "not_answered",
    question_difficulty: 3,
    explanation: 0,
  },
  {
    id: 8,
    status: 0,
    questionNum: 8,
    status_label: "not_answered",
    question_difficulty: 1,
    explanation: 0,
  },
  {
    id: 9,
    status: 0,
    questionNum: 9,
    status_label: "not_answered",
    question_difficulty: 2,
    explanation: 0,
  },
  {
    id: 10,
    status: 0,
    questionNum: 10,
    status_label: "not_answered",
    question_difficulty: 3,
    explanation: 0,
  },
];

export const dummyMathQuestion: BaseQuestion = {
  id: 2,
  code: "Q002-2024",
  question: "Solve the equation: $$\\frac{d}{dx}(x^2 + 3x + 2) = ?$$",
  difficulty: 3,
  for: 1,
  answers: [
    {
      id: 5,
      answer: "$$2x + 3$$",
      has_explanation: 1,
      question_id: 2,
    },
    {
      id: 6,
      answer: "$$x^2 + 3x$$",
      has_explanation: 0,
      question_id: 2,
    },
    {
      id: 7,
      answer: "$$2x + 2$$",
      has_explanation: 0,
      question_id: 2,
    },
    {
      id: 8,
      answer: "$$x + 3$$",
      has_explanation: 0,
      question_id: 2,
    },
  ],
  explanations: [],
};

export const dummyImageQuestion: BaseQuestion = {
  id: 3,
  code: "Q003-2024",
  question: "Based on the diagram shown, what is the correct answer?",
  image: "https://picsum.photos/500/400?random=2",
  difficulty: 1,
  for: 1,
  answers: [
    {
      id: 9,
      answer: "",
      has_explanation: 1,
      question_id: 3,
      image: "https://picsum.photos/200/150?random=3",
    },
    {
      id: 10,
      answer: "",
      has_explanation: 0,
      question_id: 3,
      image: "https://picsum.photos/200/150?random=4",
    },
    {
      id: 11,
      answer: "",
      has_explanation: 0,
      question_id: 3,
      image: "https://picsum.photos/200/150?random=5",
    },
    {
      id: 12,
      answer: "",
      has_explanation: 0,
      question_id: 3,
      image: "https://picsum.photos/200/150?random=6",
    },
  ],
  explanations: [],
};
