import { useState } from 'react'
import maratang from '/src/assets/maratang.webp'
import classes from './Maratang.module.css'
import toppingData from '../../data/toppingData.json'
import { Topping } from '../'

function Maratang() {
  const [toppingList, updateToppingList] = useState([]);

  const handleCheckTopping = (e) => {
    const selectedTopping = e.target.value;

    const nextToppingList = toppingList.includes(selectedTopping) ? 
      toppingList.filter(topping => topping != selectedTopping) : 
      [...toppingList, selectedTopping]

    updateToppingList(nextToppingList);
  }

  return (
    <>
      <div>
        <a href="">
          <img src={maratang} className={classes.maratang} alt="마라탕" />
        </a>
      </div>
      <h1>마라탕 토핑 선택</h1>
      <form className={classes.selectTopping}>
        {toppingData.map(toppingObj => {
          return (
            <Topping
              key={toppingObj.id}
              id={toppingObj.id}
              value={toppingObj.value}
              onCheckTopping={handleCheckTopping}
            >
              {toppingObj.value}
            </Topping>
          )
        })}
      </form>
      <output>
        {toppingList.length === 0 ? '' : `선택된 재료: ${toppingList.toString()}`}
      </output>
    </>
  )
}

export default Maratang
