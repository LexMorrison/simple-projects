import Button from "../../helpers/Button";
function FinalResult({ correctAnswersUser, handleRestartQuiz }) {
  let resultMessage;

  switch (true) {
    case correctAnswersUser >= 0 && correctAnswersUser <= 3:
      resultMessage = `Bad result, try again! Your score: ${correctAnswersUser}`;
      break;
    case correctAnswersUser === 4:
      resultMessage = `Almost all right! Well done! Your score: ${correctAnswersUser}`;
      break;
    case correctAnswersUser === 5:
      resultMessage = `Brilliant! Your score: ${correctAnswersUser}`;
      break;
    default:
      resultMessage = `Invalid score.`;
  }

  return (
    <div className="finalResultCard">
      <img
        src="/images/party-hat.jpg"
        alt="Celebration"
        className="celebrationIcon"
      />
      <p className="finalResultText">{resultMessage}</p>
      <Button
        text={"Try again"}
        PressMe={handleRestartQuiz}
        className="restartButton"
      />
    </div>
  );
}

export default FinalResult;
