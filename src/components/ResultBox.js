import ResultBoxEach from "./ResultBoxEach"
import { useContext } from "react";
import { CueContext } from "../App.js"



const ResultBox = ({title}) => {
  const [cuelist] = useContext(CueContext);

  return (
    <>
      <section className='user-box'>
        <div className='container'>
            <div className='user-result box-container'>
                <h2>{title}</h2>
                {cuelist.length > 0 ? 
                  <ResultBoxEach cuelist={cuelist} />
                :
                  <div className='result-noticebar'><span>⚍</span> Oops! Hold on we are serving you in minute</div>
                }
            </div>
        </div>
    </section>
    </>
  )
}

ResultBox.defaultProps = {
    title: 'We are serving Queue',
}


export default ResultBox
