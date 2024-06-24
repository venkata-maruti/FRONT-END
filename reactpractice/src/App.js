import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const {count} = useSelector(state=>state)
  const dispatch = useDispatch()
  return (
    <div className="App">
     <button onClick={()=> dispatch({type:'INCREMENT'})}>{count} hiiii </button>
    </div>
  );
}

export default App;
