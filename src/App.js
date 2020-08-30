import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads we need to listen to the database and fetch new todos as they get added/removed

  useEffect(()=>{
    //this code here fires when the app.js loads
    console.log(db);
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc =>({id:doc.id, todo:doc.data().todo})))
    })
  },[]);

  const addTodo = (event) => {
    event.preventDefault();// will stop Refresh

    db.collection('todos').add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    }) 
    console.log(todos);
    
    setInput(''); //clear up the input after hitting todo
  }

  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
        <FormControl>
          <InputLabel>Write a todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add TODO</Button>
      </form>
      

      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
