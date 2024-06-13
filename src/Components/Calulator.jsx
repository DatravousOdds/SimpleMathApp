import { useState } from "react";
import Input from "./Input";
import Result from "./Result";
import ErrorMessage from "./ErrorMessage";
const Calulator = () => {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  // const [result, setResult] = useState("");

  console.log(isNaN(firstNumber));
  console.log(secondNumber);
  // console.log(result);

  const handleFirstNumberChange = (event) => {
    setFirstNumber(event.target.value);
  };

  const handleSecondNumberChange = (event) => {
    setSecondNumber(event.target.value);
  };

  return (
    <>
      <div className="container">
        <Input
          handleFirstNumberChange={handleFirstNumberChange}
          handleSecondNumberChange={handleSecondNumberChange}
        />
        <ErrorMessage firstNumber={firstNumber} secondNumber={secondNumber} />
        <Result firstNumber={firstNumber} secondNumber={secondNumber} />
        
      </div>
    </>
  );
};

export default Calulator;
