import getRandomElemArray from "../utils/getRandomElemArray"

const BtnPhrases = ({btn, phrases, setNumberBg}) => {
  
  const handleRandomPhrase = () =>{
    btn(getRandomElemArray(phrases))
    setNumberBg(getRandomElemArray([1, 2, 3, 4]))
  }
    return (
    <button className="container__btn" onClick={handleRandomPhrase}>Otra frase</button>
  )
}

export default BtnPhrases
