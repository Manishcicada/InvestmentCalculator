import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import Result from './components/Result.jsx'
import { useState } from 'react'


function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration>=1;
  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput =>{
      return{
        ...prevUserInput,
        [inputIdentifier] : +newValue
      };

    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p>Please input a duration greater than 0</p>}
      {inputIsValid &&<Result input ={userInput}/>}
    </>
  )
}

export default App
