import React, { useEffect, useState, SetStateAction } from 'react';
import './App.css';

import { Amplify,  API, graphqlOperation } from 'aws-amplify';
import { createGolfer } from './graphql/mutations';
import { listGolfers } from './graphql/queries';

import awsExports from "./aws-exports";
Amplify.configure(awsExports);

const initialState = { name: '', mobile: '' }
const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [golfers, setGolfers] = useState([]);

  useEffect(() => {
    fetchGolfers();
  }, []);

  const setInput = (key: any, value: any):any => {
    setFormState({ ...formState, [key]: value });
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
      if (!formState.name || !formState.mobile) return;
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
      <h2>Amplify Golfers</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        value={formState.name} 
        placeholder="Name"
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
            <p className="golferName">{golfer.name}</p>
            <p className="golferMobile">{golfer.mobile}</p>
          </div>
        ))
      }
    </div>
  )
}

export default App