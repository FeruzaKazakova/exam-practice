import React, { useEffect, useReducer, useState } from 'react'
import styled from 'styled-components';

const initState = {value: ""};

function reducer(state, action) {
    const count1 = parseInt(action.count1, 10);
    const count2 = parseInt(action.count2, 10);
  
    switch (action.operator) {
      case "plus":
        return {
          value: count1 + count2
        };
      case "minus":
        return {
          value: count1 - count2
        };
      case "multiply":
        return {
          value: count1 * count2
        };
      case "divide":
        return {
          value: count1 / count2
        };
      default:
        return state;
    }
  }

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const [count1, setCount1] = useState("")
    const [count2, setCount2] = useState("")
    const [operator, setOperator] = useState("plus");

    useEffect(() => {
        dispatch({  count1, count2, operator });
    }, [count1, count2,operator]);

  return (
    <Container>
        <Cont>
            <StyledInput value={count1} type="number" onChange={(e) => setCount1(e.target.value)} />
            <StyledInput type="number" onChange={(e) => setCount2(e.target.value)} />
        </Cont>
        <div>
        <select
          value={operator}
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="plus">+</option>
          <option value="minus">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        </div>
        <div><h2> result: {state.value}</h2></div>
    </Container>
  )
}

export default Calculator;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`
const Cont = styled.div`
    display: flex;
    width: 13rem;
    justify-content: space-between;
`

const StyledInput = styled.input`
    width: 80px;
`