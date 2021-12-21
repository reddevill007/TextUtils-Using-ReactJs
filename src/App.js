import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react/cjs/react.development'

function App() {
    const [mode, setMode] = useState('light') // Wheather dark mode is enbled or not

    const [alert, setAlert] = useState(null);

    const showAlert = (msg, type)=>{
        setAlert({
            message: msg,
            type: type 
        })
    }

    const toggleMode = ()=>{
        if(mode === 'light')
        {
            setMode('dark')
            document.body.style.backgroundColor = '#1b1f22'
        }
        else{
            setMode('light')
            document.body.style.backgroundColor = '#ebe9e9'
        }
    }
    return (
        <>
            <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
            <Alert alert={alert}/>
            <div className="container my-4">
                <TextForm heading="Enter the text to analyse below" mode={mode}/>
                {/* <About /> */}
            </div>
        </>
    );
}

export default App;
