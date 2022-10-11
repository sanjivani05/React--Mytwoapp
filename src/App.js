import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
/*import About from './components/About';*/
import React,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] = useState('dark');//whether dark mode is enabled or not
  const [alert,setAlert] = useState(null);

  const showAlert =(message ,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const toggleMode =()=>{
    if(mode ==='light')
    {
      setMode("dark")
      document.body.style.background ='yellow'
      showAlert("Enable light mode" ,"sucess")
    }
    else{
      setMode("light")
      document.body.style.background ='blue'
      showAlert("Enable dark mode" ,"sucess")
    }
  }

  return (
    <>
    <Navbar tittle ="MY REACT APP" mode ={mode} toggleMode={toggleMode} />
    <Alert alert= {alert} />
    <div className="container  my-3" >
    {<TextForm  heading="Enter the Text Here"/>}
   
    {/*<About />*/}
    </div>
    </>
  );
}

export default App;
