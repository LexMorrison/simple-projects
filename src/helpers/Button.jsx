function Button({ text, PressMe, className, disabled = false }) {
  return (
    <button
      type="button"
      className={className}
      onClick={PressMe}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

export default Button;
