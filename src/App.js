import logo from './logo.svg';
import './App.css';
import {useState} from 'react';


function App() {
  const [todoList,setTodoList] = useState([]);
  const [inputText,setInputText] = useState('');
  const [editToggle,setEditToggle] = useState(false);
  const [editNumber, setEditNumber] = useState()
  const addTodo = ()=>{
    console.log('todoList',todoList);
    console.log('inputText',inputText);

    const tempList = [...todoList];
    tempList.push(inputText);
    setTodoList(tempList);
    setInputText('')
  
  }
  const editTodo =(i)=>{
    console.log('i',i);
    setEditNumber(i)
    setInputText(todoList[i]);
    setEditToggle(true);    
  }
  const updateTodo = ()=>{
      console.log(editNumber);
      const tempList = [...todoList]
      tempList.splice(editNumber,1, inputText);
      setTodoList(tempList);
      setEditToggle(false);
      setInputText('')
  }
  const deleteTodo = (i)=>{
    console.log("delete i ",i)
    const tempList1 = [...todoList];
    tempList1.splice(i,1);
    console.log('tempList1',tempList1);
    setTodoList(tempList1)
  }
  
  return (
    <div className="App">
      <h1>react todo app</h1>
      <input type="text" placeholder='enter todo' value={inputText} onChange={(e)=>{ setInputText(  e.target.value)}}    />
      {editToggle  ? <button onClick={updateTodo}>update</button> :  <button onClick={addTodo}>add Todo</button> } 
      <ul>
        {todoList.map(  (item,i)=>{
          return <li> {item} <button onClick={()=>{ editTodo(i)   }} >edit </button> <button onClick={()=> {deleteTodo(i)}   }  >delete</button>  </li>
        }   )}
      </ul>
    </div>
  );
}

export default App;
