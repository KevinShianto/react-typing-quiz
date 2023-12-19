export const randomNumberInRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const convertNumberToAlphabet = (number: number) => {
  return String.fromCharCode(97 + number - 1);
};

export const generateQuestions = (number_of_question: number) => {
  const ALPHABET = 26;

  return Array(number_of_question)
    .fill("")
    .map(() => {
      return convertNumberToAlphabet(randomNumberInRange(1, ALPHABET));
    });
};
