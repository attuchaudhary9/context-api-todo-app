import React,{useState,useReducer} from 'react'
const reducerFunction = (state,action)=>{
  switch(action.type){
    case 'INCREMENT':
      return {
        ...state,
        count : state.count + 1
      }
      case 'DECREMENT':
        return {
          ...state,
          count:state.count-1
        }
        case 'INIT_COUNT_VALUE': return {
          ...state,
          count:action.payload
        }
      default:
        return state
  }
}

const initValue = {
  count :0
}

function App() {

  const [inputValue,setInputValue] = useState();
  const [state,dispatch] = useReducer(reducerFunction,initValue)
 
  return (
    
    <div className="App">
      <div>
        <form>
          <input value={inputValue} onChange={(e)=>{ setInputValue(parseInt(e.target.value))}} type="text" placeholder="initial vlaue" />
          <button onClick={(e)=>{
            e.preventDefault()
            dispatch({type:'INIT_COUNT_VALUE',payload:inputValue})}} type="submit">Reset the value </button>
        </form>
        <h2>{state.count}</h2>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Incremet</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
