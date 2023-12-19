import React, { useEffect, useState } from "react";
import Question, { QuestionState } from "../ui/Question";
import Answer from "../ui/Answer";
import { generateQuestions } from "../../helpers/question.helper";
import { useTimer } from "react-use-precision-timer";

export const QUESTION_NUMBER_VARIABLES = 12;

export type GameScreenProps = {
  onFinish: (score: number) => void;
};

const GameScreen = ({ onFinish }: GameScreenProps) => {
  const questions = generateQuestions(4 * QUESTION_NUMBER_VARIABLES);
  const [questionStates, setQuestionStates] = useState<QuestionState[]>(
    questions.map((question) => {
      return {
        question: question,
        answer: 0,
      };
    })
  );
  const [time, setTime] = React.useState(0); // in milliseconds

  const timerDelay = 10;
  const timer = useTimer(
    {
      delay: timerDelay,
    },
    () => {
      setTime((time) => time + timerDelay);
    }
  );

  useEffect(() => {
    timer.start();
  }, [timer]);

  const onAnswerHandle = (text: string) => {
    setQuestionStates(
      questionStates.map((questionState, index) => {
        let state = 0;
        if (text.length > index) {
          if (questionState.question === text[index]) state = 1;
          else state = -1;
        }
        return {
          ...questionState,
          answer: state,
        };
      })
    );
  };

  useEffect(() => {
    // check if all questions are correct
    if (questionStates.every((questionState) => questionState.answer === 1)) {
      timer.stop();
      onFinish(time / 1000); // need to change from milliseconds to seconds
    }
    // eslint-disable-next-line
  }, [questionStates]);

  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center max-w-full gap-20 flex-col">
        {/* Header */}
        <div className="flex text-neutral-content place-content-around w-full">
          {/* timer */}
          <div className="flex flex-col">
            <div className="text-md">Stopwatch:</div>
            <div className="text-8xl">{(time / 1000).toFixed(0)}</div>
          </div>

          {/* Score */}
          {/* <div className="flex flex-col">
            <div className="text-md">Score:</div>
            <div className="text-8xl">{score}</div>
          </div> */}
        </div>

        {/* Body */}
        <div className="flex flex-col gap-8">
          <Question questions={questionStates} />

          <Answer
            onKeyboardType={onAnswerHandle}
            maxLength={questions.length}
          />
        </div>

        {/* Footer */}
        {/* Todo: keyboard legends */}
      </div>
    </div>
  );
};

export default GameScreen;
