import { useState } from 'react'
import maratang from '/src/assets/maratang.webp'
import classes from './Maratang.module.css'
import topingData from '../../data/topingData.json'
import { Toping } from '../'

function Maratang() {
  const [topingList, updateTopingList] = useState([]);

  const handleCheckToping = (e) => {
    const selectedToping = e.target.value;

    const nextTopingList = topingList.includes(selectedToping) ? 
      topingList.filter(toping => toping != selectedToping) : 
      [...topingList, selectedToping]

    updateTopingList(nextTopingList);
  }

  return (
    <>
      <div>
        <a href="">
          <img src={maratang} className={classes.maratang} alt="마라탕" />
        </a>
      </div>
      <h1>마라탕 토핑 선택</h1>
      <form className={classes.selectToping}>
        {topingData.map(topingObj => {
          return (
            <Toping
              key={topingObj.id}
              id={topingObj.id}
              value={topingObj.value}
              onCheckToping={handleCheckToping}
            >
              {topingObj.value}
            </Toping>
          )
        })}

      </form>
      <output>
        {topingList.length === 0 ? '' : `선택된 재료: ${topingList.toString()}`}
      </output>
    </>
  )
}

export default Maratang
