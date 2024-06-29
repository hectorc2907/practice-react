// import { IconButton, Stack } from "@mui/material";
import { useQuestionStore } from "./store/questions";
import { type Question as QuestionType } from "./types";

const Question = ({ info }: { info: QuestionType }) => {
  return null;
};

export const Game = () => {
  const questions = useQuestionStore((state) => state.questions);
  const currentQuestion = useQuestionStore((state) => state.currentQuestion);

  const questionInfo = questions[currentQuestion];
  return (
    <>
      <Question info={questionInfo}/>
    </>
  );
};
