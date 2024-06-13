const Result = ({firstNumber, secondNumber }) => {
  const add = (a, b) => parseInt(a) + parseInt(b);
  const sub = (a, b) => parseInt(a) - parseInt(b);
  const multi = (a, b) => parseInt(a) * parseInt(b);
  const divide = (a, b) => parseInt(a) / parseInt(b);
  // ToDo: Implement this logic within state in React -_-

  // const add = (a, b) => console.log(`${a} + ${b} = ${parseInt(a) + parseInt(b)}\n`);
  // const subtrack = (a, b) => console.log(`${a} - ${b} = ${parseInt(a) - parseInt(b)}\n`);
  // const product = (a, b) => console.log(`${a} * ${b} = ${parseInt(a) * parseInt(b)}\n`);
  // const divide = (a, b) => console.log(`${a} / ${b} = ${parseInt(a) / parseInt(b)}\n`);

  
  return (
    <>
      <div className="resultsContainer">
        <div className="cal">
          <p id="addition">
            <span>{firstNumber}</span> + <span>{secondNumber}</span> = <span>{firstNumber && secondNumber ? add(firstNumber,secondNumber) : " "}</span>
          </p>
        </div>
        <div>
          <p id="subtrack">
            <span>{firstNumber}</span> - <span>{secondNumber}</span> = <span>{firstNumber && secondNumber ? sub(firstNumber, secondNumber) : " "}</span>
          </p>
        </div>
        <div>
          <p id="multiply">
            <span>{firstNumber}</span> * <span>{secondNumber}</span> = <span>{firstNumber && secondNumber ? multi(firstNumber, secondNumber) : " "}</span>
          </p>
        </div>
        <div>
          <p id="divide">
            <span>{firstNumber}</span> / <span>{secondNumber}</span> = <span>{firstNumber && secondNumber ? divide(firstNumber,secondNumber) : " "}</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Result;