import { useState } from "react";
import CardsList from "./Components/CardsList";
import Header from "./Components/Header";
function App() {
  const [score, setScore] = useState(0)
  const [failCount, setFailCount] = useState(0)
  function incrementScore(n = 1){
    setScore(score + n)
  }
  function incrementFail(n = 1){
    setFailCount(failCount + n)
  }
  return (
    <div className="max-w-xl mx-auto">
      <Header score={score} failCount={failCount}/>
      <hr className='h-1 bg-black mb-12'/>

      <CardsList incrementScore={incrementScore} incrementFail={incrementFail}/>
    </div>
  );
}

export default App;