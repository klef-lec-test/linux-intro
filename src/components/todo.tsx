import { useEffect, useState } from 'react'
import '@/app/globals.css'
import axios from 'axios';

function App() {
  const url = "http://localhost/api/todo";
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log(res.data);
    }).catch(error => {
      console.log(error);
    });
  },[])
  return (
    <div className='App'>
      helloworld
    </div>
  )
}

export default App