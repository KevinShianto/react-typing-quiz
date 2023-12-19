import React from "react";

export type AnswerProps = {
  onKeyboardType: (text: string) => void;
  maxLength: number;
};

const Answer = ({ onKeyboardType, maxLength }: AnswerProps) => {
  return (
    <div className="gap-4 text-center flex flex-col">
      <span>your answer:</span>
      <input
        className={`input input-ghost w-1/2 text-center focus:input-ghost self-center h-24 text-3xl `}
        autoFocus
        onChange={(e) => onKeyboardType(e.target.value)}
        max={maxLength}
      />
      <div className="w-full border-b-2 border-primary"></div>
    </div>
  );
};

export default Answer;
