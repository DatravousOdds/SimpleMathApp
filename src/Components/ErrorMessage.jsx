const ErrorMessage = ({ firstNumber, secondNumber }) => {
  let message = "";
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    message = "Please enter numeric values only!";
  } else if (firstNumber < 0 || secondNumber < 0) {
    message = "Please enter numbers greater than 0!";
  }
  if (message) {

    return (
    <div className="error alert alert-danger">
      <div className="error-message">
        <p>{message}</p>
      </div>
    </div>
  );
  }
  return null; // No error so return nothing
  
};

export default ErrorMessage;
