### 1. 폼 컨트롤 예제 - `checkbox`
폼 요소 안에는 `input`, `textarea` 등의 입력을 받아오는 요소들이 구성되어 있다.
바닐라 코드를 짤 때는 이런 입력 요소들의 `value`들을 가지고 값을 제어했는데, 리액트 월드에서는 또 리액트의 법을 따라야 한다.

대강 이해한 사용법 가이드 라인은 다음과 같다.
> 1. 입력 요소에 value로 값을 저장한다.
>    - value 속성에는 리액트가 제어하는 상태가 연결되어야 한다.
> 2. `readOnly` 혹은 `onChange`를 같이 사용한다.
>    - 둘중 하나도 없으면 입력 요소지만 readOnly로 작동한다.
> 3. `onChange`를 사용할 경우 함수의 인자로 `e.target.value`를 넘겨준다.
> 4. 넘겨받은 e.target.value를 조작해 onState의 업데이트 함수로 트리거를 발생시킨다.
> 5. 폼 하나에 여러개의 입력 요소가 있을 수 있는데, 이 때는 객체를 이용해 하나의 업데이트 함수로 객체의 키를 찾아 값을 바꿀 수도 있다.

정리했으니 과제 겸 복습 겸 또 만들어본 예제 페이지이다.

```js
/* Toping.jsx */
// Maratang의 자식 컴포넌트인 Toping은 Maratang에게서
// onCheckToping 함수를 전달받는다.
export default function Toping({
  id, value, children, onCheckToping
}) {
  return (
    <div>
      <input 
        type="checkbox" 
        id={id} 
        name="Toping" 
        onChange={onCheckToping}
        value={value}
      />
      <label htmlFor={id}>{children}</label>
    </div>
  )
}
```
토핑 컴포넌트를 만들어 마라탕 컴포넌트의 자식 객체로 작동하도록 구성했다.
배운대로 폼 컨트롤 요소에는 onChange와 value가 있어야 하니 추가해주고, Maratang의 상태 제어 핸들러를 실행시킬 수 있도록 했다.
![마라탕 토핑 선택](https://velog.velcdn.com/images/sang2973/post/68afc7ea-b4e9-44e9-a4c8-e7a26d52b8ea/image.gif)
