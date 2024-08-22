import { useState } from "react";
import CardsList from "./Components/CardsList";
import Header from "./Components/Header";
function App() {
  const [score, setScore] = useState(0)
  const [failCount, setFailCount] = useState(0)
  function incrementScore(){
    setScore(score + 1)
  }
  function incrementFail(){
    setFailCount(failCount+1)
  }
  return (
    <>
      <Header score={score} failCount={failCount}/>
      <hr className='h-1 bg-black mb-12'/>

      <CardsList incrementScore={incrementScore} incrementFail={incrementFail}/>
    </>
  );
}

export default App;