import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'

function App() {
    return (
        <>
            <Navbar title="Text Utils" />
            <div className="container my-4">
                <TextForm heading="Enter the text to analyse below"/>
            </div>
        </>
    );
}

export default App;
