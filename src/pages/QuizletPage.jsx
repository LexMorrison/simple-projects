import { useState } from "react";
import Button from "../helpers/Button";
import Quizlet from "../components/quizlet/Quizlet";
import FinalResult from "../components/quizlet/FinalResult";

const questions = [
  {
    id: "1",
    title: "The Sun rises in the...",
    options: ["east", "west", "window"],
    rightAnswer: "east",
  },
  {
    id: "2",
    title: "How many planets are there in the Solar System?",
    options: ["7", "8", "9"],
    rightAnswer: "8",
  },
  {
    id: "3",
    title: "What color is created by mixing blue and yellow?",
    options: ["orange", "green", "purple"],
    rightAnswer: "green",
  },
  {
    id: "4",
    title: "Which is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Pacific"],
    rightAnswer: "Pacific",
  },
  {
    id: "5",
    title: "How many minutes are in one hour?",
    options: ["60", "90", "120"],
    rightAnswer: "60",
  },
];

function QuizletPage() {
  const [step, setStep] = useState(0);
  const [correctAnswersUser, setCorrectAnswersUser] = useState(0);
  const question = questions[step];

  const handleClickOption = (selectedOption) => {
    setStep(step + 1);
    if (selectedOption === question.rightAnswer) {
      setCorrectAnswersUser(correctAnswersUser + 1);
    }
  };

  const handleRestartQuiz = () => {
    setStep(0);
    setCorrectAnswersUser(0);
  };

  const progress = ((step + 1) / questions.length) * 100;

  return (
    <section className="quizletСontainer">
      {step !== questions.length && (
        <div className="progressBar">
          <div
            className="progressBarFill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
      {step !== questions.length ? (
        <Quizlet question={question} handleClickOption={handleClickOption} />
      ) : (
        <FinalResult
          correctAnswersUser={correctAnswersUser}
          handleRestartQuiz={handleRestartQuiz}
        />
      )}
    </section>
  );
}

export default QuizletPage;
