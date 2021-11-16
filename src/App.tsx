import React from 'react';
import useLocalStorage from 'use-local-storage';
import Square from './components/square/Square';
import './App.scoped.css';

function App() {
  const isDarkModeDefault = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', isDarkModeDefault ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <h1>Easy Darkmode and Themes in React</h1>
      <button onClick={switchTheme}>
        Switch to {theme === 'light' ? 'dark' : 'light'} theme
      </button>
      <Square />
    </div>
  );
}

export default App;
