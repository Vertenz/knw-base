import React, {useState} from 'react';
import LayoutWrap from "./components/Layout-wrap";

function App() {
    let [darkTheme, setDarkTheme] = useState(true)

    function changeColor() {
        let root = document.documentElement;
        setDarkTheme(darkTheme = !darkTheme);
        if (darkTheme) {
            root.style.setProperty('--back-color', '#131313');
            root.style.setProperty('--text-color', '#FFF');
            root.style.setProperty('--chose-color', '#FFF');
        } else {
            root.style.setProperty('--back-color', '#E5E5E5');
            root.style.setProperty('--text-color', '#131313');
            root.style.setProperty('--chose-color', '#131313');
        }
    }

    return (
        <div className="App">
                <LayoutWrap/>
                <button onClick={changeColor}>A ny davaj polezaj suda</button>
        </div>
    );
}

export default App;
