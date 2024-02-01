import { useState } from 'react';
import maratang from '/src/assets/maratang.webp';
import classes from './Maratang.module.css';
import toppingData from '../../data/toppingData.json';
import { Topping } from '../';

const INITIAL_TOPPING = {
  isAllToppings: false,
  toppingList: [],
};

function Maratang() {
  const [topping, updateTopping] = useState(INITIAL_TOPPING);

  const handleCheckTopping = (e) => {
    const { toppingList } = topping;
    const { value, checked } = e.target;

    const changeCheckTopping = checked
      ? [...toppingList, value]
      : toppingList.filter((topping) => topping != value);
    const isCheckedAllToppings =
      changeCheckTopping.length === toppingData.length;

    const nextToppingList = {
      isAllToppings: isCheckedAllToppings,
      toppingList: changeCheckTopping,
    };

    updateTopping(nextToppingList);
  };

  const onChangeAllToppings = (e) => {
    const { checked } = e.target;

    updateTopping({
      isAllToppings: checked,
      toppingList: checked
        ? Array(toppingData.length)
            .fill(1)
            .map((_, index) => toppingData[index].value)
        : [],
    });
  };

  return (
    <>
      <div>
        <a href="">
          <img src={maratang} className={classes.maratang} alt="마라탕" />
        </a>
      </div>
      <h1>마라탕 토핑 선택</h1>
      <form className={classes.selectTopping}>
        <Topping
          id="allcheck"
          onChange={onChangeAllToppings}
          checked={topping.isAllToppings}
        >
          전체선택
        </Topping>
        {toppingData.map((toppingObj) => {
          return (
            <Topping
              key={toppingObj.id}
              id={toppingObj.id}
              checked={topping.toppingList.includes(toppingObj.value)}
              value={toppingObj.value}
              onChange={handleCheckTopping}
            >
              {toppingObj.value}
            </Topping>
          );
        })}
      </form>
      <output>
        {topping.toppingList.length === 0
          ? ''
          : `선택된 재료: ${topping.toppingList.toString()}`}
      </output>
    </>
  );
}

export default Maratang;
