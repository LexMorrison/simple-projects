import Button from "../../helpers/Button";

function SuccessMessage({ invitedCount, handleGoBack }) {
  return (
    <div className="inviteSentMessage">
      <div className="successIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          fill="green"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.354 11.354l5-5a.5.5 0 0 0-.708-.708L6 10.293 4.354 8.646a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0z" />
        </svg>
      </div>
      <h2>Success</h2>
      <p>All {invitedCount} users sent an invite</p>
      <Button className="backButton" PressMe={handleGoBack} text={"Go back"} />
    </div>
  );
}

export default SuccessMessage;
