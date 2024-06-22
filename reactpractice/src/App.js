import  { createContext, useState } from 'react'
import { Parent } from './componets/Parent';
export const Store = createContext()

function App() {
  const [data, setData] = useState(0)
  const abc =1

  return (
    <Store.Provider value ={[data, setData, abc]}>
    <h1> Welcome to world  {data} </h1>
    <Parent />
    </Store.Provider>
  );
}

export default App;
