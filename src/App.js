import logo from './logo.svg';
import './App.css';
import {useState,createContext} from 'react';
import About from './About';

export const userContext = createContext();

function App() {

  const [name,setname] = useState('CDMI');
  const [email,setemail] = useState('CDMI@gmail.com');
  const [age,setage] = useState('12');
  const [mobile,setmobile] = useState('1234567890');
  return (
    <div className="App">
        <userContext.Provider value={{name,email,age,mobile}}>
            <About/>
        </userContext.Provider>
    </div>
  );
}

export default App;
