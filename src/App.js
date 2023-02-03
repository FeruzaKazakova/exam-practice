import { useCallback, useState } from "react";
import Calculator from "./components/Calculator";
import  Header  from "./components/Header";
import Provider from "./components/store/ThemeProvider";
import './App.css'

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = useCallback(() => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme])
  return (
    <>
    <div style={{width:'100%', height:'47rem'}} className={`App ${theme}`}>
    <Provider>
    <Header toggleTheme={toggleTheme}/>
    <Calculator/>
    </Provider>
    </div>
    </>
  );
}

export default App;
