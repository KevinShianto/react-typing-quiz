import React from "react";

export type QuestionState = {
  question: string;
  answer: number;
};

export type QuestionProps = {
  questions: QuestionState[];
};

const Question = ({ questions }: QuestionProps) => {
  return (
    <div className="rounded-lg bg-gray-500 grid grid-cols-12 max-md:grid-cols-3 p-8 gap-4 text-7xl no-select">
      {questions.map((question, index) => (
        <div
          key={`question-${index}`}
          className={`${
            question.answer === -1
              ? "text-red-400"
              : question.answer === 1
              ? "text-green-400"
              : "text-gray-200"
          }`}
        >
          {question.question}
        </div>
      ))}
    </div>
  );
};

export default Question;
