import { useState } from 'react';
import './App.css'
import BtnPhrases from './Components/BtnPhrases';
import Quote from './Components/Quote';
import getRandomElemArray from './utils/getRandomElemArray';
import phrases from './utils/phrases.json'

function App() {

  const phraseRandom = getRandomElemArray(phrases)
  const numberRandom = getRandomElemArray([1, 2, 3, 4])

  const [quote, setQuote] = useState(phraseRandom)
  const [numberBg, setNumberBg] = useState(numberRandom)
  
  const bgStyle = {
    backgroundImage: `url(/fondo${numberBg}.jpg)`
  }

  return (
    <>
      <div className='container' style={bgStyle}>
        <h1 className='container__title'>Galletas de la fortuna</h1>
        <Quote phrase={quote} />
        <BtnPhrases 
        btn={setQuote}
        phrases={phrases}
        setNumberBg={setNumberBg}
        />
      </div>
    </>
  )
}

export default App
