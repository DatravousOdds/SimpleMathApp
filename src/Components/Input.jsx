const Input = ({handleFirstNumberChange, handleSecondNumberChange, firstNumber, secondNumber}) => {
  return (
    <>
      <div className="inputContainer">
        <div style={{ textAlign: "left", padding: "1rem" }}>
          <label for="first-input">What is the first number?</label>
          <input value={firstNumber}onChange={handleFirstNumberChange} id="first-input" type="text" />
        </div>
        <div style={{ textAlign: "left", padding: "1rem" }}>
          <label for="second-input">What is the second number?</label>
          <input value={secondNumber} onChange={handleSecondNumberChange}  id="second-input" type="text" />
        </div>
      </div>
    
    </>
  )
}

export default Input;