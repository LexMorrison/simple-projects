function Quizlet({ question, handleClickOption }) {
  const { title, options } = question;

  const handleSelectOption = (option) => {
    handleClickOption(option);
  };

  return (
    <div className="quizCard">
      <h2 className="quizTitle">{title}</h2>
      <ul className="quizOptions">
        {options.map((option, index) => (
          <li
            key={index}
            className="quizOption"
            onClick={() => handleSelectOption(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Quizlet;
