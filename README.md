간단한 카운터 앱을 만들기 위한 React 컴포넌트입니다. 
전체 구조는 `App`, `Controller`, `Viewer` 세 개의 주요 컴포넌트로 나뉘어져 있습니다. 
각 컴포넌트는 서로 역할이 분리되어 있으며, 카운터 값을 보여주고, 버튼을 클릭할 때마다 그 값을 변경하는 기능을 구현하고 있습니다.

### 1. **App 컴포넌트**

`App` 컴포넌트는 앱의 메인 컴포넌트입니다. 상태 관리와 버튼 클릭 처리를 담당합니다.

- `useState`를 이용해 카운트 상태를 정의하고, 버튼 클릭 시 상태를 업데이트하는 함수를 만듭니다.
- `buttonValues` 배열에는 버튼에 할당될 값들이 들어 있습니다. 예를 들어 `100, -10, -1, 1, 10, 100`의 값들이 버튼에 연결되어 있습니다.
- `onClickButton` 함수는 버튼을 클릭할 때마다 카운트를 변경합니다. 예를 들어 `onClickButton(1)`이 호출되면 카운트가 1 증가합니다.

```jsx
import { useState } from 'react'
import Controller from './assets/components/Controller'
import Viewer from './assets/components/Viewer'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)  // count라는 상태변수로 카운트를 관리
  const buttonValues = [-100, -10, -1, 1, 10, 100]  // 버튼 값들 정의

  // 버튼 클릭 시 호출되는 함수
  const onClickButton = (value) => {
    setCount(count + value)  // 카운트를 업데이트
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>

      <section>
        {/* 카운트를 보여주는 컴포넌트 */}
        <Viewer count={count} />
      </section>

      <section>
        {/* 버튼을 생성하는 컴포넌트 */}
        <Controller buttonValues={buttonValues} onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App

```

### 2. **Controller 컴포넌트**

`Controller`는 버튼들을 화면에 렌더링합니다. `buttonValues` 배열을 순회하면서 각각의 값에 해당하는 버튼을 만들어, 클릭할 때 `onClickButton` 함수를 호출합니다.

- `buttonValues` 배열의 각 값에 대해 버튼을 렌더링하고, 클릭 시 `onClickButton` 함수에 값을 전달합니다.
- `value > 0 ?` 구문을 사용하여 값이 양수일 경우 "+"를 앞에 붙여서 보여줍니다.

```jsx
import React from 'react'

const Controller = ({ buttonValues, onClickButton }) => {
  return (
    <div>
      {buttonValues.map((value, index) => (
        <button key={index} onClick={() => onClickButton(value)}>
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  )
}

export default Controller

```

### 3. **Viewer 컴포넌트**

`Viewer`는 현재 카운트를 화면에 표시하는 역할을 합니다.

- `count`라는 props를 받아 현재 상태값을 화면에 출력합니다.

```jsx
import React from 'react'

const Viewer = ({ count }) => {
  return (
    <div>
      현재 Count : <span>{count}</span>
    </div>
  )
}

export default Viewer

```

### **전체 동작 흐름**

1. **초기화**: 앱이 로드되면, `count` 값은 0으로 초기화됩니다.
2. **버튼 클릭**: 사용자가 버튼을 클릭하면, 각 버튼에 설정된 값(`100, -10, -1, 1, 10, 100`)이 `onClickButton` 함수로 전달되고, 이 값은 기존 `count` 값에 더해져서 새로운 값으로 업데이트됩니다.
3. **카운트 표시**: `Viewer` 컴포넌트는 `count` 값을 받아 화면에 보여줍니다.

### **이해하기 쉽게 정리**

- **App**: 카운트를 관리하고, `Controller`와 `Viewer` 컴포넌트를 화면에 렌더링.
- **Controller**: 버튼들을 화면에 표시하고, 클릭 시 `onClickButton` 함수를 호출하여 카운트를 변경.
- **Viewer**: 현재 카운트를 화면에 표시.
