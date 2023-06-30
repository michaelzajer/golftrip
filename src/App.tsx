import React, { useEffect, useState, SetStateAction } from 'react';
import './App.css';

import { Amplify,  API, graphqlOperation } from 'aws-amplify';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';
import { createGolfer } from './graphql/mutations';
import { listGolfers } from './graphql/queries';


import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', description: '', golfername: '', mobile: '', }
const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [todos, setTodos] = useState([]);
  const [golfers, setGolfers] = useState([]);

  useEffect(() => {
    fetchTodos();
    fetchGolfers();
  }, []);

  const setInput = (key: any, value: any):any => {
    setFormState({ ...formState, [key]: value });
  }

  const fetchTodos = async (): Promise<any> => {
    try {
      const todoData:any = await API.graphql(graphqlOperation(listTodos));
      const todos:any = todoData.data.listTodos.items;
      setTodos(todos);
    } catch (err) { 
      console.log('error fetching todos');
    }
  }

  const addTodo = async (): Promise<any> => {
    try {
      if (!formState.name || !formState.description) return;
      const todo = { ...formState };
      setTodos([...todos, todo] as SetStateAction<never[]>);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createTodo, {input: todo}));
    } catch (err) {
      console.log('error creating todo:', err);
    }
  }

  const fetchGolfers = async (): Promise<any> => {
    try {
      const golferData:any = await API.graphql(graphqlOperation(listGolfers));
      const golfers:any = golferData.data.listGolfers.items;
      setGolfers(golfers);
    } catch (err) { 
      console.log('error fetching golfers');
    }
  }
  const addGolfer = async (): Promise<any> => {
    try {
      if (!formState.golfername || !formState.mobile) return;
      const golfer = { ...formState };
      setGolfers([...golfers, golfer] as SetStateAction<never[]>);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createGolfer, {input: golfer}));
    } catch (err) {
      console.log('error creating golfer:', err);
    }
  }


  return (
    <div className="container">
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        value={formState.name} 
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        value={formState.description}
        placeholder="Description"
      />
      <button onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo: any, index: any) => (
          <div key={todo.id ? todo.id : index} className="todo">
            <p className="todoName">{todo.name}</p>
            <p className="todoDescription">{todo.description}</p>
          </div>
        ))
      }

      <h2>Amplify Golfers</h2>
      <input
        onChange={event => setInput('golfername', event.target.value)}
        value={formState.name} 
        placeholder="GolferName"
      />
      <input
        onChange={event => setInput('mobile', event.target.value)}
        value={formState.mobile}
        placeholder="Mobile"
      />
      <button onClick={addGolfer}>Create Golfer</button>
      {
        golfers.map((golfer: any, index: any) => (
          <div key={golfer.id ? golfer.id : index} className="golfer">
            <p className="golferName">{golfer.golfername}</p>
            <p className="golferMobile">{golfer.mobile}</p>
          </div>
        ))
      }
    </div>
  )


}

export default App